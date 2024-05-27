<script setup lang="ts">
import router from '@/router'
import { routes } from '@/router/routes'
import { useAppStore } from '@/stores/appStore'

function joinMeeting() {
  router.push(routes.project(useAppStore().getProjectIdOrThrow()).livePlanning)
}
</script>

<template>
  <p>A standup meeting has started.</p>
  <a @click="joinMeeting" class="text-button text-decoration-underline cursor-pointer">
    Join Meeting
  </a>
</template>

<style scoped>

</style>
