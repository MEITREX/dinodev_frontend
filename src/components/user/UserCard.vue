<script setup lang="ts">

import type { UserInProjectFragment } from '@/gql/graphql'
import BaseUserAvatar from '@/components/user/BaseUserAvatar.vue'
import MedalIcon from '@/components/user/MedalIcon.vue'
import { useAppStore } from '@/stores/app-store'
import { routes } from '@/router/routes'
import router from '@/router'

const props = defineProps<{
  userInProject: UserInProjectFragment | null
}>()

function openUserProfile() {
  if (props.userInProject?.user?.id) {
    router.push(routes.project(useAppStore().getProjectIdOrThrow()).user(props.userInProject?.user?.id))
  }
}

</script>

<template>
<v-card width="300" @click="openUserProfile">

  <template #prepend>
    <v-progress-circular color="success" model-value="100" size="40" class="mr-3">
      <template #default>
        {{ userInProject?.userStats.level }}
      </template>
    </v-progress-circular>
  </template>
  <template #title>
    {{ userInProject?.user?.username }}
  </template>
  <template #subtitle>
    {{ userInProject?.roles[0]?.gamifiedName ?? "&nbsp;" }}
  </template>
  <template #append>
    <base-user-avatar :user="userInProject?.user ?? null" :size="40" />
  </template>

  <template #text>
    <div class="d-flex flex-row align-center justify-start ga-3">
      <medal-icon medal="🥇" :number="userInProject?.userStats.goldMedals ?? 0" />
      <medal-icon medal="🥈" :number="userInProject?.userStats.silverMedals ?? 0" />
      <medal-icon medal="🥉" :number="userInProject?.userStats.bronzeMedals ?? 0" />
    </div>
  </template>
</v-card>
</template>

<style scoped>

</style>
