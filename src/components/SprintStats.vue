<script setup lang="ts">
import { useSprintService } from '@/service/sprint-service'
import { computed } from 'vue'

const { currentSprint } = useSprintService()

const percentageCompleted = computed(() => {
  const percentage = currentSprint.value?.stats.percentageStoryPointsCompleted
  return Math.round(percentage ?? 0)
})

const percentageCompletedPlusInProgess = computed(() => {
  const percentage = currentSprint.value?.stats.percentageStoryPointsInProgress
  return Math.round(percentage ?? 0) + percentageCompleted.value
})

const percentageTimeElapsed = computed(() => {
  const percentage = currentSprint.value?.stats.percentageTimeElapsed
  return Math.round(percentage ?? 0)
})

const progressbarColor = computed(() => {
  // yellow if in 10% range of time elapsed
  if (percentageTimeElapsed.value - 10 <= percentageCompleted.value
    && percentageCompleted.value <= percentageTimeElapsed.value + 10) {
    return 'warning'
  }
  if (percentageCompleted.value < percentageTimeElapsed.value) {
    return 'error'
  }
  return 'success'
})

</script>

<template>
  <div class="w-100">

    <div class="d-flex flex-row justify-space-between">
      <p class="mt-2 text-caption">Sprint progress</p>

      <p class="mt-2 text-caption">
        {{ percentageCompleted }}%
      </p>
    </div>

    <v-progress-linear
      :color="progressbarColor"
      height="15"
      :model-value="percentageCompleted"
      :buffer-value="percentageCompletedPlusInProgess"
      :buffer-color="progressbarColor"
      :buffer-opacity="0.3"
      rounded
    >
    </v-progress-linear>

    <div class="d-flex flex-row justify-space-between">
      <p class="mt-2 text-caption">Time elapsed</p>

      <p class="mt-2 text-caption">
        {{ currentSprint?.stats.daysLeft }} days left
      </p>
    </div>
    <v-progress-linear
      color="secondary"
      height="15"
      :model-value="percentageTimeElapsed"
      max="100"
      rounded
    >
    </v-progress-linear>

  </div>
</template>

<style scoped>

</style>
