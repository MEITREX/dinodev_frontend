<script setup lang="ts">

</script>

<template>
  <v-row>
    <v-col>
      <v-form>

        <h3>
          Sprint settings
        </h3>
        <v-row>
          <v-col>
            Sprint duration (days)
          </v-col>
          <v-col>
            <v-slider min="1" max="40" model-value="14" thumb-label="always" step="1">
            </v-slider>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            Sprint start date
          </v-col>
          <v-col>
            <v-text-field type="date" model-value="2024-01-21" readonly></v-text-field>
          </v-col>
        </v-row>

        <h3>
          Planning meeting
        </h3>
        <v-row>
          <v-col>
            Meeting leader
          </v-col>
          <v-col>
            <v-select
              :items="['Alice', 'Bob', 'Charlie']"
              model-value="Alice"
            ></v-select>
          </v-col>
        </v-row>
      </v-form>

    </v-col>

    <v-col>

    </v-col>
  </v-row>
</template>

<style scoped>

</style>
