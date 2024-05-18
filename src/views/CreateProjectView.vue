<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { type CreateProjectInput, IssuePriority, IssueStateType } from '@/gql/graphql'
import router from '@/router'
import { routes } from '@/router/routes'
import { useProjectService } from '@/service/project-service'
import { useErrorManager } from '@/utils/error-manager'

const project: Ref<CreateProjectInput> = ref({
  name: 'Test name',
  description: undefined,
  startingSprintNumber: 4,
  projectSettings: {
    imsSettings: {
      imsName: 'Gropius',
      imsProjectId: '21d4aea1-b2a6-47b9-96de-6543d03a03cc',
      issueStates: [
        { name: 'Backlog', imsStateId: '908682d1-59f3-4a14-858a-a23446b8c654', type: IssueStateType.Backlog },
        {
          name: 'Sprint Backlog',
          imsStateId: '762ad7d0-6f15-4a6e-a122-d8286418eb2a',
          type: IssueStateType.SprintBacklog
        },
        { name: 'In progress', imsStateId: '6cd3e63e-6c4f-42e6-bc72-8978a8da93c3', type: IssueStateType.InProgress },
        { name: 'Under review', imsStateId: '0010fdbd-845e-439f-9d1d-8f5c6569b3d2', type: IssueStateType.InProgress },
        {
          name: 'Done (this sprint)',
          imsStateId: 'c977ec27-bb40-4963-9c6e-3000f2ba1714',
          type: IssueStateType.DoneSprint
        },
        { name: 'Done', imsStateId: '25f19ca5-561c-4729-82f2-86b7d3eb90c7', type: IssueStateType.Done }
      ],
      imsIssueTemplateId: 'af6dbacd-cbd0-484e-be16-65671ae2bd67',
      effortEstimationFieldName: 'Estimated effort',
      sprintFieldName: 'Sprint',
      issuePriorities: [
        { issuePriority: IssuePriority.Low, imsPriorityId: 'c5598f22-7280-41ab-b7d4-fff0d7b2449b' },
        { issuePriority: IssuePriority.Medium, imsPriorityId: 'd825d7ff-9c99-4f91-8d9c-d3879322560f' },
        { issuePriority: IssuePriority.High, imsPriorityId: '2b100680-42d4-4576-bc0a-28c7b771773b' }
      ]
    },
    codeRepositorySettings: {
      codeRepositoryName: 'GitHub'
    },
    definitionOfDone: [
      {
        text: 'My issue required changes in the code',
        required: false,
        implies: [
          { text: 'The code follows the coding guidelines', required: true },
          { text: 'The code is tested', required: true },
          { text: 'The code is reviewed', required: true }
        ]
      },
      {
        text: 'My issue required changes in the documentation',
        required: false,
        implies: [
          { text: 'The documentation is up to date', required: true }
        ]
      },
      {
        text: 'I communicated the changes to the team',
        required: true
      }
    ]
  }
})

const valid = ref(false)

const projectNameRules = [
  (v: string) => !!v || 'Name is required',
  (v: string) => /\S+/.test(v) || 'Name cannot be empty'
]

const { createProject, loading } = useProjectService()

function submit() {
  createProject(project.value)
    .then(result => {
      const newProjectId = result?.id
      if (!newProjectId) {
        throw new Error('Project creation failed')
      }
      return router.push(routes.project(newProjectId).main)
    })
    .catch((e) => {
      useErrorManager().catchError(e)
    })
}
</script>

<template>
  <v-main class="fill-height">
    <v-form fast-fail @submit.prevent v-model="valid" validate-on="blur">
      <v-container>
        <v-row>
          <v-col cols="12" sm="8" md="8">
            <h2 class="my-3">Create new project</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="project.name"
              label="Project name"
              :rules="projectNameRules"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea
              v-model="project.description"
              label="Description"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h3>Settings</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="project.projectSettings.imsSettings.imsProjectId"
              label="IMS Project ID"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- states -->
        <v-row>
          <v-col cols="12">
            <h4>Issue states</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-row v-for="(state, index) in project.projectSettings.imsSettings.issueStates" :key="index">
              <v-col cols="4">
                <v-text-field
                  v-model="state.name"
                  :label="'State ' + (index + 1)"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="state.imsStateId"
                  :label="'IMS State ID ' + (index + 1)"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-select
                  v-model="state.type"
                  :items="Object.values(IssueStateType)"
                  :label="'Type ' + (index + 1)"
                ></v-select>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-btn @click="submit" :loading="loading" :disabled="!valid">Create project</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-main>
</template>

<style scoped>

</style>
