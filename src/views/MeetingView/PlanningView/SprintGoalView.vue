<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { type DefaultPlanningMeetingFragment, IssueStateType } from '@/gql/graphql'
import { usePlanningMeetingService } from '@/service/planning-meeting-service'
import { useIssueService } from '@/service/issue-service'
import IssueCard from '@/components/issue/IssueCard.vue'
import { useSprintService } from '@/service/sprint-service'
import HoldToConfirm from '@/components/HoldToConfirm.vue'
import { isPresent } from '@/utils/types'
import { useUserInProjectService } from '@/service/user-in-project-service'

const props = defineProps<{
  sprintGoalVoting: DefaultPlanningMeetingFragment['sprintGoalVoting'] | null
  isMeetingLeader: boolean
}>()

const { addSprintIssue, removeSprintIssue, finishMeeting } = usePlanningMeetingService()
const { issueBoard } = useIssueService()
const { previousSprint } = useSprintService()
const { allUsers } = useUserInProjectService()

const backlogIssues = computed(() => issueBoard.value?.states
  .filter(boardState => boardState.state.type !== IssueStateType.Done && boardState.state.type !== IssueStateType.DoneSprint)
  .flatMap(boardState => boardState.issues ?? []) ?? [])

const sprintGoal = computed(() => backlogIssues.value
  .filter(issue => props.sprintGoalVoting?.sprintIssueIds?.includes(issue.id)))

const nonSprintGoal = computed(() => backlogIssues.value
  .filter(issue => !isPresent(issue.sprintNumber) || issue.sprintNumber > (previousSprint.value?.number ?? 0))
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

const plannedLastSprint = computed(() => {
  return previousSprint.value?.storyPointsPlanned
})

const goldChallengeMinimum = computed(() => {
  if (!plannedLastSprint.value) {
    return completedSpLastSprint.value
  }
  return Math.min(completedSpLastSprint.value, plannedLastSprint.value)
})

const progressBarMax = computed(() => {
  return Math.max(sprintGoalStoryPoints.value, goldChallengeMinimum.value) + 10 // add some space
})

const goldChallengeActive = computed(() => {
  return sprintGoalStoryPoints.value > goldChallengeMinimum.value
})

onMounted(() => {
  useIssueService().boardQuery.refetch()
})

function getSpForUser(userInProject: { user: { id: string } }) {
  return sprintGoal.value.reduce((total, issue) => {
    if (issue.assignees?.find(assignee => assignee?.user.id === userInProject.user.id)) {
      return total + ((issue?.storyPoints ?? 0) / issue.assignees.length)
    }
    return total
  }, 0)
}
</script>

<template>
  <div class="pa-1">
    <h3>
      Sprint goal
    </h3>

    <h4 class="my-3">
      Gold Challenge 🏆
    </h4>
    <v-card class="ma-1 pa-3">
      <div class="d-flex flex-row ga-3 align-center">
        <v-icon
          class="mx-1"
          :size="55"
          :color="goldChallengeActive ? 'yellow-darken-1' : 'grey-lighten-1'"
        >
          mdi-trophy
        </v-icon>

        <div class="d-flex flex-column justify-center">
          <div>
            The gold challenge is active if the sprint goal has more story points than you completed in the last sprint
            (but never more than you planned last sprint).
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

    <h4 class="my-3">
      Story points
    </h4>
    <v-progress-linear
      class=""
      height="30"
      :color="!goldChallengeActive ? 'grey-darken-1' : 'success'"
      :model-value="sprintGoalStoryPoints"
      :buffer-value="goldChallengeMinimum"
      buffer-color="yellow-darken-1"
      buffer-opacity="0.3"
      :max="progressBarMax"
      active
      rounded
    >
      Total: {{ sprintGoalStoryPoints }} SP
    </v-progress-linear>

    <v-row class="mt-3">
      <v-col>
        <h4>Backlog issues</h4>
        <v-sheet
          class="ma-1 pa-3 rounded h-100"
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
      </v-col>

      <v-col>
        <h4>Sprint goal</h4>
        <v-sheet
          class="ma-1 pa-3 rounded h-100"
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
      </v-col>
    </v-row>

    <div class="d-flex flex-row justify-space-between align-center mt-10 mb-3 mx-1">
      <div class="d-flex flex-wrap ga-2">
        <v-chip
          v-for="userInProject in allUsers"
          :key="userInProject.user.id"
          :prepend-avatar="userInProject.user.avatar ?? 'mdi-account'"
        >
          {{ userInProject.user.username }}: {{ getSpForUser(userInProject)}} SP
        </v-chip>
      </div>

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
