<script setup lang="ts">

import { useIssueService } from '@/service/issue-service'
import IssueTypeIcon from '@/components/IssueTypeIcon.vue'
import IssuePriorityIcon from '@/components/IssuePriorityIcon.vue'
import { IssuePriority } from '@/gql/graphql'
import { computed, watch } from 'vue'
import { useFragment } from '@/gql'
import EventList from '@/components/event/EventList.vue'
import MarkdownTextCard from '@/components/MarkdownTextCard.vue'
import { useAppTitle } from '@/stores/app-title'

const { issueId } = defineProps<{
  issueId: string
}>()

const { issue, issueId: issueIdRef, loading, IssueBaseFragment } = useIssueService()

// reverse events -> show oldest at the top like in Gropius
const eventsReversed = computed(() => issue.value?.issueEvents?.slice().reverse() ?? [])

watch(() => issueId, () => {
  issueIdRef.value = issueId
}, { immediate: true })

const issueBase = computed(() => useFragment(IssueBaseFragment, issue.value))

const { appTitle } = useAppTitle()
appTitle.value = 'Issue'

watch(() => issueBase.value?.title, issueTitle => {
  appTitle.value = issueTitle ?? 'Issue'
}, { immediate: true })
</script>

<template>

  <div class="pa-4 d-flex flex-row w-100">

    <div class="d-flex flex-column w-75">

      <div class="d-flex flex-row align-center" v-if="!loading">
        <v-btn variant="flat" size="50">
          <issue-type-icon :type="issueBase?.type ?? {}" style="height: 40px;" />
        </v-btn>
<!--        <span class="text-h4">&centerdot;</span>-->
<!--        <v-btn variant="flat" size="50">-->
<!--          <issue-priority-icon :priority="issueBase?.priority ?? IssuePriority.Medium" style="height: 40px;" />-->
<!--        </v-btn>-->
        <span class="text-h4 mr-3">&centerdot;</span>
        <p class="text-h4">{{ issueBase?.title }}</p>
      </div>

      <div v-else>
        <v-skeleton-loader boilerplate type="heading" />
      </div>

      <div v-for="assignee in issueBase?.assignees ?? []" :key="assignee?.user.id">
        <v-chip v-if="assignee"
                :prepend-avatar="assignee?.user.avatar ?? ''"
                color="grey">
          {{ assignee?.user.username }}
        </v-chip>
      </div>

      <markdown-text-card
        v-if="!loading"
        class="mt-3"
        :markdown-text="issueBase?.description ?? ''" />

      <v-skeleton-loader type="text" v-else />

      <event-list
        v-if="!loading"
        :show-comment-button="true"
        :show-comment-block="true"
        :show-issue-information="false"
        :events="eventsReversed" />

      <v-skeleton-loader type="list-item" v-else />

    </div>
  </div>


</template>

<style scoped>

</style>
