<script setup lang="ts">

import type { DefinitionOfDoneConfirmState, DefinitionOfDoneItem } from '@/gql/graphql'

type DodConfirmState = DefinitionOfDoneConfirmState & { dodItem: DefinitionOfDoneItem, children: DodConfirmState[] }

defineProps<{
  confirmState: DodConfirmState
}>()

const emit = defineEmits<{
  (e: 'update:confirmState', confirmState: DodConfirmState): void
  (e: 'update:valid', value: boolean): void
}>()

</script>

<template>
  <v-form validate-on="input" @update:model-value="valid => $emit('update:valid', valid ?? false)">
    <div class="d-flex flex-column">
      <v-checkbox-btn
        class="my-0"
        density="compact"
        :model-value="confirmState.checked"
        @update:model-value="v => emit('update:confirmState', { ...confirmState, checked: v ?? false })"
        :label="confirmState.dodItem.text"
      />
      <v-text-field
        class="ml-7 py-1"
        hide-details
        v-if="!confirmState.checked"
        :label="confirmState.dodItem.required ? 'No, because:' : 'No, because: (optional)'"
        density="compact"
        variant="underlined"
        :disabled="confirmState.checked"
        :model-value="confirmState.reasonIfNotChecked"
        @update:model-value="v => emit('update:confirmState', { ...confirmState, reasonIfNotChecked: v })"
        :rules="[v => !confirmState.checked || (!!v && v.length > 0) || 'Provide a reason, why this is not applicable']"
      />
    </div>
  </v-form>


</template>

<style scoped>

</style>
