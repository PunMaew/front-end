<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" align-self="center">
        <pm-general-form
          :progress="progress"
          v-if="currentStep === 1"
          class="form-area"
        ></pm-general-form>
        <!-- <pm-contact></pm-contact> -->
        <btn-form-footer
          class="d-md-none d-lg-none d-xl-none"
          :progress="progress"
          v-if="currentStep === 1"
          @next="nextStep"
          @prev="prevStep"
        ></btn-form-footer>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BtnFormFooter from "./BtnFormFooter.vue";
import PmGeneralForm from "./PmGeneralForm.vue";

export default {
  components: { BtnFormFooter, PmGeneralForm },
  props: {
    progressed: {
      type: Object,
    },
  },
  data() {
    return {
      currentStep: 1,
      progress: {
        // generalInfo: 1,
        generalInfo: 1,
        contact: 0,
      },
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep === 1) {
        this.progress.generalInfo += 1;
      } else {
        this.currentStep += 1;
      }
    },
    prevStep() {
      if (this.currentStep === 1) {
        if (this.progress.generalInfo <= 0) {
          return;
        } else {
          this.progress.generalInfo -= 1;
        }
      } else {
        this.currentStep -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-area {
  min-height: 340px;
}
</style>
