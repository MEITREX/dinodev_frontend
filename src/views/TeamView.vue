<script setup lang="ts">

import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'

const teamName = 'The unicorns'

const route = useRoute()

type TeamMember = {
  name: string
  role: string
  avatar: string
  category: 'dev' | 'manager' | 'other'
}

const teamMembers = ref<Array<TeamMember>>([
  { name: 'Alice', role: 'Frontend Developer', avatar: 'https://i.pravatar.cc/60', category: 'dev' },
  { name: 'Bob', role: 'Backend Developer', avatar: 'https://i.pravatar.cc/61', category: 'dev' },
  { name: 'Charlie', role: 'Project Manager', avatar: 'https://i.pravatar.cc/2', category: 'manager' },
  { name: 'David', role: 'Backend Developer', avatar: 'https://i.pravatar.cc/31', category: 'dev' },
  { name: 'Eve', role: 'Frontend Developer', avatar: 'https://i.pravatar.cc/21', category: 'dev' },
  { name: 'Finn', role: 'Scrum Master', avatar: 'https://i.pravatar.cc/22', category: 'manager' },
  { name: 'Gabriela', role: 'Customer', avatar: 'https://i.pravatar.cc/23', category: 'other' }
])

const developers = computed(() => teamMembers.value.filter(m => m.category === 'dev'))
const managers = computed(() => teamMembers.value.filter(m => m.category === 'manager'))
const others = computed(() => teamMembers.value.filter(m => m.category === 'other'))

function openProfile(member: TeamMember) {
  router.push(`/project/${route.params.projectId}/profile/${member.name}`)
}

function getCategoryName(category: string) {
  if (category === 'dev') {
    return 'Zookeepers'
  } else if (category === 'manager') {
    return 'Zoo Management'
  } else {
    return 'Visitors'
  }
}

function getMembersByCategory(category: string) {
  if (category === 'dev') {
    return developers.value
  } else if (category === 'manager') {
    return managers.value
  } else {
    return others.value
  }
}


</script>

<template>

  <h3 class="mb-2 text-h5"> {{ teamName }} </h3>

  <div v-for="category in ['dev', 'manager', 'other']" :key="category" class="my-3">
    <h2 class="mb-3 text-h6"> {{ getCategoryName(category) }} </h2>

    <v-row>
      <v-col v-for="member in getMembersByCategory(category)" :key="member.name" cols="6" md="3">
        <v-card outlined @click="openProfile(member)">
          <v-card-title>
            <v-avatar>
              <v-img :src="member.avatar" />
            </v-avatar>
          </v-card-title>
          <v-card-text>
            <h3> {{ member.name }} </h3>
            <p class="text-caption">

              {{member.role}}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>

</style>
