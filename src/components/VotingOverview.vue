<script setup lang="ts">

const props = defineProps<{
  valuesAndVotes: Record<string, number>
  valueFormatter?: (value: string) => string
  allowVoting: boolean
  attendeesCount: number
  userVote?: string
}>()

defineEmits<{
  (e: 'vote', value: string): void
}>()

function getPercentage(votes: number) {
  if (props.allowVoting) {
    return 0
  }

  const totalVotes = Object.values(props.valuesAndVotes).reduce((acc, curr) => acc + curr, 0)
  return (votes / totalVotes) * 100
}

function isMostVoted(name: string) {
  const votes = props.valuesAndVotes[name]
  const maxVotes = Math.max(...Object.values(props.valuesAndVotes))
  return votes === maxVotes
}
</script>

<template>
  <v-list>
    <v-list-item
      v-for="(votes, value) in valuesAndVotes"
      :key="value"
    >
      <template #prepend>
        <v-list-item-action start>
          <v-btn @click="$emit('vote', value)" icon="mdi-thumb-up"
                 variant="flat"
                 class="text-grey"
                 :class="{ 'text-success' : userVote === value}"
                 :disabled="!allowVoting"
          />
        </v-list-item-action>
      </template>
      <v-list-item-title :class="{ 'font-weight-bold' : !allowVoting && isMostVoted(value)}">
        {{ valueFormatter ? valueFormatter(value) : value}}
      </v-list-item-title>
      <v-list-item-subtitle>
        <v-row>
          <v-col cols="3">
            {{ allowVoting ? "?" : votes }} / {{ attendeesCount }} votes
          </v-col>
          <v-col cols="5">
            <v-progress-linear
              height="10"
              :color="isMostVoted(value) ? 'success' : 'grey'"
              :model-value="getPercentage(votes)"
              max="100"
              background-color="white"
            />
          </v-col>
        </v-row>
      </v-list-item-subtitle>

    </v-list-item>

    <v-list-item>
      <v-list-item-title>
        {{ Object.values(valuesAndVotes).reduce((acc, curr) => acc + curr, 0) }} votes in total
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<style scoped>

</style>
