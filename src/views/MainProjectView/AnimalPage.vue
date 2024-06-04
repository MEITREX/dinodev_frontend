<script setup lang="ts">
import SprintStats from '@/components/SprintStats.vue'
import { useSprintService } from '@/service/sprint-service'
import { computed } from 'vue'
import { isPresent } from '@/utils/types'
import AnimalAvatar from '@/views/MeetingView/PlanningView/AnimalAvatar.vue'
import router from '@/router'
import { useAppStore } from '@/stores/app-store'
import { routes } from '@/router/routes'

const { currentSprint } = useSprintService()

const animal = computed(() => currentSprint.value?.animal)
const name = computed(() => currentSprint.value?.name)
const number = computed(() => currentSprint.value?.number)
const percentageComplete = computed(() => {
  const val = (currentSprint.value?.stats.percentageStoryPointsCompleted ?? 0) / 100

  return Math.min(1, val)
})

function openBoard() {
  const projectId = useAppStore().getProjectIdOrThrow()
  router.push(routes.project(projectId).board)
}

function openSprintStats() {
  const projectId = useAppStore().getProjectIdOrThrow()
  router.push(routes.project(projectId).sprintStats)
}
</script>

<template>
  <div class="mt-10 ga-2 d-flex flex-column align-center">


    <div style="position: relative; height: 430px; width: 80%">
<!--      <img src="@/assets/background.png"-->
<!--           alt="background"-->
<!--           class="h-100 w-100 rounded-xl"-->
<!--        style="position: absolute; z-index: 0; object-fit: cover; object-position: center"-->
<!--      />-->
      <div class="h-100 w-100 d-flex flex-column justify-end align-center pa-5" style="position: absolute">
        <!-- scale avatar by percentage complete -->
        <animal-avatar
          :size="180 * percentageComplete + 180"
          :animal="animal"
          v-if="isPresent(animal)"
          style="z-index: 1; position: absolute"/>
      </div>
    </div>
    <h3 class="text-h5 font-weight-bold">
      <span class="text-grey-darken-1">Sprint {{ number }}:</span>
      {{ name }}
    </h3>

    <sprint-stats class="w-50" />

    <div>

      <v-btn
        variant="elevated"
        @click="openBoard"
        class="mt-10 "
      >
        View issue board
      </v-btn>

      <v-btn
        variant="elevated"
        @click="openSprintStats"
        class="mt-10 ml-3"
      >
        Sprint stats
      </v-btn>

    </div>
  </div>
</template>

<style scoped>

</style>
