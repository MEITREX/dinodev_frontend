<script setup lang="ts">
import { useFragment } from '@/gql'
import { meetingFragment } from '@/service/meeting-service'
import { useGlobalUserService } from '@/service/global-user-service'
import router from '@/router'
import { useAppStore } from '@/stores/app-store'
import { routes } from '@/router/routes'
import { computed, onMounted, ref, watch } from 'vue'
import { useErrorManager } from '@/utils/error-manager'
import { useRetrospectiveMeetingService } from '@/service/retrospective-meeting-service'
import { MeetingRole, MeetingType, RetrospectiveMeetingPage } from '@/gql/graphql'
import MeetingAttendeeCard from '@/components/meeting/MeetingAttendeeCard.vue'
import SprintResultView from '@/views/MeetingView/RetrospectiveView/SprintResultView.vue'
import MedalView from '@/views/MeetingView/RetrospectiveView/MedalView.vue'
import SprintActivityView from '@/views/MeetingView/RetrospectiveView/SprintActivityView.vue'

const { retrospectiveMeeting, changePage, loading } = useRetrospectiveMeetingService()

onMounted(() => {
  watch(loading, () => {
    if (!loading && retrospectiveMeeting.value == null) {
      useErrorManager().catchError('There is no active retrospective meeting.')
      router.push(routes.project(useAppStore().getProjectIdOrThrow()).main)
    }
  })
})

const retrospectiveSteps = computed(() => {
  return [
    {
      title: 'Information',
      value: 1,
      page: RetrospectiveMeetingPage.Information
    },
    {
      title: 'Sprint result',
      value: 2,
      page: RetrospectiveMeetingPage.SprintResult
    },
    {
      title: 'Medals',
      value: 3,
      page: RetrospectiveMeetingPage.MedalCeremony
    },
    {
      title: 'Activities',
      value: 4,
      page: RetrospectiveMeetingPage.Games
    },
  ]
  // add game steps
})

const currentPage = computed(() => retrospectiveMeeting.value?.currentPage ?? RetrospectiveMeetingPage.Information)

const currentPageNumber = computed(() => {
  return retrospectiveSteps.value
    .find(step => step.page === currentPage.value)?.value ?? 1
})

function updatePage(newValue: number) {
  const pageNormalized = Math.min(Math.max(1, newValue), retrospectiveSteps.value.length)
  const newPage = retrospectiveSteps.value
      .find(step => step.value === pageNormalized)?.page
    ?? RetrospectiveMeetingPage.Information

  changePage(newPage).catch(useErrorManager().catchError)
}

const meetingBase = computed(() => useFragment(meetingFragment, retrospectiveMeeting.value) || null)

const isMeetingLeader = computed(() => {
  return meetingBase.value?.attendees
    ?.filter(attendee => attendee.role === MeetingRole.MeetingLeader)
    ?.find(attendee => attendee.user.id === useGlobalUserService().currentGlobalUser.value?.id) != null
})

const nextDisabled = ref(false)
const previousDisabled = ref(false)

const stepperDisabled = computed(() => {
  const prevIsDisabled = currentPageNumber.value === 1 || previousDisabled.value
  const nextIsDisabled = currentPageNumber.value === retrospectiveSteps.value.length || nextDisabled.value

  return nextIsDisabled && prevIsDisabled
    ? true
    : (nextIsDisabled ? 'next' : (prevIsDisabled ? 'prev' : false))
})

</script>

<template>
  <div class="pa-5">
    <div v-if="!(meetingBase?.active ?? false)">
      <v-card class="pa-3">
        <h3>Meeting finished! 🎉</h3>
      </v-card>

    </div>

    <v-stepper
      v-else
      :items="retrospectiveSteps"
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
          <p class="text-h6">Welcome to the retrospective meeting!</p>
          <v-spacer class="my-5" />

          <p>The meeting will start soon...</p>

        </div>
      </template>

      <!--suppress VueUnrecognizedSlot -->
      <!-- eslint-disable-next-line -->
      <template #item.2>

        <sprint-result-view />

      </template>

      <!--suppress VueUnrecognizedSlot -->
      <!-- eslint-disable-next-line -->
      <template #item.3>
        <medal-view />
      </template>

      <!--suppress VueUnrecognizedSlot -->
      <!-- eslint-disable-next-line -->
      <template #item.4>
        <sprint-activity-view />
      </template>


      <template #actions>
        <v-stepper-actions
          :disabled="stepperDisabled"
          @click:next="updatePage(currentPageNumber + 1)"
          @click:prev="updatePage(currentPageNumber - 1)"
        />
      </template>
    </v-stepper>

    <meeting-attendee-card :meeting="meetingBase" :meeting-type="MeetingType.Retrospective" />
  </div>
</template>

<style scoped>

</style>
