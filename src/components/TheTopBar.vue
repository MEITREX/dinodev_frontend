<script setup lang="ts">

import GropiusButton from '@/components/menu/GropiusButton.vue'
import GitHubButton from '@/components/menu/GitHubButton.vue'
import { computed, ref } from 'vue'
import { useGlobalUser } from '@/composables/use-global-user'

const { onUserLoaded } = useGlobalUser()
const userName = ref('')

onUserLoaded(user => {
  userName.value = user?.username ?? ''
})

const welcomeUser = computed(() => {
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
    <v-toolbar-title>{{ welcomeUser }} </v-toolbar-title>

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
