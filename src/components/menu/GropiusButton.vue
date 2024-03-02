<script setup lang="ts">
import RepositoryLinkButton from '@/components/menu/RepositoryLinkButton.vue'
import GropiusIcon from '@/assets/GropiusIcon.vue'

import { ref } from 'vue'

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
  <repository-link-button icon="mdi-github" :repositories="repositories" text="Gropius">
    <template #icon>
      <gropius-icon />
    </template>
    <template #prepend>
      <gropius-icon />
    </template>
  </repository-link-button>
</template>

<style scoped></style>
