<script setup lang="ts">
import type { BaseEventFragment, EventWithChildrenFragment } from '@/gql/graphql'
import { computed } from 'vue'
import { useTimeAgo } from '@vueuse/core'
import MarkdownTextCard from '@/components/MarkdownTextCard.vue'
import { useGlobalUserService } from '@/service/global-user-service'
import router from '@/router'
import { routes } from '@/router/routes'
import { useAppStore } from '@/stores/appStore'
import { useFragment } from '@/gql'
import { eventFragment } from '@/service/event-service'

const props = defineProps<{
  event: EventWithChildrenFragment | null
  eventWithoutChildren?: BaseEventFragment | null
  showCommentButton: boolean
  showIssueInformation: boolean
}>()

const baseEvent = computed(() => props.eventWithoutChildren ?? useFragment(eventFragment, props.event))

const emit = defineEmits<{
  (e: 'select-event-to-comment', event: BaseEventFragment): void
  (e: 'like-event', event: BaseEventFragment): void
}>()

function likeActivity() {
  if (hasLiked.value || !baseEvent.value) {
    return
  }
  emit('like-event', baseEvent.value)
}

const childEvents = computed(() => props.event?.children
  .map(child => useFragment(eventFragment, child)))

const likes = computed(() => {
  return baseEvent.value?.reactions.length ?? 0
})

const hasLiked = computed(() => {
  return baseEvent.value?.reactions
    .some(reaction => reaction.userId === useGlobalUserService().currentGlobalUser.value?.id)
})

const xp = computed(() => {
  return undefined // TODO
})

const type = computed(() => {
  return baseEvent.value?.eventType?.identifier ?? 'UNKNOWN'
})

const timeAgo = useTimeAgo(computed(() => baseEvent.value?.timestamp))

const shouldShowInteractionButtons = computed(() => {
  return true
})

const userName = computed(() => {
  if (baseEvent.value?.user?.id
    && baseEvent.value?.user?.id === useGlobalUserService().currentGlobalUser.value?.id) {
    return 'You'
  }
  return baseEvent.value?.user?.username ?? 'An unknown user'
})

const issueTitle = computed(() => {
  const title = baseEvent.value?.issueTitle?.value ?? null
  // limit to 40 characters
  return title === null || title.length <= 40
    ? title
    : title.substring(0, 40) + '...'
})

const issueId = computed(() => baseEvent.value?.issueId?.value ?? null)

function openIssue() {
  const { projectId } = useAppStore()
  if (issueId.value && projectId.value) {
    router.push(routes.project(projectId.value).issue(issueId.value))
  }
}

function openUserProfile(userId: string | undefined) {
  const { projectId } = useAppStore()
  if (userId && projectId.value) {
    router.push(routes.project(projectId.value).main + '/user/' + userId)
  }
}

</script>
<template>
  <div>
    <div class="d-flex flex-row ">
      <p class="text-grey text-caption">
        <strong>
          <a @click="() => openUserProfile(baseEvent?.user?.id)" class="cursor-pointer hover-underline">
            {{ userName }}
          </a>
        </strong> &centerdot; {{ timeAgo }}
        <span v-if="showIssueInformation && issueTitle">
            &centerdot; on issue
            <strong>
              <a @click="() => openIssue()" class="cursor-pointer hover-underline">
                {{ issueTitle }}
              </a>
            </strong>
          </span>
      </p>
    </div>

    <div class="d-flex flex-row w-100">
      <div v-if="type == 'PLAYER_MESSAGE' || type == 'COMMENT_ON_ISSUE'" class=" w-100 mr-10">
        <markdown-text-card :markdown-text="baseEvent?.message ?? ''" class="mr-3 w-100 "></markdown-text-card>

        <v-tooltip location="bottom" text="Comment" v-if="showCommentButton">
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              prepend-icon="mdi-comment"
              variant="text"
              class="text-grey-darken-1"
              size="small"
              id="btn-comment"
              density="comfortable"
              @click="() => emit('select-event-to-comment', baseEvent!!)"
            >
              Add comment
            </v-btn>
          </template>
        </v-tooltip>

      </div>

      <p v-else-if="type == 'ISSUE_COMPLETED'">
        completed the issue
        <strong>
          <a @click="() => openIssue()" class="cursor-pointer hover-underline">
            {{ issueTitle }}
          </a>. Great job!
        </strong>
        💪🎉
      </p>

      <p v-else>
        {{ baseEvent?.message }}
      </p>

      <v-spacer />
      <p v-if="xp !== undefined" class="text-grey text-lg-caption">
        +{{ xp }} XP
      </p>
      <div v-if="shouldShowInteractionButtons" class="d-flex flex-row align-center">

        <div v-if="likes > 0" class="text-caption">
          {{ likes }}
        </div>

        <v-tooltip location="bottom" text="Like">
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi-heart"
              @click="() => likeActivity()"
              variant="text"
              :class=" { 'text-red-darken-3': hasLiked, 'text-grey-darken-1': !hasLiked }"
              size="small"
              id="btn-like"
              density="comfortable"
            >
            </v-btn>
          </template>
        </v-tooltip>

        <!--          <v-tooltip location="bottom" text="Award">-->
        <!--            <template #activator="{ props }">-->
        <!--              <v-btn-->
        <!--                v-bind="props"-->
        <!--                icon="mdi-trophy-variant"-->
        <!--                variant="flat"-->
        <!--                class="text-grey-darken-1"-->
        <!--                size="small"-->
        <!--                id="btn-award"-->
        <!--                density="comfortable" />-->
        <!--            </template>-->
        <!--          </v-tooltip>-->

      </div>
    </div>

    <div>
      <div v-for="childEvent in childEvents" :key="childEvent.id" class="w-100">
        <div class="d-flex flex-row align-center mt-2 w-100"
             v-if="childEvent.eventType.identifier === 'COMMENT_ON_ISSUE' || childEvent.eventType.identifier === 'PLAYER_MESSAGE'">

          <v-avatar
            class="cursor-pointer mr-2"
            :image="childEvent.user?.avatar ?? ''"
            @click="() => openUserProfile(childEvent.user?.id)">
          </v-avatar>
          <event-list-item class="w-75"
            :event-without-children="childEvent"
            :event="null"
            :show-comment-button="false"
            :show-issue-information="showIssueInformation"
            @select-event-to-comment="() => emit('select-event-to-comment', childEvent)"
            @like-event="() => emit('like-event', childEvent)"
          >
          </event-list-item>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-underline:hover {
  text-decoration: underline;
}
</style>
