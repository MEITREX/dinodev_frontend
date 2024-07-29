import { computed, type Ref } from 'vue'

const globalLoading = computed(() => globalLoadingRef.some((ref) => ref.value))
const globalLoadingRef: Ref<boolean>[] = [];

function watchLoading(loadingRef: Ref<boolean>) {
  globalLoadingRef.push(loadingRef)
}

/**
 * Hook to manage global loading state
 */
export function useGlobalLoading() {
  return { globalLoading, watchLoading }
}
