<script setup lang="ts">

import { useAppTitle } from '@/stores/app-title'
import { useUserInProjectService } from '@/service/user-in-project-service'
import { watchImmediate } from '@vueuse/core'
import BaseUserAvatar from '@/components/user/BaseUserAvatar.vue'
import { useGlobalLoading } from '@/utils/use-global-loading'
import MedalIcon from '@/components/user/MedalIcon.vue'
import AchievementCard from '@/components/user/AchievementCard.vue'
import { computed } from 'vue'

const props = defineProps<{
  userId: string
}>()

const { currentUser: currentLoggedInUser, userStats, loading, getUserById } = useUserInProjectService()

const userToDisplay = computed(() => getUserById(props.userId))

watchImmediate(userToDisplay, () => {
  useAppTitle().setAppTitle(userToDisplay.value?.user?.username ?? 'User')
})

useGlobalLoading().watchLoading(loading)

const isCurrentUser = computed(() => currentLoggedInUser.value?.user?.id === props.userId)

</script>

<template>

  <div class="pa-3">
    <v-row>
      <v-col cols="1">
        <base-user-avatar :user="userToDisplay?.user || null" :size="100"
                          :badge-emoji="userToDisplay?.currentBadge?.emoji ?? undefined" />
      </v-col>
      <v-col>
        <v-card height="150">
          <v-card-title>
            <h3>Details</h3>
          </v-card-title>
          <v-card-text>
            <p>
              Name: {{ userToDisplay?.user.username }}
            </p>
            <p>
              Roles: {{ userToDisplay?.roles.map(role => role.gamifiedName).join(', ') }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card height="150">
          <v-card-title>
            <h3>Medals</h3>
          </v-card-title>
          <v-card-text>
            <div class="d-flex flex-row ga-3">
              <medal-icon medal="🥇" :number="userToDisplay?.userStats.goldMedals ?? 0" />
              <medal-icon medal="🥈" :number="userToDisplay?.userStats.silverMedals ?? 0" />
              <medal-icon medal="🥉" :number="userToDisplay?.userStats.bronzeMedals ?? 0" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1">
        &nbsp;
      </v-col>

      <v-col>
        <v-card>
          <v-card-title>
            <h3>Achievements</h3>
          </v-card-title>
          <v-card-text>
            <div class="d-flex flex-row flex-wrap ga-3">
              <achievement-card
                :achievement-progress="achievementProgress"
                v-for="achievementProgress in userToDisplay?.achievements"
                :key="achievementProgress.achievement.name" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-if="isCurrentUser">
      <v-col cols="1">
        &nbsp;
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>
            <h3>Stats</h3>
          </v-card-title>
          <v-card-text>
            <v-table>
              <thead>
              <tr>
                <th>Statistic</th>
                <th>Value</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Level</td>
                <td>{{ userStats?.level }}</td>
              </tr>
              <tr>
                <td>XP</td>
                <td>{{ userStats?.totalXp }}</td>
              </tr>
              <tr>
                <td>Issues Completed</td>
                <td>{{ userStats?.issuesCompleted }}</td>
              </tr>
              <tr>
                <td>Issues Created</td>
                <td>{{ userStats?.issuesCreated }}</td>
              </tr>
              <tr>
                <td>Pull Requests Created</td>
                <td>{{ userStats?.pullRequestsCreated }}</td>
              </tr>
              <tr>
                <td>Pull Requests Closed</td>
                <td>{{ userStats?.pullRequestsClosed }}</td>
              </tr>
              <tr>
                <td>❤️s given</td>
                <td>{{ userStats?.reactionsGiven }}</td>
              </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>

</style>
