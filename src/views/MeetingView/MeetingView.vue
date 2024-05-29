<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router'
import { computed, onMounted } from 'vue'
import { type DefaultMeetingFragment, MeetingType, UserState } from '@/gql/graphql'
import { userInProjectService } from '@/service/user-in-project-service'
import { useMeetingService } from '@/service/meeting-service'

const props = defineProps<{
  meeting: DefaultMeetingFragment | null
  meetingType: MeetingType
}>()

const { allUsers: usersInProject } = userInProjectService()

const meetingAttendees = computed(() => {
  return props.meeting?.attendees ?? []
})

const { joinMeeting, leaveMeeting } = useMeetingService()


onMounted(() => {
  joinMeeting(props.meetingType).then(() => console.log('Joined meeting'))
})

onBeforeRouteLeave(() => {
  leaveMeeting(props.meetingType).then(() => console.info('Left meeting'))
})

function userState(userId: string): UserState {
  const attendee = meetingAttendees.value?.find(a => a?.user?.id === userId)
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

  <div class="pa-3">
    <slot></slot>
    <v-card title="Members" class="mt-5">
      <v-card-item>
        <div class="d-flex ga-2">
          <v-chip
            class="animate"
            :class="{
            online: userState(userInProject.user.id) === UserState.Online,
            offline: userState(userInProject.user.id) === UserState.Offline }"
            v-for="userInProject in usersInProject"
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
  </div>

</template>

<style scoped>
.offline {
  filter: grayscale(100%) contrast(0.5) brightness(1.5);
}
.online {
  animation: popIn 0.3s ease-in-out;
}
.animate {
  transition: all 0.3s ease-in-out;
}

@keyframes popIn {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

</style>
