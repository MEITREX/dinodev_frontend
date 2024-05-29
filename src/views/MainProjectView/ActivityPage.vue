<script setup lang="ts">
import EventList from '@/components/event/EventList.vue'
import { useEventService } from '@/service/event-service'

const { events, loading } = useEventService()
</script>

<template>
  <v-container>

    <h3>Activity</h3>
    <event-list v-if="!loading"
                :events="events"
                :show-comment-block="true"
                :show-comment-button="true"
                :show-issue-information="true"
    />

    <div v-else>
      <v-skeleton-loader type="list-item-avatar"  v-for="n in 12" :key="n" />
    </div>
  </v-container>

</template>

<style scoped>

</style>
