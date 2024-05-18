<!-- Generic warning confirmation dialog -->
<script setup lang="ts">
defineProps<{
  visible: boolean
  title: string
}>()

defineEmits<{
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()
</script>

<template>
  <v-dialog :model-value="visible" width="700">
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <slot />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="() => $emit('cancel')">Cancel</v-btn>
        <v-btn color="primary" @click="() => $emit('confirm')">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
