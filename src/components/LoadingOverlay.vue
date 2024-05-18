<!--
  This component is used to show a loading overlay with a circular progress bar
  when the loading prop is true.
-->
<script setup lang="ts">
defineProps<{
  loading: boolean
}>()
</script>

<template>
  <v-overlay
    :model-value="loading"
    class="align-center justify-center"
  >
    <v-progress-circular
      color="primary"
      size="64"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
</template>

<style scoped>

</style>
