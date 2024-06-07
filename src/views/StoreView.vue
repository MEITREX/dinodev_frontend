<script setup lang="ts">

import { ref } from 'vue'

type ShopItem = {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
  type: 'animal' | 'decoration'
}

const decorations = ref<ShopItem[]>(
  [
    {
      id: '1',
      name: 'Fountain',
      price: 1000,
      description: 'A beautiful fountain for your zoo',
      imageUrl: 'https://krita-artists.org/uploads/default/original/3X/b/8/b8f1148ff90540536a9f4ce40922ecbec324b85f.gif',
      type: 'decoration'
    },
    {
      id: '2',
      name: 'Palm Tree',
      price: 500,
      description: 'A beautiful palm tree for your zoo',
      imageUrl: 'https://www.pngkit.com/png/detail/184-1847908_palm-tree-by-benthedwarf-on-deviantart-pixel-art.png',
      type: 'decoration'
    },
    {
      id: '3',
      name: 'Rock',
      price: 100,
      description: 'A beautiful rock for your zoo',
      imageUrl: 'data:image/jpeg;base64,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',
      type: 'decoration'
    }
  ]
)

const animals = ref<ShopItem[]>([
  {
    id: '4',
    name: 'Elephant',
    price: 10000,
    description: 'A beautiful elephant for your zoo',
    imageUrl: 'https://images.unsplash.com/photo-1612830725323-3e3e3e3e3e3e',
    type: 'animal'
  },
  {
    id: '5',
    name: 'Giraffe',
    price: 5000,
    description: 'A beautiful giraffe for your zoo',
    imageUrl: 'https://images.unsplash.com/photo-1612830725323-3e3e3e3e3e3e',
    type: 'animal'
  },
  {
    id: '6',
    name: 'Lion',
    price: 1000,
    description: 'A beautiful lion for your zoo',
    imageUrl: 'https://images.unsplash.com/photo-1612830725323-3e3e3e3e3e3e',
    type: 'animal'
  },
  {
    id: '7',
    name: 'Penguin',
    price: 500,
    description: 'A beautiful penguin for your zoo',
    imageUrl: 'https://img.itch.zone/aW1hZ2UvODQ4NzAyLzQ3NjUzODMucG5n/347x500/kRaoKr.png',
    type: 'animal'
  },
  {
    id: '8',
    name: 'Tiger',
    price: 100,
    description: 'A beautiful tiger for your zoo',
    imageUrl: 'https://images.unsplash.com/photo-1612830725323-3e3e3e3e3e3e',
    type: 'animal'
  }
])
</script>

<template>
  TODO

</template>

<style scoped>

</style>
