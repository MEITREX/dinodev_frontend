<script setup lang="ts">

import ActivityOverview from '@/views/MainProjectView/ActivityPage.vue'
import AnimalPage from '@/views/MainProjectView/AnimalPage.vue'
import { ref } from 'vue'
import StartSprintButtons from '@/components/StartSprintButtons.vue'

const isCurrentlyInSprint = ref(false)
</script>

<template>
  <div class="d-flex flex-row">
    <div class="w-50">
      <activity-overview />
    </div>

    <div class="w-50" v-if="isCurrentlyInSprint">
      <animal-page />
    </div>

    <div class="w-50" v-else>
      <start-sprint-buttons @start-sprint="isCurrentlyInSprint = true"/>
    </div>
  </div>
</template>

<style scoped>

</style>
