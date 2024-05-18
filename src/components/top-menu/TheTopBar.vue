<script setup lang="ts">
import GropiusButton from '@/components/top-menu/GropiusButton.vue'
import GitHubButton from '@/components/top-menu/GitHubButton.vue'
import { computed } from 'vue'
import { useGlobalUserService } from '@/service/global-user-service'
import { useAppTitle } from '@/stores/app-title'

const { currentGlobalUser } = useGlobalUserService()
const userName = computed(() => currentGlobalUser.value?.username)

const { appTitle } = useAppTitle()

const title = computed(() => {
  if (appTitle.value) return appTitle.value

  // fallback / default title is a greeting message
  if (!userName.value) {
    return 'Welcome back!'
  }
  const randomIndex = Math.floor(Math.random() * messages.length)
  return messages[randomIndex].replace('{userName}', userName.value)
})

const messages =  [
  'Nice to see you again, {userName}!',
  'Welcome back, {userName}!',
  'Hello, {userName}!',
  'Good to see you, {userName}!',
  'Hi, {userName}, how are you?',
]
</script>

<template>
  <v-toolbar>
    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <template #append>

      <git-hub-button />

      <gropius-button />
    </template>
  </v-toolbar>
  <div>
  </div>
</template>

<style scoped>

</style>
