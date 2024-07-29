import { provideApolloClient, useMutation, useQuery } from '@vue/apollo-composable'
import { apolloClient } from '@/setup/apollo-client'
import { graphql, useFragment } from '@/gql'
import { useAuth } from '@/service/use-auth'
import { useProjectId } from '@/stores/project-id'
import { computed, ref } from 'vue'
import { useErrorManager } from '@/utils/error-manager'
import type { CreateIssueInput, DefinitionOfDoneConfirmState } from '@/gql/graphql'

class IssueService {

  public issueBoard = computed(() => {
    return useFragment(this.projectBoardFragment,
      this.boardQuery.result.value?.project?.projectBoard) || null
  })

  public issue = computed(() => {
    if (!this.issueId.value) {
      return null
    }
    return useFragment(issueWithEventsFragment,
      this.issueQuery.result.value?.project?.issue) || null
  })

  public async changeState(issueId: string, stateName: string) {
    const result = await this.changeStateMutation.mutate({
      projectId: useProjectId().projectId.value,
      issueId,
      stateName
    })
    return useFragment(issueBaseFragment, result?.data?.mutateProject?.mutateIssue?.changeIssueState)
  }

  public async finishIssue(issueId: string, doneStateName: string, dodConfirmStates: DefinitionOfDoneConfirmState[]) {
    const result = await this.finishIssueMutation.mutate({
      projectId: useProjectId().projectId.value,
      issueId,
      doneStateName,
      dodConfirmStates
    })
    return useFragment(issueBaseFragment, result?.data?.mutateProject?.mutateIssue?.finishIssue)
  }

  public async assignIssue(issueId: string, assigneeId: string) {
    const result = await this.assignIssueMutation.mutate({
      projectId: useProjectId().projectId.value,
      issueId,
      assigneeId
    })
    return useFragment(issueBaseFragment, result?.data?.mutateProject?.mutateIssue?.assignIssue)
  }

  public createIssue = async (input: CreateIssueInput) => {
    const result = await this.createIssueMutation.mutate({
      projectId: useProjectId().projectId.value,
      input
    })
    return useFragment(issueBaseFragment, result?.data?.mutateProject?.createIssue)
  }

  public commentOnIssue = async (issueId: string, message: string, optionalParentId?: string | null) => {
    const result = await this.commentOnIssueMutation.mutate({
      projectId: useProjectId().projectId.value,
      issueId,
      message,
      optionalParentId
    })
    return useFragment(issueBaseFragment, result?.data?.mutateProject?.mutateIssue?.commentOnIssue)
  }

  public loading = computed(() => this.boardQuery.loading.value
    || this.changeStateMutation.loading.value
    || this.assignIssueMutation.loading.value
    || this.finishIssueMutation.loading.value
    || this.createIssueMutation.loading.value
    || this.issueQuery.loading.value
    || this.commentOnIssueMutation.loading.value
  )

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
    this.createIssueMutation.onError(useErrorManager().catchError)
    this.commentOnIssueMutation.onError(useErrorManager().catchError)
  }

  private projectBoardFragment = graphql(`
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
                  issueUrl
                  description
                  labels
                  storyPoints
                  effortEstimation
                  priority
                  sprintNumber
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

  boardQuery = provideApolloClient(apolloClient)(() => {
    return useQuery(graphql(`
        query BoardQuery($projectId: UUID!) {
            project(id: $projectId) {
                id
                projectBoard {
                    ... ProjectBoard
                }
            }
        }
    `), () => ({
      projectId: useProjectId().projectId.value
    }), () => ({
      enabled: computed(() => useAuth().isLoggedIn() && useProjectId().isProjectSelected())
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

  private createIssueMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation CreateIssueMutation($projectId: UUID!, $input: CreateIssueInput!) {
            mutateProject(id: $projectId) {
                createIssue(input: $input) {
                    ...IssueBase
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
      refetchQueries: ['BoardQuery', 'Sprint']
    }))
  })

  private commentOnIssueMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation CommentOnIssueMutation($projectId: UUID!, $issueId: ID!, $message: String!, $optionalParentId: String) {
            mutateProject(id: $projectId) {
                mutateIssue(id: $issueId) {
                    commentOnIssue(comment: $message, optionalParentId: $optionalParentId) {
                        ...IssueBase
                    }
                }
            }
        }
    `), () => ({
      refetchQueries: ['IssueQuery']
    }))
  })

  private issueQuery = provideApolloClient(apolloClient)(() => {
    return useQuery(graphql(`
        query IssueQuery($projectId: UUID!, $issueId: UUID!) {
            project(id: $projectId) {
                id
                issue(id: $issueId) {
                    ...IssueWithEvents
                }
            }
        }
    `), () => ({
      projectId: useProjectId().projectId.value,
      issueId: this.issueId.value
    }), () => ({
      enabled: computed(() => useAuth().isLoggedIn()
        && useProjectId().isProjectSelected()
        && this.issueId.value !== null)
    }))
  })
}


const issueServiceInstance = new IssueService()

export function useIssueService() {
  return issueServiceInstance
}



export const issueBaseFragment = graphql(`
    fragment IssueBase on Issue {
        id
        title
        issueUrl
        description
        storyPoints
        effortEstimation
        priority
        sprintNumber
        labels
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

export const issueWithEventsFragment = graphql(`
    fragment IssueWithEvents on Issue {
        ...IssueBase
        issueEvents {
            ...EventWithChildren
        }
    }`)
