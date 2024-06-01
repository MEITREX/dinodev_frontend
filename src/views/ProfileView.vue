<script setup lang="ts">

import EventList from '@/components/event/EventList.vue'

const props = defineProps<{
  userName: string
  projectId: string
}>()

const bars = [
  { label: 'Sprint 1', value: 20 },
  { label: 'Sprint 2', value: 23 },
  { label: 'Sprint 3', value: 27 },
  { label: 'Sprint 4', value: 10 },
  { label: 'Sprint 5', value: 8 },
  { label: 'Sprint 6', value: 19 },
  { label: 'Sprint 7', value: 17 },
  { label: 'Sprint 8', value: 10 }
]
</script>

<template>

  <h3>Profile of {{ props.userName }}</h3>

  <v-row>
    <v-col cols="1">
      <v-avatar size="120">
        <v-img src="https://i.pravatar.cc/62"></v-img>
      </v-avatar>
    </v-col>
    <v-col>
      <v-card>
        <v-card-title>
          <h3>Details</h3>
        </v-card-title>
        <v-card-text>
          <p>
            Name: {{ props.userName }}
          </p>
          <p>
            Role: Developer
          </p>
          <p>
            Email: {{ props.userName }}@zoo.com
          </p>
        </v-card-text>
      </v-card>

    </v-col>
  </v-row>
  <v-row>
    <v-col cols="1">
    </v-col>
    <v-col>
      <v-card>
        <v-card-title>
          <h3>Achievements</h3>
        </v-card-title>
        <v-card-text>
          <v-icon size="x-large" color="yellow-darken-1">mdi-medal</v-icon>
          <v-icon size="x-large" color="secondary">mdi-octagram</v-icon>
          <v-icon size="x-large" color="blue-darken-3">mdi-owl</v-icon>
          <v-icon size="x-large" color="green">mdi-leaf</v-icon>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="1">
    </v-col>
    <v-col>
      <v-card>
        <v-card-title>
          <h3>High Scores</h3>
        </v-card-title>
        <v-card-text>
          <p>Most XP in a sprint: 2400</p>
          <p>Most tasks completed in a sprint: 12</p>
          <p>Most story points completed in a sprint: 24</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="1">
    </v-col>
    <v-col>
      <!-- diagram of sprint performance -->
      <v-card>
        <v-card-title>
          <h3>Sprint Performance</h3>
        </v-card-title>
        <v-card-text>
          <v-sheet class="pa-3" max-width="600" style="margin:auto;">
            <div v-for="(bar, index) in bars" :key="index" class="my-3">
              <div>{{ bar.label }}</div>
              <v-progress-linear :model-value="bar.value" color="secondary" height="20" max="50">
                <template #default>
                  <div>{{ bar.value }} SP</div>
                </template>
              </v-progress-linear>
            </div>
          </v-sheet>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col>
      <v-card>
        <v-card-title>
          <h3>Activity</h3>
        </v-card-title>
        <v-card-text>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>
