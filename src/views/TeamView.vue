<script setup lang="ts">

import { onMounted } from 'vue'
import { useAppTitle } from '@/stores/app-title'
import { useUserInProjectService } from '@/service/user-in-project-service'
import UserCard from '@/components/user/UserCard.vue'

onMounted(() => {
  useAppTitle().setAppTitle('Team')
})

const { allUsers } = useUserInProjectService()

</script>

<template>
  <div class="pa-3 d-flex flex-row flex-wrap ga-3">
    <div v-for="userInProject in allUsers" :key="userInProject.user.id" class="">
      <user-card :user-in-project="userInProject" />
    </div>
  </div>
</template>

<style scoped>

</style>
