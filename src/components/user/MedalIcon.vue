<script setup lang="ts">
defineProps<{
  medal: string
  number: number
}>()
</script>

<template>

  <v-card class="pa-3 d-flex flex-column align-center justify-center" width="80" height="80">
    <p class="text-h4">{{medal}}</p>
    <p
      class="text-sm-h6 font-weight-bold"
      :class=" { 'text-grey-lighten-3': number <= 0 }"
    >{{number}}</p>
  </v-card>
</template>

<style scoped>

</style>
