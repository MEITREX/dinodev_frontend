import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useAppStore = defineStore('login', {
  state: () => ({
    userId: useLocalStorage('userId', null as string | null),
    projectId: useLocalStorage('projectId', null as string | null)
  }),
  getters: {
    isLoggedIn(): boolean {
      return this.userId !== null
    },
    getUserId(): string | null {
      return this.userId
    },
    getProjectId(): string | null {
      return this.projectId
    },
    isProjectSelected(): boolean {
      return this.projectId !== null
    }
  },
  actions: {
    setUserId(userId: string) {
      this.userId = userId
    },
    logout() {
      this.userId = null
      this.projectId = null
    }
  },
})
