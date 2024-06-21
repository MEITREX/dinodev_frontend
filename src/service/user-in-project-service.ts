import { graphql, useFragment } from '@/gql'
import { provideApolloClient, useMutation, useQuery } from '@vue/apollo-composable'
import { apolloClient } from '@/setup/apollo-client'
import { isPresent, type Nullable } from '@/utils/types'
import { useAuth } from '@/service/use-auth'
import { computed, type ComputedRef } from 'vue'
import type { UserInProjectFragment } from '@/gql/graphql'
import { useAppStore } from '@/stores/app-store'
import { useErrorManager } from '@/utils/error-manager'

class UserInProjectService {

  public currentUser: ComputedRef<Nullable<UserInProjectFragment>> = computed(() => {
    return useFragment(this.userInProjectFragment,
      this.userInProjectQuery.result.value?.project?.currentUser) || null
  })

  public userStats = computed(() => {
    return useFragment(this.userStatsFragment,
      this.userStatsQuery.result.value?.project?.currentUser?.userStats) || null
  })

  public allUsers: ComputedRef<readonly UserInProjectFragment[]> = computed(() => {
    return useFragment(this.userInProjectFragment,
      this.allUsersInProjectQuery.result.value?.project?.users) || []
  })

  public getUserById = (userId: string) => {
    return this.allUsers.value.find((user) => user.user.id === userId) ?? null
  }

  public joinProject = async (projectId: string) => {
    const result = await this.joinProjectMutation.mutate({ projectId })
    return useFragment(this.userInProjectFragment, result?.data?.joinProject)
  }

  public loading = computed(() =>
    this.userInProjectQuery.loading.value
    || this.userStatsQuery.loading.value
    || this.allUsersInProjectQuery.loading.value
    || this.joinProjectMutation.loading.value)

  constructor() {
    this.joinProjectMutation.onError(useErrorManager().catchError)
    this.userInProjectQuery.onError(useErrorManager().catchError)
    this.allUsersInProjectQuery.onError(useErrorManager().catchError)
    this.userStatsQuery.onError(useErrorManager().catchError)
  }

  userStatsFragment = graphql(`
      fragment UserStats on UserStats {
          xp
          level
          xpToNextLevel
          totalXp

          bronzeMedals
          silverMedals
          goldMedals

          virtualCurrency

          commentsWritten
          issuesCompleted
          issuesCreated
          pullRequestsClosed
          pullRequestsCreated
          pullRequestsReviewed
          reactionsGiven
      }`
  )

  userInProjectFragment = graphql(`
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
          achievements {
              achievement {
                  name
                  description
                  goal
                  icon {
                      emoji
                  }
              }
              progress
              achieved
          }
          userStats {
              level
              
              goldMedals
              silverMedals
              bronzeMedals
          }
          currentBadge {
              emoji
          }
      }`)

  userInProjectQuery = provideApolloClient(apolloClient)(() => {
    return useQuery(graphql(`
                query UserInProjectQuery($projectId: UUID!) {
                    project(id: $projectId) {
                        id
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

  userStatsQuery = provideApolloClient(apolloClient)(() => {
    return useQuery(graphql(`
                query UserStatsQuery($projectId: UUID!) {
                    project(id: $projectId) {
                        id
                        currentUser {
                            userStats {
                                ... UserStats
                            }
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

  allUsersInProjectQuery = provideApolloClient(apolloClient)(() => {
    return useQuery(graphql(`
                query AllUsersInProjectQuery($projectId: UUID!) {
                    project(id: $projectId) {
                        id
                        users {
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

  joinProjectMutation = provideApolloClient(apolloClient)(() => {
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

export function useUserInProjectService() {
  return userInProjectServiceInstance
}
