<script setup lang="ts">

import type { Maybe } from '@/utils/types'

defineProps<{
  type: {
    iconPath?: Maybe<string>
  }
}>()
</script>

<template>
  <svg viewBox="0 0 100 100">
    <path :d="type.iconPath ?? undefined" fill="black"></path>
  </svg>
</template>

<style scoped>

</style>
