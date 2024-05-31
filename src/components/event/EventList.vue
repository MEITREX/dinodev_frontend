<script setup lang="ts">

import { ref } from 'vue'
import type { BaseEventFragment, EventWithChildrenFragment } from '@/gql/graphql'
import EventListItem from '@/components/event/EventListItem.vue'
import { useFragment } from '@/gql'
import { eventFragment } from '@/service/event-service'
import { useAppStore } from '@/stores/appStore'
import router from '@/router'
import { routes } from '@/router/routes'

const props = defineProps<{
  events: readonly EventWithChildrenFragment[]
  showCommentBlock: boolean
  showCommentButton: boolean
  showIssueInformation: boolean
  postCommentLoading: boolean
}>()

const emit = defineEmits<{
  (e: 'post-comment', comment: string, parentEvent: BaseEventFragment | null): void
  (e: 'like-event', eventId: string): void
}>()

const newMessage = ref('')

function postMessage() {
  emit('post-comment', newMessage.value, eventSelectedToComment.value)
  newMessage.value = ''
}

const eventSelectedToComment = ref<BaseEventFragment | null>(null)

function selectEvent(event: BaseEventFragment) {
  eventSelectedToComment.value = event

  // scroll to the comment block
  const commentBlock = document.querySelector('.v-textarea') as HTMLElement
  commentBlock.scrollIntoView({ behavior: 'smooth' })

  // focus the textarea
  const textarea = commentBlock.querySelector('textarea') as HTMLTextAreaElement
  textarea.focus()
}


function openUserProfile(baseEvent: BaseEventFragment) {
  const { projectId } = useAppStore()
  if (baseEvent?.user?.id && projectId.value) {
    router.push(routes.project(projectId.value).main + '/user/' + baseEvent?.user.id)
  }
}

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
    <v-timeline-item
      v-for="(event, index) in events"
      :key="index"
      size="large"
      class="w-100"
      min-width="100%"
      density="compact"
    >
      <template v-slot:icon>
        <v-avatar
          class="cursor-pointer"
          :image="useFragment(eventFragment, event)?.user?.avatar ?? undefined"
          @click="() => openUserProfile(useFragment(eventFragment, event))"
        />
      </template>
      <event-list-item
        :event="event"
        :show-comment-button="showCommentButton"
        :show-issue-information="showIssueInformation"
        @select-event-to-comment="() => selectEvent(useFragment(eventFragment, event))"
        @like-event="event1 => { console.log('here', event1.id); emit('like-event', event1.id) }"
      >
      </event-list-item>
    </v-timeline-item>

    <v-timeline-item hide-dot>
      <slot></slot>
    </v-timeline-item>
  </v-timeline>

  <v-card class="pa-3 d-flex flex-row align-center ga-3" v-if="eventSelectedToComment">
    <v-btn @click="eventSelectedToComment = null" icon="mdi-close" density="compact" variant="text" />
    Commenting on: <strong>{{ eventSelectedToComment.message }}</strong>
  </v-card>
  <v-textarea v-if="showCommentBlock" label="Add comment..." v-model="newMessage"
              class="mb-0"
  ></v-textarea>

  <div class="d-flex flex-row justify-end">
    <v-btn
      v-if="showCommentBlock"
      @click="postMessage"
      :loading="postCommentLoading"
    >
      Post
    </v-btn>
  </div>

</template>

<style scoped>
.hover-underline {
  cursor: pointer;
}

.hover-underline:hover {
  text-decoration: underline;
}
</style>
