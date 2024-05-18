<script setup lang="ts">

import { computed, ref } from 'vue'

type Issue = {
  id: number
  title: string
  description: string
  storyPoints: number
}

const backlogIssues = ref<Array<Issue>>([
  {
    id: 1,
    title: 'Add new feature',
    description: 'Add a new feature to the application',
    storyPoints: 3
  },
  {
    id: 2,
    title: 'Fix bug',
    description: 'Fix a bug in the application',
    storyPoints: 5
  },
  {
    id: 3,
    title: 'Refactor code',
    description: 'Refactor the code to improve maintainability',
    storyPoints: 1
  },
  {
    id: 4,
    title: 'Improve performance',
    description: 'Improve the performance of the application',
    storyPoints: 8
  },
  {
    id: 5,
    title: 'Add new feature',
    description: 'Add a new feature to the application',
    storyPoints: 3
  },
  {
    id: 6,
    title: 'Fix bug',
    description: 'Fix a bug in the application',
    storyPoints: 5
  },
  {
    id: 7,
    title: 'Refactor code',
    description: 'Refactor the code to improve maintainability',
    storyPoints: 1
  },
  {
    id: 8,
    title: 'Improve performance',
    description: 'Improve the performance of the application',
    storyPoints: 8
  }
])

const sprintGoal = ref<Array<Issue>>([])

function getEmoji(storyPoints: number) {
  if (storyPoints <= 2) {
    return '🐞'
  } else if (storyPoints <= 3) {
    return '🥜'
  } else if (storyPoints <= 5) {
    return '🍏'
  } else if (storyPoints <= 8) {
    return '🍗'
  } else {
    return '🦃'
  }
}

const storyPointLimit = ref(20)
const sprintGoalStoryPoints = computed(() =>
  sprintGoal.value.reduce((total, issue) => total + issue.storyPoints, 0))
const sliderMax = ref(25)

const tickLabels = ref({
  21: 'Last sprint',
  19.2: 'Average',
})

const dragStart = (event: DragEvent, task: any) => {
  event.dataTransfer?.setData('issue', JSON.stringify(task))
}
const dropIssue = (event: DragEvent, to: 'goal' | 'backlog') => {
  const issue = JSON.parse(event.dataTransfer?.getData('issue') || '{}')
  if (to === 'goal') {
    sprintGoal.value.push(issue)
    backlogIssues.value = backlogIssues.value.filter((i) => i.id !== issue.id)
  } else {
    backlogIssues.value.push(issue)
    sprintGoal.value = sprintGoal.value.filter((i) => i.id !== issue.id)
  }
}
</script>

<template>
  <h3>
    Sprint goal
  </h3>

  <h4>Backlog issues</h4>
  <v-sheet
    class="ma-1 pa-3 rounded"
    color="grey-lighten-3"
    min-height="200px"
    @dragover.prevent
    @drop="(e: DragEvent) => dropIssue(e, 'backlog')"
  >
    <div class="d-flex flex-row ga-3">
      <v-card
        v-for="issue in backlogIssues"
        :key="issue.id"
        draggable="true"
        @dragstart="(e: DragEvent) => dragStart(e, issue)"
      >
        <v-card-title>{{ issue.title }}</v-card-title>
        <v-card-text class="text-grey-darken-1">
          <v-chip color="primary" class="ml-2">
            {{ issue.storyPoints }} SP
          </v-chip>
          <v-chip class="ml-2">
            {{ getEmoji(issue.storyPoints) }}
          </v-chip>
        </v-card-text>
      </v-card>
    </div>
  </v-sheet>

  <h4>Sprint goal</h4>
  <v-sheet
    class="ma-1 pa-0 rounded"
    color="grey-lighten-3"
    min-height="200px"
    @dragover.prevent
    @drop="(e: DragEvent) => dropIssue(e, 'goal')"
  >
    <div class="d-flex flex-row ga-3 pa-3">
      <v-card
        v-for="issue in sprintGoal"
        :key="issue.id"
        draggable="true"
        @dragstart="(e: DragEvent) => dragStart(e, issue)"
      >
        <v-card-title>{{ issue.title }}</v-card-title>
        <v-card-text class="text-grey-darken-1">
          <v-chip color="primary" class="ml-2">
            {{ issue.storyPoints }} SP
          </v-chip>
          <v-chip class="ml-2">
            {{ getEmoji(issue.storyPoints) }}
          </v-chip>
        </v-card-text>
      </v-card>
    </div>

    <div v-if="sprintGoal.length === 0" class="d-flex justify-center text-grey align-center w-100">
      Drop issues here to set the sprint goal
    </div>
  </v-sheet>

  <h4>
    Sprint capacity
  </h4>
  <v-progress-linear
    class="ma-1"
    height="15"
    :model-value="sprintGoalStoryPoints"
    :max="sliderMax"
    :color="sprintGoalStoryPoints > storyPointLimit ? 'red' : 'success'"
  ></v-progress-linear>

  <h4>
    Story point limit
  </h4>
  <v-slider
    v-model="storyPointLimit"
    :max="sliderMax"
    color="primary"
    class="ma-1"
    thumb-label="always"
    step="1"
    :ticks="tickLabels"
    show-ticks
  >
    <template #thumb-label="{ modelValue }">
      <div style="min-width: 35px">{{ modelValue }} SP</div>
    </template>
  </v-slider>


  <!--  <v-row>-->
  <!--    <v-col cols="2">-->
  <!--      <div class="d-flex flex-column ga-2">-->
  <!--        <v-card-->
  <!--          v-for="issue in issues"-->
  <!--          :key="issue.id"-->
  <!--          draggable="true"-->
  <!--        >-->
  <!--          <v-card-title>{{ issue.title }}</v-card-title>-->
  <!--          <v-card-text class="text-grey-darken-1">-->
  <!--            <v-chip color="primary" class="ml-2">-->
  <!--              {{ issue.storyPoints }} SP-->
  <!--            </v-chip>-->
  <!--            <v-chip class="ml-2">-->
  <!--              {{ getEmoji(issue.storyPoints) }}-->
  <!--            </v-chip>-->
  <!--          </v-card-text>-->
  <!--        </v-card>-->
  <!--      </div>-->
  <!--    </v-col>-->

  <!--    <v-col cols="10">-->
  <!--      <div class="bg-grey d-flex flex-column justify-center align-center rounded-lg">-->
  <!--        <span>-->
  <!--          Drag and drop issues to set the sprint goal-->
  <!--        </span>-->
  <!--      </div>-->

  <!--      <h3>-->
  <!--        Story point limit-->
  <!--      </h3>-->
  <!--      <v-slider-->
  <!--        v-model="storyPointLimit"-->
  <!--        :max="20"-->
  <!--        color="primary"-->
  <!--      ></v-slider>-->

  <!--      <h3>-->
  <!--        Total story points-->
  <!--      </h3>-->
  <!--      <v-progress-linear-->
  <!--        :value="issues.reduce((total, issue) => total + issue.storyPoints, 0)"-->
  <!--        :max="storyPointLimit"-->
  <!--        color="primary"-->
  <!--      ></v-progress-linear>-->

  <!--    </v-col>-->
  <!--  </v-row>-->
</template>

<style scoped>

</style>
