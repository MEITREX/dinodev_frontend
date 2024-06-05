<script setup lang="ts">
import { useUserInProjectService } from '@/service/user-in-project-service'
import { computedAsync } from '@vueuse/core'
import BaseUserAvatar from '@/components/user/BaseUserAvatar.vue'
import UserCard from '@/components/user/UserCard.vue'
import { computed } from 'vue'

const props = defineProps<{
  user: { id: string, avatar?: string | null, username: string }  | null,
  size?: number
}>()

const { getUserById } = useUserInProjectService()

const userInProject = computed(() => {
  if (props.user) {
    return getUserById(props.user.id)
  }
  return null
})
</script>

<template>
  <v-menu open-on-hover>
    <template #activator="{ props }">
      <base-user-avatar :user="user" :size="size" v-bind="props"></base-user-avatar>
    </template>
    <user-card :userInProject="userInProject"></user-card>
  </v-menu>
</template>

<style scoped>

</style>
