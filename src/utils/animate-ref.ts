import type { Ref } from 'vue'

export function animateValue(refValue: Ref<number>, start: number, end: number, duration: number): void {
  if (start === end || refValue.value === end) {
    return
  }

  const startTimestamp = performance.now()

  function step(timestamp: number) {
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    refValue.value = Math.floor(progress * (end - start) + start)
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}
