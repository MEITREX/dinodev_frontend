<script setup lang="ts">
import { ref } from 'vue'
import RepositoryLinkButton from '@/components/top-menu/RepositoryLinkButton.vue'

const repositories = ref([
  {
    name: 'Frontend Repository',
    url: 'https://github.com/MEITREX/scrum_game_frontend'
  },
  {
    name: 'Backend',
    url: 'https://github.com/MEITREX/scrum_game_service'
  }
])
</script>

<template>
  <!-- button with icon to github -->
  <repository-link-button icon="mdi-github" :repositories="repositories" text="Github" />
</template>

<style scoped></style>
