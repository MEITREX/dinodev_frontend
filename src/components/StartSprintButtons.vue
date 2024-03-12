<script setup lang="ts">

import router from '@/router'
import { useRoute } from 'vue-router'
import NewSprintDialog from '@/components/dialog/NewSprintDialog.vue'

const emit = defineEmits<{
  (e: 'start-sprint'): void
}>()

const route = useRoute()

function openBoard() {
  const projectId = route.params.projectId
  router.push(`/project/${projectId}/board`)
}
</script>

<template>
  <div class="d-flex flex-column align-center">
    <h2 class="text-sm-h5">No active sprint</h2>
    <p class="text-caption mb-5">Start a new sprint or goto the issue board</p>

    <div class="d-flex flex-column ga-2">
      <v-btn variant="elevated" color="primary" block size="large" id="start-new-sprint">
        Start new sprint
      </v-btn>
      <new-sprint-dialog activator-id="#start-new-sprint" />
      <v-btn variant="elevated" block size="large" @click="emit('start-sprint')">
        View older sprints
      </v-btn>
      <v-btn variant="elevated" block size="large" @click="openBoard">
        View issue board
      </v-btn>
    </div>
  </div>
</template>

<style scoped>

</style>
