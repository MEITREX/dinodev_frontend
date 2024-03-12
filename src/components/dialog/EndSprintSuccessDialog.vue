<script setup lang="ts">

defineProps<{
  activator: string,
}>()
</script>

<template>

  <v-dialog :activator="activator">
    <template #default="{ isActive }">
      <v-card title="End sprint">
        <v-card-text>
          <p>
            Congratulations! You finished all planned 52 story points of this sprint!
            <strong>Luna</strong> is now a permanent member of the zoo!
            You can visit her at any time in the Zoo view or add a friend to her enclosure.
          </p>
          <p>
            Do you want to continue now with sprint retrospective meeting?
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
          >
            Start restrospective
          </v-btn>
          <v-btn>End sprint without retrospective</v-btn>
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
