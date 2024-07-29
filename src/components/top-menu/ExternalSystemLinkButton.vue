<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  icon: String,
  text: String,
  repositories: Array<{ name: string; url: string }>
})

const numberOfRepositories = computed(() => props.repositories?.length ?? 0)
</script>

<template>
  <v-btn>
    <template #prepend>
      <slot name="icon">
        <v-icon>{{ icon }}</v-icon>
      </slot>
    </template>
    <template #append>
      <v-icon v-if="numberOfRepositories > 1">
        mdi-menu-down
      </v-icon>
    </template>

    <span v-if="numberOfRepositories !== 1"> {{ text }} </span>

    <a
      v-else-if="numberOfRepositories === 1"
       :href="repositories!![0].url"
      target="_blank" class="text-black"
    >
      {{ repositories!![0].name }}
    </a>

    <v-menu activator="parent" v-if="numberOfRepositories > 1">
      <v-list>
        <v-list-item v-for="(repo, index) in repositories" :key="index" :value="index">
          <v-list-item-title>
            <slot name="prepend">
              <v-icon class="mr-2">{{ icon }}</v-icon>
            </slot>
            <a :href="repo.url" target="_blank" class="text-black">
              {{ repo.name }}
            </a>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>

<style scoped></style>
