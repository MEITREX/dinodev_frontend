import { graphql, useFragment } from '@/gql'
import { provideApolloClient, useQuery } from '@vue/apollo-composable'
import { apolloClient } from '@/setup/apollo-client'
import { computed } from 'vue'
import { useErrorManager } from '@/utils/error-manager'
import { useAppStore } from '@/stores/appStore'
import { useAuth } from '@/service/use-auth'


class SprintService {

  public currentSprint = computed(() => {
    return useFragment(sprintFragment,
      this.CurrentSprintQuery.result.value?.project?.currentSprint) || null
  })

  public loading = computed(() =>
    this.CurrentSprintQuery.loading.value)

  constructor() {
    this.CurrentSprintQuery.onError(useErrorManager().catchError)
  }

  private CurrentSprintQuery = provideApolloClient(apolloClient)(() => useQuery(graphql(`
      query Sprint($projectId: UUID!) {
          project(id: $projectId) {
              currentSprint {
                  ...DefaultSprint
              }
          }
      }
  `), () => ({
    projectId: useAppStore().projectId.value
  }), () => ({
    enabled: useAuth().isLoggedIn() && useAppStore().isProjectSelected(),
    fetchPolicy: 'no-cache'
  })))
}

const sprintService = new SprintService();

export function useSprintService() {
  return sprintService;
}

export const sprintFragment = graphql(`
    fragment DefaultSprint on Sprint {
        id
        startDate
        endDate
        storyPointsPlanned
        stats {
            percentageStoryPointsCompleted
            percentageTimeElapsed
            daysLeft
        }
        name
        animal
    }
`)
