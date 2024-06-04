<script setup lang="ts">
import EventList from '@/components/event/EventList.vue'
import { useEventService } from '@/service/event-service'
import { computed } from 'vue'
import { useIssueService } from '@/service/issue-service'
import type { BaseEventFragment } from '@/gql/graphql'
import { useGlobalLoading } from '@/utils/use-global-loading'

const { events, eventQuery, likeEvent, addUserComment, eventsPageSize } = useEventService()

const { commentOnIssue, loading: issueLoading } = useIssueService()

const loading = computed(() => eventQuery.loading.value)
useGlobalLoading().watchLoading(loading)

function postComment(event: BaseEventFragment | null, comment: string) {
  if (!event) {
    addUserComment(comment)
    return
  }
  if (event.eventType.identifier === 'COMMENT_ON_ISSUE') {
    commentOnIssue(event.issueId?.value!!, comment, event.id)
  } else {
    addUserComment(comment, event.id)
  }
}

function loadMore() {
  eventsPageSize.value += 10
}
</script>

<template>
  <v-container>

    <h3>Activity</h3>
    <event-list :events-loading="loading"
                :events="events"
                :show-comment-block="true"
                :show-comment-button="true"
                :show-issue-information="true"
                :post-comment-loading="issueLoading"
                @like-event="eventId => likeEvent(eventId).then()"
                @post-comment="(comment, parentEvent) => postComment(parentEvent, comment)"
    >
      <v-btn @click="loadMore">
        Load more
      </v-btn>
    </event-list>

  </v-container>

</template>

<style scoped>

</style>
