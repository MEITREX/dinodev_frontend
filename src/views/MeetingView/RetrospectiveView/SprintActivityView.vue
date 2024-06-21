<script setup lang="ts">

import { useRetrospectiveMeetingService } from '@/service/retrospective-meeting-service'
import { computed } from 'vue'
import SprintActivityColumn from '@/views/MeetingView/RetrospectiveView/SprintActivityColumn.vue'
import { MeetingRole } from '@/gql/graphql'
import { useGlobalUserService } from '@/service/global-user-service'
import { useFragment } from '@/gql'
import { meetingFragment } from '@/service/meeting-service'

const { retrospectiveMeeting, finishMeeting } = useRetrospectiveMeetingService()

const activity = computed(() =>
  (retrospectiveMeeting.value?.activities.length ?? 0) > 0 ?
    retrospectiveMeeting.value?.activities[0]
    : null)

const meetingBase = computed(() => useFragment(meetingFragment, retrospectiveMeeting.value) || null)

const isMeetingLeader = computed(() => {
  return meetingBase.value?.attendees
    ?.filter(attendee => attendee.role === MeetingRole.MeetingLeader)
    ?.find(attendee => attendee.user.id === useGlobalUserService().currentGlobalUser.value?.id) != null
})
</script>

<template>
  <div v-if="activity" class="d-flex flow-row ga-3 pa-1">
    <div v-for="column in activity.columns" :key="column.id" class="elevation-1 pa-3" style="min-height: 500px; flex: 1">
      <sprint-activity-column :column="column" />
    </div>

  </div>

  <div v-else>
    End of meeting.
  </div>

  <v-btn class="ml-3 mt-10" v-if="isMeetingLeader" @click="finishMeeting" color="primary">
    Finish meeting
  </v-btn>
</template>

<style scoped>

</style>
