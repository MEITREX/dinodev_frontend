<script setup lang="ts">

import { useRoute, useRouter } from 'vue-router'
import TheTopBar from '@/components/TheTopBar.vue'
import TheSideMenu from '@/components/TheSideMenu.vue'
import { useMagicKeys } from '@vueuse/core'
import { watch } from 'vue'


const route = useRoute()
const router = useRouter()

const knownSubRoutes = ['board', 'sprint', 'planning']

function endsWithKnownSubRoute(path: string) {
  return knownSubRoutes.some(subRoute => path.endsWith(subRoute))
}

if (!endsWithKnownSubRoute(route.path)) {
  const projectId = route.params.projectId
  router.push(`/project/${projectId}/sprint`)
}


</script>

<template>
  <v-main>
    <the-top-bar />
    <v-container>
      <router-view />
    </v-container>
  </v-main>

  <the-side-menu />

</template>
