<script setup lang="ts">

import SprintStats from '@/components/SprintStats.vue'
import Animal from '@/components/Animal.vue'
</script>

<template>
  <v-container class="ga-2">

<!--    <h3> Luna </h3>-->
    <sprint-stats show-buttons/>

    <div class="mt-5 h-100">
      <animal />
    </div>

  </v-container>
</template>

<style scoped>

</style>
