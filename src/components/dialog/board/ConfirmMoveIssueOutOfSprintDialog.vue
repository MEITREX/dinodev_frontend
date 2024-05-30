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
  <warning-dialog title="Move issue out of sprint scope?" :visible="visible"
                  @confirm="$emit('confirm')" @cancel="$emit('cancel')">
    <p>
      This issue is currently planned to do in this sprint. If you still want reach the sprint goal,
      you need to either finish this issue (cancel) or move another issue into this sprint (if
      communicated with the team).
    </p>
    <p>
      Are you sure you want to move this issue out of this sprint?
    </p>
  </warning-dialog>
</template>

<style scoped>

</style>
