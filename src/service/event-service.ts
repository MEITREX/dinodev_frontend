import { graphql, useFragment } from '@/gql'
import { provideApolloClient, useLazyQuery, useMutation, useQuery } from '@vue/apollo-composable'
import { apolloClient } from '@/setup/apollo-client'
import { useAuth } from '@/service/use-auth'
import { useAppStore } from '@/stores/appStore'
import { computed } from 'vue'
import { useErrorManager } from '@/utils/error-manager'

class EventService {

  public events = computed(() => {
    return useFragment(eventWithChildrenFragment, this.eventQuery.result.value?.project?.events) || []
  })

  public fetchEventsOfUser = async (userId: string) => {
    const variables = {
      userId,
      projectId: useAppStore().projectId.value,
      page: 0,
      pageSize: 10
    }

    await (this.eventsOfUserLazyQuery.load(null, variables) || this.eventsOfUserLazyQuery.refetch(variables))

    return useFragment(eventFragment, this.eventsOfUserLazyQuery.result.value?.globalUser?.userInProject?.publicEvents) || []
  }

  public likeEvent = async (eventId: string)  => {
    const result = await this.likeEventMutation.mutate({
      projectId: useAppStore().projectId.value,
      eventId
    })
    return useFragment(eventFragment, result?.data?.mutateProject?.reactToEvent) || null
  }

  public addUserComment = async (message: string, optionalParentId?: string) => {
    const result = await this.addUserCommentMutation.mutate({
      projectId: useAppStore().projectId.value,
      message,
      optionalParentId
    })
    return useFragment(eventFragment, result?.data?.mutateProject?.postComment) || null
  }

  public loading = computed(() => this.eventQuery.loading.value
    || this.eventsOfUserLazyQuery.loading.value
    || this.likeEventMutation.loading.value
    || this.addUserCommentMutation.loading.value)

  constructor() {
    this.eventQuery.onError(useErrorManager().catchError)
    this.eventsOfUserLazyQuery.onError(useErrorManager().catchError)
    this.likeEventMutation.onError(useErrorManager().catchError)
    this.addUserCommentMutation.onError(useErrorManager().catchError)
  }

  eventQuery = provideApolloClient(apolloClient)(() => {
      return useQuery(graphql(`
          query EventsOfProject($projectId: UUID!, $page: Int!, $pageSize: Int!) {
              project(id: $projectId) {
                  events(page: $page, size: $pageSize) {
                      ...EventWithChildren
                  }
              }
          }`
      ), () => ({
        projectId: useAppStore().projectId.value,
        page: 0,
        pageSize: 10
      }), () => ({
        enabled: useAuth().isLoggedIn() && useAppStore().isProjectSelected()
      }))
    }
  )

  private eventsOfUserLazyQuery = provideApolloClient(apolloClient)(() => {
    return useLazyQuery(graphql(`
        query EventsOfUser($userId: UUID!, $projectId: UUID!, $page: Int!, $pageSize: Int!) {
            globalUser(id: $userId) {
                userInProject(projectId: $projectId) {
                    publicEvents(page: $page, size: $pageSize) {
                        ...BaseEvent
                    }
                }
            }
        }`
    ))
  })

  private likeEventMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation LikeEvent($projectId: UUID!, $eventId: UUID!) {
            mutateProject(id: $projectId) {
                reactToEvent(eventId: $eventId) {
                    ...BaseEvent
                }
            }
        }`
    ), () => ({
      refetchQueries: ['EventsOfProject', 'IssueQuery']
    }))
  })

  private addUserCommentMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation AddUserComment($projectId: UUID!, $optionalParentId: UUID, $message: String!) {
            mutateProject(id: $projectId) {
                postComment(optionalParentEventId: $optionalParentId, comment: $message) {
                    ...BaseEvent
                }
            }
        }`
    ), () => ({
      refetchQueries: ['EventsOfProject']
    }))
  })
}

const eventService = new EventService()

export function useEventService() {
  return eventService
}

export const eventFragment = graphql(`
    fragment BaseEvent on DefaultEvent {
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
        issueId: field(name: "issueId") { value }
        issueTitle: field(name: "issueTitle") { value }
        reactions {
            userId
        }
    }`
)

export const eventWithChildrenFragment = graphql(`
    fragment EventWithChildren on DefaultEvent {
        ...BaseEvent
        children {
            ...BaseEvent
        }
    }`
)
