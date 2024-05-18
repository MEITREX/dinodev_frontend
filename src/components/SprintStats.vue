<script setup lang="ts">

import { useRoute } from 'vue-router'
import router from '@/router'
import EndSprintSuccessDialog from '@/components/dialog/EndSprintDialog.vue'
import { ref } from 'vue'
import { useSprintService } from '@/service/sprint-service'

defineProps<{showButtons: boolean}>()

const route = useRoute()

function openBoard() {
  const projectId = route.params.projectId
  router.push(`/project/${projectId}/board`)
}

const { currentSprint } = useSprintService()

</script>

<template>
  <div>

    <div class="d-flex flex-row justify-space-between">
      <p class="mt-2 text-caption">Sprint progress</p>

      <p class="mt-2 text-caption">
        {{ currentSprint?.stats.percentageStoryPointsCompleted }}%
      </p>
    </div>

    <v-progress-linear
      color="red-darken-3"
      height="15"
      :model-value="currentSprint?.stats.percentageStoryPointsCompleted"
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
      :model-value="currentSprint?.stats.percentageTimeElapsed"
      max="100"
    >
    </v-progress-linear>

    <div v-if="showButtons">

      <v-btn
        variant="elevated"
        @click="openBoard"
        class="mt-10 "
        color="primary"
      >
        View issue board
      </v-btn>

      <v-btn
        variant="elevated"
        @click="openBoard"
        class="mt-10 ml-3"
      >
        View my issues
      </v-btn>

      <v-btn
        variant="elevated"
        id="btn-end-sprint"
        class="mt-10 ml-3"
        :disabled="sprintDays != 14"
      >
        End Sprint
      </v-btn>
      <end-sprint-success-dialog activator="#btn-end-sprint" :success="issueNum == 100" />
    </div>

  </div>
</template>

<style scoped>

</style>
