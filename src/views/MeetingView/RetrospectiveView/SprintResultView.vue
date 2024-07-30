<script setup lang="ts">

import { useSprintService } from '@/service/sprint-service'
import AnimalEnclosure from '@/components/animal/AnimalEnclosure.vue'
import { computed, onMounted, ref } from 'vue'
import { watchImmediate } from '@vueuse/core'
import { KnownAsset, SprintSuccessState } from '@/gql/graphql'
import { useRetrospectiveMeetingService } from '@/service/retrospective-meeting-service'
import AnimalAvatar from '@/components/animal/AnimalAvatar.vue'
import AnimalEnclosureAsset from '@/components/animal/KnownAsset.vue'
import { animateValue } from '@/utils/animate-ref'

enum AnimationStep {
  Start,
  SprintNumbers,
  SuccessState,
  SprintStreak,
  Unlocks
}

const animationSteps = [
  AnimationStep.Start,
  AnimationStep.SprintNumbers,
  AnimationStep.SuccessState,
  AnimationStep.SprintStreak,
  AnimationStep.Unlocks
]

const currentAnimationStepIndex = ref(0)
const currentAnimationStep = computed(() => animationSteps[currentAnimationStepIndex.value])

onMounted(() => {
  // reset animation step on component mount
  currentAnimationStepIndex.value = 0
  spCompleted.value = 0
})

const { currentSprint, previousSprint } = useSprintService()
const { retrospectiveMeeting } = useRetrospectiveMeetingService()

watchImmediate(currentSprint, () => {
  if (currentSprint.value) {
    animateValue(currentAnimationStepIndex, 0, animationSteps.length - 1, 6500)
  }
})

const animal = ref(currentSprint.value?.animal || null)
watchImmediate(currentSprint, (newVal) => {
  animal.value = newVal?.animal || null
})
watchImmediate(currentAnimationStep, (newVal) => {
  if (newVal === AnimationStep.SuccessState && !wasSuccess.value) {
    animal.value = null
  }
})

const spCompleted = ref(0)
const goldChallengeMinimum = computed(() =>
  Math.min(previousSprint.value?.stats.totalStoryPoints ?? 0, previousSprint.value?.storyPointsPlanned ?? 0) + 1)
const wasSuccess = computed(() => currentSprint.value?.stats.successState === SprintSuccessState.Success
  || currentSprint.value?.stats.successState === SprintSuccessState.SuccessWithGoldChallenge)

watchImmediate(currentAnimationStep, () => {
  if (currentAnimationStep.value === AnimationStep.SprintNumbers) {
     animateValue(spCompleted, 0, currentSprint.value?.stats.totalStoryPoints ?? 0, 1000)
  }
})

function getColor(): string {
  if (spCompleted.value >= goldChallengeMinimum.value) {
    return 'primary'
  } else if (spCompleted.value >= (currentSprint.value?.storyPointsPlanned ?? 0)) {
    return 'success'
  } else {
    return 'error'
  }
}

const percentageComplete = computed(() => {
  const val = (currentSprint.value?.stats.percentageStoryPointsCompleted ?? 0) / 100

  return Math.min(1, val)
})
</script>

<template>
  <div style="min-height: 1200px;">
    <h2> Sprint result</h2>

    <div class="d-flex flex-row justify-space-between">
      <div class="pa-5" style="width: 65%;">

        <div v-if="currentAnimationStepIndex >= 0">
          <!-- empty -->
        </div>

        <transition name="fade">
          <div v-if="true">
            <div class="d-flex flex-row justify-center align-center ga-5 w-100">
              <v-card>
                <v-card-title>Achieved Story Points</v-card-title>
                <v-card-text class="d-flex justify-center align-center text-h2">
                  {{ spCompleted }}
                </v-card-text>
              </v-card>

              <v-card>
                <v-card-title>Planned Story Points</v-card-title>
                <v-card-text
                  class="d-flex justify-center align-center text-h2"
                  :class="{
            'text-success': spCompleted >= (currentSprint?.storyPointsPlanned ?? 0),
            'text-error': spCompleted < (currentSprint?.storyPointsPlanned ?? 0) }"
                >
                  {{ currentSprint?.storyPointsPlanned ?? 0 }}
                </v-card-text>
              </v-card>

              <v-card>
                <v-card-title>Gold challenge requirement</v-card-title>
                <v-card-text
                  class="d-flex justify-center align-center text-h2"
                  :class="{
            'text-success': spCompleted >= goldChallengeMinimum,
            'text-error': spCompleted < goldChallengeMinimum }"
                >
                  {{ goldChallengeMinimum }}
                </v-card-text>
              </v-card>
            </div>

            <div class="pa-5 mt-5">
              <v-progress-linear
                :model-value="spCompleted"
                :height="10"
                rounded
                :max="currentSprint?.storyPointsPlanned ?? 100"
                :color="getColor()"
              ></v-progress-linear>
            </div>
          </div>
        </transition>

        <transition name="fade">
          <div
            v-if="currentAnimationStepIndex >= 2"
            class="w-100 d-flex flex-column justify-center align-center pa-5 elevation-1 mt-5"
          >
            <div v-if="currentSprint?.stats.successState === SprintSuccessState.Success">
              <h3 class="text-h2 font-weight-bold text-error w-100 d-flex align-center justify-center">
                <v-icon>
                  mdi-emoticon-happy-outline
                </v-icon>
                Success!
              </h3>
              <p>
                You completed all the story points of the sprint goal!
                <strong>{{ currentSprint?.name }}</strong> will be a happy member of the park.
              </p>
            </div>
            <div v-else-if="currentSprint?.stats.successState === SprintSuccessState.SuccessWithGoldChallenge">
              <h3 class="text-h2 font-weight-bold text-yellow-darken-2 w-100 d-flex align-center justify-center">
                <v-icon>
                  mdi-trophy
                </v-icon>
                Gold Challenge achieved!
              </h3>
              <p>
                You completed all the story points of the sprint goal and even reached the gold challenge!
                <strong>{{ currentSprint?.name }}</strong> will be a happy member of the park.
              </p>
            </div>

            <div v-else>
              <h3 class="text-h2 font-weight-bold text-error w-100 d-flex align-center justify-center">
                <v-icon class="mr-2">
                  mdi-emoticon-sad-outline
                </v-icon>
                Failed!
              </h3>

              <p>
                You completed {{ Math.round(currentSprint?.stats.percentageStoryPointsCompleted ?? 0) }}% of the sprint
                goal.
                Try to achieve more next time!
                <strong>{{ currentSprint?.name }}</strong> has to leave the park.
              </p>
            </div>
          </div>
        </transition>

        <transition name="fade">
          <div
            v-if="currentAnimationStepIndex >= 3 && wasSuccess && (currentSprint?.stats.streak ?? 0) > 1"
            class="w-100 d-flex flex-column justify-center align-center pa-5 elevation-1 mt-5"
          >
            <h3 class="text-h2 text-orange-accent-3 font-weight-bold w-100 d-flex align-center justify-center">
              <v-icon>
                mdi-fire
              </v-icon>
              Success Streak: {{ currentSprint?.stats.streak }}
            </h3>
            <p>
              You have completed {{ currentSprint?.stats.streak }} sprints in a row!
              You're on fire! Keep it up!
            </p>
          </div>
        </transition>

        <transition name="fade">
          <div
            v-if="currentAnimationStepIndex >= 4"
            class="w-100 d-flex flex-column justify-center align-center pa-5 elevation-1 mt-5"
          >
            <h3 class="text-h2 text-primary font-weight-bold w-100 d-flex align-center justify-center">
              <v-icon class="mr-2">
                mdi-gift
              </v-icon>
              Rewards
            </h3>
            <div class="d-flex flex-row ga-3 flex-wrap">
              <v-card v-if="retrospectiveMeeting?.goldChallengeReward && wasSuccess">

                <v-card-title>New species unlocked!</v-card-title>
                <v-card-subtitle>Gold challenge reward</v-card-subtitle>
                <v-card-text>
                  <animal-avatar
                    :animal="retrospectiveMeeting?.goldChallengeReward"
                    :size="180" />
                </v-card-text>
              </v-card>

              <v-card v-for="baseReward in retrospectiveMeeting?.baseRewards || []" :key="baseReward">
                <v-card-title>New tile!</v-card-title>
                <v-card-subtitle>Base reward</v-card-subtitle>
                <v-card-text>
                  <animal-enclosure-asset :asset="baseReward" :fixed-width="180" :fixed-height="100" />
                </v-card-text>
              </v-card>

              <v-card v-for="additionalReward in retrospectiveMeeting?.streakRewards || []"
                      :key="additionalReward">
                <v-card-title>New tile!</v-card-title>
                <v-card-subtitle>Sprint streak reward</v-card-subtitle>
                <v-card-text>
                  <animal-enclosure-asset :asset="additionalReward" :fixed-width="180" :fixed-height="100" />
                </v-card-text>
              </v-card>
            </div>
          </div>
        </transition>
      </div>

      <animal-enclosure style="width: 35%"
                        :percentage-complete="percentageComplete"
                        :animal="animal"
                        :placed-assets="currentSprint?.placedAssets || []"
      />
    </div>
  </div>


</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from {
  opacity: 0;
}
</style>
