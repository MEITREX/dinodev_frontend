<script setup lang="ts">

import { useShopService } from '@/service/shop-service'
import { useAppTitle } from '@/stores/app-title'
import { onMounted } from 'vue'
import KnownAsset from '@/components/animal/KnownAsset.vue'
import PlaceNewAssetDialog from '@/components/animal/PlaceNewAssetDialog.vue'

onMounted(() => {
  useAppTitle().setAppTitle('Store')
})

const { shopItems } = useShopService()

function getColor(item: any) {
  if (item.price <= 100) {
    return 'grey'
  } else if (item.price <= 150) {
    return 'success'
  } else if (item.price <= 200) {
    return 'warning'
  } else if (item.price <= 250) {
    return 'error'
  } else {
    return 'purple'
  }
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}
</script>

<template>
  <div class="pa-5 d-flex flex-row flex-wrap ga-2">
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

</template>

<style scoped>

</style>
