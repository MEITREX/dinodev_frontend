<script setup lang="ts">

import GropiusButton from '@/components/menu/GropiusButton.vue'
import GitHubButton from '@/components/menu/GitHubButton.vue'
import { ref } from 'vue'

const userName = ref('Paul')
</script>

<template>
  <v-toolbar>
    <v-toolbar-title>Welcome back, {{ userName }}! </v-toolbar-title>

    <template #append>

      <git-hub-button />

      <gropius-button />
    </template>
<!--    <gropius-button class="mr-2" />-->
<!--    <github-button />-->
  </v-toolbar>
  <div>
  </div>
</template>

<style scoped>

</style>
