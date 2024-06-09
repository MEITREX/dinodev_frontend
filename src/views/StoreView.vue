<script setup lang="ts">

import { useShopService } from '@/service/shop-service'
import { useAppTitle } from '@/stores/app-title'
import { onMounted } from 'vue'
import KnownAsset from '@/components/animal/KnownAsset.vue'
import PlaceNewAssetDialog from '@/components/animal/PlaceNewAssetDialog.vue'
import { useSprintService } from '@/service/sprint-service'

onMounted(() => {
  useAppTitle().setAppTitle('Store')
})

const { shopItems } = useShopService()

function getColor(item: any) {
  if (item.price <= 150) {
    return 'success'
  } else if (item.price <= 200) {
    return 'warning'
  } else if (item.price <= 250) {
    return 'error'
  } else {
    return 'purple'
  }
}

const { currentSprint } = useSprintService()

</script>

<template>

  <div v-if="currentSprint" class="pa-5 d-flex flex-row flex-wrap ga-2">
      <div v-for="item in shopItems" :key="item.id">
        <v-card width="400" height="300">
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-text class="d-flex align-center">
            <known-asset :asset="item.image" :fixed-height="180"></known-asset>
          </v-card-text>
          <v-card-actions>
            <v-btn
              :color="getColor(item)"
              block
              variant="tonal"
            >
                {{ item.price }} 💎 &centerdot; Buy

              <place-new-asset-dialog :new-asset="item.image" />
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
  </div>

  <div class="pa-5" v-else>
    <v-alert>
      <p>
        You need to start a sprint to access the store.
      </p>
    </v-alert>

  </div>

</template>

<style scoped>

</style>
