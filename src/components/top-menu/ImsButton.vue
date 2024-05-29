<script setup lang="ts">
import RepositoryLinkButton from '@/components/top-menu/RepositoryLinkButton.vue'
import GropiusIcon from '@/assets/GropiusIcon.vue'

import { computed } from 'vue'
import  { type ProjectMainFragment } from '@/gql/graphql'

const props = defineProps<{
  imsSettings: ProjectMainFragment['projectSettings']['imsSettings']
}>()

const repositories = computed(() => [
  {
    name: props.imsSettings.imsName,
    url: props.imsSettings.imsProjectUrl
  }
])
</script>

<template>
  <repository-link-button icon="mdi-github" :repositories="repositories" :text="imsSettings.imsName">
    <template #icon>
      <gropius-icon /> <!-- todo: other icon for other ims -->
    </template>
    <template #prepend>
      <gropius-icon />
    </template>
  </repository-link-button>
</template>

<style scoped></style>
