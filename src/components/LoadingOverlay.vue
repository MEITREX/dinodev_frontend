<!--
  This component is used to show a loading overlay with a circular progress bar
  when the loading prop is true.
-->
<script setup lang="ts">
import { useDebounce } from '@vueuse/core'
import { computed } from 'vue'

const props = defineProps<{
  loading: boolean
}>()

const showOverlay = useDebounce(computed(() => props.loading), 200)
</script>

<template>
  <v-overlay
    :model-value="showOverlay"
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
