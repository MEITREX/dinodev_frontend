<script setup lang="ts">

import { computed, ref } from 'vue'
import { useAuth } from '@/composables/use-auth'
import router from '@/router'
import { routes } from '@/router/routes'
import { graphql } from '@/gql'

const username = ref('')

const valid = computed(() => {
  return username.value.length > 0
})


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

                <v-btn :disabled="!valid">Create Profile</v-btn>
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
