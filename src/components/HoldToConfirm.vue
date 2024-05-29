<script setup lang="ts">
import { ref, onUnmounted, defineEmits } from 'vue';

const isLoading = ref(false);
const progress = ref(0);
let holdTimeout: number | undefined = undefined;
let progressInterval: number | undefined = undefined;

const emit = defineEmits<{
  (e: 'confirm'): void;
}>();

const startHold = () => {
  isLoading.value = true;
  progress.value = 0;
  holdTimeout = window.setTimeout(confirmAction, 1200); // 2 seconds to confirm
  progressInterval = window.setInterval(() => {
    progress.value += 100 / 10; // 20 intervals over 2 seconds
    if (progress.value > 100) {
      clearInterval(progressInterval);
    }
  }, 100); // 100ms interval
};

const cancelHold = () => {
  isLoading.value = false;
  progress.value = 0;
  clearTimeout(holdTimeout);
  clearInterval(progressInterval);
};

const confirmAction = () => {
  isLoading.value = false;
  progress.value = 100;
  clearInterval(progressInterval);
  emit('confirm');
};

onUnmounted(() => {
  clearTimeout(holdTimeout);
  clearInterval(progressInterval);
});
</script>

<template>
  <div
    class="hold-to-confirm"
    @mousedown="startHold"
    @mouseup="cancelHold"
    @mouseleave="cancelHold"
  >
    <slot></slot>
    <div v-if="isLoading" class="progress-overlay">
      <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
      <span class="overlay-text text-button">Hold to confirm</span>
    </div>
  </div>
</template>

<style scoped>
.hold-to-confirm {
  position: relative;
  display: inline-block;
}

.progress-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.93);
  color: black;
  z-index: 10;
}

.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(73, 73, 73, 0.75);
  transition: width 0.1s linear;
  z-index: 5;
}

.overlay-text {
  z-index: 10;
}
</style>
