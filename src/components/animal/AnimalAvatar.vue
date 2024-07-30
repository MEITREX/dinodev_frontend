<script setup lang="ts">
import { Animal } from '@/gql/graphql'
import Dodo from '@/assets/dodo.png'
import Triceratops from '@/assets/triceratops.png'
import TRex from '@/assets/trex.png'
import Parasaurolophus from '@/assets/parasaurolophus.png'

defineProps<{ animal: Animal, size: number }>()

function getImg(animal: Animal) {
  switch (animal) {
    case Animal.Dodo:
      return Dodo
    case Animal.Triceratops:
      return Triceratops
    case Animal.Trex:
      return TRex
    case Animal.Parasaurolophus:
      return Parasaurolophus
  }
}
</script>

<template>
<v-avatar :image="getImg(animal)" :size="size" :rounded="false"></v-avatar>
</template>

<style scoped>

</style>
