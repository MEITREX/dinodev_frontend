<script setup lang="ts">
import imsButton from '@/components/top-menu/ImsButton.vue'
import GitHubButton from '@/components/top-menu/CodeRepositoryButton.vue'
import { computed } from 'vue'
import { useGlobalUserService } from '@/service/global-user-service'
import { useAppTitle } from '@/stores/app-title'
import { useProjectService } from '@/service/project-service'

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

const { project } = useProjectService()
</script>

<template>
  <v-toolbar>
    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <template #append>

      <git-hub-button v-if="project?.projectSettings.codeRepositorySettings" :codeRepositorySettings="project.projectSettings.codeRepositorySettings" />

      <ims-button v-if="project?.projectSettings.imsSettings" :imsSettings="project.projectSettings.imsSettings" />
    </template>

  </v-toolbar>
  <div>
  </div>
</template>

<style scoped>

</style>
