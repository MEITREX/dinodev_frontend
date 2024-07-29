<script setup lang="ts">
import router from '@/router'
import { routes } from '@/router/routes'
import { useProjectId } from '@/stores/project-id'

function joinMeeting() {
  router.push(routes.project(useProjectId().getProjectIdOrThrow()).liveStandup)
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
