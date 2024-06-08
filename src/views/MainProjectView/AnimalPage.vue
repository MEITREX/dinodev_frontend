<script setup lang="ts">
import SprintStats from '@/components/SprintStats.vue'
import { useSprintService } from '@/service/sprint-service'
import { computed } from 'vue'
import router from '@/router'
import { useAppStore } from '@/stores/app-store'
import { routes } from '@/router/routes'
import AnimalEnclosure from '@/components/animal/AnimalEnclosure.vue'
import { KnownAsset } from '@/gql/graphql'

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

function openMyIssues() {
  const projectId = useAppStore().getProjectIdOrThrow()
  router.push(routes.project(projectId).boardMyIssues)
}

function openSprintStats() {
  const projectId = useAppStore().getProjectIdOrThrow()
  router.push(routes.project(projectId).sprintStats)
}
</script>

<template>
  <div class="mt-10 ga-2 d-flex flex-column align-center">
    <animal-enclosure
      :animal="animal ?? null"
      :percentage-complete="percentageComplete"
      :placed-assets="currentSprint?.placedAssets ?? []"
    />
    <h3 class="text-h5 font-weight-bold">
      <span class="text-grey-darken-1">Sprint {{ number }}:</span>
      {{ name }}
    </h3>

    <sprint-stats class="w-50" />

    <div>

      <v-btn
        @click="openBoard"
        class="mt-10 "
      >
        View issue board
      </v-btn>

      <v-btn
        @click="openMyIssues"
        class="mt-10 ml-3"
      >
        View my issues
      </v-btn>

      <v-btn
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
