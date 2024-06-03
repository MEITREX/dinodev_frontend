<script setup lang="ts">

import TheTopBar from '@/components/top-menu/TheTopBar.vue'
import TheSideMenu from '@/components/side-menu/TheSideMenu.vue'
import { useProjectService } from '@/service/project-service'
import { useAppStore } from '@/stores/app-store'
import LoadingOverlay from '@/components/LoadingOverlay.vue'
import { isPresent } from '@/utils/types'
import router from '@/router'
import { routes } from '@/router/routes'
import { useAppTitle } from '@/stores/app-title'

const props = defineProps<{
  projectId: string
}>()

useAppStore().projectId.value = props.projectId

const { loading, projectMainQueryResult, project } = useProjectService()

projectMainQueryResult.onResult((result) => {
  if (!isPresent(result?.data?.project)) {
    router.push(routes.projects)
  } else {
    useAppTitle().setAppTitle(project.value?.name ?? 'Project')
  }
})

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
