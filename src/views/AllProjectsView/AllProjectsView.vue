<script setup lang="ts">
import { computed, ref } from 'vue'
import router from '@/router'
import { routes } from '@/router/routes'
import { useGlobalUserService } from '@/service/global-user-service'
import { type ProjectBaseFragment, GlobalPrivilege } from '@/gql/graphql'
import ProjectCard from '@/views/AllProjectsView/ProjectCard.vue'
import { useOffsetPagination } from '@vueuse/core'
import { useProjectService } from '@/service/project-service'

const { allProjects: projects, refetchAllProjects } = useProjectService()

refetchAllProjects().then()

// filter
const filterString = ref('')

const filteredProjects = computed(() => {
  return projects.value.filter(project => {
    return project.name.toLowerCase().includes(filterString.value.toLowerCase())
      || project.description?.toLowerCase().includes(filterString.value.toLowerCase())
  })
})

// pagination
const { currentPage, pageCount } = useOffsetPagination({
  total: filteredProjects.value.length,
  page: 1,
  pageSize: 5
})

const canCreateProject = computed(() => {
  return useGlobalUserService().hasPrivilege(GlobalPrivilege.CreateProject)
})

// functions
function selectProject(project: ProjectBaseFragment) {
  router.push('/project/' + project.id)
}

function onJoinedProject(project: ProjectBaseFragment) {
  selectProject(project)
}

function createProject() {
  router.push(routes.createProject)
}

</script>

<template>
  <v-main class="fill-height">
    <v-container class="fill-height" fluid>
      <v-row align="start" justify="center" class="fill-height" no-gutters>
        <v-col cols="12" sm="8" md="8">

          <h2 class="my-3">Select project</h2>
          <v-data-iterator
            :items="filteredProjects"
            :page="currentPage"
            :items-per-page="5"
          >
            <template #header>
              <div class="d-flex justify-lg-space-evenly ga-3">
                <v-text-field
                  label="Search"
                  single-line
                  hide-details
                  density="comfortable"
                  v-model="filterString"
                />

                <v-tooltip bottom text="Create Project">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-bind="props"
                      icon="mdi-plus"
                      variant="flat"
                      :disabled="!canCreateProject"
                      @click="createProject"
                    />
                  </template>
                </v-tooltip>

              </div>

              <v-divider class="my-4" />
            </template>

            <!-- Template for each project -->
            <template #default="{ items }">
              <template v-for="project in items" :key="project.id">
                <project-card
                  :project="project.raw"
                  class="mb-2"
                  @select-project="selectProject"
                  @joined-project="onJoinedProject" />
              </template>
            </template>

            <template #footer>
              <v-divider class="my-4" />

              <v-pagination v-model="currentPage" :length="pageCount" total-visible="10" />
            </template>
          </v-data-iterator>

        </v-col>
      </v-row>
    </v-container>

  </v-main>
</template>

