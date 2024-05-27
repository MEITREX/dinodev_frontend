<script setup lang="ts">

import { IssuePriority } from '@/gql/graphql'

defineProps<{
  priority: IssuePriority
}>()
</script>

<template>
   <v-icon v-if="priority == IssuePriority.High" icon="mdi-chevron-up" size="25" color="red" />
   <v-icon v-else-if="priority == IssuePriority.Medium" icon="mdi-equal" size="25" color="grey" />
   <v-icon v-else icon="mdi-chevron-down" size="25" color="blue" />
</template>

<style scoped>

</style>
