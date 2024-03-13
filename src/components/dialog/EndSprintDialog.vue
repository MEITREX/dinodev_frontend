<script setup lang="ts">

import deerFail from '@/assets/deer-fail.jpg'
import deerSuccess from '@/assets/deer-success.jpg'

defineProps<{
  activator: string,
  success: boolean
}>()

function startRetro() {
  console.log('Start retro')
}
</script>

<template>

  <v-dialog :activator="activator" width="700">
    <template #default="{ isActive }">
      <v-card :title="success ? 'Successful sprint!' : 'Luna has to leave the zoo 😢'">
        <v-card-text>

          <v-img :src="success ? deerSuccess : deerFail" height="300" class="my-2" />

          <p v-if="success">
            Congratulations! You finished all planned 52 story points of this sprint!
            <strong>Luna</strong> is now a permanent member of the zoo!
            You can visit her at any time in the Zoo view or add a friend to her enclosure.
          </p>
          <p v-else>
            Oh no! Sadly, you didn't reach the sprint goal of 52 story points.
            <strong>Luna</strong> will have to leave the zoo.
            You can try again in the next sprint.
          </p>
          <p class="mt-1 mb-3">
            Do you want to continue now with a sprint retrospective meeting?
          </p>
          <v-btn block color="primary" @click="startRetro()">
            Start retrospective
          </v-btn>

          <v-btn class="mt-2" block color="white" @click="isActive.value = false">
            End sprint without retrospective
          </v-btn>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="isActive.value = false">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>


    </template>
  </v-dialog>

</template>

<style scoped>

</style>
