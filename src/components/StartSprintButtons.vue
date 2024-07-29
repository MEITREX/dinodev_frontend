<script setup lang="ts">

import router from '@/router'
import NewSprintDialog from '@/components/dialog/NewSprintDialog.vue'
import { routes } from '@/router/routes'
import { useProjectId } from '@/stores/project-id'

function openBoard() {
  const projectId = useProjectId().getProjectIdOrThrow()
  router.push(routes.project(projectId).board)
}

function openOlderSprints() {
  const projectId = useProjectId().getProjectIdOrThrow()
  router.push(routes.project(projectId).sprintStats)
}
</script>

<template>
  <div class="d-flex flex-column align-center pa-5">
    <h2 class="text-sm-h5">No active sprint</h2>
    <p class="text-caption mb-5">Start a new sprint or goto the issue board</p>

    <div class="d-flex flex-column ga-2">
      <v-btn variant="elevated" color="primary" block size="large" id="start-new-sprint">
        Start new sprint
      </v-btn>
      <new-sprint-dialog activator-id="#start-new-sprint" />
      <v-btn variant="elevated" block size="large" @click="openOlderSprints">
        View sprint stats
      </v-btn>
      <v-btn variant="elevated" block size="large" @click="openBoard">
        View issue board
      </v-btn>
    </div>
  </div>
</template>

<style scoped>

</style>
