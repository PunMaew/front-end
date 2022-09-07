<template>
  <div>
    <v-row justify="center" class="set-container">
      <v-col cols="12" align-self="center">
        <pm-general-form
          :progress="progress"
          v-if="currentStep === 1"
          class="form-area"
        ></pm-general-form>
        <pm-characteristics
          v-if="currentStep === 2"
          class="form-area"
        ></pm-characteristics>
        <pm-contact v-if="currentStep === 3" class="form-area"></pm-contact>
        <!-- class="d-md-none d-lg-none d-xl-none" -->
        <btn-form-footer
          :currentStep="currentStep"
          :progress="progress"
          @next="nextStep"
          @prev="prevStep"
        ></btn-form-footer>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BtnFormFooter from "./BtnFormFooter.vue";
import PmCharacteristics from "./PmCharacteristics.vue";
import PmContact from "./PmContact.vue";
import PmGeneralForm from "./PmGeneralForm.vue";

export default {
  components: { BtnFormFooter, PmGeneralForm, PmContact, PmCharacteristics },
  props: {
    progress: {
      type: Object,
    },
    currentStep: {
      type: Number,
    },
  },

  methods: {
    nextStep() {
      this.$emit("nextStep");
    },
    prevStep() {
      this.$emit("prevStep");
    },
  },
};
</script>

<style lang="scss" scoped>
.set-container {
  min-height: 460px;
  @media (min-width: 1440px) {
    max-height: 536px;
  }
}
.form-area {
  min-height: 372px;
  @media (min-width: 1440px) {
    min-height: 446px;
  }
}
</style>
