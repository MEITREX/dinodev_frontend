<script setup lang="ts">
import MeetingCard from '@/views/MeetingView/MeetingCard.vue'
import { useQuery, useSubscription } from '@vue/apollo-composable'
import { useRoute } from 'vue-router'
import { graphql } from '@/gql'
import { computed, ref } from 'vue'
import { isPresent, type Nullable } from '@/utils/types'
import router from '@/router'
import { routes } from '@/router/routes'
import { usePlanningMeetingService } from '@/service/planning-meeting-service'

const projectId = useRoute().params.projectId as string

const result = useQuery(graphql(`
  query meetings($projectId: UUID!) {
    project(id: $projectId) {
      activePlanningMeeting {
        projectId
      }
      activeRetrospectiveMeeting {
        projectId
      }
      activeStandupMeeting {
        projectId
      }
    }
  }
`), () => ({
  projectId
}))

// const subscriptionResult = useSubscription(graphql(`
//   subscription meetingsChanged($projectId: UUID!) {
//     meeting(projectId: $projectId) {
//       __typename
//     }
//   }
// `), () => ({
//   projectId
// }))

const planningActive = computed(() => isPresent(planningMeeting))
const retrospectiveActive = ref(false)
const standupActive = ref(false)

const { planningMeeting } = usePlanningMeetingService()

result.onResult((result) => {
  const project = result.data?.project
  // todo rework
  retrospectiveActive.value = isPresent(project?.activeRetrospectiveMeeting)
  standupActive.value = isPresent(project?.activeStandupMeeting)
})

// subscriptionResult.onResult((result) => {
//   const meeting = result.data?.meetingStarted
//   if (meeting) {
//     if (meeting.__typename === 'PlanningMeeting') {
//       planningActive.value = true
//     } else if (meeting.__typename === 'RetrospectiveMeeting') {
//       retrospectiveActive.value = true
//     } else if (meeting.__typename === 'StandupMeeting') {
//       standupActive.value = true
//     }
//   }
// })

function joinStandupMeeting() {
  router.push(routes.project(projectId).liveStandup)
}

function joinPlanningMeeting() {
  router.push(routes.project(projectId).livePlanning)
}

function joinRetrospectiveMeeting() {
  router.push(routes.project(projectId).liveRetrospective)
}

function startStandupMeeting() {
  router.push(routes.project(projectId).standup)
}

function startPlanningMeeting() {
  router.push(routes.project(projectId).planning)
}

function startRetrospectiveMeeting() {
  router.push(routes.project(projectId).retrospective)
}
</script>

<template>

  <h3 class="mb-3"> Meetings </h3>

  <v-row>
    <v-col cols="8" md="4">
      <meeting-card
        :is-currently-active="standupActive"
        meeting-name="Standup"
        icon="mdi-account-group"
        @join-meeting="joinStandupMeeting"
        @create-meeting="startStandupMeeting"
      >
        Discuss the progress of the sprint and any blockers.
      </meeting-card>
    </v-col>

    <v-col cols="8" md="4">
      <meeting-card
        :is-currently-active="planningActive"
        meeting-name="Sprint Planning"
        icon="mdi-calendar-star"
        @join-meeting="joinPlanningMeeting"
        @create-meeting="startPlanningMeeting"
      >
        Estimate issues and set the sprint goal.
      </meeting-card>

    </v-col>
    <v-col cols="8" md="4">
      <meeting-card
        :is-currently-active="retrospectiveActive"
        meeting-name="Retrospective"
        icon="mdi-calendar-remove"
        @join-meeting="joinRetrospectiveMeeting"
        @create-meeting="startRetrospectiveMeeting"
      >
        Discuss what went well and what could be improved in the last sprint.
      </meeting-card>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>
