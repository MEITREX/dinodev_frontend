<script setup lang="ts">

import type { ProjectBaseFragment } from '@/gql/graphql'
import { computed, ref } from 'vue'
import { isPresent } from '@/utils/types'
import JoinProjectDialog from '@/views/AllProjectsView/JoinProjectDialog.vue'

const props = defineProps<{ project: ProjectBaseFragment }>()

const emit = defineEmits<{
  (e: 'select-project', project: ProjectBaseFragment): void,
  (e: 'joined-project', project: ProjectBaseFragment): void
}>()

const isUserAlreadyInProject = computed(() => isPresent(props.project.currentUser))

const expanded = ref(true)

function joinProject() {
  emit('joined-project', props.project)
}

</script>
<template>
  <v-card>

    <v-card-title>
      <div class="d-flex justify-space-between">

        <div>{{ project.name }}</div>

      </div>
    </v-card-title>

    <v-card-text v-if="expanded">
      <v-row>
        <v-col>
          <div>{{ project.description }}</div>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-btn
        v-if="isUserAlreadyInProject"
        color="primary"
        @click.stop="$emit('select-project', project)"
      >
        Open
      </v-btn>

      <v-btn
        v-else
        color="secondary"
        :id="'join-project-btn' + project.id"
      >
        Join
      </v-btn>

      <join-project-dialog
        :project="project"
        :activator="'#join-project-btn' + project.id"
        @joined-project="() => joinProject()"
      />
    </v-card-actions>
  </v-card>
</template>
