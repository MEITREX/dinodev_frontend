<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'
import MarkdownItTaskLists from 'markdown-it-task-lists'


defineProps<{
  markdownText: string
}>()

const plugins = [
  MarkdownItTaskLists
]
</script>

<template>
  <v-card class="w-100 px-3">
    <v-card-text class="pl-0">
      <div class="text-body-3 ">
        <vue-markdown class="markdown" :source="markdownText" :plugins="plugins" :options="{ breaks: true, html: true, typographer: true}"/>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
:deep(.contains-task-list) {
  list-style-type: none;
  padding-left: 25px;
  margin-left: 0;
}
</style>
