<!--
User avatar used in a list item with a username and a role description.
-->
<script setup lang="ts">

import type { UserInProjectFragment } from '@/gql/graphql'
import { computed } from 'vue'

defineEmits<{
  (e: 'click'): void
}>()

const props = defineProps<{
  userInProject: UserInProjectFragment | null
}>()

const roleDescription = computed(() => {
  return props.userInProject?.roles
    ?.slice(0, 2)
    ?.map(role => role.gamifiedName)
    ?.join(', ')
    ?? ''
})

const avatar = computed<string>(() => {
  return props.userInProject?.user?.avatar || ""
})
</script>

<template>
  <v-list-item
    class="cursor-pointer"
    :prepend-avatar="avatar"
    :title="userInProject?.user?.username"
    :subtitle="roleDescription"
    @click="$emit('click')"
  ></v-list-item>
</template>

<style scoped>

</style>
