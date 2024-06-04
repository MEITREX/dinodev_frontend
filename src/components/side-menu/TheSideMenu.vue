<script setup lang="ts">
import { computed, ref } from 'vue'
import { routes } from '@/router/routes'
import { useAuth } from '@/service/use-auth'
import router from '@/router'
import UserAvatarListItem from '@/components/side-menu/UserAvatarListItem.vue'
import { isPresent } from '@/utils/types'
import { useRoute } from 'vue-router'
import { userInProjectService } from '@/service/user-in-project-service'
import { useAppStore } from '@/stores/app-store'

const { currentUser } = userInProjectService()

const projectId = useRoute().params.projectId

function subRouteTo(route: string) {
  return `/project/${projectId}/${route}`
}

const xp = computed(() => currentUser.value?.userStats.xp ?? 0)
const percent = computed(() => (xp.value) / ((currentUser.value?.userStats.xpToNextLevel ?? 1) + xp.value) * 100)

const rail = ref(true)

function logout() {
  useAuth().logout()
}

function openProjects() {
  useAppStore().projectId.value = null
  router.push(routes.projects)
}
</script>

<template>
  <v-navigation-drawer location="right" v-model:rail="rail">
    <v-list v-if="isPresent(currentUser)">
      <user-avatar-list-item :user-in-project="currentUser"/>
    </v-list>

    <v-divider></v-divider>

    <div class="py-4 d-flex flex-column align-center justify-center">
      <v-progress-circular
        :model-value="percent"
        :size="rail ? 30 : 160"
        :width="rail ? 3 : 16"
        color="green"
      >
<!--        <level-up-dialog activator="#btn-level-up" />-->
<!--        <v-btn-->
<!--          v-show="levelUpReady"-->
<!--          color="white"-->
<!--          id="btn-level-up"-->
<!--          class="btn-levelup"-->
<!--          variant="flat">-->
<!--          Level up-->
<!--        </v-btn>-->
        <div>
          <div class="d-flex flex-column align-center" v-if="!rail">
            <b>Level {{ currentUser?.userStats.level }}</b>
            <p class="text-sm-center">{{ currentUser?.userStats.totalXp }} XP</p>
          </div>
          <div v-else class="sm">3</div>
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

<!--      <v-list-item prepend-icon="mdi-shopping" :to="subRouteTo('store')">-->
<!--        Store-->
<!--        <v-chip text-color="white" class="ml-3">57 💎</v-chip>-->
<!--      </v-list-item>-->
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

    <v-divider  class="my-2" />

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
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.btn-levelup {
  animation: wobble 1s infinite;
}
</style>
