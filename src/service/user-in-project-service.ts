import { graphql, useFragment } from '@/gql'
import { provideApolloClient, useMutation, useQuery } from '@vue/apollo-composable'
import { apolloClient } from '@/setup/apollo-client'
import { isPresent, type Nullable } from '@/utils/types'
import { useAuth } from '@/service/use-auth'
import { computed, type ComputedRef } from 'vue'
import type { UserInProjectFragment } from '@/gql/graphql'
import { useAppStore } from '@/stores/appStore'

class UserInProjectService {

  public currentUser: ComputedRef<Nullable<UserInProjectFragment>> = computed(() => {
    return useFragment(this.UserInProjectFragment,
      this.userInProjectQuery.result.value?.project?.currentUser) || null
  })

  public allUsers: ComputedRef<readonly UserInProjectFragment[]> = computed(() => {
    console.log('All users in project:', this.allUsersInProjectQuery.result.value?.project?.users)
    return useFragment(this.UserInProjectFragment,
      this.allUsersInProjectQuery.result.value?.project?.users) || []
  })

  public async joinProject(projectId: string) {
    const result = await this.joinProjectMutation.mutate({ projectId })
    return useFragment(this.UserInProjectFragment, result?.data?.joinProject)
  }

  public loading = computed(() =>
    this.userInProjectQuery.loading.value
    || this.allUsersInProjectQuery.loading.value
    || this.joinProjectMutation.loading.value)

  constructor() {
    // Bind methods to this instance
    this.joinProject = this.joinProject.bind(this)
  }

  private UserInProjectFragment = graphql(`
      fragment UserInProject on UserInProject {
          user {
              id
              username
              avatar
          }
          roles {
              gamifiedName
              name
              projectPrivileges
          }
      }`)

  private userInProjectQuery = provideApolloClient(apolloClient)(() => {
    return useQuery(graphql(`
                query UserInProjectQuery($projectId: UUID!) {
                    project(id: $projectId) {
                        currentUser {
                            ... UserInProject
                        }
                    }
                }
      `), () => ({
        projectId: useAppStore().projectId.value
      }),
      () => ({
        enabled: isEnabled(),
        fetchPolicy: 'no-cache'
      }))
  })

  private allUsersInProjectQuery = provideApolloClient(apolloClient)(() => {
    return useQuery(graphql(`
                query AllUsersInProjectQuery($projectId: UUID!) {
                    project(id: $projectId) {
                        users {
                            ... UserInProject
                        }
                    }
                }
      `), () => ({
        projectId: useAppStore().projectId
      }),
      () => ({
        enabled: isEnabled(),
        fetchPolicy: 'no-cache'
      }))
  })

  private joinProjectMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation JoinProject($projectId: UUID!) {
            joinProject(projectId: $projectId) {
                ... UserInProject
            }
        }
    `), () => ({
      refetchQueries: ['UserInProjectQuery', 'AllUsersInProjectQuery']
    }))
  })
}

function isEnabled() {
  return useAuth().isLoggedIn() && isPresent(useAppStore().projectId.value)
}

const userInProjectServiceInstance = new UserInProjectService()

export function userInProjectService() {
  return userInProjectServiceInstance
}
