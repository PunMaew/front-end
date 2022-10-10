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
            @update3="updateForm3"
            @update2="updateForm2"
            @update="updateForm"
            @nextStep="nextStep"
            @prevStep="prevStep"
            @submit="submitFindHome"
            @edit="updateFindHome"
            :currentStep="currentStep"
            :progress="progress"
            :isEdit="isEdit"
            :forms="forms"
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
      forms: {
        step1: null,
        step2: null,
        step3: null,
      },
      isEdit: false,
    };
  },
  // http://localhost:5443/findHome/updatePost?id=
  async asyncData({ query, $axios, $config }) {
    console.log(query);
    try {
      if (query.id && query.isEdit) {
        const res = await $axios.get(
          `${$config.findHome}onePost?id=${query.id}`
        );
        console.log(res.data.data);
        return {
          forms: {
            step1: {
              catName: res.data.data.generalInfo.catName,
              color: res.data.data.generalInfo.color,
              breeds: res.data.data.generalInfo.breeds,
              age: res.data.data.generalInfo.age,
              gender: res.data.data.generalInfo.gender,
              province: res.data.data.generalInfo.location.province,
              district: res.data.data.generalInfo.location.district,
              subDistrict: res.data.data.generalInfo.location.subDistrict,
              zipCode: res.data.data.generalInfo.location.zipCode,
              receiveVaccine: res.data.data.generalInfo.receiveVaccine,
              receiveDate: res.data.data.generalInfo.receiveDate,
              disease: res.data.data.generalInfo.disease,
              neutered: res.data.data.generalInfo.neutered,
              others: res.data.data.generalInfo.others,
            },
            step2: {
              characteristic: res.data.data.generalInfo.characteristic,
            },
            step3: {
              contactName: res.data.data.contact.contactName,
              tel: res.data.data.contact.tel,
              facebook: res.data.data.contact.facebook,
              line: res.data.data.contact.line,
            },
          },
          isEdit: true,
        };
      } else {
        return {
          isEdit: false,
        };
      }
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async updateFindHome() {
      try {
        // http://localhost:5443/findHome/updatePost?id=
        this.$axios
          .put(
            `${this.$config.findHome}updatePost?id=${this.$route.query.id}`,
            {
              generalInfo: {
                catName: this.forms.step1.catName,
                color: this.forms.step1.color,
                breeds: this.forms.step1.breeds,
                age: this.forms.step1.age,
                location: {
                  province: this.forms.step1.province,
                  subDistrict: this.forms.step1.subDistrict,
                  district: this.forms.step1.district,
                  zipCode: this.forms.step1.zipCode,
                },
                receiveVaccine: this.forms.step1.receiveVaccine,
                receiveDate: this.forms.step1.receiveDate,
                disease: this.forms.step1.disease,
                neutered: this.forms.step1.neutered,
                gender: this.forms.step1.gender,
                characteristic: this.forms.step2.characteristic,
                others: this.forms.step1.others,
              },
              contact: {
                contactName: this.forms.step3.contactName,
                tel: this.forms.step3.tel,
                facebook: this.forms.step3.facebook,
                Line: this.forms.step3.line,
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            console.log("edit successfully");
            this.$router.push("/adoptCat");
          });
      } catch (error) {
        console.log(error);
      }
    },
    async submitFindHome() {
      // console.log(this.forms);
      const ageRange =
        parseInt(this.forms.step1.age, 10) <= 3
          ? "1-3 เดือน"
            ? parseInt(this.forms.step1.age, 10) <= 6 &&
              parseInt(this.forms.step1.age, 10) >= 4
            : "4-6 เดือน"
            ? parseInt(this.forms.step1.age, 10) <= 9 &&
              parseInt(this.forms.step1.age, 10) >= 7
            : "7-9 เดือน"
            ? parseInt(this.forms.step1.age, 10) <= 12 &&
              parseInt(this.forms.step1.age, 10) >= 9
            : "9-12 เดือน"
          : "1 ปีขึ้นไป";
      try {
        this.$axios
          .post(`${this.$config.findHome}create`, {
            generalInfo: {
              catName: this.forms.step1.catName,
              color: this.forms.step1.color,
              breeds: this.forms.step1.breeds,
              age: this.forms.step1.age,
              ageRange: ageRange,
              location: {
                province: this.forms.step1.province,
                subDistrict: this.forms.step1.subDistrict,
                district: this.forms.step1.district,
                zipCode: this.forms.step1.zipCode,
              },
              receiveVaccine: this.forms.step1.receiveVaccine,
              receiveDate: this.forms.step1.receiveDate,
              disease: this.forms.step1.disease,
              neutered: this.forms.step1.neutered,
              gender: this.forms.step1.gender,
              characteristic: this.forms.step2.characteristic,
              others: this.forms.step1.others,
            },
            contact: {
              contactName: this.forms.step3.contactName,
              tel: this.forms.step3.tel,
              facebook: this.forms.step3.facebook,
              Line: this.forms.step3.line,
            },
          })
          .then((res) => {
            console.log(res.data);
            console.log("submit successfully");
            this.$router.push("/adoptCat");
          });
      } catch (error) {
        console.log(error);
      }
    },
    updateForm(data) {
      this.forms.step1 = {
        ...this.forms.step1,
        ...data,
      };
    },
    updateForm2(data) {
      this.forms.step2 = {
        ...this.forms.step2,
        ...data,
      };
    },
    updateForm3(data) {
      this.forms.step3 = {
        ...this.forms.step3,
        ...data,
      };
    },
    nextStep() {
      if (this.currentStep === 1) {
        if (this.progress.generalInfo <= 3) {
          this.progress.generalInfo += 1;
          //this.$forceUpdate();
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
