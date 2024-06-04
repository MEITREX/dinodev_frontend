<script setup lang="ts">

import SprintStats from '@/components/SprintStats.vue'
import { computed, onMounted, ref, watch } from 'vue'
import MeetingView from '@/views/MeetingView/MeetingView.vue'
import { MeetingRole, MeetingType, type ProjectBoardFragment } from '@/gql/graphql'
import { useStandupMeetingService } from '@/service/standup-meeting-service'
import { useFragment } from '@/gql'
import { meetingFragment } from '@/service/meeting-service'
import { useGlobalUserService } from '@/service/global-user-service'
import { useIssueService } from '@/service/issue-service'
import IssueCard from '@/components/issue/IssueCard.vue'
import { useEventService } from '@/service/event-service'
import { computedAsync } from '@vueuse/core'
import EventList from '@/components/event/EventList.vue'
import { useAppTitle } from '@/stores/app-title'
import { getEmojisForStateType } from '@/utils/emojis'
import router from '@/router'
import { routes } from '@/router/routes'
import { useAppStore } from '@/stores/app-store'
import CountdownDisplay from '@/components/CountdownDisplay.vue'
import { isPresent } from '@/utils/types'

const { standupMeeting, startStandupMeeting, changeCurrentAttendee, finishMeeting } = useStandupMeetingService()
const { issueBoard } = useIssueService()
const { fetchEventsOfUser, eventsOfUserLazyQuery } = useEventService()
const { setAppTitle } = useAppTitle()

onMounted(() => {
  setAppTitle('Standup Meeting')
})

const baseMeeting = computed(() => useFragment(meetingFragment, standupMeeting.value) || null)

const meetingStarted = computed(() => (standupMeeting.value?.currentAttendee != null))

const meetingFinished = computed(() => baseMeeting.value?.active === false)

const isMeetingLeader = computed(() => {
  return baseMeeting.value?.attendees
    ?.filter(attendee => attendee.role === MeetingRole.MeetingLeader)
    ?.find(attendee => attendee.user.id === useGlobalUserService().currentGlobalUser.value?.id) != null
})

const selected = computed(() => {
  return (standupMeeting.value?.order
    ?.findIndex(attendee => attendee.user.id === currentAttendee.value?.user.id) ?? 10) + 1
})

const currentAttendee = computed(() => {
  return standupMeeting.value?.currentAttendee
})

const countdownSetting = computed(() => standupMeeting.value?.standupMeetingSettings.countdownPerAttendee)
const currentCountdownSeconds = ref(countdownSetting.value ?? 0)
const countdownActive = ref(false)

watch(() => currentAttendee.value, () => {
  currentCountdownSeconds.value = countdownSetting.value ?? 0

  if (currentCountdownSeconds.value > 0 && !countdownActive.value) {
    countdownActive.value = true
    const interval = setInterval(() => {
      currentCountdownSeconds.value--
      if (currentCountdownSeconds.value <= 0) {
        clearInterval(interval)
        countdownActive.value = false
      }
    }, 1000)
  }
})

function getIssuesOfCurrentAttendee(state: ProjectBoardFragment['states'][0]) {
  return state.issues.filter(i => i.assignees.some(a => a?.user.id === currentAttendee.value?.user.id))
}

const eventsOfUser = computedAsync(() => {
  if (!currentAttendee.value) return Promise.resolve([])
  return fetchEventsOfUser(currentAttendee.value?.user.id ?? '')
})

function next() {
  if (standupMeeting.value?.order.length === selected.value) {
    finishMeeting()
  } else {
    const nextAttendee = standupMeeting.value?.order[selected.value]
    if (nextAttendee) changeCurrentAttendee(nextAttendee.user.id)
  }
}

function previous() {
  if (selected.value > 1) {
    const previousAttendee = standupMeeting.value?.order[selected.value - 2]
    if (previousAttendee) changeCurrentAttendee(previousAttendee.user.id)
  }
}

function youAreNext() {
  return currentAttendee.value?.user.id === useGlobalUserService().currentGlobalUser.value?.id
}

</script>

<template>
  <meeting-view :meeting-type="MeetingType.Standup" :meeting="baseMeeting" class="pa-5">

    <sprint-stats v-if="!meetingStarted" class="w-100"/>

    <p v-if="!meetingStarted && isMeetingLeader" class="my-5">
      Hint: Wait for all participants to join the meeting before starting.
    </p>

    <v-btn
      v-if="!meetingStarted && isMeetingLeader"
      @click="() => startStandupMeeting()"
    >
      Start standup
    </v-btn>

    <div v-if="meetingStarted && !meetingFinished" class="w-100 py-3">
      <v-stepper :model-value="selected" non-linear>
        <v-stepper-header>
          <template
            v-for="(attendee, index) of standupMeeting?.order" :key="attendee.user.id">
            <v-stepper-item
              :title="attendee.user.username"
              :value="index + 1">

            </v-stepper-item>
            <v-divider />
          </template>

        </v-stepper-header>

        <v-stepper-window>
          <div class="d-flex flex-row justify-space-between mb-4 pa-1">
            <div class="d-flex flex-row align-end">
              <v-avatar :image="currentAttendee?.user.avatar ?? undefined" size="40" class="mr-5" />
              <p class="text-sm-h4"> {{ currentAttendee?.user.username }}</p>
              <countdown-display
                class="ml-5 text-sm-h5"
                v-if="isPresent(countdownSetting)"
                :current-countdown-seconds="currentCountdownSeconds" />
            </div>

            <div class="d-flex flex-row ga-2">
              <v-btn
                size="large"
                @click="previous"
                width="160"
                prepend-icon="mdi-arrow-left"
                :disabled="selected === 1"
                v-if="isMeetingLeader"
              >
                Previous
              </v-btn>
              <v-btn
                v-if="isMeetingLeader || youAreNext()"
                width="160"
                prepend-icon="mdi-arrow-right"
                size="large"
                @click="next">
                {{ standupMeeting?.order.length === selected ? 'Finish' : 'Next' }}
              </v-btn>

            </div>
          </div>

          <v-row>
            <v-col cols="7" class="mr-5">
              <v-card class="pa-3 ma-2">
                <h2 class="text-sm-h5 mb-1">
                  Recent activity
                </h2>
                <event-list
                  :events-loading="eventsOfUserLazyQuery.loading.value ?? false"
                  :post-comment-loading="false"
                  :show-issue-information="true"
                  :show-comment-button="false"
                  :show-comment-block="false"
                  :events="eventsOfUser">

                </event-list>
              </v-card>
            </v-col>
            <v-col class="pa-1">
              <v-card class="pa-3 ma-2 w-100">
                <h2 class="text-sm-h5 mb-1">
                  Issues assigned to {{ currentAttendee?.user.username }}
                </h2>
                <div v-for="state in issueBoard?.states" :key="state.state.name">
                  <div v-if="getIssuesOfCurrentAttendee(state).length > 0">
                    <h3 class="text-sm-body-1 py-3">
                      {{ getEmojisForStateType(state.state.type) + ' ' + state.state.name }}
                    </h3>
                    <div class="d-flex flex-row flex-wrap ga-2">
                      <div
                        v-for="issue in getIssuesOfCurrentAttendee(state)"
                        :key="issue.id">
                        <issue-card
                          :issue="issue"
                          @click="() => router.push(routes.project(useAppStore().getProjectIdOrThrow()).issue(issue.id))"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-stepper-window>
      </v-stepper>
    </div>

    <div v-if="meetingFinished" class="w-100">
      <v-card class="pa-3 w-100">
        <h2 class="text-sm-h5 mb-1">
          Meeting finished! 🎉
        </h2>
        <p>
          Thank you for participating in the standup meeting!
        </p>
      </v-card>
    </div>
  </meeting-view>
</template>

<style scoped>

</style>
