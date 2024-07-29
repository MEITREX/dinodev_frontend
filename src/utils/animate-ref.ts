import type { Ref } from 'vue'

/**
 * Animate a value from start to end over a duration, i.e., change the value of a ref over time
 * @param refValue The ref to animate
 * @param start The start value
 * @param end The end value
 * @param duration The duration of the animation in milliseconds
 * @example
 * const value = ref(0)
 * animateValue(value, 0, 100, 1000)
 * // value will be animated from 0 to 100 over 1000 milliseconds
 */
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
