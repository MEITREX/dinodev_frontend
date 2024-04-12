import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, split } from '@apollo/client/core'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { useAuth } from '@/composables/use-auth'

const baseUrl = 'http://localhost:12001/'
const httpUrl = `${baseUrl}graphql`
const wsUrl = `${baseUrl}graphql-ws`

const { ensureLogin, token } = useAuth()

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

    // add the authorization to the headers
    operation.setContext(({ headers = {} }) => {
      ensureLogin().catch(e => console.error(e))

      return ({
        headers: {
          ...headers,
          authorization: `Bearer ${token.value}` || null,
          'Content-Type': 'application/json'
        }
      })
    })

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
        errorPolicy: 'all',
        fetchPolicy: 'no-cache'
      },
      mutate: {
        errorPolicy: 'all',
      },
    }
  })
}

export const apolloClient = createApolloClient()
