<script setup lang="ts">
import type { IssueBaseFragment } from '@/gql/graphql'

defineProps<{
  visible: boolean,
  issuesOfUser: Array<IssueBaseFragment>
}>()

defineEmits<{
  (e: 'yes'): void
  (e: 'no'): void
}>()
</script>

<template>
  <v-dialog :model-value="visible" width="700">
    <v-card>
      <v-card-title>Assign yourself to issue?</v-card-title>
      <v-card-text>
       This issue is currently unassigned. Do you want to assign yourself to it?
        <p v-if="issuesOfUser.length > 1">
          You have <b>{{ issuesOfUser.length }}</b> other issues assigned to you.
          Consider finishing other issues first.
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="() => $emit('no')">No</v-btn>
        <v-btn color="primary" @click="() => $emit('yes')">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
