<script setup lang="ts">

import { computed, ref, watch } from 'vue'
import type { DefaultPlanningMeetingFragment, IssueBaseFragment } from '@/gql/graphql'
import { IssueStateType, TShirtSizeEstimation } from '@/gql/graphql'
import { usePlanningMeetingService } from '@/service/planning-meeting-service'
import { useIssueService } from '@/service/issue-service'
import IssuePage from '@/components/issue/IssuePage.vue'
import { watchImmediate } from '@vueuse/core'
import IssueCard from '@/components/issue/IssueCard.vue'
import { isPresent } from '@/utils/types'
import IssueEstimationItem from '@/components/issue/IssueEstimationItem.vue'
import CountdownDisplay from '@/components/CountdownDisplay.vue'

const props = defineProps<{
  issueEstimation: DefaultPlanningMeetingFragment['issueEstimation'] | null
  isMeetingLeader: boolean
  attendeesCount: number
}>()

const estimationOptions = computed(() => ([
  {
    label: TShirtSizeEstimation.Xs,
    storyPoints: 1,
    icon: 'mdi-ladybug',
    votes: getTotalVotes(TShirtSizeEstimation.Xs)
  },
  {
    label: TShirtSizeEstimation.S,
    storyPoints: 2,
    icon: 'mdi-apple',
    votes: getTotalVotes(TShirtSizeEstimation.S)
  },
  {
    label: TShirtSizeEstimation.M,
    storyPoints: 3,
    icon: 'mdi-food-drumstick',
    votes: getTotalVotes(TShirtSizeEstimation.M)
  },
  {
    label: TShirtSizeEstimation.L,
    storyPoints: 5,
    icon: 'mdi-food-steak',
    votes: getTotalVotes(TShirtSizeEstimation.L)
  },
  {
    label: TShirtSizeEstimation.Xl,
    storyPoints: 8,
    icon: 'mdi-food-turkey',
    votes: getTotalVotes(TShirtSizeEstimation.Xl)
  }
]))

const {
  voteEstimation, endEstimation, restartEstimation, selectIssue, setFinalResult, startCountdown
} = usePlanningMeetingService()
const { issueBoard } = useIssueService()

// issues to vote are the  issues that have no estimation yet
const backlogIssues = computed(() => issueBoard.value?.states
  .filter(state => state.state.type !== IssueStateType.Done
    && state.state.type !== IssueStateType.DoneSprint)
  .flatMap(state => state.issues ?? [])
  .filter(issue => issue.id !== props.issueEstimation?.issueId)
  .filter(issue => !isPresent(issue.effortEstimation)))

const { issue: currentIssue, loading, issueId: issueIdRef } = useIssueService()
watchImmediate(() => props.issueEstimation?.issueId, () => {
  issueIdRef.value = props.issueEstimation?.issueId || null
})

function getTotalVotes(estimationType: TShirtSizeEstimation) {
  return props.issueEstimation?.votes
    .find(state => state.votedFor === estimationType)?.totalVotes ?? 0
}

const totalVotes = computed(() => {
  return estimationOptions.value.reduce((total, option) => total + option.votes, 0)
})

function votePercentage(votes: number) {
  if (!voteSubmitted.value) {
    return 0
  }
  const total = totalVotes.value
  return total > 0 ? (votes / total) * 100 : 0
}

function shouldHighlightAsMostVoted(option: { votes: number }): boolean {
  if (!voteSubmitted.value) {
    return false // don't highlight anything if the voting is still ongoing
  }
  const maxVotes = Math.max(...estimationOptions.value.map(option => option.votes))
  return option.votes === maxVotes
}

const voteSubmitted = computed(() => props.issueEstimation?.finished ?? false)

function submitVote(TShirtSizeEstimation: TShirtSizeEstimation) {
  voteEstimation(TShirtSizeEstimation).then()
}

function onIssueClick(issue: IssueBaseFragment) {
  selectIssue(issue.id)
}

function finishEstimation() {
  endEstimation().then()
}

const selectedOption = ref<typeof estimationOptions.value[0] | null>(null)

// reset selected option when the estimation is finished
watch(() => props.issueEstimation?.finished, () => {
  selectedOption.value = null
})

const currentCountdownSeconds = ref(0)
watchImmediate(() => props.issueEstimation?.countdownSeconds, () => {
  currentCountdownSeconds.value = props.issueEstimation?.countdownSeconds ?? 0
})
watchImmediate(currentCountdownSeconds, () => {
  if (currentCountdownSeconds.value > 0) {
    setTimeout(() => {
      currentCountdownSeconds.value--
    }, 1000)
  }
})

const countdownSecondsSetting = ref(15)

const selectedFinalOption = ref<TShirtSizeEstimation>(TShirtSizeEstimation.M)
watchImmediate(() => props.issueEstimation?.finished, () => {
  selectedFinalOption.value = props.issueEstimation?.estimationStats?.median ?? TShirtSizeEstimation.M
})
</script>

<template>
  <div>
    <v-row>
      <v-col cols="3">
        <h3 class="mb-3">Upcoming Issues</h3>

        <p v-if="isMeetingLeader">
          Click on an issue to select it for estimation.
        </p>

        <div class="d-flex flex-column ga-2 pa-3">
          <issue-card
            v-for="issue in backlogIssues"
            :key="issue.id"
            :issue="issue"
            :disabled="currentIssue !== null"
            @click="i => onIssueClick(i)"
          />
        </div>
      </v-col>

      <v-col class="pa-3">
        <h3 class="mb-3">Current Issue</h3>
        <p v-if="currentIssue === null">No issue selected yet</p>
        <v-card class="mr-2" style="height: 20%; overflow: auto">
          <issue-page
            class="pa-2"
            :issue="currentIssue"
            :show-events="false"
            :loading="loading"
          />

        </v-card>
        <v-btn
          v-if="isMeetingLeader"
          class="my-2"
          :disabled="currentIssue === null || issueEstimation?.finished"
          @click="selectIssue(null)"
        >
          Unselect Issue
        </v-btn>

        <h3 class="my-3">
          Estimation
          <countdown-display
            class="mr-2"
            v-if="isPresent(issueEstimation?.countdownSeconds)"
            :current-countdown-seconds="currentCountdownSeconds" />
        </h3>

        <!-- T-Shirt sizes as cards -->
        <v-item-group selected-class="bg-grey-lighten-1" v-model="selectedOption">
          <div class="d-flex flex-row justify-space-between">
            <issue-estimation-item
              v-for="option in estimationOptions" :key="option.label"
              :disabled="!isPresent(currentIssue) || (issueEstimation?.finished ?? false)"
              :option="option"
              :shouldHighlightAsMostVoted="shouldHighlightAsMostVoted(option)"
              :votePercentage="votePercentage(option.votes)"
              @vote="() => submitVote(option.label)"
            />
          </div>

        </v-item-group>

        <div class="d-flex flex-row justify-space-between">

        </div>

        <div>
          <p>
            {{ totalVotes }} / {{ props.attendeesCount }} votes
          </p>
        </div>

        <div class="d-flex flex-row justify-space-between pa-3 ga-3 mt-6" v-if="isMeetingLeader">
          <v-btn
            :disabled="currentIssue === null || issueEstimation?.finished || totalVotes < props.attendeesCount"
            @click="finishEstimation"
          >
            Finish voting
          </v-btn>
          <v-btn
            :disabled="currentIssue === null || issueEstimation?.finished || currentCountdownSeconds > 0"
            @click="() => startCountdown(countdownSecondsSetting)"
          >
            Start countdown
          </v-btn>
          <v-slider
            :disabled="issueEstimation?.finished"
            v-model="countdownSecondsSetting"
            min="1"
            max="60"
            thumb-label="always"
            step="1"
            prepend-icon="mdi-clock"
          />
          <p>seconds</p>
        </div>
        <div class="d-flex flex-row justify-start pa-3 ga-3" v-if="isMeetingLeader">
          <v-btn
            :disabled="currentIssue === null || !issueEstimation?.finished"
            @click="restartEstimation"
          >
            Restart voting
          </v-btn>

          <v-select
            :disabled="!issueEstimation?.finished"
            :items="estimationOptions.map(option => option.label)"
            v-model="selectedFinalOption"
            label="Final result"
            density="compact"
          />
          <v-btn
            :disabled="!issueEstimation?.finished"
            @click="() => setFinalResult(selectedFinalOption)"
          >
            Confirm
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
</style>
