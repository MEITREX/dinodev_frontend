<script setup lang="ts">
import router from '@/router'
import { useAppStore } from '@/stores/app-store'
import { routes } from '@/router/routes'

const props = defineProps<{
  user: { id: string, avatar?: string | null, username: string } | null,
  size?: number
}>()

function openUserProfile() {
  if (props.user?.id) {
    router.push(routes.project(useAppStore().getProjectIdOrThrow()).user(props.user?.id))
  }
}
</script>

<template>
  <v-avatar
    class="cursor-pointer"
    :size="size"
    :image="user?.avatar ?? undefined"
    @click="() => openUserProfile()">

  </v-avatar>
</template>

<style scoped>

</style>
