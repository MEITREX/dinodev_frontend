<script setup lang="ts">

import { ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { graphql } from '@/gql'
import { useAppStore } from '@/stores/appStore'
import router from '@/router'

const username = ref('')
const password = ref('')
const valid = ref(false)

const { setUserId } = useAppStore()

const { refetch, onResult } = useQuery(graphql(
  `query pseudoLogin($userId: UUID!) {
    games(userId: $userId) {
      id
      name
    }
  }`
), () => ({ userId: username.value }))

onResult((result) => {
  if (result && result.data) {
    setUserId(username.value)
  }
})

function login() {
  // temp:
  setUserId("0000")
  router.push('/project')
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
                  v-model="username"
                  label="Username"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>

                <v-btn :disabled="!valid" @click="login">Login</v-btn>
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
