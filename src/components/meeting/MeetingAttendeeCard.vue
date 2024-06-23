<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router'
import { computed, onMounted } from 'vue'
import { type DefaultMeetingFragment, MeetingRole, MeetingType, UserState } from '@/gql/graphql'
import { useUserInProjectService } from '@/service/user-in-project-service'
import { useMeetingService } from '@/service/meeting-service'
import HoldToConfirm from '@/components/HoldToConfirm.vue'

const props = defineProps<{
  meeting: DefaultMeetingFragment | null
  meetingType: MeetingType
}>()

const { allUsers: usersInProject, currentUser } = useUserInProjectService()

const meetingAttendees = computed(() => {
  return props.meeting?.attendees ?? []
})

const { joinMeeting, leaveMeeting, cancelMeeting } = useMeetingService()


onMounted(() => {
  joinMeeting(props.meetingType).then()
})

onBeforeRouteLeave(() => {
  leaveMeeting(props.meetingType).then()
})

function userState(userId: string): UserState {
  const attendee = meetingAttendees.value?.find(a => a?.user?.id === userId)
  if (!attendee) {
    return UserState.Offline
  }
  return attendee.state
}

function isMeetingLeader(userId: string): boolean {
  return meetingAttendees.value
      ?.find(a => a?.user?.id === userId)
      ?.role === MeetingRole.MeetingLeader
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

function copyMeetingLink() {
  navigator.clipboard.writeText(window.location.href)
}

function cancel() {
  cancelMeeting(props.meetingType).then()
}

</script>

<template>

  <div>
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

          <hold-to-confirm @confirm="cancel" v-if="meeting?.active">
            <v-btn v-if="isMeetingLeader(currentUser?.user.id)"
                   variant="flat"
                   prepend-icon="mdi-close">
              Cancel meeting
            </v-btn>
          </hold-to-confirm>

          <v-btn
            variant="flat" prepend-icon="mdi-link"
            @click="copyMeetingLink"
          >
            Copy meeting link
          </v-btn>
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
