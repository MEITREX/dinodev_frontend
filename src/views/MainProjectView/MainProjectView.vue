<script setup lang="ts">

import TheTopBar from '@/components/top-menu/TheTopBar.vue'
import TheSideMenu from '@/components/side-menu/TheSideMenu.vue'
import { useProjectService } from '@/service/project-service'
import { useAppStore } from '@/stores/appStore'
import LoadingOverlay from '@/components/LoadingOverlay.vue'

const props = defineProps<{
  projectId: string
}>()

useAppStore().projectId.value = props.projectId

const { loading } = useProjectService()

</script>

<template>
  <v-main>
    <loading-overlay :loading="loading" />

    <div class="h-100 d-flex flex-column">
      <the-top-bar />
      <router-view />
    </div>
    <the-side-menu />
  </v-main>


</template>
