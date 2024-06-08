<script setup lang="ts">
import { KnownAsset } from '@/gql/graphql'
import { useSprintService } from '@/service/sprint-service'
import AnimalEnclosure from '@/components/animal/AnimalEnclosure.vue'
import { useAppStore } from '@/stores/app-store'
import { useShopService } from '@/service/shop-service'
import { ref } from 'vue'

const props = defineProps<{
  newAsset: KnownAsset | null,
}>()

const { currentSprint } = useSprintService()
const { buyAndPlace, buyAndPlaceMutation } = useShopService()

const xPos = ref(0)
const yPos = ref(0)

function setAssetPosition(x: number, y: number) {
  xPos.value = x
  yPos.value = y
}

function placeAsset() {
  if (!props.newAsset) {
    return
  }
  buyAndPlace(useAppStore().getProjectIdOrThrow(), {
    asset: props.newAsset,
    x: xPos.value,
    y: yPos.value
  })
}
</script>

<template>
  <v-dialog activator="parent" class="w-100 h-100">
    <template #default="{ isActive }">
      <v-card width="800" height="600">
        <v-card-title>
          <h2>Place new asset</h2>
        </v-card-title>
        <v-card-text>
          <animal-enclosure
            :animal="currentSprint?.animal ?? null"
            :percentage-complete="currentSprint?.stats.percentageStoryPointsCompleted ?? 0"
            :placed-assets="currentSprint?.placedAssets ?? []"
            :new-asset-to-place="newAsset"
            @place-asset="setAssetPosition"
          />
        </v-card-text>
        <v-card-actions>

          <v-btn @click="() => isActive.value = false">
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="() => { placeAsset(); isActive.value = false }"
            :loading="buyAndPlaceMutation.loading.value || false"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>

</style>
