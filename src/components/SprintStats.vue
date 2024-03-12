<script setup lang="ts">

import { useRoute } from 'vue-router'
import router from '@/router'
import EndSprintSuccessDialog from '@/components/dialog/EndSprintSuccessDialog.vue'

const route = useRoute()

function openBoard() {
  const projectId = route.params.projectId
  router.push(`/project/${projectId}/board`)
}
</script>

<template>
  <div>

    <div class="d-flex flex-row justify-space-between">
      <p class="mt-2 text-caption">Sprint progress</p>

      <p class="mt-2 text-caption">
        32%
      </p>
    </div>

    <v-progress-linear
      color="red-darken-3"
      height="15"
      model-value="32"
    >
    </v-progress-linear>

    <div class="d-flex flex-row justify-space-between">
      <p class="mt-2 text-caption">Time elapsed</p>

      <p class="mt-2 text-caption">
        4 days left
      </p>
    </div>
    <v-progress-linear
      color="secondary"
      height="15"
      model-value="10"
      max="14"
    >
    </v-progress-linear>

    <!--    <h4 class="my-3">Oh no! Herbert is not doing well!</h4>

        <p>You can do one of your assigned issues to feed him:</p>

        <v-card class="mb-2 mt-3">
          <v-card-title>Issue 1</v-card-title>
          <v-card-text>
            <p>Herbert is hungry</p>
          </v-card-text>
        </v-card>-->

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
    >
      End Sprint
    </v-btn>
    <end-sprint-success-dialog activator="#btn-end-sprint" />

  </div>
</template>

<style scoped>

</style>
