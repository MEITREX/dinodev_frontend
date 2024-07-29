<script setup lang="ts">

import TheTopBar from '@/components/top-menu/TheTopBar.vue'
import TheSideMenu from '@/components/side-menu/TheSideMenu.vue'
import { useProjectService } from '@/service/project-service'
import { useProjectId } from '@/stores/project-id'
import { isPresent } from '@/utils/types'
import router from '@/router'
import { routes } from '@/router/routes'
import { useGlobalLoading } from '@/utils/use-global-loading'

const props = defineProps<{
  projectId: string
}>()

useProjectId().projectId.value = props.projectId

const { loading, projectMainQueryResult } = useProjectService()

projectMainQueryResult.onResult((result) => {
  if (!isPresent(result?.data?.project)) {
    router.push(routes.projects)
  }
})

const { watchLoading, globalLoading } = useGlobalLoading()
watchLoading(loading)

</script>

<template>
  <v-main class="h-100 overflow-auto">

    <div class="h-100 d-flex flex-column">
      <the-top-bar />

      <div style="height: 10px">
        <v-progress-linear indeterminate class="w-100" v-if="globalLoading"></v-progress-linear>
      </div>
      <router-view class="h-100 overflow-y-scroll" />
    </div>
  </v-main>
  <the-side-menu />


</template>
