<script setup lang="ts">

import type { Maybe } from '@/utils/types'

defineProps<{
  type: {
    iconPath?: Maybe<string>
    name?: string
  },
  height?: string
}>()
</script>

<template>
  <v-tooltip location="bottom">
    <template v-slot:activator="{ props }">
      <svg viewBox="0 0 100 100" v-bind="props" :height="height ?? '50px'">
        <path :d="type.iconPath ?? undefined" fill="black"></path>
      </svg>
    </template>
    <span>{{ type.name }}</span>
  </v-tooltip>
</template>

<style scoped>

</style>
