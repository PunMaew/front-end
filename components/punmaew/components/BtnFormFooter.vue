<template>
  <div>
    <v-row
      :progress="progress"
      v-if="progress.generalInfo === 1"
      justify="center"
      class="btn-area"
    >
      <v-col align-self="center">
        <base-button :fillSearch="true" @click.native="nextStep"
          >ต่อไป</base-button
        >
      </v-col>
    </v-row>
    <v-row v-else no-gutters justify="center" class="btn-area">
      <v-col align-self="center">
        <base-button :outline="true" @click.native="prevStep">กลับ</base-button>
      </v-col>
      <v-col align-self="center">
        <base-button :fillSearch="true" @click.native="nextStep"
          >ต่อไป</base-button
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
  props: {
    progress: {
      type: Object,
    },
  },
  methods: {
    nextStep() {
      this.$emit("next");
    },
    prevStep() {
      this.$emit("prev");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-area {
  gap: 10px;
}
</style>
