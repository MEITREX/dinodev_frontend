<script setup lang="ts">
import RepositoryLinkButton from '@/components/top-menu/RepositoryLinkButton.vue'
import type { ProjectMainFragment } from '@/gql/graphql'
import { computed } from 'vue'

const props = defineProps<{
  codeRepositorySettings: ProjectMainFragment['projectSettings']['codeRepositorySettings']
}>()

const repositories = computed(() => {
  return props.codeRepositorySettings.repositories.map(repo => {
    return {
      name: repo.name,
      url: repo.url,
      icon: repo.icon.mdiIcon ?? 'mdi-github'
    }
  })
})

const firstRepository = computed(() => repositories.value[0])

</script>

<template>
  <repository-link-button
    :icon="firstRepository.icon"
    :repositories="repositories"
    text="GitHub" /> <!-- todo make name dynamic -->
</template>

<style scoped></style>
