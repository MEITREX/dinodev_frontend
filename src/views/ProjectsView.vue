<script setup lang="ts">
import { graphql } from '@/gql'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/appStore'
import { useQuery } from '@vue/apollo-composable'
import { computed, ref } from 'vue'
import router from '@/router'

const { userId, projectId } = storeToRefs(useAppStore())
const { result } = useQuery(graphql(`
  query getGames($userId: UUID!) {
    games(userId: $userId) {
      id
      name
    }
  }
`), () => ({ userId: userId.value }))

const projects = computed(() => {
  return result.value?.games
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
            :items="projects"
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
                />

                <v-btn icon="mdi-plus" variant="flat" />

              </div>

              <v-divider class="my-4" />
            </template>

            <template #default="{ items }">
              <template v-for="item in items" :key="item.id">
                <v-card @click="selectProject(item.raw.id)" dark>
                  <v-card-title>
                    <div class="d-flex justify-space-between">

                      <div>{{ item.raw.name }}</div>

                      <div class="text-grey-lighten-1 text-sm-body-1">
                        Sep 12, 2021 to Sep 19, 2021
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

              <v-pagination v-model="page" :length="3" />
            </template>
          </v-data-iterator>

        </v-col>
      </v-row>
    </v-container>

  </v-main>
</template>

<style scoped>

</style>
