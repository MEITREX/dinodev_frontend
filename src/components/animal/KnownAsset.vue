<script setup lang="ts">

import { KnownAsset } from '@/gql/graphql'

import Cave from '@/assets/cave.png'
import Trees from '@/assets/trees.png'
import Bushes1 from '@/assets/bushes1.png'
import Bushes2 from '@/assets/bushes2.png'
import Pond from '@/assets/pond.png'
import BoxWithFood from '@/assets/box-with-food.png'
import Flowers from '@/assets/flowers.png'
import TreeWithRocks from '@/assets/tree-with-rocks.png'

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
    case KnownAsset.Bushes_2:
      return Bushes2
    case KnownAsset.WaterPuddle:
      return Pond
    case KnownAsset.FeedingTrough:
      return BoxWithFood
    case KnownAsset.Flowers:
      return Flowers
    case KnownAsset.TreeWithRocks:
      return TreeWithRocks
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
      return 240
    case KnownAsset.Trees:
      return 250
    case KnownAsset.WaterPuddle:
      return 260
    case KnownAsset.Bushes_1:
      return 150
    case KnownAsset.Bushes_2:
      return 140
    case KnownAsset.FeedingTrough:
      return 150
    case KnownAsset.Flowers:
      return 190
    case KnownAsset.TreeWithRocks:
      return 300
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
