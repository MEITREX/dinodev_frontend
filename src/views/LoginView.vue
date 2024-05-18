<script setup lang="ts">

import { computed, ref } from 'vue'
import { useAuth } from '@/service/use-auth'
import router from '@/router'
import { routes } from '@/router/routes'
import { useGlobalUserService } from '@/service/global-user-service'
import { useErrorManager } from '@/utils/error-manager'

// form data
const credentials = ref({
  username: '',
  password: ''
})
const valid = ref(false)

const { login, loading: authLoading } = useAuth()
const { refetchUser, loading: globalUserLoading } = useGlobalUserService()

const loading = computed(() => authLoading.value || globalUserLoading.value)

function tryLogin() {
  login(credentials.value.username, credentials.value.password)
    .then(() => nextPage())
    .catch(useErrorManager().catchError)
}

async function nextPage() {
  console.info("Logged in", useAuth().isLoggedIn())
  const user = await refetchUser()
  console.info('User:', user)
  if (user !== null) {
    await router.push(routes.projects)
  } else {
    await router.push(routes.register)
  }
}

</script>

<template>
  <v-main class="fill-height">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" sm="8" md="4">
          <v-card class="mx-auto my-auto">
            <v-card-title class="justify-center">
              ScrumZoo
            </v-card-title>

            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="credentials.username"
                  label="Username"
                  required
                />

                <v-text-field
                  v-model="credentials.password"
                  label="Password"
                  type="password"
                  @keydown.enter="tryLogin"
                  required
                />

                <v-btn
                  :disabled="!valid"
                  @click="tryLogin"
                  :loading="loading"
                >
                  Login
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
