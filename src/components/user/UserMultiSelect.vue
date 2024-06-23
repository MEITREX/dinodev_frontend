<!-- Dropdown to select a user -->
<script setup lang="ts">
import type { BaseGlobalUserFragment } from '@/gql/graphql'
import { computed, onMounted } from 'vue'
import { useGlobalUserService } from '@/service/global-user-service'
import { useUserInProjectService } from '@/service/user-in-project-service'

const props = defineProps<{
  modelValue: BaseGlobalUserFragment[]
  initializeWithCurrentUser?: boolean
  label?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: BaseGlobalUserFragment[]): void
}>()

const { currentGlobalUser } = useGlobalUserService()
const { allUsers } = useUserInProjectService()

const users = computed(() => allUsers.value?.map(user => {
  return {
    title: user.user?.username ?? 'Unknown user',
    value: user.user
  }
}) ?? [])

onMounted(() => {
  if (props.initializeWithCurrentUser) {
    emit('update:modelValue', currentGlobalUser.value ? [currentGlobalUser.value] : [])
  }
})
</script>

<template>
  <v-select
    :model-value="modelValue.map(user => ({ title: user?.username ?? 'Unknown user', value: user }))"
    :items="users"
    item-text="title"
    item-value="value"
    :label="label ?? 'User'"
    clearable
    multiple
    density="compact"
    @update:model-value="(value) => emit('update:modelValue', (value as unknown) as BaseGlobalUserFragment[])" />
</template>

<style scoped>

</style>
