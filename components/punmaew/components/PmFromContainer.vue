<template>
  <div>
    <v-row justify="center" class="set-container">
      <v-col cols="12" align-self="center">
        <pm-general-form
          ref="generalForm"
          @form="updateGeneralForm"
          :progress="progress"
          v-show="currentStep === 1"
          class="form-area"
          :isEdit="isEdit"
          :fetchForm="forms"
        />
        <pm-characteristics
          @form2="updateCharacterForm"
          ref="characterForm"
          v-show="currentStep === 2"
          class="form-area"
          :isEdit="isEdit"
          :fetchForm="forms"
        />
        <pm-contact
          @form3="updateContactForm"
          ref="contactForm"
          v-show="currentStep === 3"
          class="form-area"
          :isEdit="isEdit"
          :fetchForm="forms"
        />
        <btn-form-footer
          :currentStep="currentStep"
          :progress="progress"
          @next="nextStep"
          @prev="prevStep"
          @submit="submitFindHome"
          :isEdit="isEdit"
          @update="updateFindHome"
        />
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
    isEdit: {
      type: Boolean,
      default: false,
    },
    forms: {
      type: Object,
    },
  },

  methods: {
    async updateFindHome() {
      if (this.currentStep === 3) {
        let valid = await this.$refs.contactForm.validContact();
        console.log(valid);
        if (valid) {
          this.$emit("edit");
        } else {
          return;
        }
      }
    },
    async submitFindHome() {
      if (this.currentStep === 3) {
        let valid = await this.$refs.contactForm.validContact();
        console.log(valid);
        if (valid) {
          this.$emit("submit");
        } else {
          return;
        }
      }
    },
    updateGeneralForm(data) {
      console.log(data);
      this.$emit("update", data);
    },
    updateCharacterForm(data) {
      this.$emit("update2", data);
    },
    updateContactForm(data) {
      this.$emit("update3", data);
    },
    async nextStep() {
      if (this.progress.generalInfo === 1 && this.currentStep === 1) {
        let valid = await this.$refs.generalForm.validInfoFirst();
        console.log(valid);
        if (valid) {
          this.$emit("nextStep");
        } else {
          return;
        }
      } else if (this.progress.generalInfo === 2 && this.currentStep === 1) {
        let valid = await this.$refs.generalForm.validInfoSecond();
        console.log(valid);
        if (valid) {
          this.$emit("nextStep");
        } else {
          return;
        }
      } else if (this.progress.generalInfo === 3 && this.currentStep === 1) {
        let valid = await this.$refs.generalForm.validInfoThird();
        console.log(valid);
        if (valid) {
          this.$emit("nextStep");
        } else {
          return;
        }
      } else if (this.progress.generalInfo === 4 && this.currentStep === 1) {
        let valid = await this.$refs.generalForm.validInfoFourth();
        console.log(valid);
        if (valid) {
          this.$emit("nextStep");
        } else {
          return;
        }
      } else if (this.currentStep === 2) {
        let valid = await this.$refs.characterForm.validCharacter();
        console.log(valid);
        if (valid) {
          this.$emit("nextStep");
        } else {
          return;
        }
      }
      // else if (this.currentStep === 3) {
      //   let valid = await this.$refs.contactForm.validContact();
      //   console.log(valid);
      //   if (valid) {
      //     this.$emit("nextStep");
      //   } else {
      //     return;
      //   }
      // }
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
    // max-height: 536px;
    max-height: 750px;
  }
}
.form-area {
  min-height: 372px;
  @media (min-width: 1440px) {
    min-height: 446px;
  }
}
</style>
