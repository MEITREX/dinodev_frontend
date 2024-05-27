import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, type ServerError, split } from '@apollo/client/core'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { useAuth } from '@/service/use-auth'
import { onError } from '@apollo/client/link/error'
import { Observable } from '@apollo/client'

const httpUrl = `http://localhost:12001/graphql`
const wsUrl = `ws://localhost:12001/graphql-ws`

const { isLoggedIn, token, onLogout, refreshLogin, logout } = useAuth()

function createApolloClient() {

  const wsLink = new GraphQLWsLink(
    createClient({
      url: wsUrl
    })
  )

  const httpLink = createHttpLink({
    uri: httpUrl,
  })

  const authLink = new ApolloLink((operation, forward) => {

    if (isLoggedIn()) { // add the authorization to the headers
      operation.setContext(({ headers = {} }) => {
        return ({
          headers: {
            ...headers,
            authorization: `Bearer ${token.value}` || null,
            'Content-Type': 'application/json'
          }
        })
      })
    }

    return forward(operation)
  })


  const errorLink = onError(({ networkError, operation, forward }) => {
    if (networkError) {
      return new Observable(observer => {
        refreshLogin().then(() => {
          // After refreshing the token, retry the original operation
          const headers = operation.getContext().headers;
          operation.setContext({
            headers: {
              ...headers,
              Authorization: `Bearer ${token.value}`,
            },
          });
          // Retry the request with the new token
          const subscriber = {
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          };
          forward(operation).subscribe(subscriber);
        }).catch(error => {
          // If refreshLogin fails, report the error
          observer.error(error);
        });
      });
    }
  })

  const link = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink
  )

  const cache = new InMemoryCache()

  return new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, link]),
    cache,
    defaultOptions: {
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all'
      },
      mutate: {
        errorPolicy: 'all'
      },
    }
  })
}

onLogout(() => {
  apolloClient.resetStore().then()
})

export const apolloClient = createApolloClient()
