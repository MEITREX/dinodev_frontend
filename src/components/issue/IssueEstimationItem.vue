<script setup lang="ts">

const props = defineProps<{
  option: {
    label: string
    storyPoints: number
    icon: string
    votes: number
  }
  disabled: boolean
  shouldHighlightAsMostVoted: boolean
  votePercentage: number
}>()

const emit = defineEmits<{
  (e: 'vote', value: string): void
}>()

function submitVote(value: string) {
  emit('vote', value)
}

</script>

<template>
  <v-item v-slot="{ selectedClass, toggle }">
    <v-card
      class="ma-2 flex-grow-1"
      min-height="300"
      @click="() => { if (toggle) toggle(); submitVote(option.label) }"
      :disabled="disabled"
    >
      <div class="w-100 h-100" style="position: relative">
        <div class="fill-percentage"
             :class="{
                          'bg-green': shouldHighlightAsMostVoted,
                          'bg-grey': !shouldHighlightAsMostVoted
                       }"
             :style="{ height: `${votePercentage}%`, transition: 'height 1s' }">

        </div>

        <div class="w-100 h-100 d-flex flex-column align-center justify-center"
             style="position: absolute; top: 0; left: 0"
             :class="selectedClass">

          <v-icon size="70">{{ option.icon }}</v-icon>
          <h1 class="text-lg-h3 mt-4">
            {{ option.label }}
          </h1>
          <p>
            {{ option.storyPoints }} story points
          </p>

        </div>

      </div>

    </v-card>
  </v-item>
</template>

<style scoped>
.fill-percentage {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: height 1s;
}
</style>
