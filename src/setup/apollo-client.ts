import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, split } from '@apollo/client/core'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { useAuth } from '@/service/use-auth'
import { onError } from '@apollo/client/link/error'
import { Observable } from '@apollo/client'

const httpUrl = import.meta.env.VITE_APP_BACKEND_URL ?? `/graphql`
const wsUrl = import.meta.env.VITE_APP_BACKEND_WS_URL ??`/graphql-ws`

const { isLoggedIn, token, onLogout, refreshLogin } = useAuth()

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
