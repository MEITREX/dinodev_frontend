import { provideApolloClient, useLazyQuery } from '@vue/apollo-composable'
import { apolloClient } from '@/setup/apolloClient'
import { graphql, useFragment } from '@/gql'
import { computed } from 'vue'
import type { BaseGlobalUserFragment } from '@/gql/graphql'
import type { FragmentType } from '@/gql/fragment-masking'
import { type Maybe, type Nullable } from '@/utils/types'

const BaseUserFragment = graphql(`
    fragment BaseGlobalUser on GlobalUser {
        id
        avatar
        username
        roles {
            id
            name
            globalPrivileges
        }
    }`)

export function useGlobalUser() {
  const { result, load, refetch, loading }
  = provideApolloClient(apolloClient)(() => useLazyQuery(graphql(`
      query CurrentUser {
          currentUser {
              ... BaseGlobalUser
          }
      }
  `)))

  const onUserLoaded = (callback: (user: Nullable<BaseGlobalUserFragment>) => void) => {
    if (currentUser.value !== null) {
      callback(currentUser.value)
      return
    }
    loadUser().then(() => {
      callback(getUserFromFragment(result.value?.currentUser))
    })
  }

  const currentUser = computed(() => {
    return getUserFromFragment(result.value?.currentUser)
  })

  async function loadUser(): Promise<Nullable<BaseGlobalUserFragment>> {
    const loadResult = load()
    if (loadResult === false) {
      return Promise.resolve(currentUser.value)
    }
    return getUserFromFragment((await loadResult).currentUser)
  }

  function getUserFromFragment(data: Maybe<FragmentType<typeof BaseUserFragment>>): Nullable<BaseGlobalUserFragment> {
    return useFragment(BaseUserFragment, data) || null
  }

  return {
    currentUser,
    loading,
    refetch,
    onUserLoaded,
    loadUser
  }
}
