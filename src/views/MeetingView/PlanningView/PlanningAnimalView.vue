<script setup lang="ts">

import { Animal, type DefaultPlanningMeetingFragment } from '@/gql/graphql'
import { computed, ref } from 'vue'
import { usePlanningMeetingService } from '@/service/planning-meeting-service'
import AnimalCarouselItem from '@/views/MeetingView/PlanningView/AnimalCarouselItem.vue'
import { useGlobalUserService } from '@/service/global-user-service'
import VotingOverview from '@/components/VotingOverview.vue'
import { watchImmediate } from '@vueuse/core'
import { getAnimalName } from '@/utils/animal-names'

const props = defineProps<{
  animalVoting: DefaultPlanningMeetingFragment['animalVoting'] | null
  isMeetingLeader: boolean
  attendeesCount: number
}>()

const emit = defineEmits<{
  (e: 'update:next-disabled', value: boolean): void
}>()

const { voteAnimal, endAnimalVoting, loading } = usePlanningMeetingService()

const animals = computed(() => props.animalVoting?.votableAnimals ?? [])

const selectedPage = ref(0)
const selectedAnimal = computed(() => animals.value[selectedPage.value])
function setSelectedPage(animal: Animal) {
  selectedPage.value = animals.value.indexOf(animal)
}

const finished = computed(() => props.animalVoting?.finished ?? false)
const animalVotes = computed(() => {
  return props.animalVoting?.animalVotingStates ?? []
})

// don't allow next when the voting isn't finished yet
watchImmediate(finished, () => {
  emit('update:next-disabled', !finished.value)

  if (props.animalVoting?.votingResult) {
    setSelectedPage(props.animalVoting?.votingResult)
  }
})

// find what the user voted for
const userVote = computed(() => {
  const userId = useGlobalUserService().currentGlobalUser.value?.id
  return animalVotes.value
    .find(votingState => votingState.userVotes.some(vote => vote.user.id === userId))
})

// find the number of votes for a specific animal
function getNumberOfVotesForAnimal(animal: Animal) {
  return animalVotes.value
    .find(votingState => votingState.votedFor === animal)?.totalVotes ?? 0
}

// creates a record with the animal as key and the number of votes as value
const votesAsRecord = computed<Record<string, number>>(() => {
  return animals.value.reduce((acc, animal) => {
    acc[animal] = getNumberOfVotesForAnimal(animal)
    return acc
  }, {} as Record<string, number>)
})

function finishVoting() {
  const totalVotes = Object.values(votesAsRecord.value).reduce((acc, curr) => acc + curr, 0)
  if (totalVotes < props.attendeesCount) {
    // show confirmation dialog TODO make a real dialog
    if (!window.confirm('Not all attendees have voted yet. Are you sure you want to finish the voting?')) {
      return
    }
  }
  endAnimalVoting()
}

</script>

<template>

  <h3 class="mb-3">
    <span v-if="!finished">Choose the animal for the sprint! 🦕</span>
    <span v-else-if="animalVoting?.votingResult">
      {{ getAnimalName(animalVoting?.votingResult) }} is the new animal of the sprint!
    </span>
  </h3>
  <v-row>
    <v-col>
      <v-carousel v-model="selectedPage">
        <animal-carousel-item v-for="animal in animals"
                              :key="animal"
                              :animal="animal"
                              :votes="getNumberOfVotesForAnimal(animal)" />
      </v-carousel>

      <div class="d-flex align-center w-100">
        <v-card-title class="">
          {{ getAnimalName(selectedAnimal) }}
        </v-card-title>
      </div>

    </v-col>
    <v-col>
      <voting-overview
        :allow-voting="!finished"
        :values-and-votes="votesAsRecord"
        :value-formatter="animal => getAnimalName(animal as Animal)"
        :attendees-count="attendeesCount"
        @vote="animal => voteAnimal(animal as Animal)" />
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      <v-btn size="x-large" class="ma-2" block
             :color="selectedAnimal === userVote?.votedFor ? 'success' : 'white'"
             :disabled="selectedAnimal === userVote?.votedFor || finished"
             :loading="loading"
             @click="voteAnimal(selectedAnimal)"
             :prepend-icon="selectedAnimal === userVote?.votedFor ? 'mdi-check' : 'mdi-thumb-up'"
      >
        <span>
          {{ selectedAnimal === userVote?.votedFor ? 'Voted' : 'Vote' }} for {{ getAnimalName(selectedAnimal) }}
        </span>
        <v-chip class="ml-2" size="small">
          {{ getNumberOfVotesForAnimal(selectedAnimal) }}
        </v-chip>
      </v-btn>
    </v-col>
    <v-col>
      <v-btn
        v-if="isMeetingLeader"
        size="x-large" class="ma-2" block
        :color="finished ? 'success' : 'white'"
        :disabled="finished"
        :loading="loading"
        @click="finishVoting"
        :prepend-icon="finished ? 'mdi-check' : 'mdi-stop'"
      >
        <span>
          {{ finished ? 'Finished' : 'End voting' }}
        </span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>
