<script setup lang="ts">
import { ref } from 'vue'
import PlanningSettingsView from '@/views/PlanningView/PlanningSettingsView.vue'
import PlanningAnimalView from '@/views/PlanningView/PlanningAnimalView.vue'
import PlanningAnimalNameView from '@/views/PlanningView/PlanningAnimalNameView.vue'
import IssueEstimationView from '@/views/PlanningView/IssueEstimationView.vue'
import SprintGoalView from '@/views/PlanningView/SprintGoalView.vue'

const planningSteps = ref([
  'Basic settings',
  'Choose animal',
  'Name your animal',
  'Issue estimation',
  'Sprint goal'
])
</script>

<template>
  <v-stepper :items="planningSteps">

    <!-- note: the slot names are item.1, item.2, item.3, etc.,
    but eslint and IntelliJ IDEA don't recognize them -->
    <!--suppress VueUnrecognizedSlot -->
    <!-- eslint-disable-next-line -->
    <template #item.1>
      <planning-settings-view />
    </template>

    <!--suppress VueUnrecognizedSlot -->
    <!-- eslint-disable-next-line -->
    <template #item.2>
      <planning-animal-view />
    </template>

    <!--suppress VueUnrecognizedSlot -->
    <!-- eslint-disable-next-line -->
    <template #item.3>
      <planning-animal-name-view />
    </template>

    <!--suppress VueUnrecognizedSlot -->
    <!-- eslint-disable-next-line -->
    <template #item.4>
      <issue-estimation-view />
    </template>

    <!--suppress VueUnrecognizedSlot -->
    <!-- eslint-disable-next-line -->
    <template #item.5>
      <sprint-goal-view />
    </template>
  </v-stepper>

  <v-card title="Members" class="mt-5">
    <v-card-item>
      <div class="d-flex ga-2">
        <v-chip prepend-icon="mdi-account-check" color="green">Bob</v-chip>
        <v-chip prepend-icon="mdi-account-check" color="green">Alice</v-chip>
        <v-chip prepend-icon="mdi-account-question" color="orange">Charlie</v-chip>
        <v-chip prepend-icon="mdi-account-off" color="grey">David</v-chip>

        <v-spacer />
        <v-btn variant="flat" prepend-icon="mdi-link">Copy meeting link</v-btn>
      </div>
    </v-card-item>

  </v-card>
</template>

<style scoped>

</style>
