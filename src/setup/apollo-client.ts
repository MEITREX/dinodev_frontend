import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, split } from '@apollo/client/core'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { useAuth } from '@/service/use-auth'
import { onError } from '@apollo/client/link/error'
import { Observable } from '@apollo/client'

// get backend urls from environment variables
const httpUrl = import.meta.env.VITE_APP_BACKEND_URL ?? `/api/graphql`
let wsUrl = import.meta.env.VITE_APP_BACKEND_WS_URL ?? `/api/graphql-ws`

// check if ws url is relative
if (!wsUrl.startsWith('ws')) {
  // Determine the WebSocket protocol
  const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'

  // Construct the full WebSocket URL
  wsUrl = `${wsProtocol}//${window.location.host}${wsUrl}`
}

const { isLoggedIn, token, onLogout, refreshLogin } = useAuth()

/**
 * Creates the Apollo Client.
 * This function sets up the client with necessary configurations including
 * WebSocket link for subscriptions, HTTP link for queries and mutations,
 * and a refresh token mechanism for handling expired tokens.
 */
function createApolloClient() {

  const wsLink = new GraphQLWsLink(
    createClient({
      url: wsUrl,
      connectionParams: {
        authorization: `Bearer ${token.value}`,
      },
    })
  )

  const httpLink = createHttpLink({
    uri: httpUrl
  })

  /**
   * Auth link for adding the Authorization header to requests.
   * This link adds the Authorization header to the request if the user is logged in.
   */
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

  /**
   * Error link for handling network errors.
   * This link catches network errors, refreshes the login, and retries the request with the new token.
   */
  const errorLink = onError(({ networkError, operation, forward }) => {
    if (networkError) {
      console.warn('Network error', networkError)
      return new Observable(observer => {
        refreshLogin().then(() => {
          const headers = operation.getContext().headers
          operation.setContext({
            headers: {
              ...headers,
              Authorization: `Bearer ${token.value}`
            }
          })
          // Retry the request with the new token
          const subscriber = {
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          }
          forward(operation).subscribe(subscriber)
        }).catch(error => {
          observer.error(error)
        })
      })
    }
  })

  /**
   * Link for splitting the request based on the operation type.
   * If the operation is a subscription, it uses the WebSocket link.
   */
  const link = split(
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
      }
    }
  })
}

// reset all caches and data when the user logs out
onLogout(() => {
  apolloClient.resetStore().then()
})

export const apolloClient = createApolloClient()
