<script setup lang="ts">
import { useIssueService } from '@/service/issue-service'
import { type DefinitionOfDoneConfirmState, type Exact, type IssueState, IssueStateType } from '@/gql/graphql'
import IssueBoardColumn from '@/views/IssueBoardView/IssueBoardColumn.vue'
import ConfirmMoveIssueOutOfSprintDialog from '@/components/dialog/board/ConfirmMoveIssueOutOfSprintDialog.vue'
import { computed, onMounted, ref, watch } from 'vue'
import ConfirmMoveIssueIntoSprintDialog from '@/components/dialog/board/ConfirmMoveIssueIntoSprintDialog.vue'
import ConfirmReopenIssueDialog from '@/components/dialog/board/ConfirmReopenIssueDialog.vue'
import DefinitionOfDoneDialog from '@/components/dialog/board/DefinitionOfDoneDialog.vue'
import { useGlobalUserService } from '@/service/global-user-service'
import MoveIntoProgressWithoutAssigneeDialog from '@/components/dialog/board/MoveIntoProgressWithoutAssigneeDialog.vue'
import {
  isMovedIntoSprint,
  isMovedOutOfSprint,
  isMovedToDone,
  isMovedToInProgress,
  isReopened
} from '@/utils/state-utils'
import { useMagicKeys } from '@vueuse/core'
import { useAppTitle } from '@/stores/app-title'
import NewIssueDialog from '@/components/dialog/issue/NewIssueDialog.vue'
import { useNewIssueDialog } from '@/components/dialog/issue/new-issue-dialog-controller'
import { useGlobalLoading } from '@/utils/use-global-loading'

const { issueBoard, loading, changeState, finishIssue, assignIssue } = useIssueService()
useGlobalLoading().watchLoading(loading)
const { openNewIssueDialog } = useNewIssueDialog()

useAppTitle().setAppTitle('Issue Board')

// filtering
const mode = ref<0 | 1>(0) // 0 = all issues, 1 = my issues
const searchString = ref<string | null>('')
const issueFilter = computed(() => ({
  assigneeId: mode.value === 1 ? useGlobalUserService().currentGlobalUser?.value?.id : null,
  searchString: searchString.value ?? ''
}))

enum VisibleDialog {
  ConfirmMoveIssueOutOfSprint = 'confirmMoveIssueOutOfSprint',
  ConfirmMoveIssueIntoSprint = 'confirmMoveIssueIntoSprint',
  ConfirmReopenIssue = 'confirmReopenIssue',
  DefinitionOfDone = 'definitionOfDone',
  MoveIntoProgressWithoutAssignee = 'moveIntoProgressWithoutAssignee'
}

const visibleDialog = ref<VisibleDialog | null>(null)

function onIssueDropped(issueId: string, from: IssueState, to: IssueState) {
  if (from.name === to.name) return

  issueToConfirm.value = issueId
  issueStateToConfirm.value = to.name

  if (isMovedToDone(from, to)) {
    visibleDialog.value = VisibleDialog.DefinitionOfDone
  } else if (isMovedIntoSprint(from, to)) {
    visibleDialog.value = VisibleDialog.ConfirmMoveIssueIntoSprint
  } else if (isMovedOutOfSprint(from, to)) {
    visibleDialog.value = VisibleDialog.ConfirmMoveIssueOutOfSprint
  } else if (isReopened(from, to)) {
    visibleDialog.value = VisibleDialog.ConfirmReopenIssue
  } else if (isMovedToInProgress(from, to)) {
    showMoveToInProgressDialogIfNecessary(issueId)
  } else {
    onConfirmStateChange() // no dialog needed
  }
}

const issueToConfirm = ref<string | null>(null)
const issueStateToConfirm = ref<string | null>(null)

function onConfirmDone(confirmStates: Exact<DefinitionOfDoneConfirmState>[]) {
  if (!issueToConfirm.value || !issueStateToConfirm.value) return

  finishIssue(issueToConfirm.value, issueStateToConfirm.value, confirmStates)

  onCancelStateChange()
}

function onConfirmStateChange() {
  if (!issueToConfirm.value || !issueStateToConfirm.value) return

  changeState(issueToConfirm.value, issueStateToConfirm.value)

  onCancelStateChange()
}

function onCancelStateChange() {
  visibleDialog.value = null

  issueToConfirm.value = null
  issueStateToConfirm.value = null
}

const issuesOfUser = computed(() => issueBoard?.value?.states
  .filter(state => state.state.type === IssueStateType.InProgress)
  .flatMap(state => state.issues)
  .filter(issue => issue.assignees.some(assignee => assignee?.user.id === useGlobalUserService().currentGlobalUser?.value?.id)
    && issue.assignees.length === 1))

function showMoveToInProgressDialogIfNecessary(issueId: string) {
  const issue = getIssueById(issueId)
  if ((issue?.assignees?.length ?? 0) > 0) {
    onConfirmStateChange() // no dialog needed
  } else {
    visibleDialog.value = VisibleDialog.MoveIntoProgressWithoutAssignee
  }
}

function onConfirmAssignToIssue() {
  const userId = useGlobalUserService().currentGlobalUser?.value?.id
  if (userId && issueToConfirm.value) {
    assignIssue(issueToConfirm.value, userId)
  }
  onConfirmStateChange()
}

function getIssueById(issueId: string) {
  return issueBoard?.value?.states
    .flatMap(state => state.issues)
    .find(issue => issue.id === issueId)
}

const searchField = ref<HTMLInputElement | null>(null)

// focus on search field on ctrl+f
const { Ctrl_F } = useMagicKeys()
watch(Ctrl_F, () => {
  searchField.value?.focus()
})

// prevent the browser from opening the search dialog
document.addEventListener('keydown', (event) => {
  if (event.key === 'f' && event.ctrlKey) {
    event.preventDefault()
  }
})

// make scrollable horizontally
const scrollContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  scrollContainer.value?.addEventListener('wheel', (event) => {
    event.preventDefault()
    if (scrollContainer.value) {
      // noinspection JSSuspiciousNameCombination
      scrollContainer.value.scrollLeft += event.deltaY
    }
  }, { passive: false })
})

</script>

<template>
  <div class="d-flex flex-column h-100">

    <div class="d-flex flex-row align-center justify-space-between">
      <div class="px-3 py-2" style="min-width: 400px">
        <v-text-field
          ref="searchField"
          v-model="searchString"
          label="Search"
          placeholder="Search for issues"
          variant="underlined"
          density="compact"
          clearable
          hide-details
          append-icon="mdi-magnify"
        />
      </div>

      <v-btn-toggle class="d-flex flex-row justify-center py-2" v-model="mode" variant="outlined">
        <v-btn width="300">
          All issues
        </v-btn>
        <v-btn width="300">
          My issues
        </v-btn>
      </v-btn-toggle>

      <div class="mr-3">
        <v-btn prepend-icon="mdi-plus" @click="openNewIssueDialog" variant="flat">
          New Issue
        </v-btn>
      </div>
    </div>
    <div class="d-flex flex-row overflow-x-auto h-100" ref="scrollContainer">
      <div v-for="boardState in issueBoard?.states"
           :key="boardState.state.name"
           class="flex-grow-1">
        <div class="pa-2" style="height: 100%">
          <issue-board-column :state="boardState.state"
                              :issues="boardState.issues"
                              :issue-filter="issueFilter"
                              @issue-dropped="onIssueDropped" />
        </div>
      </div>
    </div>

    <!-- Dialogs -->
    <new-issue-dialog />
    <confirm-move-issue-out-of-sprint-dialog
      :visible="visibleDialog === VisibleDialog.ConfirmMoveIssueOutOfSprint"
      @confirm="onConfirmStateChange"
      @cancel="onCancelStateChange" />
    <confirm-move-issue-into-sprint-dialog
      :visible="visibleDialog === VisibleDialog.ConfirmMoveIssueIntoSprint"
      @confirm="onConfirmStateChange"
      @cancel="onCancelStateChange" />
    <confirm-reopen-issue-dialog
      :visible="visibleDialog === VisibleDialog.ConfirmReopenIssue"
      @confirm="onConfirmStateChange"
      @cancel="onCancelStateChange" />
    <definition-of-done-dialog
      :visible="visibleDialog === VisibleDialog.DefinitionOfDone"
      :issue-id="issueToConfirm"
      @cancel="onCancelStateChange"
      @confirm="onConfirmDone" />
    <move-into-progress-without-assignee-dialog
      :visible="visibleDialog === VisibleDialog.MoveIntoProgressWithoutAssignee"
      :issues-of-user="issuesOfUser ?? []"
      @yes="onConfirmAssignToIssue"
      @no="onConfirmStateChange" />
  </div>

</template>

<style scoped></style>
