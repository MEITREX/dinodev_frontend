<script setup lang="ts">
import type { RetrospectiveColumn } from '@/gql/graphql'
import { ref } from 'vue'
import { useRetrospectiveMeetingService } from '@/service/retrospective-meeting-service'
import { useGlobalUserService } from '@/service/global-user-service'

defineProps<{
  column: RetrospectiveColumn
}>()

const comment = ref('')

const { addComment, deleteComment, thumbsUpComment } = useRetrospectiveMeetingService()

function postComment(columnId: string) {
  addComment(columnId, comment.value)
  comment.value = ''
}

function isLikeDisabled(comment: RetrospectiveColumn['comments'][0]) {
  return comment.thumbsUpBy.some(userId => userId === useGlobalUserService().currentGlobalUser.value?.id)
  || comment.authorId === useGlobalUserService().currentGlobalUser.value?.id
}
</script>

<template>
  <div class="d-flex flex-column justify-space-between h-100">
    <div>
    <h3>{{ column.title }}</h3>
    <div>{{ column.description }}</div>
    <hr class="my-3" />
      <div v-for="item in column.comments" :key="item.id">
        <v-card class="pa-3 d-flex flex-row justify-space-between mb-2 w-100 text-wrap">
          <div>
            {{ item.content }}
          </div>

          <div class="d-flex flex-row ga-1 align-center">
            <!-- number of likes -->
            <div v-if="item.thumbsUpBy.length > 0">
              {{ item.thumbsUpBy.length }}
            </div>

            <v-btn @click="() => thumbsUpComment(item.id)"
                   variant="plain"
                   icon="mdi-thumb-up"
                   density="compact"
                   :disabled="isLikeDisabled(item)"
            />

            <!-- delete button -->
            <v-btn
              @click="deleteComment(item.id)"
              variant="plain"
              icon="mdi-close"
              density="compact"
              :disabled="item.authorId !== useGlobalUserService().currentGlobalUser.value?.id"
            ></v-btn>
          </div>
        </v-card>
      </div>
    </div>
    <div class="mt-10">
      <v-textarea v-model="comment" placeholder="Add a comment" />
      <v-btn @click="() => postComment(column.id)" color="primary">Add comment</v-btn>
    </div>
  </div>
</template>

<style scoped>

</style>
