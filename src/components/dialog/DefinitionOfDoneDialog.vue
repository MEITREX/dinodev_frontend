<script setup lang="ts">
import { useProjectService } from '@/service/project-service'
import type { DefinitionOfDoneConfirmState, DefinitionOfDoneItem } from '@/gql/graphql'
import { computed, ref, watch } from 'vue'
import DefinitionOfDoneConfirmLine from '@/components/DefinitionOfDoneConfirmLine.vue'
import { isNotBlank } from '@/utils/string-utils'

const props = defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'confirm', confirmStates: DefinitionOfDoneConfirmState[]): void
  (e: 'cancel'): void
}>()

const { project } = useProjectService()
const definitionOfDoneItems = computed<DefinitionOfDoneItem[]>(() => project.value?.projectSettings.definitionOfDone || [])

type DodConfirmState = DefinitionOfDoneConfirmState & { dodItem: DefinitionOfDoneItem, children: DodConfirmState[] }

const definitionOfDoneConfirmStates = ref<DodConfirmState[]>(
  definitionOfDoneItems.value.map(item => initDodConfirmState(item)))

function initDodConfirmState(item: DefinitionOfDoneItem): DodConfirmState {
  return {
    dodText: item.text,
    checked: false,
    reasonIfNotChecked: '',
    dodItem: item,
    children: item.implies.map(child => (initDodConfirmState(child)))
  }
}

const valid = computed(() => definitionOfDoneConfirmStates.value.every(isValid))

function isValid(state: DodConfirmState): boolean {
  if (!state.dodItem.required) return true
  if (state.checked) {
    return state.children.every(isValid)
  }
  return isNotBlank(state.reasonIfNotChecked)
}

function emitConfirm() {
  emit('confirm', definitionOfDoneConfirmStates.value.map(state => ({
    dodText: state.dodText,
    checked: state.checked,
    reasonIfNotChecked: state.reasonIfNotChecked,
    children: state.children.map(child => ({
      dodText: child.dodText,
      checked: child.checked,
      reasonIfNotChecked: child.reasonIfNotChecked,
      children: []
    }))
  })))
}

// reset on dialog open
watch(() => props.visible, () => {
  definitionOfDoneConfirmStates.value = definitionOfDoneItems.value.map(item => initDodConfirmState(item))
})

</script>

<template>
  <v-dialog :model-value="visible" width="50%" min-width="300px">
    <v-card height="400">
      <v-card-title>Confirm Definition Of Done</v-card-title>
      <v-card-text style="max-height: 300px" class="overflow-y-auto" >
        <div>
          <div v-for="(confirmState, index) in definitionOfDoneConfirmStates" :key="index"
               class="d-flex flex-column">
            <definition-of-done-confirm-line
              :confirmState="confirmState"
              @update:confirmState="v => definitionOfDoneConfirmStates[index] = v" />

            <div v-if="definitionOfDoneConfirmStates[index].checked">
              <div v-for="(child, childIndex) in confirmState.children" :key="childIndex"
              class="ml-8">
                <definition-of-done-confirm-line
                  :confirmState="child"
                  @update:confirmState="v => definitionOfDoneConfirmStates[index].children[childIndex] = v"
                />
              </div>
            </div>
          </div>
        </div>

      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="() => $emit('cancel')">Cancel</v-btn>
        <v-btn color="primary" @click="() => emitConfirm()" :disabled="!valid">
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
