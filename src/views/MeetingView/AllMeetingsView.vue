<script setup lang="ts">
import MeetingCard from '@/views/MeetingView/MeetingCard.vue'
import { computed, onMounted } from 'vue'
import { isPresent } from '@/utils/types'
import router from '@/router'
import { routes } from '@/router/routes'
import { usePlanningMeetingService } from '@/service/planning-meeting-service'
import { useProjectId } from '@/stores/project-id'
import { useStandupMeetingService } from '@/service/standup-meeting-service'
import { useFragment } from '@/gql'
import { meetingFragment } from '@/service/meeting-service'
import { useAppTitle } from '@/stores/app-title'
import { useRetrospectiveMeetingService } from '@/service/retrospective-meeting-service'

onMounted(() => {
  useAppTitle().setAppTitle('Meetings')
})

const { planningMeeting } = usePlanningMeetingService()
const { standupMeeting } = useStandupMeetingService()
const { retrospectiveMeeting } = useRetrospectiveMeetingService()

const planningActive = computed(() => isPresent(planningMeeting.value) && useFragment(meetingFragment, planningMeeting.value).active)
const retrospectiveActive = computed(() => isPresent(retrospectiveMeeting.value) && useFragment(meetingFragment, retrospectiveMeeting.value).active)
const standupActive = computed(() => isPresent(standupMeeting.value) && useFragment(meetingFragment, standupMeeting.value).active)

const knownMeetings = computed(() => {
  const projectId = useProjectId().projectId.value
  if (!projectId) {
    return []
  }
  return [
    {
      type: 'Planning Meeting',
      icon: 'mdi-calendar-check',
      active: planningActive.value,
      joinRoute: routes.project(projectId).livePlanning,
      startRoute: routes.project(projectId).planning,
      description: 'Estimate issues and set the sprint goal.'
    },
    {
      type: 'Standup Meeting',
      icon: 'mdi-account-group',
      active: standupActive.value,
      joinRoute: routes.project(projectId).liveStandup,
      startRoute: routes.project(projectId).standup,
      description: 'Discuss the progress of the sprint and any blockers.'
    },
    {
      type: 'Retrospective Meeting',
      icon: 'mdi-comment-check',
      active: retrospectiveActive.value,
      joinRoute: routes.project(projectId).liveRetrospective,
      startRoute: routes.project(projectId).retrospective,
      description: 'Discuss what went well and what could be improved in the last sprint.'
    },
  ]
})

</script>

<template>

  <div class="pa-3">

    <h3 class="mb-3"> Meetings </h3>

    <v-row>
      <v-col
        cols="8" md="4"
        v-for="meeting in knownMeetings"
        :key="meeting.type"
      >
        <meeting-card
          :is-currently-active="meeting.active"
          :meeting-name="meeting.type"
          :icon="meeting.icon"
          @join-meeting="() => router.push(meeting.joinRoute)"
          @create-meeting="() => router.push(meeting.startRoute)"
        >
          {{ meeting.description }}
        </meeting-card>
      </v-col>

    </v-row>
  </div>
</template>

<style scoped>

</style>
