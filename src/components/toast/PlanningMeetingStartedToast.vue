<script setup lang="ts">

import router from '@/router'
import { useAppStore } from '@/stores/appStore'
import { routes } from '@/router/routes'

function joinMeeting() {
  router.push(routes.project(useAppStore().getProjectIdOrThrow()).livePlanning)
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
