<script setup lang="ts">
defineProps({
  icon: String,
  text: String,
  repositories: Array<{ name: string; url: string }>
})
</script>

<template>
  <v-btn>
    <template #prepend>
      <slot name="icon">
        <v-icon>{{ icon }}</v-icon>
      </slot>
    </template>
    <template #append>
      <v-icon>mdi-menu-down</v-icon>
    </template>

    {{ text }}

    <v-menu activator="parent">
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
