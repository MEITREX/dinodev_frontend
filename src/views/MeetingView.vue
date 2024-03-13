<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const projectId = route.params.projectId
</script>

<template>

  <h3 class="mb-3"> Meetings </h3>

  <v-row>
    <v-col cols="8" md="4">
      <v-card min-height="150">
        <v-card-title>
          <h3> Standup </h3>
        </v-card-title>
        <v-card-text>
          <p>
            Start a standup meeting to discuss the progress of the sprint and any blockers.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn
            block color="primary" variant="elevated"
            :to="'/project/' + projectId + '/standup'"
          >
            Start standup
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="8" md="4">
      <v-card min-height="150">
        <v-card-title>
          <h3> Sprint Planning </h3>
        </v-card-title>
        <v-card-text>
          <p>
            Start a new sprint planning meeting with the whole team to set a sprint goal, estimate issues, and decide on which new animal should come into the zoo!
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn
            block
            color="primary"
            variant="elevated"
            :to="'/project/' + projectId + '/planning'"
          >
            Start sprint planning
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="8" md="4">
      <v-card min-height="150">
        <v-card-title>
          <h3> Sprint Retrospective </h3>
        </v-card-title>
        <v-card-text>
          <p>
            Start a sprint retrospective meeting to discuss what went well, what didn't, and what can be improved in the next sprint.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn
            block color="primary" variant="elevated"
            :to="'/project/' + projectId + '/retrospective'"
          >
            Start retrospective
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>
