<script setup lang="ts">

import TheTopBar from '@/components/TheTopBar.vue'
import TheSideMenu from '@/components/TheSideMenu.vue'


</script>

<template>
  <v-main>
    <the-top-bar />
    <v-container>
      <router-view />
    </v-container>
  </v-main>

  <the-side-menu />

</template>
