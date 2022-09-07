<template>
  <card-form-adopt>
    <template slot="content">
      <v-row justify="center">
        <v-col cols="12">
          <div class="finder-form">
            <img src="@/assets/imgs/pmlogo.png" width="135" alt="" />
            <p class="title-form mb-0">แบบฟอร์มหาบ้านให้แมว</p>
          </div>

          <div class="step-title mt-4">
            <div>
              <v-row no-gutters justify="center">
                <v-col align-self="center">
                  <div
                    :class="[this.currentStep >= 1 ? 'active' : 'inactive']"
                    class="step-block"
                  >
                    <div
                      :class="[
                        this.currentStep >= 1
                          ? 'circle-active'
                          : 'circle-inactive',
                      ]"
                      class="circle circle-position"
                    >
                      1
                    </div>
                    <p class="text-center">ข้อมูลทั่วไป</p>
                  </div>
                </v-col>

                <v-col align-self="center">
                  <div
                    :class="[this.currentStep >= 2 ? 'active' : 'inactive']"
                    class="step-block"
                  >
                    <div
                      :class="[
                        this.currentStep >= 2
                          ? 'circle-active'
                          : 'circle-inactive',
                      ]"
                      class="circle circle-position"
                    >
                      2
                    </div>
                    <p class="text-center">ข้อมูลลักษณะ</p>
                  </div>
                </v-col>

                <v-col align-self="center">
                  <div
                    :class="[this.currentStep >= 3 ? 'active' : 'inactive']"
                    class="step-block"
                  >
                    <div
                      :class="[
                        this.currentStep >= 3
                          ? 'circle-active'
                          : 'circle-inactive',
                      ]"
                      class="circle circle-position"
                    >
                      3
                    </div>
                    <p class="text-center">ข้อมูลการติดต่อ</p>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
          <div class=""></div>
          <pm-from-container
            @nextStep="nextStep"
            @prevStep="prevStep"
            :currentStep="currentStep"
            :progress="progress"
          ></pm-from-container>
        </v-col>
      </v-row>
    </template>
  </card-form-adopt>
</template>

<script>
import CardFormAdopt from "../components/punmaew/components/CardFormAdopt.vue";
import PmFromContainer from "../components/punmaew/components/PmFromContainer.vue";
export default {
  middleware: "auth",
  layout: "adoption",
  components: { CardFormAdopt, PmFromContainer },
  data() {
    return {
      currentStep: 1,
      progress: {
        generalInfo: 1,
        characteristic: 0,
        contact: 0,
      },
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep === 1) {
        if (this.progress.generalInfo <= 3) {
          this.progress.generalInfo += 1;
        } else {
          this.currentStep += 1;
        }
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
.step-title {
  .step-block {
    padding-top: 16px;
    position: relative;
    p {
      font-size: 12px;
      font-weight: bold;
      @media (min-width: 1440px) {
        font-size: 16px;
      }
    }
    .circle {
      position: absolute;

      font-size: 12px;

      width: 22px;
      height: 22px;
      border-radius: 50%;
      color: $white;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .circle-active {
      background-color: $yellow-dark;
    }
    .circle-inactive {
      background-color: $gray;
    }
    .circle-position {
      left: 36%;
      top: calc(100% - 46px);
      @media (min-width: 768px) {
        left: 42%;
      }
      @media (min-width: 1440px) {
        top: calc(100% - 53px);
      }
    }
  }
  .active {
    color: $yellow-dark;
    border-top: 3px solid $yellow-dark;
  }
  .inactive {
    color: $gray;
    border-top: 3px solid $light;
  }
}
::v-deep .v-label {
  font-size: 14px;
}
::v-deep .v-input--selection-controls {
  margin-top: 0px;
  padding-top: 0px;
}

// .step-title {
//   .step-block {
//     p {
//       font-size: 12px;
//       font-weight: bold;
//       @media (min-width: 1440px) {
//         font-size: 16px;
//       }
//     }
//   }
//   .left {
//     color: $dark;
//     border-bottom: 3px solid $yellow-dark;
//   }
//   .right {
//     color: $gray;
//     border-bottom: 3px solid $light;
//   }
// }

.finder-form {
  margin-bottom: 24px;
  text-align: center;
  .title-form {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    @media (min-width: 1440px) {
      font-size: 18px;
    }
  }
}
</style>
