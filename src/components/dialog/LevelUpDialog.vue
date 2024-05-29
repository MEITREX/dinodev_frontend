<script setup lang="ts">

defineProps<{
  activator: string
}>()
</script>

<template>

  <v-dialog :activator="activator" width="600">
    <template #default="{ isActive }">
      <v-card>
        <v-card-title>
          <h3>Level up!</h3>
        </v-card-title>
        <v-card-text>
          <p>
            You have reached level 4! You get the following rewards:
          </p>
          <v-card class="mt-4">
            <v-card-title>
              <h3>New animal: Elephant</h3>
            </v-card-title>
            <v-card-text>
              <p>
                You have unlocked the elephant animal for your zoo!
              </p>
            </v-card-text>
          </v-card>

          <v-card class="mt-4">
            <v-card-title>
              <h3>New decoration: Fountain</h3>
            </v-card-title>
            <v-card-text>
              <p>
                You have unlocked the fountain decoration for your zoo!
              </p>
            </v-card-text>
          </v-card>

          <v-card class="mt-4">
            <v-card-title>
              <h3>500 💎</h3>
            </v-card-title>
            <v-card-text>
              <p>
                You have received 500💎! Don't spend it all at once!
              </p>
            </v-card-text>
          </v-card>

        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="isActive.value = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>

</style>
