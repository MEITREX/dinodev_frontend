import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const currentError = ref<any | null>(null)

function catchError(error: any) {
  console.error(error)
  currentError.value = error

  toast.error(getMessage(error), { timeout: 10_000 })
}

function catchWarning(warning: any) {
  console.warn(warning)
  currentError.value = warning

  toast.warning(getMessage(warning))
}

function getMessage(error: any) {
  if (typeof error === 'string') {
    return error
  }

  if (error.message) {
    return error.message
  }

  return `Unknown problem occurred: ${error}`
}

export function useErrorManager() {
  return {
    catchError,
    catchWarning
  }
}
