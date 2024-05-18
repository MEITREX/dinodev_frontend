<script setup lang="ts">
import { ref } from 'vue'

type RetroItem = {
  id: string
  name: string
  task: string
  type: 'columnBoard' | 'drawBoard' | 'gifSelection' | 'randomAppreciation' | 'commonProblems',
}

const retroItems = ref<RetroItem[]>([
  {
    id: '1',
    name: 'Check-in',
    task: 'Select a GIF that represents your mood',
    type: 'gifSelection'
  },
  {
    id: '2',
    name: 'Mad, Sad, Glad',
    task: 'Write down what made you mad, sad, or glad in the respective columns',
    type: 'columnBoard'
  },
  {
    id: '4',
    name: 'Say something nice',
    task: 'Write down a random appreciation for a team member',
    type: 'randomAppreciation'
  },
  {
    id: '5',
    name: 'Checkout',
    task: 'Select a GIF that represents your mood after the meeting',
    type: 'gifSelection'
  }
])
</script>

<template>
  <v-row align="start" class="fill-height" no-gutters>
    <v-col cols="12" sm="8" md="8">
      <h2 class="my-3">Create Retrospective Meeting</h2>
        <v-data-iterator
          :items="retroItems"
          page="1"
          :items-per-page="20"
        >

          <template #default="{ items }">
            <template v-for="(item, index) in items" :key="item.id">
              <v-card @click="console.log('click')" class="my-2" draggable="true">
                <v-card-title>
                  <div class="d-flex justify-space-between">
                    <div class="d-flex flex-row">
                      <div class="text-grey mr-4">{{ index + 1}}. </div>
                      <div>{{ item.raw.name }}</div>

                    </div>
                    <v-btn
                      @click="retroItems.splice(index, 1)"
                      icon="mdi-close"
                      class="ml-4"
                      variant="flat"
                      size="small"
                    />
                  </div>
                </v-card-title>

<!--                <v-card-subtitle>-->
<!--                  <p class="ml-8">-->
<!--                    {{ item.raw.task }}</p>-->
<!--                </v-card-subtitle>-->

              </v-card>
            </template>
          </template>

        </v-data-iterator>

        <v-btn
          @click="retroItems.push({ id: '6', name: 'Draw your mood', task: 'Add a new step to the meeting', type: 'drawBoard' })"
          prepend-icon="mdi-plus"
          block
          variant="flat"
          text="Add Step"
          size="large"/>

        <v-divider class="my-4" />

        <v-btn block color="primary" size="large">Start Meeting</v-btn>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>
