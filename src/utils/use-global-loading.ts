import { computed, type Ref, ref } from 'vue'
import { watchImmediate } from '@vueuse/core'

const globalLoading = computed(() => globalLoadingCount.value > 0);
const globalLoadingCount = ref(0);

function watchLoading(loadingRef: Ref<boolean>) {
  watchImmediate(loadingRef, (value) => {
    globalLoadingCount.value += value ? 1 : -1;
  })
}

export function useGlobalLoading() {
  return { globalLoading, watchLoading }
}
