<!--
View that displays statistics about the team's sprints, including sprint velocity,
average story points per issue, and a simple burndown chart.
-->
<script setup lang="ts">
import { useAppTitle } from '@/stores/app-title'
import { computed, onMounted } from 'vue'
import { useSprintService } from '@/service/sprint-service'
import AnimalAvatar from '@/views/MeetingView/PlanningView/AnimalAvatar.vue'
import { isPresent, type Maybe } from '@/utils/types'
import { type DefaultSprintFragment, SprintSuccessState } from '@/gql/graphql'

onMounted(() => {
  useAppTitle().setAppTitle('Sprint Stats')
})

const { allSprints, currentSprint } = useSprintService()

const velocityValues = computed(() => allSprints.value.map(sprint => sprint.stats.totalStoryPoints))
const averageSpValues = computed(() => allSprints.value.map(sprint => sprint.stats.averageStoryPoints))

function wasSuccessful(sprint: Maybe<DefaultSprintFragment>): boolean {
  if (!sprint) return false
  return sprint.stats.successState === SprintSuccessState.Success
    || sprint.stats.successState === SprintSuccessState.SuccessWithGoldChallenge
    || false
}

function roundValue(value: string): number {
  const numericValue = parseFloat(value)
  if (isNaN(numericValue)) return 0
  // round to two decimal places
  return Math.round(numericValue * 100) / 100
}
</script>

<template>
  <v-row class="pa-3 mr-1">
    <v-col>
      <h2>Sprint velocity</h2>
      <v-card>
        <v-sparkline
          v-if="velocityValues.length > 0"
          class="pa-3"
          :model-value="velocityValues"
          auto-draw
          smooth
          padding="15"
          type="trend"
          show-labels
          :gradient="['#f72047', '#ffd200', '#1feaea'].reverse()"
        >
          <template #label="{ index, value }">
            {{ index + 1 }} ({{ roundValue(value) }} SP)
          </template>
        </v-sparkline>
      </v-card>
      <p class="py-2">
        The sprint velocity chart shows the total number of story points completed in each sprint.
        Ideally, the chart should show an upward trend, indicating that the team is becoming more efficient.
      </p>
    </v-col>
    <v-col>
      <h2>Average story points per issue</h2>

      <v-card>
        <v-sparkline
          v-if="averageSpValues.length > 0"
          class="pa-3"
          :model-value="averageSpValues"
          auto-draw
          smooth
          padding="20"
          type="trend"
          show-labels
          :color="'#1f69d7'"
        >
          <template #label="{ index, value }">
            {{ index + 1 }} ({{ roundValue(value)  }} SP)
          </template>
        </v-sparkline>
      </v-card>

      <p class="py-2">
        The average story points per issue chart shows the average number of story points per issue completed in each
        sprint.
        A consistent average indicates that the team is estimating issues correctly.
      </p>

    </v-col>
  </v-row>
  <v-row class="pa-3 mr-1">
    <v-col>
      <h2>
        Current sprint: Burndown chart
      </h2>
      <v-card>
        <v-sparkline
          v-if="currentSprint?.stats?.burnDown"
          :model-value="currentSprint?.stats?.burnDown"
          class="pa-3"
          auto-draw
          smooth
          padding="20"
          type="trend"
          show-labels
          :min="0"
          :max="currentSprint?.storyPointsPlanned ?? undefined"
          :gradient="['#f72047', '#ffd200', '#1feaea']"
        >
          <template #label="{ index }">
            {{ index + 1 }}
          </template>
        </v-sparkline>
      </v-card>
      <p class="py-2">
        The burndown chart shows the total number of story points completed in the current sprint.
        The chart should ideally show a downward trend, indicating that the team is on track to complete all planned
        story points.
      </p>
    </v-col>
    <v-col></v-col>
  </v-row>

  <v-row class="pa-3 mr-1">
    <v-col>
      <h2>
        Previous sprints
      </h2>
      <div class="d-flex flex-row ga-2 flex-wrap">
        <v-card
          width="300px"
          v-for="sprint in allSprints"
          :key="sprint.id"
          class="pa-3"
        >
          <h5>
            Sprint {{ sprint.number }}
            <span v-if="sprint.name">- {{ sprint.name }}</span>
          </h5>
          <v-row>
            <v-col>
              <animal-avatar :size="55" :animal="sprint.animal" v-if="isPresent(sprint.animal) && wasSuccessful(sprint)" />
            </v-col>
            <v-col>
              <v-icon
                v-if="sprint.stats.successState === SprintSuccessState.Unknown || sprint.stats.successState === SprintSuccessState.InProgress"
                class="mx-1"
                :size="55"
                color="grey-lighten-1"
              >
                mdi-help
              </v-icon>
              <v-icon
                v-else
                class="mx-1"
                :size="55"
                :color="wasSuccessful(sprint) ? 'green' : 'red'"
              >
                {{ wasSuccessful(sprint) ? 'mdi-check' : 'mdi-close' }}
              </v-icon>
            </v-col>
            <v-col>

              <v-icon
                class="mx-1"
                :size="55"
                v-if="sprint.stats.successState === SprintSuccessState.SuccessWithGoldChallenge"
                :color="sprint.stats.successState === SprintSuccessState.SuccessWithGoldChallenge ? 'yellow-darken-1' : 'grey-lighten-1'"
              >
                mdi-trophy
              </v-icon>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="text-sm-body-2">
                Total SP completed: {{ sprint.stats.totalStoryPoints }}
              </p>
            </v-col>
          </v-row>
        </v-card>
      </div>

    </v-col>
  </v-row>
</template>

<style scoped>

</style>
