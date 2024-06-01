<script setup lang="ts">

import { issueBaseFragment, useIssueService } from '@/service/issue-service'
import { computed } from 'vue'
import { useFragment } from '@/gql'
import { useAppTitle } from '@/stores/app-title'
import { watchImmediate } from '@vueuse/core'
import IssuePage from '@/components/issue/IssuePage.vue'

const props = defineProps<{
  issueId: string
}>()

const { issue, issueId: issueIdRef, loading } = useIssueService()

watchImmediate(() => props.issueId, () => {
  issueIdRef.value = props.issueId
})

const { appTitle } = useAppTitle()
appTitle.value = 'Issue'

const issueBase = computed(() => useFragment(issueBaseFragment, issue.value))

watchImmediate(() => issueBase.value?.title, issueTitle => {
  appTitle.value = issueTitle ?? 'Issue'
})
</script>

<template>

  <issue-page class="pa-3 h-100" :issue="issue" :loading="loading" :show-events="true" />

</template>

<style scoped>

</style>
