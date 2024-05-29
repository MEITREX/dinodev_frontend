<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { type DefaultPlanningMeetingFragment, IssueStateType } from '@/gql/graphql'
import { usePlanningMeetingService } from '@/service/planning-meeting-service'
import { useIssueService } from '@/service/issue-service'
import IssueCard from '@/components/issue/IssueCard.vue'
import { useSprintService } from '@/service/sprint-service'
import HoldToConfirm from '@/components/HoldToConfirm.vue'

const props = defineProps<{
  sprintGoalVoting: DefaultPlanningMeetingFragment['sprintGoalVoting'] | null
  isMeetingLeader: boolean
}>()

const { addSprintIssue, removeSprintIssue, finishMeeting } = usePlanningMeetingService()

const { issueBoard } = useIssueService()

const { previousSprint } = useSprintService()

const backlogIssues = computed(() => issueBoard.value?.states
  .filter(boardState => boardState.state.type === IssueStateType.Backlog)
  .flatMap(boardState => boardState.issues ?? []) ?? [])

const sprintGoal = computed(() => backlogIssues.value
  .filter(issue => props.sprintGoalVoting?.sprintIssueIds?.includes(issue.id)))

const nonSprintGoal = computed(() => backlogIssues.value
  .filter(issue => !props.sprintGoalVoting?.sprintIssueIds?.includes(issue.id)))

const sprintGoalStoryPoints = computed(() =>
  sprintGoal.value.reduce((total, issue) => total + (issue?.storyPoints ?? 0), 0))

const dragStart = (event: DragEvent, issueId: string) => {
  event.dataTransfer?.setData('issueId', issueId)
}

function dropBacklogIssue(event: DragEvent) {
  const issueId = event.dataTransfer?.getData('issueId')
  if (issueId) {
    removeSprintIssue(issueId).then()
  }
}

function dropSprintIssue(event: DragEvent) {
  const issueId = event.dataTransfer?.getData('issueId')
  if (issueId) {
    addSprintIssue(issueId).then()
  }
}

const completedSpLastSprint = computed(() => {
  return previousSprint.value?.stats.totalStoryPoints ?? 0
})

const progressBarMax = computed(() => {
  return Math.max(sprintGoalStoryPoints.value, completedSpLastSprint.value) + 10 // add some space
})

const goldChallengeActive = computed(() => {
  return sprintGoalStoryPoints.value > completedSpLastSprint.value
})

onMounted(() => {
  useIssueService().boardQuery.refetch()
})
</script>

<template>
  <div class="pa-1">
    <h3>
      Sprint goal
    </h3>

    <h4>Backlog issues</h4>
    <v-sheet
      class="ma-1 pa-3 rounded"
      color="grey-lighten-3"
      min-height="200px"
      @dragover.prevent
      @drop="(e: DragEvent) => dropBacklogIssue(e)"
    >
      <div class="d-flex flex-wrap ga-3">
        <issue-card
          v-for="issue in nonSprintGoal"
          :key="issue.id"
          :issue="issue"
          draggable="true"
          @dragstart="(e: DragEvent) => dragStart(e, issue.id)"
        />
      </div>
    </v-sheet>

    <h4>Sprint goal</h4>
    <v-sheet
      class="ma-1 pa-0 rounded"
      color="grey-lighten-3"
      min-height="200px"
      @dragover.prevent
      @drop="(e: DragEvent) => dropSprintIssue(e)"
    >
      <div class="d-flex flex-wrap ga-3 pa-3">
        <issue-card
          v-for="issue in sprintGoal"
          :key="issue.id"
          :issue="issue"
          draggable="true"
          @dragstart="(e: DragEvent) => dragStart(e, issue.id)"
        />
      </div>

      <div v-if="sprintGoal.length === 0" class="d-flex justify-center text-grey align-center w-100">
        Drop issues here that you want to do in the next sprint
      </div>
    </v-sheet>

    <h4 class="my-3">
      Story points
    </h4>
    <v-progress-linear
      class=""
      height="30"
      :color="!goldChallengeActive ? 'grey-darken-1' : 'success'"
      :model-value="sprintGoalStoryPoints"
      :buffer-value="completedSpLastSprint"
      buffer-color="yellow-darken-1"
      buffer-opacity="0.3"
      :max="progressBarMax"
      active
      rounded
    >
      Total: {{ sprintGoalStoryPoints }} SP
    </v-progress-linear>

    <h4 class="my-3">
      Gold Challenge 🏆
    </h4>
    <v-card class="ma-1 pa-3">
      <div class="d-flex flex-row ga-3  align-center">
        <v-icon
          class="mx-1"
          :size="55"
          :color="goldChallengeActive ? 'yellow-darken-1' : 'grey-lighten-1'"
        >
          mdi-trophy
        </v-icon>

        <div class="d-flex flex-column justify-center">
          <div>
            The gold challenge is active if the sprint goal has more story points than you completed in the last sprint.
          </div>
          <div>
            <span v-if="goldChallengeActive" class="text-success">Gold challenge active!</span>
            <span v-else class="text-error">
            You need {{ completedSpLastSprint - sprintGoalStoryPoints + 1 }} more story points to reach the gold challenge.
          </span>
          </div>
          <div>
            <strong>Reward:</strong>
            <span>
            Unlocks a new dinosaur species and a trophy for this sprint!
          </span>
          </div>
        </div>
      </div>


    </v-card>

    <div class="d-flex flex-row-reverse mt-5 mb-3 mx-1">
      <hold-to-confirm @confirm="finishMeeting">
        <v-btn
          v-if="isMeetingLeader"
          size="large"
          prepend-icon="mdi-check"
        >
          Set goal and finish meeting
        </v-btn>
      </hold-to-confirm>
    </div>
  </div>
</template>

<style scoped>

</style>
