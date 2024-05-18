<script setup lang="ts">
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { graphql } from '@/gql'
import { useMutation, useSubscription } from '@vue/apollo-composable'
import { computed, onMounted, ref } from 'vue'
import { useErrorManager } from '@/utils/error-manager'
import { type MeetingAttendee, MeetingType, UserState } from '@/gql/graphql'
import { isPresent } from '@/utils/types'
import { userInProjectService } from '@/service/user-in-project-service'

const { meetingType } = defineProps<{
  meetingType: MeetingType
}>()

const projectId = computed(() => useRoute().params.projectId as string)

const { allUsers: usersInProject } = userInProjectService()

const meetingAttendees = ref<MeetingAttendee[]>([])

const { mutate: joinMeeting} = useMutation(graphql(`
  mutation joinMeeting($type: MeetingType!, $projectId: UUID!) {
    mutateProject(id: $projectId) {
      joinMeeting(type: $type) {
        attendees {
          userId
          user {
            id
            username
            avatar
          }
          state
          role
        }
      }
    }
  }
`), () => ({
  variables: {
    type: meetingType,
    projectId: projectId.value
  }
}))

const { mutate: leaveMeeting } = useMutation(graphql(`
  mutation leaveMeeting($type: MeetingType!, $projectId: UUID!) {
    mutateProject(id: $projectId) {
      leaveMeeting(type: $type) {
        attendees {
          userId
          state
          role
        }
      }
    }
  }
`), () => ({
  variables: {
    type: meetingType,
    projectId: projectId.value
  }
}))

const {onResult, onError: subscriptionError} = useSubscription(graphql(`
  subscription meetingAttendees($meetingType: MeetingType!, $projectId: UUID!) {
    meeting(projectId: $projectId meetingType: $meetingType) {
      attendees {
        userId
        state
        role
        user {
          id
          username
          avatar
        }
      }
    }
  }
`), () => ({
  meetingType: meetingType,
  projectId: projectId.value
}))

subscriptionError(useErrorManager().catchError)

onResult((result) => {
  if (isPresent(result.data)) {
    console.info('Meeting attendees changed')
    meetingAttendees.value = result.data?.meeting?.attendees ?? []
  }
})

onMounted(() => {
  joinMeeting()
    .then(result => {
      if (isPresent(result?.data)) {
        console.info('Joined meeting')
        meetingAttendees.value = result.data.mutateProject.joinMeeting.attendees
      }
    })
})

onBeforeRouteLeave(() => {
  leaveMeeting()
    .then(() => console.info('Left meeting'))
})

function userState(userId: string): UserState {
  const attendee = meetingAttendees.value?.find(a => a.userId === userId)
  if (!attendee) {
    return UserState.Offline
  }
  return attendee.state
}

function colorForUser(userId: string): string {
  switch (userState(userId)) {
    case UserState.Online:
      return 'success'
    case UserState.Away:
      return 'warning'
    case UserState.Offline:
      return 'grey'
  }
}

</script>

<template>

  <slot></slot>
  <v-card title="Members" class="mt-5">
    <v-card-item>
      <div class="d-flex ga-2">
        <v-chip v-for="userInProject in usersInProject"
                :key="userInProject.user.id"
                :prepend-avatar="userInProject.user.avatar ?? 'mdi-account'"
                :color="colorForUser(userInProject.user.id)">
          {{ userInProject.user.username }}
        </v-chip>

        <v-spacer />
        <v-btn variant="flat" prepend-icon="mdi-link">Copy meeting link</v-btn>
      </div>
    </v-card-item>

  </v-card>
</template>

<style scoped>

</style>
