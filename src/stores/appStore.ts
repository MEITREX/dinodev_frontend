import { useLocalStorage } from '@vueuse/core'

// remark: there are store management libraries like Vuex or Pinia, however,
// the Vue 3 composition API is powerful enough to manage global state
// and I had more trouble with the libraries than without them.
// However, if the project grows, it might be a good idea to use a store management library

const projectId = useLocalStorage('projectId', null as string | null)

const getProjectIdOrThrow = () => {
  if (projectId.value === null) {
    throw new Error('No project selected')
  }
  return projectId.value;
}

export function useAppStore() {

  return {
    projectId,
    getProjectIdOrThrow,
    isProjectSelected() {
      return projectId.value !== null
    }
  }
}
