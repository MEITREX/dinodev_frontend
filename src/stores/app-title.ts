import { ref, watch } from 'vue'

const appTitle = ref<string | null>(null)

watch(appTitle, (title) => {
  if (title) {
    document.title = title + ' - DinoDev'
  }
})

export function useAppTitle() {
  return {
    appTitle,
    setAppTitle: (title: string) => {
      appTitle.value = title
    }
  }
}
