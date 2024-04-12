<script setup lang="ts">
import { graphql } from '@/gql'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/appStore'
import { useQuery } from '@vue/apollo-composable'
import { computed, ref } from 'vue'
import router from '@/router'
import { formatGqlDate } from '@/utils/date-utils'

const { projectId } = storeToRefs(useAppStore())
const { result } = useQuery(graphql(`
  query projects {
    projects {
      id
      name
      description
      startDate
      endDate
    }
  }
`))

const projects = computed(() => {
  return result.value?.projects ?? []
})

const filterString = ref('')

const filteredProjects = computed(() => {
  return projects.value.filter(project => {
    return project.name.toLowerCase().includes(filterString.value.toLowerCase())
    || project.description?.toLowerCase().includes(filterString.value.toLowerCase())
  })
})

const pageSize = ref(5)

const totalPages = computed(() => {
  return Math.ceil(filteredProjects.value.length / pageSize.value)
})

const page = ref(1)

function selectProject(id: string) {
  projectId.value = id
  router.push('/project/' + id)
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
            :page="page"
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

                <v-btn icon="mdi-plus" variant="flat" />

              </div>

              <v-divider class="my-4" />
            </template>

            <!-- Template for each project -->
            <template #default="{ items }">
              <template v-for="project in items" :key="project.id">
                <v-card @click="selectProject(project.raw.id)" dark>
                  <v-card-title>
                    <div class="d-flex justify-space-between">

                      <div>{{ project.raw.name }}</div>

                      <div class="text-grey-lighten-1 text-sm-body-1">
                        {{ formatGqlDate(project.raw.startDate) + ' - ' + formatGqlDate(project.raw.endDate) }}
                      </div>
                    </div>
                  </v-card-title>

                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <v-chip color="primary" label>Active</v-chip>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </template>
            </template>

            <template #footer>
              <v-divider class="my-4" />

              <v-pagination v-model="page" :length="totalPages" total-visible="10"/>
            </template>
          </v-data-iterator>

        </v-col>
      </v-row>
    </v-container>

  </v-main>
</template>

<style scoped>

</style>
