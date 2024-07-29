<script setup lang="ts">
import { computed, ref } from 'vue'
import { routes } from '@/router/routes'
import { useAuth } from '@/service/use-auth'
import router from '@/router'
import UserAvatarListItem from '@/components/side-menu/UserAvatarListItem.vue'
import { isPresent } from '@/utils/types'
import { useUserInProjectService } from '@/service/user-in-project-service'
import { useProjectId } from '@/stores/project-id'

const { currentUser, userStats } = useUserInProjectService()

const { projectId } = useProjectId()

function subRouteTo(route: string) {
  return `/project/${projectId.value}/${route}`
}

const xp = computed(() => userStats.value?.xp ?? 0)
const percent = computed(() => (xp.value) / (userStats.value?.xpToNextLevel ?? 1) * 100)

const rail = ref(false)

function logout() {
  useAuth().logout()
}

function openProjects() {
  // reset project id that is stored in local storage
  useProjectId().projectId.value = null
  router.push(routes.projects)
}

function openUserProfile() {
  router.push(routes.project(projectId.value!!).user(currentUser.value?.user?.id))
}

</script>

<template>
  <v-navigation-drawer
    location="right"
    v-model:rail="rail"
    permanent
  >
    <v-list v-if="isPresent(currentUser)">
      <user-avatar-list-item :user-in-project="currentUser" @click="openUserProfile()" />
    </v-list>

    <v-divider></v-divider>

    <div class="py-4 d-flex flex-column align-center justify-center">
      <v-progress-circular
        :model-value="percent"
        :size="rail ? 30 : 160"
        :width="rail ? 3 : 16"
        color="green"
      >
        <div>
          <div class="d-flex flex-column align-center" v-if="!rail">
            <b>Level {{ userStats?.level }}</b>
            <p class="text-sm-center">{{ userStats?.xp }} XP</p>
          </div>
          <div v-else class="sm"> {{ userStats?.level }}</div>
        </div>
      </v-progress-circular>

    </div>

    <v-divider />

    <v-list density="compact" nav>

      <v-list-subheader class="text-button" v-if="!rail">
        Project
      </v-list-subheader>
      <v-list-item prepend-icon="mdi-reiterate" :to="subRouteTo('sprint')" :active="false">
        Current Sprint
      </v-list-item>
      <v-list-item prepend-icon="mdi-view-dashboard" :to="subRouteTo('board')"> Issue Board</v-list-item>
      <v-list-item prepend-icon="mdi-account-group" :to="subRouteTo('team')"> Team</v-list-item>

      <v-list-item prepend-icon="mdi-shopping" :to="subRouteTo('store')">
        Store

        <v-chip
          v-if="userStats?.virtualCurrency"
          density="comfortable"
          color="primary"
          class="ml-3"
        >
          {{ userStats?.virtualCurrency }} 💎
        </v-chip>
      </v-list-item>
    </v-list>
    <v-divider class="my-2" />
    <v-list density="compact" nav>
      <v-list-subheader class="text-button" v-if="!rail">
        Administration
      </v-list-subheader>
      <v-list-item prepend-icon="mdi-forum" :to="subRouteTo('meeting')"> Meetings</v-list-item>
      <v-list-item prepend-icon="mdi-chart-bar" :to="subRouteTo('sprint-stats')"> Stats</v-list-item>

    </v-list>
    <v-divider class="my-2" />
    <v-list density="compact" nav>
      <!-- switch to the project view -->
      <v-list-item prepend-icon="mdi-folder-text" @click="openProjects"> Projects</v-list-item>

      <!-- Logout -->
      <v-list-item prepend-icon="mdi-logout" @click="logout"
      > Logout
      </v-list-item>
    </v-list>

    <v-divider class="my-2" />

    <!-- button that closes the side menu -->
    <v-list density="compact" nav>
      <v-list-item :prepend-icon="rail ? 'mdi-chevron-left' : 'mdi-chevron-right'"
                   @click="rail = !rail"
      > Collapse
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

@keyframes wobble {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.btn-levelup {
  animation: wobble 1s infinite;
}
</style>
