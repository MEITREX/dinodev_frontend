<script setup lang="ts">
 defineProps<{
  currentCountdownSeconds: number
}>()

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

</script>

<template>
  <span
    :class="{ 'text-red' : currentCountdownSeconds <= 5 }"
  >
   {{ formatTime(currentCountdownSeconds) }}
    <v-icon :class="{ 'jiggle-animation' : currentCountdownSeconds <= 5 }">
      mdi-clock
    </v-icon>
  </span>
</template>

<style scoped>

@keyframes jiggle {
  0% { transform: rotate(0deg) translate(0, 0); }
  25% { transform: rotate(-5deg) translate(2px, 0); }
  50% { transform: rotate(5deg) translate(-2px, 0); }
  75% { transform: rotate(-5deg) translate(2px, 0); }
  100% { transform: rotate(0deg) translate(0, 0); }
}

.jiggle-animation {
  animation: jiggle 0.5s infinite;
}
</style>
