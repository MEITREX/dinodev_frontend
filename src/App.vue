<script setup lang="ts">
import TheSideMenu from '@/components/TheSideMenu.vue'
import { computed } from 'vue'
import { useAppStore } from '@/stores/appStore'
import TheTopBar from '@/components/TheTopBar.vue'

const isLoggedIn = computed(() => useAppStore().isLoggedIn)
const isProjectSelected = computed(() => useAppStore().isProjectSelected)

</script>

<template>
  <v-app>

    <router-view />
  </v-app>
</template>

<style scoped></style>
