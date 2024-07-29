<script setup lang="ts">

import router from '@/router'
import { useProjectId } from '@/stores/project-id'
import { routes } from '@/router/routes'

function joinMeeting() {
  router.push(routes.project(useProjectId().getProjectIdOrThrow()).livePlanning)
}
</script>

<template>
  <div>
    <p>A planning meeting has started.</p>
    <a @click="joinMeeting" class="text-button text-decoration-underline cursor-pointer">
      Join Meeting
    </a>
  </div>
</template>

<style scoped>

</style>
