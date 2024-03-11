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
  return result.value?.rules
});

</script>

<template>
 <h1>Rules</h1>

    <ul>
      <li v-for="rule in rules" :key="rule.id">
        {{ rule }}
      </li>
    </ul>
</template>

<style scoped>

</style>
