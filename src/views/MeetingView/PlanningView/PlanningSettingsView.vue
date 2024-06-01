<script setup lang="ts">
import DatePicker from '@/components/DatePicker.vue'
import { computed, ref, watch } from 'vue'
import type { PlanningMeetingInput } from '@/gql/graphql'
import { isPresent } from '@/utils/types'
import router from '@/router'
import { routes } from '@/router/routes'
import { userInProjectService } from '@/service/user-in-project-service'
import { useAppStore } from '@/stores/app-store'
import { usePlanningMeetingService } from '@/service/planning-meeting-service'

const start = ref<Date>(new Date())
const meetingLeaderId = ref<string | null>(null)
const sprintDuration = ref(14)
const customGoldChallengeReward = ref<string | null>(null)

const projectId = computed(() => useAppStore().projectId.value)

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
        sprintStartDate: start.value.toISOString(),
        goldChallengeCustomReward: customGoldChallengeReward.value
      },
      meetingLeaderId: meetingLeaderId.value
    }
  }
)

const valid = computed(() => isPresent(input.value))

const { createPlanningMeeting, loading } = usePlanningMeetingService()

function createMeeting() {
  if (input.value === null) {
    return
  }
  createPlanningMeeting(input.value).then(() => {
    router.push(routes.project(useAppStore().getProjectIdOrThrow()).livePlanning)
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
