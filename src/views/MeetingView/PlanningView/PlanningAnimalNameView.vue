<script setup lang="ts">

import { ref } from 'vue'

const proposedAnimalName = ref('')

const proposedNameAndVotes = ref<Record<string, number>>({
  'Henry': 1,
  'Herbert': 2,
  'Linda': 4,
  'Ursula': 1
})

function proposeName() {
  if (proposedAnimalName.value) {
    proposedNameAndVotes.value[proposedAnimalName.value] = 0
  }
}

function getPercentage(votes: number) {
  const totalVotes = Object.values(proposedNameAndVotes.value).reduce((acc, curr) => acc + curr, 0)
  return (votes / totalVotes) * 100
}

function isMostVoted(name: string) {
  const votes = proposedNameAndVotes.value[name]
  const maxVotes = Math.max(...Object.values(proposedNameAndVotes.value))
  return votes === maxVotes
}
</script>

<template>
  <h3>
    Let's give the animal a name!
  </h3>
  <v-form>
    <v-text-field
      label="Animal name"
      v-model="proposedAnimalName"
    ></v-text-field>
    <v-btn @click="proposeName">Propose name</v-btn>

    <h3>
      Proposed names
    </h3>
    <v-list>
      <v-list-item
        v-for="(votes, name) in proposedNameAndVotes"
        :key="name"
      >
        <template #prepend>
          <v-list-item-action start>
            <v-btn @click="proposedNameAndVotes[name]++" icon="mdi-thumb-up" variant="flat"
                   class="text-grey"
            />
          </v-list-item-action>
        </template>
        <v-list-item-title>
          {{ name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          <v-row>
            <v-col cols="2">
              {{ votes }} votes
            </v-col>
            <v-col cols="4">
              <v-progress-linear
                height="10"
                :color="isMostVoted(name) ? 'success' : 'grey'"
                :model-value="getPercentage(votes)"
                max="100"
                background-color="white"
              />
            </v-col>
          </v-row>
        </v-list-item-subtitle>

      </v-list-item>
    </v-list>
  </v-form>
</template>

<style scoped>

</style>
