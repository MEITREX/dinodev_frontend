import { provideApolloClient, useMutation, useQuery } from '@vue/apollo-composable'
import { apolloClient } from '@/setup/apollo-client'
import { graphql, useFragment } from '@/gql'
import { computed, type ComputedRef, watch } from 'vue'
import type {
  BaseGlobalUserFragment,
  BasicUserInfoFragment,
  CreateGlobalUserInput,
  UpdateGlobalUserInput
} from '@/gql/graphql'
import { GlobalPrivilege } from '@/gql/graphql'
import { type Nullable } from '@/utils/types'
import { useAuth } from '@/service/use-auth'
import { useErrorManager } from '@/utils/error-manager'

class GlobalUserService {

  public currentGlobalUser: ComputedRef<Nullable<BaseGlobalUserFragment>> = computed(() => {
    return useFragment(this.baseUserFragment,
      this.currentUserQuery.result.value?.currentUser) || null
  })

  public currentImsUserData: ComputedRef<Nullable<BasicUserInfoFragment>> = computed(() => {
    return useFragment(this.basicUserInfoFragment,
      this.currentImsUserDataQuery.result.value?.currentUserInfo) || null
  })

  public hasPrivilege(privilege: GlobalPrivilege): boolean {
    if (this.currentGlobalUser.value === null) {
      return false
    }
    return this.currentGlobalUser.value.roles
      .some(role => role.globalPrivileges.includes(privilege))
  }

  public loading = computed(
    () => this.currentUserQuery.loading.value
      || this.currentImsUserDataQuery.loading.value
      || this.updateGlobalUserMutation.loading.value
      || this.registerUserMutation.loading.value)

  public registerUser = async (input: CreateGlobalUserInput) => {
    const result = await this.registerUserMutation.mutate({ input })
    return useFragment(this.baseUserFragment, result?.data?.register)
  }

  public updateGlobalUser = async (userId: string, input: UpdateGlobalUserInput) => {
    const result = await this.updateGlobalUserMutation.mutate({ input, userId })
    return useFragment(this.baseUserFragment, result?.data?.updateGlobalUser)
  }

  public refetchUser = async () => {
    const result = await this.currentUserQuery.refetch()
    return useFragment(this.baseUserFragment, result?.data?.currentUser) || null
  }

  constructor() {
    this.currentUserQuery.onError((error) => useErrorManager().catchError(error))
    this.currentImsUserDataQuery.onError((error) => useErrorManager().catchError(error))
    this.registerUserMutation.onError((error) => useErrorManager().catchError(error))
    this.updateGlobalUserMutation.onError((error) => useErrorManager().catchError(error))
  }

  baseUserFragment = graphql(`
      fragment BaseGlobalUser on GlobalUser {
          id
          avatar
          username
          roles {
              name
              globalPrivileges
          }
      }`)

  currentUserQuery = provideApolloClient(apolloClient)(() => {
    return useQuery(graphql(`
        query CurrentUser {
            currentUser {
                ... BaseGlobalUser
            }
        }
    `), {}, () => ({
      enabled: useAuth().isLoggedIn(),
      fetchPolicy: 'no-cache',
    }))
  })

  basicUserInfoFragment = graphql(`
      fragment BasicUserInfo on BasicUserInfo {
          isAdmin
          avatar
          username
      }`)

  currentImsUserDataQuery = provideApolloClient(apolloClient)(() => {
    return useQuery(graphql(`
        query CurrentBasicUserInfo {
            currentUserInfo {
                ... BasicUserInfo
            }
        }
    `), { }, () => ({
      enabled: useAuth().isLoggedIn(),
      fetchPolicy: 'no-cache'
    }))
  })

  registerUserMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation registerUser($input: CreateGlobalUserInput!) {
            register(input: $input) {
                ...BaseGlobalUser
            }
        }
    `), () => ({
      refetchQueries: ['CurrentUser']
    }))
  })

  updateGlobalUserMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation updateGlobalUser($userId: UUID!, $input: UpdateGlobalUserInput!) {
            updateGlobalUser(id: $userId, input: $input) {
                ...BaseGlobalUser
            }
        }
    `))
  })
}

const globalUserServiceInstance = new GlobalUserService()

export function useGlobalUserService() {
  return globalUserServiceInstance
}
