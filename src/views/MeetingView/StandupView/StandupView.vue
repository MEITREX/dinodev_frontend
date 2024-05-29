<script setup lang="ts">

import SprintStats from '@/components/SprintStats.vue'
import { computed, ref } from 'vue'
import MeetingView from '@/views/MeetingView/MeetingView.vue'
import { MeetingType } from '@/gql/graphql'
import EventList from '@/components/event/EventList.vue'

type Member = {
  name: string
  avatar: string
  online?: boolean
}
const members = ref<Array<Member>>([
  { name: 'Alice', avatar: 'https://i.pravatar.cc/60', online: true },
  { name: 'Bob', avatar: 'https://i.pravatar.cc/61', online: true },
  { name: 'Charlie', avatar: 'https://i.pravatar.cc/2' },
  { name: 'David', avatar: 'https://i.pravatar.cc/31', online: true },
  { name: 'Eve', avatar: 'https://i.pravatar.cc/21', online: true }
])

const steps = ref([])

const onlineMembers = computed(() => members.value.filter(m => m.online))
const offlineMembers = computed(() => members.value.filter(m => !m.online))

const meetingStarted = ref(false)

function shuffle<T>(a: Array<T>): Array<T> {
  let j, x, i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}

const e1 = ref(1)
</script>

<template>
  <meeting-view :meeting-type="MeetingType.Standup" :meeting="null">

    <h1 class="mb-2 text-h5"> Standup Meeting </h1>

    <sprint-stats :show-buttons="false" />
    <v-row class="mt-2">
      <v-col cols="4" md="2">
        <h2 class="mb-3 text-h6"> Members </h2>

        <h3 class="mb-3 text-sm-h6"> Online </h3>

        <v-card v-for="member in onlineMembers" :key="member.name" class="mb-2" outlined>
          <v-card-title>
            <v-avatar>
              <v-img :src="member.avatar" />
            </v-avatar>
            <span class="ml-2">{{ member.name }}</span>
          </v-card-title>
        </v-card>

        <h3 class="mb-3 text-sm-h6"> Offline </h3>

        <v-card v-for="member in offlineMembers" :key="member.name" class="mb-2" outlined>
          <v-card-title>
            <v-avatar>
              <v-img :src="member.avatar" />
            </v-avatar>
            <span class="ml-2">{{ member.name }}</span>
          </v-card-title>
        </v-card>

      </v-col>
      <v-col>

        <v-btn
          v-if="!meetingStarted"
          color="primary"
          @click="meetingStarted = true"
          class="mt-10"
        >
          Start standup
        </v-btn>

        <div v-else>
          <v-stepper :items="steps" v-model="e1">
            <template #item="step">
              <v-card>
                <v-card-title>
                  <h3> {{ step }} </h3>
                </v-card-title>
                <v-card-subtitle>{{ step }}'s activity this sprint:</v-card-subtitle>
                <v-card-text>
                  <event-list
                    :events="[]"
                    :show-comment-block="false"
                    :show-comment-button="false"
                    :show-issue-information="false"
                  /> <!-- TODO -->
                </v-card-text>
              </v-card>
            </template>
          </v-stepper>
        </div>
      </v-col>
    </v-row>
  </meeting-view>
</template>

<style scoped>

</style>
