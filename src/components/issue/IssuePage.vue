<script setup lang="ts">
import MarkdownTextCard from '@/components/MarkdownTextCard.vue'
import EventList from '@/components/event/EventList.vue'
import IssueTypeIcon from '@/components/issue/IssueTypeIcon.vue'
import { issueBaseFragment, useIssueService } from '@/service/issue-service'
import { computed } from 'vue'
import { useFragment } from '@/gql'
import { IssuePriority, type IssueWithEventsFragment } from '@/gql/graphql'
import GropiusIcon from '@/assets/GropiusIcon.vue'
import { eventWithChildrenFragment, useEventService } from '@/service/event-service'
import IssuePriorityIcon from '@/components/issue/IssuePriorityIcon.vue'

const props = defineProps<{
  issue: IssueWithEventsFragment | null
  loading: boolean
  showEvents: boolean
}>()

const issueBase = computed(() => useFragment(issueBaseFragment, props.issue))

// reverse events -> show oldest at the top like in Gropius
const eventsReversed = computed(() => props.issue?.issueEvents?.slice().reverse() ?? [])

const { likeEvent, loading: eventsLoading } = useEventService()

const { commentOnIssue } = useIssueService()
</script>

<template>
  <div class="d-flex flex-row w-100">
    <div class="w-75" v-if="loading || issue !== null">

      <div v-if="loading">
        <v-skeleton-loader type="heading"></v-skeleton-loader>
        <v-skeleton-loader type="subtitle"></v-skeleton-loader>
        <v-skeleton-loader type="text"></v-skeleton-loader>
      </div>

      <div class="d-flex flex-row justify-space-between align-center">
        <div class="d-flex flex-row align-center" v-if="!loading">
          <issue-type-icon :type="issueBase?.type ?? {}" height="50" />
          <span class="text-h4">&centerdot;</span>
          <issue-priority-icon :priority="issueBase?.priority ?? IssuePriority.Medium" :size="50" />
          <span class="text-h4 mr-3">&centerdot;</span>
          <p class="text-h4">{{ issueBase?.title }}</p>
        </div>

        <div v-else>
          <v-skeleton-loader type="heading" />
          <v-skeleton-loader type="subtitle" />
        </div>

        <v-btn v-if="!loading && issueBase" :href="issueBase.issueUrl" target="_blank">
          <gropius-icon />
        </v-btn>
      </div>

      <!-- assignees -->
      <div class="d-flex flex-row ga-2 flex-wrap my-1">
        <div v-for="assignee in issueBase?.assignees ?? []" :key="assignee?.user.id">
          <v-chip v-if="assignee"
                  :prepend-avatar="assignee?.user.avatar ?? ''"
                  color="grey">
            {{ assignee?.user.username }}
          </v-chip>
        </div>
      </div>

      <!-- labels -->
      <div class="d-flex flex-row ga-2 flex-wrap my-1">
        <div v-for="label in issueBase?.labels ?? []" :key="label">
          <v-chip v-if="label" color="success">
            {{ label }}
          </v-chip>
        </div>
      </div>

      <!-- description -->
      <markdown-text-card
        v-if="!loading"
        class="mt-3"
        :markdown-text="issueBase?.description ?? ''" />

      <div v-if="showEvents">
        <event-list
          v-if="!loading && showEvents"
          :show-comment-button="true"
          :show-comment-block="true"
          :show-issue-information="false"
          :events="useFragment(eventWithChildrenFragment, eventsReversed)"
          :post-comment-loading="eventsLoading"
          @like-event="eventId => likeEvent(eventId).then()"
          :events-loading="loading"
          @post-comment="(comment, parentEvent) => commentOnIssue(issueBase!!.id, comment, parentEvent?.id)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
