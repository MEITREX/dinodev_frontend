<script setup lang="ts">

import router from '@/router'
import { useRoute } from 'vue-router'

const props = defineProps<{
  activatorId: string
}>()

const route = useRoute()

function startPlanning() {
  const projectId = route.params.projectId
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
            You can initiate an <b>interactive</b> sprint planning meeting with the whole team
            to set a <b>sprint goal</b>, estimate issues, and decide on which <b>new animal</b>
            should come into the zoo!
          </p>
          <p class="mb-3">
            Alternatively, you can start the sprint without a planning meeting.
          </p>

          <v-btn block color="primary" @click="startPlanning()">
            Start planning meeting
          </v-btn>

          <v-btn block color="white">
            Start sprint without planning meeting
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
