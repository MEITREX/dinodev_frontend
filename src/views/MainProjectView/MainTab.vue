<script setup lang="ts">

import ActivityOverview from '@/views/MainProjectView/ActivityPage.vue'
import AnimalPage from '@/views/MainProjectView/AnimalPage.vue'
import { computed } from 'vue'
import StartSprintButtons from '@/components/StartSprintButtons.vue'
import { useSprintService } from '@/service/sprint-service'

const { currentSprint, loading } = useSprintService()
const isCurrentlyInSprint = computed(() => currentSprint.value !== null)
</script>

<template>
  <div>
    <div class="d-flex flex-row">
      <div class="w-50">
        <activity-overview />
      </div>

      <div v-if="isCurrentlyInSprint" class="w-50">
        <animal-page />
      </div>

      <div v-else-if="!loading" class="w-50">
        <start-sprint-buttons />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
