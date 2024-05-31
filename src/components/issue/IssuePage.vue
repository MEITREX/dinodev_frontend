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

    <div class="d-flex flex-column w-75" v-if="loading || issue !== null">

      <div class="d-flex flex-row justify-space-between align-center">
        <div class="d-flex flex-row align-center" v-if="!loading">
          <issue-type-icon :type="issueBase?.type ?? {}" height="50" />
          <span class="text-h4">&centerdot;</span>
            <issue-priority-icon :priority="issueBase?.priority ?? IssuePriority.Medium" size="50" />
          <span class="text-h4 mr-3">&centerdot;</span>
          <p class="text-h4">{{ issueBase?.title }}</p>
        </div>

        <div v-else>
          <v-skeleton-loader boilerplate type="heading" />
        </div>

        <v-btn v-if="!loading && issueBase" :href="issueBase.issueUrl" target="_blank" >
          <gropius-icon />
        </v-btn>
      </div>


      <div v-for="assignee in issueBase?.assignees ?? []" :key="assignee?.user.id">
        <v-chip v-if="assignee"
                :prepend-avatar="assignee?.user.avatar ?? ''"
                color="grey">
          {{ assignee?.user.username }}
        </v-chip>
      </div>
      <div v-for="label in issueBase?.labels ?? []" :key="label">
        <v-chip v-if="label" color="success">
          {{ label }}
        </v-chip>
      </div>

      <markdown-text-card
        v-if="!loading"
        class="mt-3"
        :markdown-text="issueBase?.description ?? ''" />

      <v-skeleton-loader type="text" v-else />

      <event-list
        v-if="!loading && showEvents"
        :show-comment-button="true"
        :show-comment-block="true"
        :show-issue-information="false"
        :events="useFragment(eventWithChildrenFragment, eventsReversed)"
        :postCommentLoading="eventsLoading"
        @like-event="eventId => { console.log('final'); likeEvent(eventId).then() }"
        @post-comment="(comment, parentEvent) => commentOnIssue(issueBase!!.id, comment, parentEvent?.id!!)"
      />

      <v-skeleton-loader type="list-item" v-else-if="showEvents" />

    </div>
  </div>
</template>

<style scoped>

</style>
