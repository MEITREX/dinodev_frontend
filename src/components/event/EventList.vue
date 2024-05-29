<script setup lang="ts">

import { ref } from 'vue'
import type { BaseEventFragment } from '@/gql/graphql'
import EventListItem from '@/components/event/EventListItem.vue'

const props = defineProps<{
  events: readonly BaseEventFragment[]
  showCommentBlock: boolean
  showCommentButton: boolean
  showIssueInformation: boolean
}>()

const newMessage = ref('')

</script>

<template>

  <v-timeline
    align="start"
    side="end"
    density="compact"
    class="w-100"
    line-thickness="2"
    :truncate-line="showCommentBlock ? undefined : 'both'"
  >
    <event-list-item
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :show-comment-button="showCommentButton"
      :show-issue-information="showIssueInformation"
    >
    </event-list-item>

    <v-timeline-item hide-dot>
      <slot></slot>
    </v-timeline-item>
  </v-timeline>


  <v-textarea  v-if="showCommentBlock" label="Add comment..." v-model="newMessage"></v-textarea>

</template>

<style scoped>
.hover-underline {
  cursor: pointer;
}

.hover-underline:hover {
  text-decoration: underline;
}
</style>
