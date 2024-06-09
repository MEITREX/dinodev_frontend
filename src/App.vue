<script setup lang="ts">
import { onMounted } from 'vue'
import { setupToast } from '@/components/toast/toast'

onMounted(() => {
  setupToast();
})
</script>
<template>
  <v-app class="h-100">
    <!-- actual view depending on the route -->
    <router-view />
  </v-app>
</template>

<style scoped></style>
