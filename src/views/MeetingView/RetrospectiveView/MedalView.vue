<script setup lang="ts">
import { useRetrospectiveMeetingService } from '@/service/retrospective-meeting-service'
import { computed, ref } from 'vue'
import { watchImmediate } from '@vueuse/core'
import { animateValue } from '@/utils/animate-ref'
import MedalUserComponent from '@/components/user/MedalUserComponent.vue'
import { useFragment } from '@/gql'
import { meetingFragment } from '@/service/meeting-service'
import { MeetingRole } from '@/gql/graphql'
import { useGlobalUserService } from '@/service/global-user-service'
import { useUserInProjectService } from '@/service/user-in-project-service'

const { retrospectiveMeeting, awardMedals, finishMeeting } = useRetrospectiveMeetingService()

const meetingBase = computed(() => useFragment(meetingFragment, retrospectiveMeeting.value) || null)

const isMeetingLeader = computed(() => {
  return meetingBase.value?.attendees
    ?.filter(attendee => attendee.role === MeetingRole.MeetingLeader)
    ?.find(attendee => attendee.user.id === useGlobalUserService().currentGlobalUser.value?.id) != null
})

enum MedalAnimationStep {
  Start,
  Silver,
  Bronze,
  Gold,
}

const medalAnimationSteps = [
  MedalAnimationStep.Start,
  MedalAnimationStep.Bronze,
  MedalAnimationStep.Silver,
  MedalAnimationStep.Gold
]

const currentMedalAnimationStepIndex = ref(0)

watchImmediate(retrospectiveMeeting, () => {
  animateValue(currentMedalAnimationStepIndex, 0, medalAnimationSteps.length - 1, 6500)
  callAwardsMedalsIfMeetingLeader()
})

function callAwardsMedalsIfMeetingLeader() {
  if (isMeetingLeader.value) {
    // only call as meeting leader to avoid multiple calls
    awardMedals()
  }
}

watchImmediate(currentMedalAnimationStepIndex, (newVal) => {
  if (newVal === MedalAnimationStep.Gold) {
    // refetch to show the updated medals
    useUserInProjectService().allUsersInProjectQuery.refetch()
    useUserInProjectService().userInProjectQuery.refetch()
  }
})

</script>

<template>
  <div class="pa-3">
    <h2>Medals</h2>


    <v-card class="pa-3 d-flex flex-row justify-start">
      <div class="w-25">
        <p class="text-h1">🥉</p>
      </div>
      <transition name="fade">
        <div v-if="currentMedalAnimationStepIndex > 0">

          <medal-user-component
            class="h-100 w-100"
            :virtual-currency-reward="50"
            :user="retrospectiveMeeting?.bronzeMedalUser ?? null"
            :spCompleted="retrospectiveMeeting?.bronzeMedalPoints ?? 0" />
        </div>
      </transition>
    </v-card>

    <v-card class="pa-3 d-flex flex-row justify-start mt-1">
      <div class="w-25">
        <p class="text-h1">🥈</p>
      </div>
      <transition name="fade">
        <div v-if="currentMedalAnimationStepIndex > 1">
          <medal-user-component
            class="h-100 w-100"
            :virtual-currency-reward="75"
            :user="retrospectiveMeeting?.silverMedalUser ?? null"
            :spCompleted="retrospectiveMeeting?.silverMedalPoints ?? 0" />
        </div>
      </transition>
    </v-card>

    <v-card class="pa-3 d-flex flex-row justify-start mt-1">
      <div class="w-25">
        <p class="text-h1">🥇</p>
      </div>
      <transition name="fade">
        <div v-if="currentMedalAnimationStepIndex > 2">
          <medal-user-component
            class="h-100 w-100"
            :virtual-currency-reward="100"
            :user="retrospectiveMeeting?.goldMedalUser ?? null"
            :spCompleted="retrospectiveMeeting?.goldMedalPoints ?? 0" />
        </div>
      </transition>
    </v-card>
  </div>

  <v-btn class="ml-3" v-if="isMeetingLeader" @click="finishMeeting" color="primary">
    Finish meeting
  </v-btn>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from {
  opacity: 0;
}
</style>
