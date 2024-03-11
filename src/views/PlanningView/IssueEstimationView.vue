<script setup lang="ts">

import { nextTick, ref } from 'vue'

const issues = [
  {
    id: 1,
    title: 'Add new feature',
    description: 'Add a new feature to the application'
  },
  {
    id: 2,
    title: 'Fix bug',
    description: 'Fix a bug in the application'
  },
  {
    id: 3,
    title: 'Refactor code',
    description: 'Refactor the code to improve maintainability'
  }
]

const estimationOptions = ref([
  {
    label: 'XS',
    storyPoints: 1,
    icon: 'mdi-ladybug',
    votes: 0
  },
  {
    label: 'S',
    storyPoints: 2,
    icon: 'mdi-peanut',
    votes: 3
  },
  {
    label: 'M',
    storyPoints: 3,
    icon: 'mdi-food-apple',
    votes: 4
  },
  {
    label: 'L',
    storyPoints: 5,
    icon: 'mdi-food-drumstick',
    votes: 2
  },
  {
    label: 'XL',
    storyPoints: 8,
    icon: 'mdi-food-steak',
    votes: 1
  },
  {
    label: 'XXL',
    storyPoints: 13,
    icon: 'mdi-food-turkey',
    votes: 0
  }
])

const totalVotes = () => {
  return estimationOptions.value.reduce((total, option) => total + option.votes, 0)
}

const votePercentage = (votes: number) => {
  if (voteSubmitted.value === false) {
    return 0
  }
  const total = totalVotes()
  return total > 0 ? (votes / total) * 100 : 0
}

const isMostVoted = (option: { votes: number }) => {
  const maxVotes = Math.max(...estimationOptions.value.map(option => option.votes))
  return option.votes === maxVotes
}

const voteSubmitted = ref(false)

function submitVote() {
  voteSubmitted.value = false
  nextTick(() => {
    voteSubmitted.value = true
  })
  console.log('Vote submitted')
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <h3 class="mb-3">Upcoming Issues</h3>

        <div class="d-flex flex-column ga-2">
          <v-card v-for="issue in issues" :key="issue.id">
            <v-card-title>{{ issue.title }}</v-card-title>
            <v-card-text class="text-grey-darken-1 text-truncate">
              {{ issue.description }}
            </v-card-text>
          </v-card>
        </div>
      </v-col>

      <v-col>
        <h3 class="mb-3">Current Issue</h3>

        <v-card>
          <v-card-title>Issue title</v-card-title>
          <v-card-text>
            This is a description of the issue, which is a bit longer than the title.
            It contains all the details about the issue, so the team can estimate it.
            It should provide enough information to make a decision.

            <ul class="ml-5">
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
            </ul>
          </v-card-text>
          <v-card-actions>
            <v-btn>Show in Gropius</v-btn>
            <v-btn prepend-icon="mdi-skip-next">Skip</v-btn>
          </v-card-actions>
        </v-card>

        <h3 class="mb-3">Estimation</h3>

        <!-- T-Shirt sizes as cards -->
        <v-item-group selected-class="border-solid border-lg text-amber">
          <div class="d-flex flex-row justify-space-between">
            <v-item v-for="option in estimationOptions" :key="option.label"
                    v-slot="{ selectedClass, toggle }">
              <v-card class="ma-2 flex-grow-1"
                      min-height="300"
                      @click="toggle"
              >
                <div class="w-100 h-100" style="position: relative">
                  <div class="fill-percentage"
                       :class="{
                          'bg-green': isMostVoted(option),
                          'bg-grey': !isMostVoted(option)
                       }"
                       :style="{ height: `${votePercentage(option.votes)}%`, transition: 'height 1s' }"></div>

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
          </div>

        </v-item-group>

        <div class="d-flex flex-row justify-space-between pa-3">
          <v-btn @click="submitVote">
            Submit estimation
          </v-btn>
          <v-btn v-if="voteSubmitted" @click="voteSubmitted = false">
            Next issue
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
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
