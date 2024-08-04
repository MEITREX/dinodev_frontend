<script setup lang="ts">

import { computed } from 'vue'
import { useAuth } from '@/service/use-auth'
import { routes } from '@/router/routes'
import { useGlobalUserService } from '@/service/global-user-service'

const { loading: authLoading } = useAuth()
const { loading: globalUserLoading } = useGlobalUserService()

const loading = computed(() => authLoading.value || globalUserLoading.value)

function redirectToGropius() {
  useAuth().authorizeIfRequired(routes.register)
}

</script>

<template>
  <v-main class="fill-height">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" sm="8" md="4">
          <v-card class="mx-auto my-auto">
            <v-card-title class="justify-center">
              🦖 DinoDev &centerdot; Login with Gropius
            </v-card-title>

            <v-card-text>
              <v-form>
                <v-btn
                  block
                  @click="redirectToGropius"
                  :loading="loading"
                >
                  Login with Gropius
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>

</style>
