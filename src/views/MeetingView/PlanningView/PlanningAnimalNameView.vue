<script setup lang="ts">
import { computed, ref } from 'vue'
import { Animal, type DefaultPlanningMeetingFragment } from '@/gql/graphql'
import { getAnimalName } from '@/utils/animal-names'
import { usePlanningMeetingService } from '@/service/planning-meeting-service'
import VotingOverview from '@/components/VotingOverview.vue'
import { watchImmediate } from '@vueuse/core'

const props = defineProps<{
  animal: Animal | null
  nameVoting: DefaultPlanningMeetingFragment['nameVoting'] | null
  isMeetingLeader: boolean
  attendeesCount: number
}>()

const emit = defineEmits<{
  (e: 'update:next-disabled', value: boolean): void
}>()

const { voteName, addName, endNameVoting, loading } = usePlanningMeetingService()

const proposedAnimalName = ref('')

function proposeName() {
  if (proposedAnimalName.value) {
    addName(proposedAnimalName.value).then(() => {
      proposedAnimalName.value = ''
    })
  }
}

const finished = computed(() => props.nameVoting?.finished ?? false)
const finalName = computed(() => props.nameVoting?.votingResult)

// don't allow next when the voting isn't finished yet
watchImmediate(finished, () => {
  emit('update:next-disabled', !finished.value)
})

const names = computed(() => props.nameVoting?.votableNames ?? [])

const votesAsRecord = computed<Record<string, number>>(() => {
  return names.value.reduce((acc, name) => {
    acc[name] = getNumberOfVotes(name)
    return acc
  }, {} as Record<string, number>)
})

function getNumberOfVotes(name: string) {
  return props.nameVoting?.nameVotingStates
    .find(votingState => votingState.votedFor === name)?.totalVotes ?? 0
}

function finishVoting() {
  const totalVotes = props.nameVoting?.nameVotingStates.reduce((acc, curr) => acc + curr.totalVotes, 0) ?? 0
  if (totalVotes < props.attendeesCount) {
    // show confirmation dialog TODO make a real dialog
    if (!window.confirm('Not all attendees have voted yet. Are you sure you want to finish the voting?')) {
      return
    }
  }
  endNameVoting()
}
</script>

<template>
  <h3 class="mb-3">
    <span v-if="!finished">Let's give the {{ getAnimalName(animal) }} a name! ✏️</span>
    <span v-else>Welcome to the world, {{ finalName }}! 🎉</span>
  </h3>
  <div class="pa-2">
    <v-text-field
      label="Propose a name"
      v-model="proposedAnimalName"
      :disabled="finished || names.length >= 25"
      @keyup.enter.prevent="proposeName"
    ></v-text-field>
    <v-btn
      @click="proposeName"
      :disabled="finished || names.length >= 25"
    >
      Propose name
    </v-btn>

    <h3 class="my-3">
      Proposed names
    </h3>

    <voting-overview
      :values-and-votes="votesAsRecord"
      :allow-voting="!finished"
      :attendees-count="attendeesCount"
      @vote="name => voteName(name)"
    />

    <v-btn
      v-if="isMeetingLeader"
      @click="finishVoting"
      :loading="loading"
      :disabled="finished"
    >
      End voting
    </v-btn>

  </div>
</template>

<style scoped>

</style>
