<script setup lang="ts">
import { computed, ref } from 'vue'
import PlanningAnimalView from '@/views/MeetingView/PlanningView/PlanningAnimalView.vue'
import PlanningAnimalNameView from '@/views/MeetingView/PlanningView/PlanningAnimalNameView.vue'
import IssueEstimationView from '@/views/MeetingView/PlanningView/IssueEstimationView.vue'
import SprintGoalView from '@/views/MeetingView/PlanningView/SprintGoalView.vue'
import MeetingView from '@/views/MeetingView/MeetingView.vue'
import { MeetingType, PlanningMeetingPage } from '@/gql/graphql'
import { useMutation, useQuery } from '@vue/apollo-composable'
import { graphql } from '@/gql'
import { useErrorManager } from '@/utils/error-manager'
import { useRoute } from 'vue-router'

const projectId = computed(() => useRoute().params.projectId as string)

const planningSteps = ref([
  {
    title: 'Information',
    value: 1,
    page: PlanningMeetingPage.Information
  },
  {
    title: 'Choose animal',
    value: 2,
    page: PlanningMeetingPage.ChooseAnimal
  },
  {
    title: 'Name your animal',
    value: 3,
    page: PlanningMeetingPage.NameAnimal
  },
  {
    title: 'Issue estimation',
    value: 4,
    page: PlanningMeetingPage.EstimateIssues
  },
  {
    title: 'Sprint goal',
    value: 5,
    page: PlanningMeetingPage.SprintGoal
  }
])

const { onResult, onError, loading } = useQuery(graphql(`
  query planningMeeting($projectId: UUID!) {
    project(id: $projectId) {
      activePlanningMeeting {
        attendees {
          userId
          state
          role
        }
        currentPage
      }
    }
  }
`), () => ({
  projectId: projectId.value
}));

onError(useErrorManager().catchError)

const currentPage = ref(PlanningMeetingPage.Information)

const currentPageNumber = computed(() => {
  return planningSteps.value
    .find(step => step.page === currentPage.value)?.value ?? 1
})

onResult((result) => {
  const meeting = result.data?.project?.activePlanningMeeting
  if (meeting) {
   currentPage.value = meeting.currentPage
  }
})

const { mutate: sendPageUpdate } = useMutation(graphql(`
  mutation updatePlanningMeetingPage($projectId: UUID!, $page: PlanningMeetingPage!) {
    mutateProject(id: $projectId) {
      mutatePlanningMeeting {
        changePage(page: $page) {
          __typename
        }
      }
    }
  }
`), () => ({
  variables: {
    projectId: projectId.value,
    page: currentPage.value
  }
}))

function updatePage(newValue: number) {
  currentPage.value = planningSteps.value
    .find(step => step.value === newValue)?.page
    ?? PlanningMeetingPage.Information

  sendPageUpdate()
    .then(() => console.log('Page updated'))
    .catch(useErrorManager().catchError)
}

// const { onResult: onPageChangeExternal } = useSubscription(graphql(`
//   subscription pageChanged($projectId: UUID!) {
//     planningMeetingPageChanged(projectId: $projectId)
//   }
// `), () => ({
//   projectId: projectId.value
// }))
//
// onPageChangeExternal((result) => {
//   console.log('Page changed externally', result)
//   const page = result.data?.planningMeetingPageChanged
//   if (page) {
//     currentPage.value = page
//   }
// })
</script>

<template>
  <meeting-view :meeting-type="MeetingType.Planning">
    <v-stepper
      :items="planningSteps"
      :model-value="currentPageNumber"
      @update:model-value="newValue => updatePage(newValue as number)"
    >

      <!-- note: the slot names are item.1, item.2, item.3, etc.,
      but eslint and IntelliJ IDEA don't recognize them -->
      <!--suppress VueUnrecognizedSlot -->
      <!-- eslint-disable-next-line -->
      <template #item.1>
        <div v-if="loading">
          <v-progress-circular indeterminate />
        </div>
        <div v-else>
          The planning meeting is starting soon!
        </div>
      </template>

      <!--suppress VueUnrecognizedSlot -->
      <!-- eslint-disable-next-line -->
      <template #item.2>
        <planning-animal-view />
      </template>

      <!--suppress VueUnrecognizedSlot -->
      <!-- eslint-disable-next-line -->
      <template #item.3>
        <planning-animal-name-view />
      </template>

      <!--suppress VueUnrecognizedSlot -->
      <!-- eslint-disable-next-line -->
      <template #item.4>
        <issue-estimation-view />
      </template>

      <!--suppress VueUnrecognizedSlot -->
      <!-- eslint-disable-next-line -->
      <template #item.5>
        <sprint-goal-view />
      </template>
    </v-stepper>


  </meeting-view>
</template>

<style scoped>

</style>
