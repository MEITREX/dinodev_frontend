<script setup lang="ts">
import { type IssueBaseFragment, IssuePriority, type IssueState } from '@/gql/graphql'
import { computed, ref } from 'vue'
import { useDropZone } from '@vueuse/core'
import IssueCard from '@/components/issue/IssueCard.vue'
import { useAppStore } from '@/stores/app-store'
import router from '@/router'
import { routes } from '@/router/routes'
import { getEmojisForStateType } from '@/utils/emojis'

const props = defineProps<{
  state: IssueState,
  issues: Array<IssueBaseFragment>,
  issueFilter: { assigneeId: string | null, searchString: string }
}>()

const emit = defineEmits<{
  (e: 'issueDropped', issueId: string, from: IssueState, to: IssueState): void
}>()

const filteredIssues = computed(() => {
  return props.issues
    .filter(issue => props.issueFilter.assigneeId === null
      || issue.assignees.some(assignee => assignee?.user.id === props.issueFilter.assigneeId))
    .filter(issue => issue.title.toLowerCase().includes(props.issueFilter.searchString?.toLowerCase()))
})

const priorities = Object.values(IssuePriority)
const sortedIssues = computed(() => {
  const issues = [...filteredIssues.value]
  return issues?.sort((a, b) => priorities.indexOf(a.priority) - priorities.indexOf(b.priority))
})

const columnRef = ref<HTMLElement | null>(null)
useDropZone(columnRef, {
  dataTypes: ['issueDropRequest'],
  onDrop: (_, e) => onDrop(e)
})

// type to define the data that is being dragged
type IssueDropRequest = {
  id: string
  from: IssueState
}

function dragStart(event: DragEvent, issueDropRequest: IssueDropRequest) {
  event.dataTransfer?.setData('issueDropRequest', JSON.stringify(issueDropRequest))
}

function onDrop(event: DragEvent) {
  const eventData = event.dataTransfer?.getData('issueDropRequest') || 'null'
  const issueDropRequest = JSON.parse(eventData) as IssueDropRequest | null
  if (!issueDropRequest) return

  emit('issueDropped', issueDropRequest.id, issueDropRequest.from, props.state)
}

const emoji = computed(() => getEmojisForStateType(props.state.type))

function openIssue(issue: IssueBaseFragment) {
  const projectId = useAppStore().getProjectIdOrThrow()
  router.push(routes.project(projectId).issue(issue.id))
}
</script>

<template>
  <div
    class="h-100 pa-2 boardColumn elevation-1"
    @dragover.prevent
    ref="columnRef"
  >
    <div class="issueHeader">
      <span class="px-1">
        {{ emoji }}
      </span>
      {{ state.name }}
    </div>

    <v-divider class="my-1 w-100" />

    <div v-for="issue in sortedIssues" :key="issue.id" class="py-2">
      <issue-card
        :issue="issue"
        @dragstart="(event: DragEvent) => dragStart(event, { id: issue.id, from: state })"
        @click="() => openIssue(issue)"
      />
    </div>
  </div>
</template>

<style scoped>
.issueHeader {
  font-size: 1.1rem;
  font-weight: normal;
  text-align: center;
  border-radius: 0.5rem;
}
.boardColumn {
  overflow-y: auto;
  min-width: 300px;
  max-width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
