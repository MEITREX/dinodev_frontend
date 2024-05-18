<script setup lang="ts">
import { computed, ref } from 'vue'
import LevelUpDialog from '@/components/dialog/LevelUpDialog.vue'
import { routes } from '@/router/routes'
import { useAuth } from '@/service/use-auth'
import router from '@/router'
import UserAvatarListItem from '@/components/side-menu/UserAvatarListItem.vue'
import { isPresent } from '@/utils/types'
import { useRoute } from 'vue-router'
import { userInProjectService } from '@/service/user-in-project-service'

const { currentUser } = userInProjectService()

const projectId = useRoute().params.projectId

function subRouteTo(route: string) {
  return `/project/${projectId}/${route}`
}

const xp = ref(0)
const level = ref(0)
const percent = computed(() => (xp.value / 8000) * 100)

const levelUpReady = computed(() => percent.value >= 100)

const rail = ref(false)

function toggleRail() {
  rail.value = !rail.value
}

function logout() {
  useAuth().logout()
  router.push(routes.login)
}
</script>

<template>
  <v-navigation-drawer permanent location="right" :rail="rail">
    <v-list v-if="isPresent(currentUser)">
      <user-avatar-list-item @click="toggleRail"
                             :user-in-project="currentUser"/>
    </v-list>

    <v-divider></v-divider>

    <div class="py-4 d-flex flex-column align-center justify-center">
      <v-progress-circular
        :model-value="percent"
        :size="rail ? 30 : 160"
        :width="rail ? 3 : 16"
        color="green"
      >
        <level-up-dialog activator="#btn-level-up" />
        <v-btn
          v-show="levelUpReady"
          color="white"
          id="btn-level-up"
          class="btn-levelup"
          variant="flat">
          Level up
        </v-btn>
        <div v-if="!levelUpReady">
          <div class="d-flex flex-column align-center" v-if="!rail">
            <b>Level {{ level }}</b>
            <p class="text-sm-center">{{ xp }} XP</p>
          </div>
          <div v-else class="sm">3</div>
        </div>
      </v-progress-circular>


    </div>

    <v-divider />

    <v-list density="compact" nav>

      <v-list-subheader class="text-button">Project</v-list-subheader>
      <v-list-item prepend-icon="mdi-reiterate" :to="subRouteTo('sprint')">
          Current Sprint
      </v-list-item>
      <v-list-item prepend-icon="mdi-view-dashboard" :to="subRouteTo('board')"> Issue Board</v-list-item>
      <v-list-item prepend-icon="mdi-account-group" :to="subRouteTo('team')"> Team</v-list-item>

      <v-list-item prepend-icon="mdi-shopping" :to="subRouteTo('store')">
        Store
        <v-chip text-color="white" class="ml-3">57 💎</v-chip>
      </v-list-item>
    </v-list>
    <v-divider class="my-2" />
    <v-list density="compact" nav>
      <v-list-subheader class="text-button">Administration</v-list-subheader>
      <v-list-item prepend-icon="mdi-forum" :to="subRouteTo('meeting')"> Meetings</v-list-item>
      <v-list-item prepend-icon="mdi-cog" to="/settings"> Settings</v-list-item>
      <v-list-item prepend-icon="mdi-book" :to="subRouteTo('rules')"> Rules</v-list-item>
      <!--<v-list-item prepend-icon="mdi-chart-bar" to="/stats"> Stats</v-list-item>-->

    </v-list>
    <v-divider class="my-2" />
    <v-list density="compact" nav>
      <!-- switch to the project view -->
      <v-list-item prepend-icon="mdi-folder-text" :to="routes.projects"> Projects</v-list-item>

      <!-- Logout -->
      <v-list-item prepend-icon="mdi-logout" @click="logout"
      > Logout
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
