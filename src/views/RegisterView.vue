<!--
View to register as a new user in DinoDev. A Gropius account is required to register.
-->
<script setup lang="ts">

import { onMounted, ref, watch } from 'vue'
import router from '@/router'
import { routes } from '@/router/routes'
import type { CreateGlobalUserInput } from '@/gql/graphql'
import { useGlobalUserService } from '@/service/global-user-service'
import { useErrorManager } from '@/utils/error-manager'

const { registerUser, loading, currentImsUserData } = useGlobalUserService()

const user = ref<CreateGlobalUserInput>({
  username: '',
  avatar: undefined,
  vcsUserId: ''
})

onMounted(() => {
  user.value.username = currentImsUserData.value?.username ?? ''
  user.value.avatar = currentImsUserData.value?.avatar ?? undefined
})

watch(currentImsUserData, (newVal) => {
  if (newVal?.username) user.value.username = newVal.username
  if (newVal?.avatar) user.value.avatar = newVal.avatar
}, { immediate: true })

const valid = ref(false)

function registerUserButtonClicked() {
  // fetch github api to check if username exists
  fetch(`https://api.github.com/users/${user.value.vcsUserId}`)
    .then(response => {
      if (!response.ok) {
        const error = new Error('Could not find user with that username.')
        useErrorManager().catchError(error)
        throw error
      }
    })
    .then(() => registerUser(user.value))
    .then(() => router.push(routes.projects))
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()

  const files = event.dataTransfer?.files
  if (!files || files.length === 0) return

  const file = files[0]
  if (!file.type.startsWith('image/')) return

  const maxSize = 2000 * 1024
  if (file.size > maxSize) {
    useErrorManager().catchError('File size too large. Max size is 2MB.')
  }

  const reader = new FileReader()
  reader.onloadend = () => {
    user.value.avatar = reader.result as string
  }
  reader.readAsDataURL(file)
}

</script>

<template>
  <v-main class="fill-height">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" sm="8" md="4">
          <v-card class="mx-auto my-auto">
            <v-card-title class="justify-center">
              🦖 DinoDev &centerdot; Create DinoDev Profile
            </v-card-title>
            <v-card-text>
              <v-form class="py-3" ref="form" v-model="valid">

                <div class="w-100 h-100 d-flex align-center justify-center">
                  <v-avatar
                    :image="user.avatar ?? undefined"
                    text="Drop image here"
                    size="200"
                    id="drop-area"
                    @dragover.prevent
                    @drop="handleDrop"
                    style="border: 2px dashed #ccc; width: 200px; height: 200px; text-align: center; line-height: 180px;"
                  />
                </div>
                <div class="w-100 d-flex flex-row justify-center mt-1 mb-5">
                  <span class="text-subtitle-2">
                    Drop image here...
                  </span>
                </div>

                <!-- on enter, focus next field -->
                <v-text-field
                  v-model="user.username"
                  label="Username"
                  required
                  :rules="[v => !!v || 'Username is required']"
                ></v-text-field>

                <v-text-field
                  v-model="user.vcsUserId"
                  label="GitHub Username"
                  required
                  :rules="[v => !!v || 'GitHub username is required']"
                  @keydown.enter="registerUserButtonClicked">

                </v-text-field>

                <div class="text-sm-body-2">
                  Your Github name will be used to match your pull requests with your DinoDev profile.
                </div>

                <v-btn
                  class="mt-3"
                  :disabled="!valid"
                  :loading="loading"
                  @click="registerUserButtonClicked"
                >
                  Create DinoDev Profile
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
