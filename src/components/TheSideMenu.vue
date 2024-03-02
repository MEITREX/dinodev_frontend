<script setup lang="ts">
import { ref } from 'vue'

const rail = ref(false)

function toggleRail() {
  rail.value = !rail.value
}
</script>

<template>
  <v-navigation-drawer permanent location="right" :rail="rail">
    <v-list>
      <v-list-item
        class="cursor-pointer"
        prepend-avatar="data:image/png;base64,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"
        subtitle="paulbredl@github.com"
        title="Paul"
        @click="toggleRail"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <div class="py-4 d-flex flex-column align-center justify-center">
      <v-progress-circular
        model-value="20"
        :size="rail ? 30 : 160"
        :width="rail ? 3 : 16"
        color="green"
      >
        <div class="d-flex flex-column align-center" v-if="!rail">
          <b>Level 3</b>
          <p class="text-sm-center">3000 XP</p>
        </div>
        <div v-else class="sm">3</div>
      </v-progress-circular>
    </div>

    <v-divider />

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home" to="/"> Home </v-list-item>
      <v-list-item prepend-icon="mdi-account" to="/profile"> Profile </v-list-item>
      <v-list-item prepend-icon="mdi-shopping" to="/store"> Store </v-list-item>
      <v-list-item prepend-icon="mdi-cog" to="/settings"> Settings </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>
