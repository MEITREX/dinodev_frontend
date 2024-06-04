<script setup lang="ts">

import TheTopBar from '@/components/top-menu/TheTopBar.vue'
import TheSideMenu from '@/components/side-menu/TheSideMenu.vue'
import { useProjectService } from '@/service/project-service'
import { useAppStore } from '@/stores/app-store'
import { isPresent } from '@/utils/types'
import router from '@/router'
import { routes } from '@/router/routes'
import { useAppTitle } from '@/stores/app-title'
import { useGlobalLoading } from '@/utils/use-global-loading'

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

const { watchLoading, globalLoading } = useGlobalLoading()
watchLoading(loading)

</script>

<template>
  <v-main>

    <div class="h-100 d-flex flex-column">
      <the-top-bar />

      <div style="height: 10px">
        <v-progress-linear indeterminate class="w-100" v-if="globalLoading"></v-progress-linear>
      </div>
      <router-view />
    </div>
    <the-side-menu />
  </v-main>


</template>
