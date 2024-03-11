<script setup lang="ts">

import { ref } from 'vue'

type Event = {
  title: string
  date: string
  description: string
  type: 'message' | 'task_finished' | 'change_status' | 'reminder'
  avatar: string
  likes: number
  user: string,
  issue?: string
  moreInfo?: string
  userCircleColor?: string
  xp?: number
}

const events = ref<Event[]>([
  {
    title: 'commented',
    date: '1 minute ago',
    description: 'Only 4 days left to finish the sprint! Don\'t let Luna down!',
    type: 'reminder',
    avatar: 'https://cdn-icons-png.freepik.com/512/4712/4712139.png',
    likes: 0,
    user: 'Codey',
    userCircleColor: 'green'
  },
  {
    title: 'commented on sprint',
    date: '4 minutes ago',
    description: 'I think we should have a meeting to discuss the new sprint',
    type: 'message',
    avatar: 'https://i.pravatar.cc/65',
    likes: 0,
    user: 'Sophia'
  },
  {
    title: 'completed a task',
    date: '1 hour ago',
    description: '#12 - Implement basic API',
    type: 'task_finished',
    avatar: 'https://i.pravatar.cc/63',
    likes: 3,
    user: 'Ralph'
  },
  {
    title: 'commented on an issue',
    date: '2 hours ago',
    description: 'Can we finish this',
    type: 'message',
    avatar: 'https://i.pravatar.cc/60',
    likes: 1,
    user: 'You',
    userCircleColor: 'blue',
    xp: 10
  },
  {
    title: 'changed status of an issue',
    date: '3 hours ago',
    description: 'In Review',
    type: 'change_status',
    avatar: 'https://i.pravatar.cc/61',
    likes: 0,
    user: 'Bob',
    issue: '#13 - Create Docs for API'
  },
  {
    title: 'completed a task',
    date: '4 hours ago',
    description: '#13 - Create Docs for API',
    type: 'task_finished',
    avatar: 'https://i.pravatar.cc/60',
    likes: 0,
    user: 'You',
    xp: 2400,
    userCircleColor: 'blue'
  }
])


const newMessage = ref('')

function getIcon(type: string) {
  switch (type) {
    case 'task':
      return 'mdi-check'
    case 'message':
      return 'mdi-message'
    // add more cases as needed
    default:
      return 'mdi-information'
  }
}

function likeActivity(id: number) {
  // implement your like functionality here
}


</script>

<template>

  <v-timeline
    align="start"
    side="end"
    density="compact"
    class="w-100"
    line-thickness="2"
  >
    <v-timeline-item
      v-for="(event, index) in events"
      :key="index"
      size="large"
      class="w-100"
      min-width="100%"
      :fill-dot="event.userCircleColor !== undefined"
      :dot-color="event.userCircleColor"
    >
      <template v-slot:icon>
        <v-avatar :image="event.avatar" />
      </template>
      <div>
        <div class="d-flex flex-row ">
          <p class="text-grey text-caption">
            {{ event.user }} {{ event.title }} {{ event.date }}
          </p>
        </div>

        <div class="d-flex flex-row">
          <v-card v-if="event.type == 'message'" min-width="700" class="elevation-2">
            <v-card-text>
              <blockquote>{{ event.description }}</blockquote>
            </v-card-text>
          </v-card>
<!--          <v-sheet-->
<!--            v-if="event.type == 'message'"-->
<!--            color="grey-lighten-3"-->
<!--            min-width="50%"-->
<!--            min-height="100px"-->
<!--            rounded="sm"-->
<!--          >-->
<!--            <p>-->
<!--              {{ event.description }}-->
<!--            </p>-->
<!--          </v-sheet>-->

          <p v-else-if="event.type == 'task_finished'">
            finished task
            <strong class="hover-underline">
              {{ event.description }}
            </strong>
          </p>

          <p v-else-if="event.type == 'reminder'">
            {{ event.description }}
          </p>

          <p v-else-if="event.type == 'change_status'">
            changed status of issue
            <strong class="hover-underline">
              {{ event.issue }}
            </strong>
            to
            <strong>
              {{ event.description }}
            </strong>
          </p>

          <v-spacer />
          <p v-if="event.xp !== undefined" class="text-grey text-lg-caption">
            +{{ event.xp }} XP
          </p>
        </div>

        <div v-if="event.likes > 0" class="text-caption text-grey">
          {{ event.likes }} likes
        </div>

        <div class="d-flex flex-row mt-1">

          <v-tooltip location="bottom" text="Like">
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                icon="mdi-heart"
                @click="() => likeActivity(index)"
                variant="flat"
                class="text-grey-darken-3"
                size="small"
                id="btn-like"
              >
              </v-btn>
            </template>
          </v-tooltip>

          <v-tooltip location="bottom" text="Comment">
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                icon="mdi-comment"
                variant="flat"
                class="text-grey-darken-3"
                size="small"
                id="btn-comment"
              >
              </v-btn>
            </template>
          </v-tooltip>

          <v-tooltip location="bottom" text="Award">
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                icon="mdi-trophy-variant"
                variant="flat"
                class="text-grey-darken-3"
                size="small"
                id="btn-award" />
            </template>
          </v-tooltip>

        </div>
      </div>


    </v-timeline-item>

    <v-timeline-item hide-dot>

      <v-btn>Load more</v-btn>
    </v-timeline-item>
  </v-timeline>


  <v-textarea label="Add comment..." v-model="newMessage"></v-textarea>

</template>

<style scoped>
.hover-underline {
  cursor: pointer;
}

.hover-underline:hover {
  text-decoration: underline;
}
</style>
