<script setup lang="ts">
import TheSideMenu from '@/components/TheSideMenu.vue'
</script>

<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>

    <the-side-menu />
  </v-app>
  <!--  <header>-->
  <!--    <div class="wrapper">-->
  <!--      <nav>-->
  <!--        <RouterLink to="/">Home</RouterLink>-->
  <!--        <RouterLink to="/about">About</RouterLink>-->
  <!--      </nav>-->
  <!--    </div>-->
  <!--  </header>-->
</template>

<style scoped></style>
