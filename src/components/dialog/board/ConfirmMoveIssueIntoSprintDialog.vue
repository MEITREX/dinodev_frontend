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
      This issue is currently in the backlog. Do you want to move it into the current sprint?
      Make sure that the team is aware of this change.
    </p>
  </warning-dialog>
</template>

<style scoped>

</style>
