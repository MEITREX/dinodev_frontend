<script setup lang="ts">
import WarningDialog from '@/components/dialog/WarningDialog.vue'

defineProps<{
  visible: boolean
}>()

defineEmits<{
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()
</script>

<template>
  <warning-dialog title="Move issue into the current sprint?" :visible="visible"
                  @confirm="$emit('confirm')" @cancel="$emit('cancel')">
    <p>
      This issue was already finished in the past. Do you want to reopen it?
    </p>
    <p>
      <strong>Consider opening a follow-up issue instead of reopening this one.</strong>
      
    </p>
  </warning-dialog>

</template>

<style scoped>

</style>
