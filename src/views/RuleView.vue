<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { graphql } from '@/gql'
import gql from 'graphql-tag'
import { computed } from 'vue'

const { result } = useQuery(
  graphql(`
      query getAllRules {
        rules {
          id
          triggerEventTypes
          createEventTypes {
            eventTypeIdentifier
          }
        }
      }
    `
  )
)

const rules = computed(() => {
  // return result.value?.rules
  return [
    {
      id: '1',
      triggerEventTypes: ['commit'],
      createEventTypes: [
        {
          eventTypeIdentifier: 'awardXP'
        }
      ]
    },
    {
      id: '2',
      triggerEventTypes: ['mergePullRequest'],
      createEventTypes: [
        {
          eventTypeIdentifier: 'awardXP'
        }
      ]
    },
    {
      id: '3',
      triggerEventTypes: ['taskCreated'],
      createEventTypes: [
        {
          eventTypeIdentifier: 'awardAchievement'
        }
      ]
    }
  ]
});

</script>

<template>
 <h1>Rules</h1>

    <v-table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Trigger Event Types</th>
          <th>Create Event Types</th>
          <th>Condition</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rule in rules" :key="rule.id">
          <td>{{ rule.id }}</td>
          <td>{{ rule.triggerEventTypes.join(', ') }}</td>
          <td>{{ rule.createEventTypes.map(e => e.eventTypeIdentifier).join(', ') }}</td>
          <td>...</td>
        </tr>
      </tbody>
    </v-table>
</template>

<style scoped>

</style>
