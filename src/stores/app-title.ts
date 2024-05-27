import { ref } from 'vue'

const appTitle = ref<string | null>(null)

export function useAppTitle() {
  return {
    appTitle,
    setAppTitle: (title: string) => {
      appTitle.value = title
      document.title = title + ' - Agilosaurus'
    }
  }
}
