
<!-- adapted from
 https://stackoverflow.com/questions/76787777/how-to-create-a-datepicker-textfield-using-vuetify-3 -->
<script setup lang="ts">
import { ref, computed } from "vue";

const { label, modelValue } = defineProps<{
  label: string;
  modelValue: Date | null;
}>();
defineEmits<{
  (e: "update:modelValue", value: Date): void;
}>();

const isMenuOpen = ref(false);
const selectedDate = ref(modelValue);

const formattedDate = computed(() => {
  return selectedDate.value ? selectedDate.value.toLocaleDateString("en") : "";
});
</script>

<template>
  <v-menu v-model="isMenuOpen" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-text-field
        :label="label"
        :model-value="formattedDate"
        readonly
        v-bind="props"
        variant="solo"
        hide-details
      ></v-text-field>
    </template>
    <v-date-picker v-model="selectedDate" hide-actions>
      <template v-slot:header></template>
    </v-date-picker>
  </v-menu>
</template>

<style scoped>

</style>
