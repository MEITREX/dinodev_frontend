import { graphql, useFragment } from '@/gql'
import { provideApolloClient, useMutation, useSubscription } from '@vue/apollo-composable'
import { apolloClient } from '@/setup/apollo-client'
import { useProjectId } from '@/stores/project-id'
import { useAuth } from '@/service/use-auth'
import { computed } from 'vue'
import type { RetrospectiveMeetingInput } from '@/gql/graphql'
import { RetrospectiveMeetingPage } from '@/gql/graphql'
import { useErrorManager } from '@/utils/error-manager'

class RetrospectiveMeetingService {

  public retrospectiveMeeting = computed(() => {
    return useFragment(defaultRetrospectiveMeetingFragment,
      this.retrospectiveMeetingSubscription.result.value?.retrospectiveMeeting) ?? null
  })

  public awardMedals = async () => {
    const result = await this.awardMedalsMutation.mutate({
      projectId: useProjectId().projectId.value
    })
    return useFragment(defaultRetrospectiveMeetingFragment,
      result?.data?.mutateProject?.mutateRetrospectiveMeeting?.awardMedals) || null
  }

  public changePage = async (page: RetrospectiveMeetingPage) => {
    const result = await this.changePageMutation.mutate({
      projectId: useProjectId().projectId.value,
      page
    })
    return useFragment(defaultRetrospectiveMeetingFragment,
      result?.data?.mutateProject?.mutateRetrospectiveMeeting?.updatePage) || null
  }

  public addComment = async (columnId: string, content: string) => {
    const result = await this.addCommentMutation.mutate({
      projectId: useProjectId().projectId.value,
      columnId,
      content
    })
    return useFragment(defaultRetrospectiveMeetingFragment,
      result?.data?.mutateProject?.mutateRetrospectiveMeeting?.addComment) || null
  }

  public editComment = async (commentId: string, content: string) => {
    const result = await this.editCommentMutation.mutate({
      projectId: useProjectId().projectId.value,
      commentId,
      content
    })
    return useFragment(defaultRetrospectiveMeetingFragment,
      result?.data?.mutateProject?.mutateRetrospectiveMeeting?.editComment) || null
  }

  public deleteComment = async (commentId: string) => {
    const result = await this.deleteCommentMutation.mutate({
      projectId: useProjectId().projectId.value,
      commentId
    })
    return useFragment(defaultRetrospectiveMeetingFragment,
      result?.data?.mutateProject?.mutateRetrospectiveMeeting?.deleteComment) || null
  }

  public thumbsUpComment = async (commentId: string) => {
    const result = await this.thumbsUpCommentMutation.mutate({
      projectId: useProjectId().projectId.value,
      commentId
    })
    return useFragment(defaultRetrospectiveMeetingFragment,
      result?.data?.mutateProject?.mutateRetrospectiveMeeting?.thumbsUpComment) || null
  }

  public finishMeeting = async () => {
    const result = await this.finishMeetingMutation.mutate({
      projectId: useProjectId().projectId.value
    })
    return useFragment(defaultRetrospectiveMeetingFragment,
      result?.data?.mutateProject?.mutateRetrospectiveMeeting?.finishMeeting) || null
  }

  public createRetrospectiveMeeting = async (input: RetrospectiveMeetingInput) => {
    const result = await this.createRetrospectiveMutation.mutate({
      projectId: useProjectId().projectId.value,
      input
    })
    return useFragment(defaultRetrospectiveMeetingFragment,
      result?.data?.mutateProject?.createRetrospectiveMeeting) || null
  }

  public loading = computed(() =>
    this.createRetrospectiveMutation.loading.value
    || this.changePageMutation.loading.value
    || this.addCommentMutation.loading.value
    || this.editCommentMutation.loading.value
    || this.deleteCommentMutation.loading.value
    || this.thumbsUpCommentMutation.loading.value
    || this.finishMeetingMutation.loading.value
    || this.awardMedalsMutation.loading.value
  )

  constructor() {
    this.retrospectiveMeetingSubscription.onError(useErrorManager().catchError)
    this.createRetrospectiveMutation.onError(useErrorManager().catchError)
    this.addCommentMutation.onError(useErrorManager().catchError)
    this.editCommentMutation.onError(useErrorManager().catchError)
    this.deleteCommentMutation.onError(useErrorManager().catchError)
    this.thumbsUpCommentMutation.onError(useErrorManager().catchError)
    this.finishMeetingMutation.onError(useErrorManager().catchError)
    this.changePageMutation.onError(useErrorManager().catchError)
    this.awardMedalsMutation.onError(useErrorManager().catchError)
  }

  changePageMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation ChangeRetrospectiveMeetingPage($projectId: UUID!, $page: RetrospectiveMeetingPage!) {
            mutateProject(id: $projectId) {
                mutateRetrospectiveMeeting {
                    updatePage(page: $page) {
                        ...DefaultRetrospectiveMeeting
                    }
                }
            }
        }
    `))
  })

  addCommentMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation AddComment($projectId: UUID!, $columnId: UUID!, $content: String!) {
            mutateProject(id: $projectId) {
                mutateRetrospectiveMeeting {
                    addComment(columnId: $columnId, content: $content) {
                        ...DefaultRetrospectiveMeeting
                    }
                }
            }
        }
    `))
  })

  editCommentMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation EditComment($projectId: UUID!, $commentId: UUID!, $content: String!) {
            mutateProject(id: $projectId) {
                mutateRetrospectiveMeeting {
                    editComment(commentId: $commentId, content: $content) {
                        ...DefaultRetrospectiveMeeting
                    }
                }
            }
        }
    `))
  })

  deleteCommentMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation DeleteComment($projectId: UUID!, $commentId: UUID!) {
            mutateProject(id: $projectId) {
                mutateRetrospectiveMeeting {
                    deleteComment(commentId: $commentId) {
                        ...DefaultRetrospectiveMeeting
                    }
                }
            }
        }
    `))
  })

  thumbsUpCommentMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation ThumbsUpComment($projectId: UUID!, $commentId: UUID!) {
            mutateProject(id: $projectId) {
                mutateRetrospectiveMeeting {
                    thumbsUpComment(commentId: $commentId) {
                        ...DefaultRetrospectiveMeeting
                    }
                }
            }
        }
    `))
  })

  finishMeetingMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation FinishRetroMeeting($projectId: UUID!) {
            mutateProject(id: $projectId) {
                mutateRetrospectiveMeeting {
                    finishMeeting {
                        ...DefaultRetrospectiveMeeting
                    }
                }
            }
        }
    `), () => ({
      refetchQueries: ['Sprint', 'PreviousSprint']
    }))
  })

  awardMedalsMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation AwardMedals($projectId: UUID!) {
            mutateProject(id: $projectId) {
                mutateRetrospectiveMeeting {
                    awardMedals {
                        ...DefaultRetrospectiveMeeting
                    }
                }
            }
        }
    `))
  })

  createRetrospectiveMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation CreateRetrospectiveMeeting($projectId: UUID!, $input: RetrospectiveMeetingInput!) {
            mutateProject(id: $projectId) {
                createRetrospectiveMeeting(input: $input) {
                    ...DefaultRetrospectiveMeeting
                }
            }
        }`
    ))
  })

  retrospectiveMeetingSubscription = provideApolloClient(apolloClient)(() => {
    return useSubscription(graphql(`
        subscription RetrospectiveMeeting($projectId: UUID!) {
            retrospectiveMeeting(projectId: $projectId) {
                ...DefaultRetrospectiveMeeting
            }
        }
    `), () => ({
      projectId: useProjectId().projectId.value
    }), () => ({
      enabled: useAuth().isLoggedIn() && useProjectId().isProjectSelected()
    }))
  })
}

const retrospectiveMeetingService = new RetrospectiveMeetingService()

export function useRetrospectiveMeetingService() {
  return retrospectiveMeetingService
}

export const defaultRetrospectiveMeetingFragment = graphql(`
    fragment DefaultRetrospectiveMeeting on RetrospectiveMeeting {
        ...DefaultMeeting
        bronzeMedalUser {
            id
            username
            avatar
        }
        silverMedalUser {
            id
            username
            avatar
        }
        goldMedalUser {
            id
            username
            avatar
        }
        bronzeMedalPoints
        silverMedalPoints
        goldMedalPoints

        currentPage
        goldChallengeReward
        
        activities {
            columns {
                id
                title
                description
                comments {
                    id
                    content
                    authorId
                    thumbsUpBy
                }
            }
        }
    }
`)
