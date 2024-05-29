<script setup lang="ts">
import { Animal } from '@/gql/graphql'
import Dodo from '@/assets/dodo.png'
import Triceratops from '@/assets/triceratops.png'
import TRex from '@/assets/trex.png'

defineProps<{ animal: Animal }>()

function getImg(animal: Animal) {
  switch (animal) {
    case Animal.Dodo:
      return Dodo
    case Animal.Triceratops:
      return Triceratops
    case Animal.Trex:
      return TRex
  }
}
</script>

<template>
  <v-carousel-item
    :src="getImg(animal)"
  >
  </v-carousel-item>
</template>

<style scoped>

</style>
