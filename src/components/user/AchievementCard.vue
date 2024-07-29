<!--
Card that displays a specific achievement of a user and their progress.
-->
<script setup lang="ts">
import type { UserInProjectFragment } from '@/gql/graphql'

defineProps<{
  achievementProgress: UserInProjectFragment['achievements']['0']
}>()
</script>

<template>
 <v-card
   width="500"
   :title="achievementProgress.achievement.icon?.emoji + ' ' + achievementProgress.achievement.name"
   :subtitle="achievementProgress.achievement.description"
   :style="{ 'filter': achievementProgress.achieved ? 'grayscale(0%)' : 'grayscale(100)' }"
   :append-icon="achievementProgress.achieved ? 'mdi-check' : ''"
 >
   <v-card-text>
    <v-progress-linear
      :model-value="achievementProgress.progress"
      :max="achievementProgress.achievement.goal"
      color="success"
    ></v-progress-linear>
   </v-card-text>
 </v-card>
</template>

<style scoped>

</style>
