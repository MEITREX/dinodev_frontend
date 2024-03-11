<script setup lang="ts">
import ForestBackground from '@/assets/mock-forest.webp'

import SprintStats from '@/components/SprintStats.vue'
</script>

<template>
  <v-container class="ga-2">
    <v-img :src="ForestBackground" height="500" />

    <h3> Luna </h3>
    <sprint-stats />
  </v-container>
</template>

<style scoped>

</style>
