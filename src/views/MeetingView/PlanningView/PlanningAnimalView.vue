<script setup lang="ts">
import DeerMockup from '@/assets/deer-mockup.webp'
import ElephantMockup from '@/assets/elephant mockup.webp'
import ZooMockup from '@/assets/zoo-mockup.webp'
import { computed, ref } from 'vue'

const animals = [
  {
    name: 'Lion',
    emoji: '🦁',
    image: ZooMockup,
    habitat: 'Savannah',
    votes: 5
  }, {
    name: 'Elephant',
    emoji: '🐘',
    image: ElephantMockup,
    habitat: 'Savannah',
    votes: 2
  }, {
    name: 'Deer',
    emoji: '🦌',
    image: DeerMockup,
    habitat: 'Forest',
    votes: 3
  }
]

const selectedPage = ref(0)
const selectedAnimal = computed(() => animals[selectedPage.value])

const userVote = ref<number | null>(null)

function voteForAnimal() {
  if (userVote.value === null) {
    selectedAnimal.value.votes++
    userVote.value = selectedPage.value
  } else {
    selectedAnimal.value.votes--
    userVote.value = null
  }
}
</script>

<template>

  <h3>
    Choose the animal for the sprint!
  </h3>

  <v-carousel v-model="selectedPage">
    <v-carousel-item
      v-for="animal in animals"
      :key="animal.name"
      :src="animal.image"
    >
      <v-sheet
        class="d-flex flex-row justify-end align-start bg-transparent"
      >
        <v-chip size="x-large">
          {{ animal.votes }} votes
        </v-chip>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <div class="d-flex align-center w-100">
    <v-avatar size="25">
      {{ selectedAnimal.emoji }}
    </v-avatar>
    <v-card-title class="white--text">
      {{ selectedAnimal.name }}
    </v-card-title>
    <v-card-subtitle class="white--text">
      Habitat: {{ selectedAnimal.habitat }}
    </v-card-subtitle>
  </div>

  <v-btn size="x-large" class="ma-2" width="400"
         :color="userVote === null ? 'white' : 'success'"
         @click="voteForAnimal"
         :prepend-icon="userVote === null ? 'mdi-thumb-up' : 'mdi-check'"
  >
    <span v-if="userVote == null">
      Vote for {{ selectedAnimal.name }}
    </span>
    <span v-else>
      Voted for {{ animals[userVote].name }}
    </span>
    <v-chip class="ml-2" size="small" v-if="userVote == null">
      {{ selectedAnimal.votes }}
    </v-chip>
    <v-chip class="ml-2" size="small" v-else>
      {{ animals[userVote].votes }}
    </v-chip>
  </v-btn>
</template>

<style scoped>

</style>
