<script setup lang="ts">

import { ref } from 'vue'

type Event = {
  title: string
  date: Date
  description: string
}

const events = ref<Event[]>([
  {
    title: 'Player joins game',
    date: new Date(),
    description: 'A new player joined the game'
  },
  {
    title: 'Task completed',
    date: new Date(),
    description: 'A task was completed'
  },
  {
    title: 'Sprint started',
    date: new Date(),
    description: 'A new sprint was started'
  }
])

function formatDate(date: Date) {
  return date.toLocaleTimeString()
}

</script>

<template>
  <v-timeline align="start" side="end" >
    <v-timeline-item
      v-for="(event, index) in events"
      :key="index"
      dot-color="teal-lighten-3"
      size="small"

    >
      <div class="d-flex">
        <strong class="me-4">{{ formatDate(event.date) }}</strong>
        <div>
          <strong>{{ event.title }}</strong>
          <div class="text-caption">
            {{ event.description }}
          </div>
        </div>
      </div>
    </v-timeline-item>
<!--    <v-timeline-item-->
<!--      dot-color="pink"-->
<!--      size="small"-->
<!--    >-->
<!--      <div class="d-flex">-->
<!--        <strong class="me-4">5pm</strong>-->
<!--        <div>-->
<!--          <strong>New Icon</strong>-->
<!--          <div class="text-caption">-->
<!--            Mobile App-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </v-timeline-item>-->

<!--    <v-timeline-item-->
<!--      dot-color="teal-lighten-3"-->
<!--      size="small"-->
<!--    >-->
<!--      <div class="d-flex">-->
<!--        <strong class="me-4">3-4pm</strong>-->
<!--        <div>-->
<!--          <strong>Design Stand Up</strong>-->
<!--          <div class="text-caption mb-2">-->
<!--            Hangouts-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </v-timeline-item>-->

<!--    <v-timeline-item-->
<!--      dot-color="pink"-->
<!--      size="small"-->
<!--    >-->
<!--      <div class="d-flex">-->
<!--        <strong class="me-4">12pm</strong>-->
<!--        <div>-->
<!--          <strong>Lunch break</strong>-->
<!--        </div>-->
<!--      </div>-->
<!--    </v-timeline-item>-->

<!--    <v-timeline-item-->
<!--      dot-color="teal-lighten-3"-->
<!--      size="small"-->
<!--    >-->
<!--      <div class="d-flex">-->
<!--        <strong class="me-4">9-11am</strong>-->
<!--        <div>-->
<!--          <strong>Finish Home Screen</strong>-->
<!--          <div class="text-caption">-->
<!--            Web App-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </v-timeline-item>-->
  </v-timeline>
</template>

<style scoped>

</style>
