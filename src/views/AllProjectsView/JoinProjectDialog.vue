<script setup lang="ts">
import type { ProjectBaseFragment } from '@/gql/graphql'
import { useUserInProjectService } from '@/service/user-in-project-service'

const props = defineProps<{
  activator: string,
  project: ProjectBaseFragment
}>()
const emit = defineEmits<{
  (e: 'joined-project'): void
}>()

const { loading, joinProject: runJoinMutation } = useUserInProjectService()

function joinProject() {
  runJoinMutation(props.project.id).then(() => {
    emit('joined-project')
  })
}

</script>

<template>
  <v-dialog :activator="activator" width="700">
    <template #default="{ isActive }">
      <v-card title="Confirm joining project">
        <v-card-text>
          <p>
            You are about to join the project <strong>{{ project.name }}</strong>.
          </p>
          <p class="mt-4">
            <strong>Description:</strong> {{ project.description }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <!-- cancel and join buttons -->
          <v-btn @click="isActive.value = false">
            Cancel
          </v-btn>
          <v-btn variant="outlined" color="primary" :loading="loading"
                 @click="isActive.value = false; joinProject()">
            Join project
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>

</style>
