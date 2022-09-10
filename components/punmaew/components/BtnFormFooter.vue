<template>
  <div>
    <div v-if="this.currentStep === 1 || this.currentStep === 2">
      <v-row
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
          <base-button :outline="true" @click.native="prevStep"
            >กลับ</base-button
          >
        </v-col>
        <v-col align-self="center">
          <base-button :fillSearch="true" @click.native="nextStep"
            >ต่อไป</base-button
          >
        </v-col>
      </v-row>
    </div>
    <!-- currentStep === 3 -->
    <v-row
      v-if="this.currentStep === 3"
      no-gutters
      justify="center"
      class="btn-area"
    >
      <v-col align-self="center">
        <base-button :outline="true" @click.native="prevStep">กลับ</base-button>
      </v-col>
      <v-col v-if="isEdit === false" align-self="center">
        <base-button :fillSearch="true" @click.native="submitFindHome"
          >ลงประกาศ</base-button
        >
      </v-col>
      <v-col v-if="isEdit === true" align-self="center">
        <base-button :fillSearch="true" @click.native="updateFindHome"
          >ตกลง</base-button
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
    currentStep: {
      type: Number,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    nextStep() {
      this.$emit("next");
    },
    prevStep() {
      this.$emit("prev");
    },
    submitFindHome() {
      this.$emit("submit");
    },
    updateFindHome() {
      this.$emit("update");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-area {
  gap: 10px;
}
</style>
