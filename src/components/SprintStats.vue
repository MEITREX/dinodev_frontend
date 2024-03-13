<script setup lang="ts">

import { useRoute } from 'vue-router'
import router from '@/router'
import EndSprintSuccessDialog from '@/components/dialog/EndSprintDialog.vue'
import { ref, watch } from 'vue'
import { useMagicKeys } from '@vueuse/core'

defineProps<{showButtons: boolean}>()

const route = useRoute()

function openBoard() {
  const projectId = route.params.projectId
  router.push(`/project/${projectId}/board`)
}

const sprintDays = ref(10)
const issueNum = ref(32)


const keys = useMagicKeys()
const ctrlAltC = keys['Ctrl+Alt+C']
watch(ctrlAltC, () => {
  sprintDays.value = 14
})

const ctrlAltL = keys['Ctrl+Alt+L']
watch(ctrlAltL, () => {
  issueNum.value = 100
})


</script>

<template>
  <div>

    <div class="d-flex flex-row justify-space-between">
      <p class="mt-2 text-caption">Sprint progress</p>

      <p class="mt-2 text-caption">
        {{ issueNum }}%
      </p>
    </div>

    <v-progress-linear
      color="red-darken-3"
      height="15"
      v-model="issueNum"
    >
    </v-progress-linear>

    <div class="d-flex flex-row justify-space-between">
      <p class="mt-2 text-caption">Time elapsed</p>

      <p class="mt-2 text-caption">
        {{ 14 - sprintDays}} days left
      </p>
    </div>
    <v-progress-linear
      color="secondary"
      height="15"
      :model-value="sprintDays"
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
