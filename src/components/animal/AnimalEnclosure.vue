<script setup lang="ts">

import { isPresent } from '@/utils/types'
import type { Animal, KnownAsset as KnownAssetType } from '@/gql/graphql'
import AnimalAvatar from '@/views/MeetingView/PlanningView/AnimalAvatar.vue'
import type { PlacedAssetType } from '@/service/sprint-service'
import PlacedAsset from '@/components/animal/PlacedAsset.vue'
import { refDebounced, useMouse, watchImmediate } from '@vueuse/core'
import { computed, ref, watch, watchEffect } from 'vue'

const props = defineProps<{
  animal: Animal | null
  percentageComplete: number,
  placedAssets: readonly PlacedAssetType[],

  newAssetToPlace?: KnownAssetType | null
}>()

const emit = defineEmits<{
  (e: 'place-asset', x: number, y: number): void
}>()

const { x: mouseX, y: mouseY } = useMouse()
const fixedPosition = ref<null | { x: number, y: number }>(null)

const enclosure = ref<HTMLElement | null>(null)

// compute relative position of mouse in enclosure
const mousePosition = computed(() => {
  if (fixedPosition.value) {
    return fixedPosition.value
  }
  if (!enclosure.value) {
    return { x: 0, y: 0 }
  }

  const rect = enclosure.value.getBoundingClientRect()

  // 0,0 is top left, remove negative values and remove values greater then the width/height
  const x = Math.max(0, Math.min(mouseX.value - rect.left, rect.width))
  const y = Math.max(0, Math.min(mouseY.value - rect.top, rect.height))

  // otherwise, no scaling
  return { x, y }

})

function setAssetPosition() {
  const { x, y } = mousePosition.value
  fixedPosition.value = { x, y }
  emit('place-asset', x, y)
}


</script>

<template>
  <div
    style="position: relative; height: 430px; width: 500px; overflow: hidden"
    ref="enclosure"
    class="rounded-xl"
    @click="setAssetPosition"
  >
    <img src="../../assets/background.png"
         alt="background"
         class="h-100 w-100 rounded-xl"
         style="position: absolute; z-index: 0; object-fit: cover; object-position: bottom; width: 500px; height: 300px;"
    />

    <placed-asset
      v-for="placedAsset in placedAssets"
      :key="placedAsset.asset"
      :asset="placedAsset.asset"
      :x="placedAsset.x"
      :y="placedAsset.y"></placed-asset>

    <placed-asset v-if="newAssetToPlace"
                  :asset="newAssetToPlace"
                  :x="mousePosition.x"
                  :y="mousePosition.y">

    </placed-asset>

    <div class="h-100 w-100 d-flex flex-column justify-end align-center" style="position: absolute; bottom: 100px">
      <!-- scale avatar by percentage complete -->
      <animal-avatar
        :size="50 + 100 * percentageComplete"
        :animal="animal"
        v-if="isPresent(animal)"
        style="z-index: 10; position: absolute"/>
    </div>
  </div>
</template>

<style scoped>

</style>
