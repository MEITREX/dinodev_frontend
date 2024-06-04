import { type Ref, ref } from 'vue'
import { watchImmediate } from '@vueuse/core'

const globalLoading = ref(false);

function watchLoading(loadingRef: Ref<boolean>) {
  watchImmediate(loadingRef, (value) => {
    globalLoading.value = value;
  })
}

export function useGlobalLoading() {
  return { globalLoading, watchLoading }
}
