import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, split } from '@apollo/client/core'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { useAuth } from '@/service/use-auth'
import { useErrorManager } from '@/utils/error-manager'
import { onError } from '@apollo/client/link/error'

const httpUrl = `http://localhost:12001/graphql`
const wsUrl = `ws://localhost:12001/graphql-ws`

const { isLoggedIn, token } = useAuth()

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
    authLink.concat(httpLink)
  )

  const cache = new InMemoryCache()

  return new ApolloClient({
    link,
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

onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(e => useErrorManager().catchError(e))
  }
  if (networkError) {
    useErrorManager().catchError(networkError)
  }
});

export const apolloClient = createApolloClient()
