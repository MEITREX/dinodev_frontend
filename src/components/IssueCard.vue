<script setup lang="ts">
import { type IssueBaseFragment, IssuePriority } from '@/gql/graphql'
import { isPresent } from '@/utils/types'
import { computed } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { routes } from '@/router/routes'
import router from '@/router'
import IssueTypeIcon from '@/components/IssueTypeIcon.vue'
import IssuePriorityIcon from '@/components/IssuePriorityIcon.vue'

const props = defineProps<{
  issue: IssueBaseFragment
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

function openIssue() {
  const projectId = useAppStore().projectId.value!!
  router.push(routes.project(projectId).issue(props.issue.id))
}

</script>

<template>
  <v-card
    width="280px"
    hover
    draggable="true"
    variant="elevated"
    density="compact"
    @click="openIssue"
  >
    <v-card-title>
      <div class="d-flex flex-row align-center justify-space-between w-100">
        <div class="d-flex flex-row align-center">
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <issue-type-icon :type="issue.type" v-bind="props" style="height: 25px; width: 25px"/>
            </template>
            <span>{{ issue.type.name }}</span>
          </v-tooltip>

          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <span v-bind="props">
                <issue-priority-icon :priority="issue.priority" style="height: 25px; width: 25px"/>
              </span>
            </template>
            <span>{{ issue.priority }}</span>
          </v-tooltip>
        </div>

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
    </v-card-title>

    <v-card-text class="pb-1">
      {{ issue.title }}
    </v-card-text>

    <v-card-item>
      <v-chip v-if="isPresent(issue.effortEstimation)"
              :color="color" density="comfortable">
        {{ issue.effortEstimation }}
      </v-chip>
    </v-card-item>
  </v-card>
</template>

<style scoped>

</style>
