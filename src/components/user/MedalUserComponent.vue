<script setup lang="ts">

import UserAvatar from '@/components/user/UserAvatar.vue'

defineProps<{
  user: {
    id: string
    avatar?: string | null | undefined
    username: string
  } | null,
  spCompleted: number,
  virtualCurrencyReward: number
}>()
</script>

<template>
  <div class="d-flex flex-row justify-center align-center ga-10 w-100">
    <div class="">
      <user-avatar :user="user" class="mr-2" />
    </div>
    <div class="font-weight-bold">
      {{ user?.username ?? '(No winner)' }}
    </div>

    <div class="flex-grow-1">
      <p> {{ spCompleted }} SP</p>
    </div>

    <v-chip color="primary">
      +{{ virtualCurrencyReward }} 💎
    </v-chip>
  </div>
</template>

<style scoped>

</style>
