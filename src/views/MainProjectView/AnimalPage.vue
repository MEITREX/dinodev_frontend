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


    <div class="mt-5 h-100 w-100 d-flex flex-row justify-center">
      <animal-avatar :size="360" :animal="animal" v-if="isPresent(animal)" />
    </div>
    <h3 class="text-h5 font-weight-bold">
      <span class="text-grey-darken-1">Sprint {{ number }}:</span>
      {{ name }}
    </h3>

    <sprint-stats />

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
