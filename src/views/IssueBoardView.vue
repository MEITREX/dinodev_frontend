<script setup lang="ts">
import { ref } from 'vue'

const statusValues = ['Backlog', 'Sprint Backlog', 'In Progress', 'In Review', 'Done']

const tasks = ref([
  { id: 1, title: 'Task 1', status: 'Backlog' },
  { id: 2, title: 'Task 2', status: 'In Progress' },
  { id: 3, title: 'Task 3', status: 'Done' }
])

const moveTask = (task: any, newStatus: string) => {
  task.status = newStatus
}

const dragStart = (event: DragEvent, task: any) => {
  event.dataTransfer?.setData('task', JSON.stringify(task))
}

const drop = (event: DragEvent) => {
  const task = JSON.parse(event.dataTransfer?.getData('task') || '{}')
  tasks.value = tasks.value.map((t) => {
    if (t.id === task.id) {
      const target = event.target as HTMLElement
      const newStatus = target.dataset.status
      console.log(target)
      if (newStatus) {
        moveTask(t, newStatus)
      }
    }
    return t
  })
}
</script>

<template>
  <!--  <div class="d-flex align-center flex-column">-->
  <!--    <v-btn-toggle-->
  <!--      group-->
  <!--      v-model="selected"-->
  <!--      variant="elevated"-->
  <!--      elevation="2"-->
  <!--      rounded="2"-->
  <!--      density="comfortable"-->
  <!--    >-->
  <!--      <v-btn value="all"> All Issues </v-btn>-->

  <!--      <v-btn value="my"> My Issues </v-btn>-->
  <!--    </v-btn-toggle>-->
  <!--  </div>-->
  <v-row style="height: 500px">
    <v-col v-for="status in statusValues" :key="status" :data-status="status" class="h-100">
      <div
        class="bg-grey-lighten-4 h-100 rounded py-2 px-3 elevation-2"
        :data-status="status"
        @drop="(event: DragEvent) => drop(event)"
        @dragover.prevent
      >
        <h3>{{ status }}</h3>

        <v-divider />
        <div class="py-2">
          <v-card
            draggable="true"
            variant="elevated"
            v-for="task in tasks.filter((task) => task.status === status)"
            :key="task.id"
            class="cursor-pointer"
            @dragstart="(event: DragEvent) => dragStart(event, task)"
          >
            <v-card-title>{{ task.title }}</v-card-title>

            <v-card-item>
              <v-chip color="green"> 5 SP</v-chip>
            </v-card-item>
          </v-card>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped></style>
