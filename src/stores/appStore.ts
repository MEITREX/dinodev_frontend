import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useAppStore = defineStore('login', {
  state: () => ({
    projectId: useLocalStorage('projectId', null as string | null)
  }),
  getters: {
    getProjectId(): string | null {
      return this.projectId
    },
    isProjectSelected(): boolean {
      return this.projectId !== null
    }
  },
  actions: {
    setProjectId(projectId: string) {
      this.projectId = projectId
    },
  },
})
