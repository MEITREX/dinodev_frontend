<!--
Dialog to create a new issue.
Only provides a small set of fields.
For more advanced issue creation, the users should use the underlying issue management system.
-->
<script setup lang="ts">

import { useNewIssueDialog } from '@/components/dialog/issue/new-issue-dialog-controller'
import { type CreateIssueInput, IssueStateType } from '@/gql/graphql'
import { computed, ref } from 'vue'
import { useProjectService } from '@/service/project-service'
import { useIssueService } from '@/service/issue-service'

const { newIssueDialogVisible, closeNewIssueDialog } = useNewIssueDialog()

const { project } = useProjectService()
const { createIssue, loading } = useIssueService()

const backlogStateName = computed<string>(() => project.value?.projectSettings.imsSettings.issueStates
  .filter((state) => state.type === IssueStateType.Backlog)[0].name ?? '')
const sprintBacklogStateName = computed<string>(() => project.value?.projectSettings.imsSettings.issueStates
  .filter((state) => state.type === IssueStateType.SprintBacklog)[0].name ?? '')
const currentSprint = computed(() => project.value?.currentSprintNumber)

const issueTypes = computed(() => project.value?.projectSettings.imsSettings.issueTypes
  .map(type => ({ name: type.name })) ?? [])
const issueTypeItems = computed(() => issueTypes.value?.map(type => type.name) ?? [])

const issueTitle = ref<string>('')
const issueDescription = ref<string>('')
const issueType = ref<string>( '')
const inSprintOrBacklog = ref<'sprint' | 'backlog'>('backlog')

const issueInput = computed<CreateIssueInput>(() => ({
  title: issueTitle.value,
  description: issueDescription.value,
  stateName: inSprintOrBacklog.value === 'sprint' ? sprintBacklogStateName.value : backlogStateName.value,
  sprintNumber: inSprintOrBacklog.value === 'sprint' ? currentSprint.value : null,
  typeName: issueType.value
}))

function confirmCreateIssue() {
  createIssue(issueInput.value)
    .then(() => closeNewIssueDialog())
    .then(() => {
      issueTitle.value = ''
      issueDescription.value = ''
      issueType.value = ''
      inSprintOrBacklog.value = 'backlog'
    })
}

const valid = ref(false)

</script>

<template>
  <v-dialog :model-value="newIssueDialogVisible" width="700">
    <v-card>
      <v-card-title>Create New Issue</v-card-title>
      <v-card-text>

        <v-form v-model="valid">
          <v-text-field
            v-model="issueTitle"
            label="Title"
            required
            :rules="[(v: string) => !!v || 'Title is required']"
          />
          <v-textarea v-model="issueDescription" label="Description" />

          <v-select
            v-model="issueType" :items="issueTypeItems"
            label="Issue Type"
            required
            :rules="[(v: string) => !!v || 'Issue Type is required']"
          />

          <v-radio-group v-model="inSprintOrBacklog">
            <v-radio label="Create in Backlog" value="backlog"></v-radio>
            <v-radio label="Create for current Sprint" value="sprint"></v-radio>
          </v-radio-group>

        </v-form>

      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="closeNewIssueDialog">Cancel</v-btn>
        <v-btn color="primary" @click="confirmCreateIssue" :loading="loading" :disabled="!valid">
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
