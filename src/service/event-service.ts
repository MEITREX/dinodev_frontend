import { graphql, useFragment } from '@/gql'
import { provideApolloClient, useLazyQuery, useQuery } from '@vue/apollo-composable'
import { apolloClient } from '@/setup/apollo-client'
import { useAuth } from '@/service/use-auth'
import { useAppStore } from '@/stores/appStore'
import { computed } from 'vue'
import { useErrorManager } from '@/utils/error-manager'
import type { BaseEventFragment, EventsOfUserQuery } from '@/gql/graphql'
import type { ApolloQueryResult } from '@apollo/client'

class EventService {

  public events = computed(() => {
    return useFragment(eventFragment, this.eventQuery.result.value?.project?.events) || []
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

  public loading = computed(() => this.eventQuery.loading.value
    || this.eventsOfUserLazyQuery.loading.value)

  constructor() {
    this.eventQuery.onError(useErrorManager().catchError)
  }

  public findEventDataField(event: BaseEventFragment, key: string): string | null {
    return event.eventData
      .find(data => data.key === key)
      ?.value || null
  }

  private eventQuery = provideApolloClient(apolloClient)(() => {
      return useQuery(graphql(`
          query EventsOfProject($projectId: UUID!, $page: Int!, $pageSize: Int!) {
              project(id: $projectId) {
                  events(page: $page, size: $pageSize) {
                      ...BaseEvent
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
    }`
)
