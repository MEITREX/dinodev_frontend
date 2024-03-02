<script setup lang="ts">
import TheIssueBoard from '@/components/board/TheIssueBoard.vue'

import { ref } from 'vue'
import GithubButton from '@/components/menu/GitHubButton.vue'
import GropiusButton from '@/components/menu/GropiusButton.vue'
import TheEventList from '@/components/event/TheEventList.vue'

const selected = ref<'all' | 'my'>('all')
</script>

<template>
  <div class="d-flex flex-column justify-center py-3 ga-2">
    <div class="d-flex justify-space-between px-5 align-center">
      <h2 class="text-sm-h5">Scrum game</h2>

      <div>
        <gropius-button class="mr-2" />
        <github-button />
      </div>
    </div>

    <div class="d-flex align-center flex-column">
      <v-btn-toggle
        group
        v-model="selected"
        variant="elevated"
        elevation="2"
        rounded="2"
        density="comfortable"
      >
        <v-btn value="all"> All Issues </v-btn>

        <v-btn value="my"> My Issues </v-btn>
      </v-btn-toggle>
    </div>

    <the-issue-board class="py-3 px-6" />

    <div class="d-flex justify-start w-100">

      <the-event-list class="w-50" />
      <div class="w-50 bg-grey-lighten-2">
        Here will be the animal
      </div>
    </div>
  </div>
</template>
