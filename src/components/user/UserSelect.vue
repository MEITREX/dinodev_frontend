<!-- Dropdown to select a user -->
<script setup lang="ts">
import type { BaseGlobalUserFragment } from '@/gql/graphql'
import { computed, onMounted } from 'vue'
import { useGlobalUserService } from '@/service/global-user-service'
import { useUserInProjectService } from '@/service/user-in-project-service'

const props = defineProps<{
  modelValue: BaseGlobalUserFragment | null
  initializeWithCurrentUser?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: BaseGlobalUserFragment | null): void
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
    emit('update:modelValue', currentGlobalUser.value)
  }
})
</script>

<template>
  <v-select
    :model-value="{ title: modelValue?.username ?? 'Unknown user', value: modelValue}"
    :items="users"
    item-text="title"
    item-value="value"
    label="User"
    clearable
    @update:model-value="(value) => emit('update:modelValue', value.value)" />
</template>

<style scoped>

</style>
