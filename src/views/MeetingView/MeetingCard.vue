<!--
Simple card that displays meeting information and allows to start or join a meeting.
-->
<script setup lang="ts">

import { computed } from 'vue'

const props = defineProps<{
  isCurrentlyActive: boolean,
  icon: string,
  meetingName: string,
}>()

const emit = defineEmits<{
  (e: 'createMeeting'): void,
  (e: 'joinMeeting'): void,
}>()

function startOrJoinMeeting() {
  if (props.isCurrentlyActive) {
    emit('joinMeeting')
  } else {
    emit('createMeeting')
  }
}

const hasPermissionToCreateMeeting = computed(() => true) // currently, everyone can create a meeting

</script>

<template>
  <v-card hover
          :prepend-icon="icon"
          :title="meetingName"
          class="mx-auto">
    <v-card-subtitle>
      <!-- slot to add additional information -->
      <slot></slot>
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        v-if="isCurrentlyActive || hasPermissionToCreateMeeting"
        variant="text"
        :color="isCurrentlyActive ? 'success' : 'primary'"
        @click="startOrJoinMeeting"
        :prepend-icon="isCurrentlyActive ? 'mdi-account-plus' : 'mdi-play'"
      >
        {{ isCurrentlyActive ? 'Join' : 'Start' }} {{ meetingName }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
