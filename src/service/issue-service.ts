import { provideApolloClient, useMutation, useQuery } from '@vue/apollo-composable'
import { apolloClient } from '@/setup/apollo-client'
import { graphql, useFragment } from '@/gql'
import { useAuth } from '@/service/use-auth'
import { useAppStore } from '@/stores/appStore'
import { computed, ref } from 'vue'
import { useErrorManager } from '@/utils/error-manager'
import type { DefinitionOfDoneConfirmState } from '@/gql/graphql'

class IssueService {

  public issueBoard = computed(() => {
    return useFragment(this.ProjectBoardFragment,
      this.boardQuery.result.value?.project?.projectBoard) || null
  })

  public issue = computed(() => {
    return useFragment(this.IssueWithEventsFragment,
      this.issueQuery.result.value?.project?.issue) || null
  })

  public async changeState(issueId: string, stateName: string) {
    const result = await this.changeStateMutation.mutate({
      projectId: useAppStore().projectId.value,
      issueId,
      stateName
    })
    return useFragment(this.IssueBaseFragment, result?.data?.mutateProject?.mutateIssue?.changeIssueState)
  }

  public async finishIssue(issueId: string, doneStateName: string, dodConfirmStates: DefinitionOfDoneConfirmState[]) {
    const result = await this.finishIssueMutation.mutate({
      projectId: useAppStore().projectId.value,
      issueId,
      doneStateName,
      dodConfirmStates
    })
    return useFragment(this.IssueBaseFragment, result?.data?.mutateProject?.mutateIssue?.finishIssue)
  }

  public async assignIssue(issueId: string, assigneeId: string) {
    const result = await this.assignIssueMutation.mutate({
      projectId: useAppStore().projectId.value,
      issueId,
      assigneeId
    })
    return useFragment(this.IssueBaseFragment, result?.data?.mutateProject?.mutateIssue?.assignIssue)
  }

  public loading = computed(() => this.boardQuery.loading.value
    || this.changeStateMutation.loading.value
    || this.assignIssueMutation.loading.value
    || this.finishIssueMutation.loading.value
    || this.issueQuery.loading.value)


  public issueId = ref<string | null>(null)

  constructor() {
    this.changeState = this.changeState.bind(this)
    this.finishIssue = this.finishIssue.bind(this)
    this.assignIssue = this.assignIssue.bind(this)

    this.boardQuery.onError(useErrorManager().catchError)
    this.changeStateMutation.onError(useErrorManager().catchError)
    this.finishIssueMutation.onError(useErrorManager().catchError)
    this.assignIssueMutation.onError(useErrorManager().catchError)
    this.issueQuery.onError(useErrorManager().catchError)
  }

  private ProjectBoardFragment = graphql(`
      fragment ProjectBoard on ProjectBoard {
          states {
              state {
                  name
                  type
                  imsStateId
              }
              issues {
                  id
                  title
                  description
                  storyPoints
                  effortEstimation
                  priority
                  type {
                      iconPath
                      name
                  }
                  assignees {
                      user {
                          id
                          avatar
                          username
                      }
                  }
              }
          }
      }`)

  IssueBaseFragment = graphql(`
      fragment IssueBase on Issue {
          id
          title
          description
          storyPoints
          effortEstimation
          priority
          type {
              iconPath
              name
          }
          assignees {
              user {
                  id
                  avatar
                  username
              }
          }
      }`)

  private IssueWithEventsFragment = graphql(`
      fragment IssueWithEvents on Issue {
          ...IssueBase
          issueEvents {
              id
              timestamp
              user {
                  id
                  username
                  avatar
              }
              message
              eventType {
                  identifier
              }
              eventData {
                  key
                  value
              }
          }
      }`)

  private boardQuery = provideApolloClient(apolloClient)(() => {
    return useQuery(graphql(`
        query BoardQuery($projectId: UUID!) {
            project(id: $projectId) {
                projectBoard {
                    ... ProjectBoard
                }
            }
        }
    `), () => ({
      projectId: useAppStore().projectId.value
    }), () => ({
      enabled: computed(() => useAuth().isLoggedIn() && useAppStore().isProjectSelected())
    }))
  })

  private changeStateMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation ChangeStateMutation($projectId: UUID!, $issueId: ID!, $stateName: String!) {
            mutateProject(id: $projectId) {
                mutateIssue(id: $issueId) {
                    changeIssueState(stateName: $stateName) {
                        ...IssueBase
                    }
                }
            }
        }
    `), () => ({
      refetchQueries: ['BoardQuery']
    }))
  })

  private finishIssueMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation FinishIssueMutation($projectId: UUID!, $issueId: ID!, $doneStateName: String!, $dodConfirmStates: [DefinitionOfDoneConfirmState!]!) {
            mutateProject(id: $projectId) {
                mutateIssue(id: $issueId) {
                    finishIssue(doneStateName: $doneStateName, dodConfirmStates: $dodConfirmStates) {
                        ...IssueBase
                    }
                }
            }
        }
    `), () => ({
      refetchQueries: ['BoardQuery']
    }))
  })

  private assignIssueMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation AssignIssueMutation($projectId: UUID!, $issueId: ID!, $assigneeId: UUID!) {
            mutateProject(id: $projectId) {
                mutateIssue(id: $issueId) {
                    assignIssue(assigneeId: $assigneeId) {
                        ...IssueBase
                    }
                }
            }
        }
    `), () => ({
      refetchQueries: ['BoardQuery']
    }))
  })

  private issueQuery = provideApolloClient(apolloClient)(() => {
    return useQuery(graphql(`
        query IssueQuery($projectId: UUID!, $issueId: UUID!) {
            project(id: $projectId) {
                issue(id: $issueId) {
                    ...IssueWithEvents
                }
            }
        }
    `), () => ({
      projectId: useAppStore().projectId.value,
      issueId: this.issueId.value
    }), () => ({
      enabled: computed(() => useAuth().isLoggedIn()
        && useAppStore().isProjectSelected()
        && this.issueId.value !== null)
    }))
  })
}


const issueServiceInstance = new IssueService()

export function useIssueService() {
  return issueServiceInstance
}
