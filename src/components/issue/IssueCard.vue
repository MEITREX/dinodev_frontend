<!--
Card component to display an issue
-->
<script setup lang="ts">
import { type IssueBaseFragment, TShirtSizeEstimation } from '@/gql/graphql'
import { isPresent } from '@/utils/types'
import { computed } from 'vue'
import IssueTypeIcon from '@/components/issue/IssueTypeIcon.vue'
import IssuePriorityIcon from '@/components/issue/IssuePriorityIcon.vue'
import { capitalCase } from 'capital-case'
import { abbreviate } from '@/utils/string-utils'

const props = defineProps<{
  issue: IssueBaseFragment
}>()

const emit = defineEmits<{
  (e: 'click', issue: IssueBaseFragment): void
}>()

const color = computed(() => {
  if (isPresent(props.issue.effortEstimation)) {
    switch (props.issue.effortEstimation) {
      case 'XS':
        return 'purple'
      case 'S':
        return 'green'
      case 'M':
        return 'blue'
      case 'L':
        return 'orange'
      case 'XL':
        return 'red'
    }
  }
  return 'grey'
})

function getEmoji(estimation: TShirtSizeEstimation) {
  switch (estimation) {
    case TShirtSizeEstimation.Xs:
      return '🐞'
    case TShirtSizeEstimation.S:
      return '🍏'
    case TShirtSizeEstimation.M:
      return '🍗'
    case TShirtSizeEstimation.L:
      return '🥩'
    case TShirtSizeEstimation.Xl:
      return '🦃'
  }
}

</script>

<template>
  <v-card
    width="280px"
    hover
    draggable="true"
    variant="elevated"
    density="compact"
    class="d-flex flex-column justify-space-between mx-2"
    @click="() => emit('click', issue)"
  >
    <div class="pa-3">

      <!-- Issue type and priority -->
      <div class="d-flex flex-row align-center justify-space-between w-100">
        <div class="d-flex flex-row align-center">
          <issue-type-icon :type="issue.type" height="25" />

          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <span v-bind="props">
                <issue-priority-icon :priority="issue.priority" style="height: 25px; width: 25px" />
              </span>
            </template>
            <span>Priority: {{ capitalCase(issue.priority.toLowerCase()) }}</span>
          </v-tooltip>
        </div>

        <!-- Assignees -->
        <div class="d-flex flex-row align-center">
          <template v-for="(assignee, index) of issue.assignees" :key="index">
            <v-tooltip location="bottom" v-if="assignee !== null">
              <template v-slot:activator="{ props }">
                <v-avatar
                  density="compact"
                  :image="assignee?.user.avatar ?? undefined"
                  :size="25"
                  v-bind="props">
                </v-avatar>
              </template>
              <span>{{ assignee?.user.username }}</span>
            </v-tooltip>
          </template>
        </div>
      </div>
    </div>

    <div class="px-3 pl-5 text-sm-body-2">
      {{ abbreviate(issue.title, 70) }}
    </div>

    <!-- Effort estimation and labels -->
    <div class="pa-3 d-flex flex-row justify-space-between flex-wrap ga-1">
      <div class="d-flex flex-row flex-wrap ga-1">
        <v-chip v-if="isPresent(issue.effortEstimation)"
                :color="color" density="comfortable">
          <b>{{ issue.effortEstimation }}</b> {{ getEmoji(issue.effortEstimation) }}
        </v-chip>
        <v-chip
          v-for="label in issue.labels"
          :key="label"
          color="secondary"
          density="comfortable"
        >
          <p>{{ label }}</p>
        </v-chip>
      </div>
      <v-tooltip location="bottom" v-if="isPresent(issue.sprintNumber)">
        <template v-slot:activator="{ props }">
          <v-chip v-bind="props" color="grey" density="comfortable">
            <b>{{ issue.sprintNumber }}</b>
          </v-chip>
        </template>
        <span>Sprint number</span>
      </v-tooltip>

    </div>
  </v-card>
</template>

<style scoped>

</style>
