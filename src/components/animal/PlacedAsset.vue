<script setup lang="ts">
import KnownAsset from '@/components/animal/KnownAsset.vue'
import type { KnownAsset as KnownAssetType } from '@/gql/graphql'

const props = defineProps< {
  asset: KnownAssetType | null,
  x: number,
  y: number
}>()

</script>

<template>
  <!-- the x and y coordinates represent the center, so we need to adjust the position in style -->
  <known-asset
    :asset="props.asset"
    style="position: absolute"
    :style="{left: `${props.x}px`, top: `${props.y}px`, transform: 'translate(-50%, -50%)', 'z-index': 1}"
  />
</template>

<style scoped>

</style>
