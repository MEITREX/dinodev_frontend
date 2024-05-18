<script setup lang="ts">
import type { BaseEventFragment } from '@/gql/graphql'
import { computed, ref } from 'vue'
import { useTimeAgo } from '@vueuse/core'
import MarkdownTextCard from '@/components/MarkdownTextCard.vue'
import { useGlobalUserService } from '@/service/global-user-service'
import router from '@/router'
import { routes } from '@/router/routes'
import { useAppStore } from '@/stores/appStore'
import { useEventService } from '@/service/event-service'

const props = defineProps<{
  event: BaseEventFragment
  showCommentButton: boolean
  showIssueInformation: boolean
}>()

const { findEventDataField } = useEventService()

function likeActivity() {
  likes.value += 1 // TODO
}

const likes = ref(0) // TODO

const xp = computed(() => {
  return undefined // TODO
})

const type = computed(() => {
  return props.event?.eventType?.identifier ?? 'UNKNOWN'
})

const timeAgo = useTimeAgo(computed(() => props.event.timestamp))

const shouldShowInteractionButtons = computed(() => {
  return true
})

const userName = computed(() => {
  if (props.event?.user?.id
    && props.event?.user?.id === useGlobalUserService().currentGlobalUser.value?.id) {
    return 'You'
  }
  return props.event.user?.username ?? 'An unknown Gropius user'
})

const issueTitle = computed(() => {
  const title = findEventDataField(props.event, 'issueTitle')
  // limit to 40 characters
  return title === null || title.length <= 40
    ? title
    : title.substring(0, 40) + '...'
})

const issueId = computed(() => {
  return findEventDataField(props.event, 'issueId')
})

function openIssue() {
  const { projectId } = useAppStore()
  if (issueId.value && projectId.value) {
    router.push(routes.project(projectId.value).issue(issueId.value))
  }
}

function openUserProfile() {
  const { projectId } = useAppStore()
  if (props.event?.user?.id && projectId.value) {
    router.push(routes.project(projectId.value).main + '/user/' + props.event.user.id)
  }
}

</script>
<template>
  <v-timeline-item
    size="large"
    class="w-100"
    min-width="100%"
    density="compact"
  >
    <template v-slot:icon>
      <v-avatar
        class="cursor-pointer"
        :image="event?.user?.avatar ?? undefined"
        @click="openUserProfile"
      />
    </template>
    <div>
      <div class="d-flex flex-row ">
        <p class="text-grey text-caption">
          <strong>
            <a @click="() => openUserProfile()" class="cursor-pointer hover-underline">
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

      <div class="d-flex flex-row">
        <markdown-text-card :markdown-text="event.message" class="mr-3"
                            v-if="type == 'USER_MESSAGE'">
        </markdown-text-card>

        <markdown-text-card :markdown-text="event.message" class="mr-3"
                            v-else-if="type == 'COMMENT_ON_ISSUE'">
        </markdown-text-card>

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
          {{ event.message }}
        </p>

        <v-spacer />
        <p v-if="xp !== undefined" class="text-grey text-lg-caption">
          +{{ xp }} XP
        </p>
        <div v-if="shouldShowInteractionButtons" class="d-flex flex-row">

          <v-tooltip location="bottom" text="Like">
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                icon="mdi-heart"
                @click="() => likeActivity()"
                variant="flat"
                class="text-grey-darken-1"
                size="small"
                id="btn-like"
                density="comfortable"
              >
              </v-btn>
            </template>
          </v-tooltip>

          <v-tooltip location="bottom" text="Comment" v-if="showCommentButton">
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                icon="mdi-comment"
                variant="flat"
                class="text-grey-darken-1"
                size="small"
                id="btn-comment"
                density="comfortable"
              >
              </v-btn>
            </template>
          </v-tooltip>

          <v-tooltip location="bottom" text="Award">
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                icon="mdi-trophy-variant"
                variant="flat"
                class="text-grey-darken-1"
                size="small"
                id="btn-award"
                density="comfortable" />
            </template>
          </v-tooltip>

        </div>
      </div>

      <div v-if="likes > 0" class="text-caption text-grey">
        {{ likes }} likes
      </div>


    </div>
  </v-timeline-item>
</template>

<style scoped>
.hover-underline:hover {
  text-decoration: underline;
}
</style>
