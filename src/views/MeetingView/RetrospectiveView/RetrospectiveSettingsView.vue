<script setup lang="ts">

import UserSelect from '@/components/user/UserSelect.vue'
import type { BaseGlobalUserFragment, RetrospectiveActivityInput } from '@/gql/graphql'
import { computed, ref } from 'vue'
import { useRetrospectiveMeetingService } from '@/service/retrospective-meeting-service'
import router from '@/router'
import { routes } from '@/router/routes'
import { useProjectId } from '@/stores/project-id'
import { retroCategoryGamePresets } from '@/utils/retro-category-game-presets'

const meetingLeader = ref<BaseGlobalUserFragment | null>(null)

const selectedRetrospectiveActivity = ref<RetrospectiveActivityInput | null>(null)

const selectableActivities = computed(() => retroCategoryGamePresets
  .map(preset => ({ title: preset.name, value: preset })))

const { createRetrospectiveMeeting, loading } = useRetrospectiveMeetingService()

function createMeeting() {
  if (!meetingLeader.value) {
    return
  }
  const variables = {
    meetingLeaderId: meetingLeader.value.id,
    activities: selectedRetrospectiveActivity.value ? [selectedRetrospectiveActivity.value] : []
  }

  createRetrospectiveMeeting(variables).then(() => {
    router.push(routes.project(useProjectId().getProjectIdOrThrow()).liveRetrospective)
  })
}

const valid = computed(() => meetingLeader.value != null)
</script>

<template>
  <v-row class="pa-5">
    <v-col>
      <v-form>

        <h3>
          Retrospective meeting
        </h3>
        <p>
          Make sure that all completed issues are in the done / done in sprint column.
          Otherwise, the sprint might be closed as failed, even though you have completed all issues.
        </p>

        <v-row class="mt-5">
          <v-col>
            Meeting leader
          </v-col>
          <v-col>
            <user-select v-model="meetingLeader" initialize-with-current-user />
          </v-col>
        </v-row>

        <v-row class="mt-5">
          <v-col>
            Retrospective Activity (optional)
          </v-col>
          <v-col>
            <v-select
              v-model="selectedRetrospectiveActivity"
              :items="selectableActivities"
              :placeholder="'Select activity'"
            />
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
