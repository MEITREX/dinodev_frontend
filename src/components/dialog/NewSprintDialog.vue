<script setup lang="ts">

import router from '@/router'
import { useProjectId } from '@/stores/project-id'

const props = defineProps<{
  activatorId: string
}>()

function startPlanning() {
  const projectId = useProjectId().getProjectIdOrThrow()
  router.push(`/project/${projectId}/planning`)
}
</script>

<template>
  <v-dialog :activator="props.activatorId" width="600">
    <template #default="{ isActive }">
      <v-card>
        <v-card-title>
          New Sprint
        </v-card-title>
        <v-card-text class="d-flex flex-column ga-2">
          <p>
            Let's start a new sprint!
            You can initiate an interactive sprint planning meeting with the whole team
            to set a <b>sprint goal</b>, estimate issues, and decide on which <b>new prehistoric animal</b>
            should come into the park!
          </p>

          <v-btn block color="primary" @click="startPlanning()">
            Start planning meeting
          </v-btn>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="isActive.value = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>

    </template>
  </v-dialog>
</template>

<style scoped>

</style>
