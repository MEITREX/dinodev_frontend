<script setup lang="ts">
import router from '@/router'
import { useProjectId } from '@/stores/project-id'
import { routes } from '@/router/routes'

const props = defineProps<{
  user: { id: string, avatar?: string | null, username: string } | null,
  badgeEmoji?: string
  size?: number
}>()

function openUserProfile() {
  if (props.user?.id) {
    router.push(routes.project(useProjectId().getProjectIdOrThrow()).user(props.user?.id))
  }
}
</script>

<template>
  <v-badge
    v-if="user"
    color="transparent"
    overlap="circle">
    <v-avatar
      class="cursor-pointer"
      :size="size"
      :image="user?.avatar ?? undefined"
      @click="() => openUserProfile()">

    </v-avatar>

    <template #badge>
      <span class="text-h6">{{ badgeEmoji }}</span>
    </template>
  </v-badge>
</template>

<style scoped>

</style>
