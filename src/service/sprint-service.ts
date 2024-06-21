import { graphql, useFragment } from '@/gql'
import { provideApolloClient, useQuery } from '@vue/apollo-composable'
import { apolloClient } from '@/setup/apollo-client'
import { computed } from 'vue'
import { useErrorManager } from '@/utils/error-manager'
import { useAppStore } from '@/stores/app-store'
import { useAuth } from '@/service/use-auth'
import type { DefaultSprintFragment } from '@/gql/graphql'


class SprintService {

  public currentSprint = computed(() => {
    return useFragment(sprintFragment,
      this.currentSprintQuery.result.value?.project?.currentSprint) || null
  })

  public previousSprint = computed(() => {
    return useFragment(sprintFragment,
      this.previousSprintQuery.result.value?.project?.previousSprint) || null
  })

  public allSprints = computed(() => {
    return useFragment(sprintFragment,
      this.allSprintsQuery.result.value?.project?.sprints) || []
  })

  public loading = computed(() =>
    this.currentSprintQuery.loading.value
    || this.previousSprintQuery.loading.value
    || this.allSprintsQuery.loading.value)

  constructor() {
    this.currentSprintQuery.onError(useErrorManager().catchError)
    this.previousSprintQuery.onError(useErrorManager().catchError)
    this.allSprintsQuery.onError(useErrorManager().catchError)
  }

  private currentSprintQuery = provideApolloClient(apolloClient)(() => useQuery(graphql(`
      query Sprint($projectId: UUID!) {
          project(id: $projectId) {
              id
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

  private previousSprintQuery = provideApolloClient(apolloClient)(() => useQuery(graphql(`
      query PreviousSprint($projectId: UUID!) {
          project(id: $projectId) {
              id
              previousSprint {
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

  allSprintsQuery = provideApolloClient(apolloClient)(() => useQuery(graphql(`
      query Sprints($projectId: UUID!) {
          project(id: $projectId) {
              id
              sprints {
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
            totalStoryPoints
            percentageStoryPointsCompleted
            percentageStoryPointsInProgress
            percentageTimeElapsed
            daysLeft
            averageStoryPoints
            successState
            burnDown
            streak
        }
        placedAssets {
            asset
            x
            y
        }
        name
        animal
        number
    }
`)

export type PlacedAssetType = DefaultSprintFragment['placedAssets'][0]
