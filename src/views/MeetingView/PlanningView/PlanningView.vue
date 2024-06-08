<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import PlanningAnimalView from '@/views/MeetingView/PlanningView/PlanningAnimalView.vue'
import PlanningAnimalNameView from '@/views/MeetingView/PlanningView/PlanningAnimalNameView.vue'
import IssueEstimationView from '@/views/MeetingView/PlanningView/IssueEstimationView.vue'
import SprintGoalView from '@/views/MeetingView/PlanningView/SprintGoalView.vue'
import MeetingAttendeeCard from '@/components/meeting/MeetingAttendeeCard.vue'
import { Animal, MeetingRole, MeetingType, PlanningMeetingPage } from '@/gql/graphql'
import { useErrorManager } from '@/utils/error-manager'
import { usePlanningMeetingService } from '@/service/planning-meeting-service'
import { useFragment } from '@/gql'
import { meetingFragment } from '@/service/meeting-service'
import { useGlobalUserService } from '@/service/global-user-service'
import AnimalAvatar from '@/views/MeetingView/PlanningView/AnimalAvatar.vue'
import router from '@/router'
import { useAppStore } from '@/stores/app-store'
import { routes } from '@/router/routes'

const { planningMeeting, changePage, loading } = usePlanningMeetingService()

onMounted(() => {
  watch(loading, () => {
    if (!loading && !planningMeeting.value) {
      useErrorManager().catchError('There is no active planning meeting.')
      router.push(routes.project(useAppStore().getProjectIdOrThrow()).main)
    }
  })
})

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

const currentPage = computed(() => planningMeeting.value?.currentPage ?? PlanningMeetingPage.Information)

const currentPageNumber = computed(() => {
  return planningSteps.value
    .find(step => step.page === currentPage.value)?.value ?? 1
})

function updatePage(newValue: number) {
  const pageNormalized = Math.min(Math.max(1, newValue), planningSteps.value.length)
  const newPage = planningSteps.value
      .find(step => step.value === pageNormalized)?.page
    ?? PlanningMeetingPage.Information

  changePage(newPage).catch(useErrorManager().catchError)
}

const meetingBase = computed(() => useFragment(meetingFragment, planningMeeting.value) || null)

const isMeetingLeader = computed(() => {
  return meetingBase.value?.attendees
    ?.filter(attendee => attendee.role === MeetingRole.MeetingLeader)
    ?.find(attendee => attendee.user.id === useGlobalUserService().currentGlobalUser.value?.id) != null
})

const nextDisabled = ref(false)
const previousDisabled = ref(false)

const stepperDisabled = computed(() => {
  const prevIsDisabled = currentPageNumber.value === 1 || previousDisabled.value
  const nextIsDisabled = currentPageNumber.value === planningSteps.value.length || nextDisabled.value

  return nextIsDisabled && prevIsDisabled
    ? true
    : (nextIsDisabled ? 'next' : (prevIsDisabled ? 'prev' : false))
})

</script>

<template>
  <div class="pa-5">
    <div v-if="!(meetingBase?.active ?? false)">
      <v-card class="pa-3">
        <!-- TODO check if meeting was success -->
        <h3>Meeting finished! 🎉</h3>
        <p>
          Welcome {{ planningMeeting?.nameVoting?.votingResult }} to the park!
        </p>

        <animal-avatar :animal="planningMeeting?.animalVoting?.votingResult as Animal" :size="260" />
      </v-card>

    </div>

    <v-stepper
      v-else
      :items="planningSteps"
      :model-value="currentPageNumber"
      @update:model-value="newValue => updatePage(newValue as number)"
      :hide-actions="!isMeetingLeader"
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
          <p class="text-h6">Welcome to the planning meeting!</p>
          <p>This meeting will have four steps:</p>
          <ul style="list-style-type: circle;">
            <li>First, you will choose a sprint mascot that will accompany you during the sprint.</li>
            <li>Then, you can find a cute name for your mascot!</li>
            <li>After that, the issues of the backlog will be estimated.</li>
            <li>Finally, you will set the sprint goal by selecting the issues you want to work on this sprint.</li>
          </ul>

          <v-spacer class="my-5" />

          <p>The meeting will start soon...</p>

        </div>
      </template>

      <!--suppress VueUnrecognizedSlot -->
      <!-- eslint-disable-next-line -->
      <template #item.2>
        <planning-animal-view
          :is-meeting-leader="isMeetingLeader"
          :animal-voting="planningMeeting?.animalVoting || null"
          :attendees-count="meetingBase?.attendees?.length || 0"
          @update:next-disabled="val => nextDisabled = val"
        />
      </template>

      <!--suppress VueUnrecognizedSlot -->
      <!-- eslint-disable-next-line -->
      <template #item.3>
        <planning-animal-name-view
          :is-meeting-leader="isMeetingLeader"
          :animal="planningMeeting?.animalVoting.votingResult || null"
          :name-voting="planningMeeting?.nameVoting || null"
          :attendees-count="meetingBase?.attendees?.length || 0"
          @update:next-disabled="val => nextDisabled = val"
        />
      </template>

      <!--suppress VueUnrecognizedSlot -->
      <!-- eslint-disable-next-line -->
      <template #item.4>
        <issue-estimation-view
          :is-meeting-leader="isMeetingLeader"
          :issue-estimation="planningMeeting?.issueEstimation || null"
          :attendees-count="meetingBase?.attendees?.length || 0"
        />
      </template>

      <!--suppress VueUnrecognizedSlot -->
      <!-- eslint-disable-next-line -->
      <template #item.5>
        <sprint-goal-view
          :is-meeting-leader="isMeetingLeader"
          :sprint-goal-voting="planningMeeting?.sprintGoalVoting || null"
        />
      </template>


      <template #actions>
        <v-stepper-actions
          :disabled="stepperDisabled"
          @click:next="updatePage(currentPageNumber + 1)"
          @click:prev="updatePage(currentPageNumber - 1)"
        />
      </template>
    </v-stepper>

    <meeting-attendee-card :meeting="meetingBase" :meeting-type="MeetingType.Planning" />
  </div>
</template>

<style scoped>

</style>
