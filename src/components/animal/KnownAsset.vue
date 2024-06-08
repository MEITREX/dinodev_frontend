<script setup lang="ts">

import { KnownAsset } from '@/gql/graphql'

import Cave from '@/assets/cave.png'
import Trees from '@/assets/trees.png'
import Bushes1 from '@/assets/bushes1.png'
import Pond from '@/assets/pond.png'

const props = defineProps<{
  asset: KnownAsset | null
  fixedWidth?: number
  fixedHeight?: number
}>()

function getImg(asset: KnownAsset) {
  switch (asset) {
    case KnownAsset.Cave:
      return Cave
    case KnownAsset.Trees:
      return Trees
    case KnownAsset.Bushes_1:
      return Bushes1
    case KnownAsset.WaterPuddle:
      return Pond
    default:
      return Cave
  }
}

function getWidth(asset: KnownAsset) {
  if (props.fixedWidth) {
    return props.fixedWidth
  }
  switch (asset) {
    case KnownAsset.Cave:
      return 200
    case KnownAsset.Trees:
      return 200
    case KnownAsset.WaterPuddle:
      return 250
    default:
      return 100
  }
}
</script>

<template>

  <v-img
    v-if="asset"
    :src="getImg(asset)" :width="getWidth(asset)" :height="fixedHeight"></v-img>
</template>

<style scoped>

</style>
