import { graphql, useFragment } from '@/gql'
import { provideApolloClient, useMutation, useSubscription } from '@vue/apollo-composable'
import { apolloClient } from '@/setup/apollo-client'
import { useAppStore } from '@/stores/app-store'
import { computed } from 'vue'
import {
  type DefaultStandupMeetingFragment,
  type StandupMeetingInput
} from '@/gql/graphql'
import { useErrorManager } from '@/utils/error-manager'
import { useAuth } from '@/service/use-auth'

class StandupMeetingService {

  public standupMeeting = computed(() => {
    return useFragment(defaultStandupMeetingFragment,
      this.standupMeetingSubscription.result.value?.standupMeeting) ?? null
  })

  public createStandupMeeting = async (input: StandupMeetingInput): Promise<DefaultStandupMeetingFragment | null> => {
    const result = await this.createStandupMeetingMutation.mutate({
      projectId: useAppStore().projectId.value,
      input
    })
    return useFragment(defaultStandupMeetingFragment,
      result?.data?.mutateProject?.createStandupMeeting) || null
  }

  public startStandupMeeting = async (): Promise<DefaultStandupMeetingFragment | null> => {
    const result = await this.startStandupMeetingMutation.mutate({
      projectId: useAppStore().projectId.value
    })
    return useFragment(defaultStandupMeetingFragment,
      result?.data?.mutateProject?.mutateStandupMeeting?.startStandupMeeting) || null
  }

  public changeCurrentAttendee = async (userId: string): Promise<DefaultStandupMeetingFragment | null> => {
    const result = await this.changeCurrentAttendeeMutation.mutate({
      projectId: useAppStore().projectId.value,
      userId
    })
    return useFragment(defaultStandupMeetingFragment,
      result?.data?.mutateProject?.mutateStandupMeeting?.changeCurrentAttendee) || null
  }

  public finishMeeting = async (): Promise<DefaultStandupMeetingFragment | null> => {
    const result = await this.finishMeetingMutation.mutate({
      projectId: useAppStore().projectId.value
    })
    return useFragment(defaultStandupMeetingFragment,
      result?.data?.mutateProject?.mutateStandupMeeting?.finishStandupMeeting) || null
  }

  public loading = computed(() =>
    this.createStandupMeetingMutation.loading.value
    || this.startStandupMeetingMutation.loading.value
    || this.changeCurrentAttendeeMutation.loading.value
    || this.finishMeetingMutation.loading.value
  )

  constructor() {
    this.createStandupMeetingMutation.onError((error) => useErrorManager().catchError(error))
    this.startStandupMeetingMutation.onError((error) => useErrorManager().catchError(error))
    this.changeCurrentAttendeeMutation.onError((error) => useErrorManager().catchError(error))
    this.finishMeetingMutation.onError((error) => useErrorManager().catchError(error))

    this.standupMeetingSubscription.onError((error) => useErrorManager().catchError(error))
  }

  private createStandupMeetingMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation CreateStandupMeeting($projectId: UUID!, $input: StandupMeetingInput!) {
            mutateProject(id: $projectId) {
                createStandupMeeting(input: $input) {
                    ...DefaultStandupMeeting
                }
            }
        }`
    ))
  })

  private startStandupMeetingMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation StartStandupMeeting($projectId: UUID!) {
            mutateProject(id: $projectId) {
                mutateStandupMeeting {
                    startStandupMeeting {
                        ...DefaultStandupMeeting
                    }
                }
            }
        }`
    ))
  })

  private changeCurrentAttendeeMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation ChangeCurrentAttendee($projectId: UUID!, $userId: UUID!) {
            mutateProject(id: $projectId) {
                mutateStandupMeeting {
                    changeCurrentAttendee(attendeeId: $userId) {
                        ...DefaultStandupMeeting
                    }
                }
            }
        }`
    ))
  })

  private finishMeetingMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation FinishStandupMeeting($projectId: UUID!) {
            mutateProject(id: $projectId) {
                mutateStandupMeeting {
                    finishStandupMeeting {
                        ...DefaultStandupMeeting
                    }
                }
            }
        }`
    ))
  })

  standupMeetingSubscription = provideApolloClient(apolloClient)(() => {
    return useSubscription(graphql(`
        subscription StandupMeeting($projectId: UUID!) {
            standupMeeting(projectId: $projectId) {
                ...DefaultStandupMeeting
            }
        }`
    ), () => ({
      projectId: useAppStore().projectId.value
    }), () => ({
      enabled: useAuth().isLoggedIn() && useAppStore().isProjectSelected()
    }))
  })

}

const standupMeetingService = new StandupMeetingService()

export function useStandupMeetingService() {
  return standupMeetingService
}

export const defaultStandupMeetingFragment = graphql(`
    fragment DefaultStandupMeeting on StandupMeeting {
        ...DefaultMeeting
        standupMeetingSettings {
            countdownPerAttendee
        }
        currentAttendee {
            user {
                id
                username
                avatar
            }
        }
        order {
            user {
                id
                username
                avatar
            }
        }
        
    }`)

