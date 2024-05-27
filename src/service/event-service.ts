import { graphql, useFragment } from '@/gql'
import { provideApolloClient, useQuery } from '@vue/apollo-composable'
import { apolloClient } from '@/setup/apollo-client'
import { useAuth } from '@/service/use-auth'
import { useAppStore } from '@/stores/appStore'
import { computed } from 'vue'
import { useErrorManager } from '@/utils/error-manager'
import type { BaseEventFragment } from '@/gql/graphql'

class EventService {

  public events = computed(() => {
    return useFragment(this.EventFragment, this.eventQuery.result.value?.project?.events) || []
  })

  public loading = computed(() => this.eventQuery.loading.value)

  constructor() {
    this.eventQuery.onError(useErrorManager().catchError)
  }

  public findEventDataField(event: BaseEventFragment, key: string): string | null {
    return event.eventData
      .find(data => data.key === key)
      ?.value || null
  }

  EventFragment = graphql(`
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
}

const eventService = new EventService()

export function useEventService() {
  return eventService
}
