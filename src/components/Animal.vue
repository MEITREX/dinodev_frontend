<script setup lang="ts">
import { onMounted, ref } from 'vue'
// import BlueStegosaurusIdle from '@/assets/stegosaurus/__blue_stegasuarus_idle.png'
// import * as spritejs from 'spritejs';
// import { Scene, Sprite } from 'spritejs'
import BlueStegosaurusIdle from '@/assets/stegosaurus/ezgif.com-webp-maker-1.webp'

enum AnimationState {
  IDLE = 'IDLE',
  WALKING = 'WALKING',
}

const state = ref<AnimationState>(AnimationState.IDLE)

// const canvas = ref<HTMLCanvasElement | null>(null)
//
// onMounted(() => {
//   const scene = new Scene({
//     container: canvas.value as HTMLCanvasElement,
//     width: 1000,
//     height: 1000,
//     mode: 'stickyWidth',
//   })
//
//   const layer = scene.layer()
//
//   const imageWidth = 3640
//   const imageHeight = 3755
//
//   const framesX = 4
//   const framesY = 5
//
//   const frameWidth = imageWidth / framesX
//   const frameHeight = imageHeight / framesY
//
//   const stegosaurus = new Sprite({
//     texture: BlueStegosaurusIdle,
//     pos: [0, 0],
//     size: [300, 300],
//     textureRect: [0, 0, frameWidth, frameHeight],
//   })
//
//   layer.append(stegosaurus)
//
//   // animation
//   const frames = []
//   for (let i = 0; i < framesY; i++) {
//     for (let j = 0; j < framesX; j++) {
//       frames.push({ textureRect: [j * frameWidth, i * frameHeight, frameWidth, frameHeight] })
//     }
//   }
//
//   // Animate the sprite
//   stegosaurus.animate(
//     frames,
//     {
//       duration: 10000,
//       iterations: Infinity,
//
//     },
//   )
//
// })


</script>

<template>

  <v-img :src="BlueStegosaurusIdle" height="250" width="250"></v-img>

</template>

<style scoped>

</style>
