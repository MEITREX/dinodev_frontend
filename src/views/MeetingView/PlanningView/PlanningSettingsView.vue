<script setup lang="ts">

import DatePicker from '@/components/DatePicker.vue'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { PlanningMeetingInput } from '@/gql/graphql'
import { isPresent } from '@/utils/types'
import { useMutation } from '@vue/apollo-composable'
import { graphql } from '@/gql'
import { useErrorManager } from '@/utils/error-manager'
import router from '@/router'
import { routes } from '@/router/routes'
import { userInProjectService } from '@/service/user-in-project-service'

const start = ref<Date>(new Date())
const meetingLeaderId = ref<string | null>(null)
const sprintDuration = ref(14)

const projectId = computed(() => useRoute().params.projectId as string)

const users = computed(() => userInProjectService().allUsers.value?.map(user => {
  return {
    title: user.user?.username ?? 'Unknown user',
    value: user.user.id
  }
}) ?? [])

const input = computed<PlanningMeetingInput | null>(() => {
    if (!meetingLeaderId.value || !projectId.value || !start.value) {
      return null
    }

    return {
      title: 'Planning meeting',
      planningSettings: {
        sprintDurationDays: sprintDuration.value,
        sprintStartDate: start.value.toISOString()
      },
      meetingLeaderId: meetingLeaderId.value
    }
  }
)

const valid = computed(() => isPresent(input.value))

const { mutate, onError, loading } = useMutation(graphql(`
  mutation createPlanningMeeting($projectId: UUID!, $input: PlanningMeetingInput!) {
    mutateProject(id: $projectId) {
        createPlanningMeeting(input: $input) {
          projectId
        }
    }
  }
`), () => ({
  variables: {
    projectId: projectId.value,
    input: input.value as PlanningMeetingInput
  }
}))

onError(useErrorManager().catchError)

function createMeeting() {
  mutate().then(() => {
    router.push(routes.project(projectId.value).livePlanning)
  })
}
</script>

<template>
  <v-row class="pa-5">
    <v-col>
      <v-form>

        <h3>
          Sprint settings
        </h3>
        <v-row>
          <v-col>
            Sprint duration (days)
          </v-col>
          <v-col>
            <v-slider
              min="1"
              max="40"
              v-model="sprintDuration"
              thumb-label="always"
              step="1" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            Sprint start date
          </v-col>
          <v-col>
            <date-picker v-model="start" label="Start date" />
          </v-col>
        </v-row>

        <h3>
          Planning meeting
        </h3>
        <v-row>
          <v-col>
            Meeting leader
          </v-col>
          <v-col>
            <v-select
              :items="users"
              v-model="meetingLeaderId"
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-btn
            :disabled="!valid"
            :loading="loading"
            @click="createMeeting()"
          >
            Create meeting
          </v-btn>
        </v-row>
      </v-form>

    </v-col>
  </v-row>
</template>

<style scoped>

</style>
