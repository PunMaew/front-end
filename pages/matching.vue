<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" align-self="center">
          <v-row justify="center">
            <v-col cols="12" align-self="center">
              <div class="ideal-cats">
                <h2 class="ideal-title">ค้นหาแมวในอุดมคติ</h2>
                <div>
                  <div class="ideal-line mt-8 mt-lg-12">
                    <div class="ideal-container">
                      <div class="ideal-step">
                        <div v-for="i in 10" :key="i" class="ideal"></div>
                      </div>
                    </div>
                  </div>

                  <div class="set-container">
                    <v-row justify="center">
                      <v-col cols="12" sm="8">
                        <div v-if="currentStep === 1">
                          <div class="mt-12 mb-6 text-center">
                            <p class="font-weight-bold question-ideal">
                              1. ต้องการแมวช่วงอายุเท่าไหร่
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <!-- valid -->
                                  <!-- <v-select
                                    dense
                                    filled
                                    :items="choiceListOne"
                                    item-text="answer"
                                    name="answer"
                                    v-model="answerOne.answer"
                                    data-vv-name="select"
                                    required
                                    placeholder="กรุณาเลือกคำตอบ"
                                  >
                                  </v-select> -->

                                  <div class="px-0" fluid>
                                    <v-radio-group v-model="answerOne">
                                      <v-radio
                                        v-for="n in choiceListOne"
                                        :key="n.id"
                                        :label="`${n.answer}`"
                                        :value="n"
                                      ></v-radio>
                                    </v-radio-group>
                                  </div>
                                  <!--  -->
                                </div>
                                <base-button
                                  @click="nextStep()"
                                  :fillSearch="true"
                                >
                                  ต่อไป
                                </base-button>
                              </v-col>
                            </v-row>
                          </div>
                        </div>
                        <div v-if="currentStep === 2">
                          <div class="mt-12 mb-6 text-center">
                            <p class="font-weight-bold question-ideal">
                              2. ลักษณะขนของแมวที่ต้องการ
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-select
                                    dense
                                    filled
                                    :items="choiceListTwo"
                                    item-text="answer"
                                    name="answer"
                                    v-model="answerTwo.answer"
                                    data-vv-name="select"
                                    required
                                    placeholder="กรุณาเลือกคำตอบ"
                                  >
                                  </v-select>
                                </div>
                                <div>
                                  <v-row
                                    no-gutters
                                    justify="center"
                                    class="gap-btn"
                                  >
                                    <v-col align-self="center">
                                      <base-button
                                        @click="prevStep()"
                                        :outline="true"
                                        >กลับ</base-button
                                      >
                                    </v-col>
                                    <v-col>
                                      <base-button
                                        @click="nextStep()"
                                        :fillSearch="true"
                                        >ต่อไป</base-button
                                      >
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-col></v-row
                            >
                          </div>
                        </div>
                        <div v-if="currentStep === 3">
                          <div class="mt-12 mb-6 text-center">
                            <p class="font-weight-bold question-ideal">
                              3. ต้องการแมวเพศไหน
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-select
                                    dense
                                    filled
                                    :items="choiceListThree"
                                    item-text="answer"
                                    name="answer"
                                    v-model="answerThree.answer"
                                    data-vv-name="select"
                                    required
                                    placeholder="กรุณาเลือกคำตอบ"
                                  >
                                  </v-select>
                                </div>
                                <div>
                                  <v-row
                                    no-gutters
                                    justify="center"
                                    class="gap-btn"
                                  >
                                    <v-col align-self="center">
                                      <base-button
                                        @click="prevStep()"
                                        :outline="true"
                                        >กลับ</base-button
                                      >
                                    </v-col>
                                    <v-col>
                                      <base-button
                                        @click="nextStep()"
                                        :fillSearch="true"
                                        >ต่อไป</base-button
                                      >
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-col></v-row
                            >
                          </div>
                        </div>
                        <div v-if="currentStep === 4">
                          <div class="mt-12 mb-6 text-center">
                            <p class="font-weight-bold question-ideal">
                              4. สีแมวที่ต้องการ
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-select
                                    dense
                                    filled
                                    :items="choiceListFour"
                                    item-text="answer"
                                    name="answer"
                                    v-model="answerFour.answer"
                                    data-vv-name="select"
                                    required
                                    placeholder="กรุณาเลือกคำตอบ"
                                  >
                                  </v-select>
                                </div>
                                <div>
                                  <v-row
                                    no-gutters
                                    justify="center"
                                    class="gap-btn"
                                  >
                                    <v-col align-self="center">
                                      <base-button
                                        @click="prevStep()"
                                        :outline="true"
                                        >กลับ</base-button
                                      >
                                    </v-col>
                                    <v-col>
                                      <base-button
                                        @click="nextStep()"
                                        :fillSearch="true"
                                        >ต่อไป</base-button
                                      >
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-col></v-row
                            >
                          </div>
                        </div>
                        <div v-if="currentStep === 5">
                          <div class="mt-12 mb-6 text-center">
                            <p class="font-weight-bold question-ideal">
                              5. ต้องการแมวจากจังหวัดไหน
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-autocomplete
                                    dense
                                    filled
                                    :items="province"
                                    item-text="province"
                                    name="province"
                                    v-model="answerFive.answer"
                                    data-vv-name="select"
                                    required
                                    placeholder="กรุณาเลือกคำตอบ"
                                  >
                                  </v-autocomplete>
                                </div>
                                <div>
                                  <v-row
                                    no-gutters
                                    justify="center"
                                    class="gap-btn"
                                  >
                                    <v-col align-self="center">
                                      <base-button
                                        @click="prevStep()"
                                        :outline="true"
                                        >กลับ</base-button
                                      >
                                    </v-col>
                                    <v-col>
                                      <base-button
                                        @click="nextStep()"
                                        :fillSearch="true"
                                        >ต่อไป</base-button
                                      >
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-col></v-row
                            >
                          </div>
                        </div>
                        <div v-if="currentStep === 6">
                          <div class="mt-12 mb-6 text-center">
                            <p class="font-weight-bold question-ideal">
                              6. ต้องการแมวจากเขตไหน
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-autocomplete
                                    dense
                                    filled
                                    :items="province"
                                    item-text="district"
                                    name="district"
                                    v-model="answerSix.answer"
                                    data-vv-name="select"
                                    required
                                    placeholder="กรุณาเลือกคำตอบ"
                                  >
                                  </v-autocomplete>
                                </div>
                                <div>
                                  <v-row
                                    no-gutters
                                    justify="center"
                                    class="gap-btn"
                                  >
                                    <v-col align-self="center">
                                      <base-button
                                        @click="prevStep()"
                                        :outline="true"
                                        >กลับ</base-button
                                      >
                                    </v-col>
                                    <v-col>
                                      <base-button
                                        @click="nextStep()"
                                        :fillSearch="true"
                                        >ต่อไป</base-button
                                      >
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-col></v-row
                            >
                          </div>
                        </div>
                        <div v-if="currentStep === 7">
                          <div class="mt-12 mb-6 text-center">
                            <p class="font-weight-bold question-ideal">
                              7. สายพันธุ์แมวที่ต้องการ
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-autocomplete
                                    dense
                                    filled
                                    :items="filterList.breed"
                                    item-text="name"
                                    name="breeds"
                                    v-model="answerSeven.answer"
                                    data-vv-name="select"
                                    required
                                    placeholder="กรุณาเลือกคำตอบ"
                                  >
                                  </v-autocomplete>
                                </div>
                                <div>
                                  <v-row
                                    no-gutters
                                    justify="center"
                                    class="gap-btn"
                                  >
                                    <v-col align-self="center">
                                      <base-button
                                        @click="prevStep()"
                                        :outline="true"
                                        >กลับ</base-button
                                      >
                                    </v-col>
                                    <v-col>
                                      <base-button
                                        @click="nextStep()"
                                        :fillSearch="true"
                                        >ต่อไป</base-button
                                      >
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-col></v-row
                            >
                          </div>
                        </div>
                        <div v-if="currentStep === 8">
                          <div class="mt-12 mb-6 text-center">
                            <p class="font-weight-bold question-ideal">
                              8. ต้องการแมวที่...
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-select
                                    dense
                                    filled
                                    :items="choiceListEight"
                                    item-text="answer"
                                    name="answer"
                                    v-model="answerEight.answer"
                                    data-vv-name="select"
                                    required
                                    placeholder="กรุณาเลือกคำตอบ"
                                  >
                                  </v-select>
                                </div>
                                <div>
                                  <v-row
                                    no-gutters
                                    justify="center"
                                    class="gap-btn"
                                  >
                                    <v-col align-self="center">
                                      <base-button
                                        @click="prevStep()"
                                        :outline="true"
                                        >กลับ</base-button
                                      >
                                    </v-col>
                                    <v-col>
                                      <base-button
                                        @click="nextStep()"
                                        :fillSearch="true"
                                        >ต่อไป</base-button
                                      >
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-col></v-row
                            >
                          </div>
                        </div>
                        <div v-if="currentStep === 9">
                          <div class="mt-12 mb-6 text-center">
                            <p class="font-weight-bold question-ideal">
                              9. ต้องการแมวที่..
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-select
                                    dense
                                    filled
                                    :items="choiceListNine"
                                    item-text="answer"
                                    name="answer"
                                    v-model="answerNine.answer"
                                    data-vv-name="select"
                                    required
                                    placeholder="กรุณาเลือกคำตอบ"
                                  >
                                  </v-select>
                                </div>
                                <div>
                                  <v-row
                                    no-gutters
                                    justify="center"
                                    class="gap-btn"
                                  >
                                    <v-col align-self="center">
                                      <base-button
                                        @click="prevStep()"
                                        :outline="true"
                                        >กลับ</base-button
                                      >
                                    </v-col>
                                    <v-col>
                                      <base-button
                                        @click="nextStep()"
                                        :fillSearch="true"
                                        >ต่อไป</base-button
                                      >
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-col></v-row
                            >
                          </div>
                        </div>
                        <div v-if="currentStep === 10">
                          <div class="mt-12 mb-6 text-center">
                            <p class="font-weight-bold question-ideal">
                              10. ต้องการแมวที่..
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-select
                                    dense
                                    filled
                                    :items="choiceListTen"
                                    item-text="answer"
                                    name="answer"
                                    v-model="answerTen.answer"
                                    data-vv-name="select"
                                    required
                                    placeholder="กรุณาเลือกคำตอบ"
                                  >
                                  </v-select>
                                </div>
                                <div>
                                  <v-row
                                    no-gutters
                                    justify="center"
                                    class="gap-btn"
                                  >
                                    <v-col align-self="center">
                                      <base-button
                                        @click="prevStep()"
                                        :outline="true"
                                        >กลับ</base-button
                                      >
                                    </v-col>
                                    <v-col>
                                      <base-button
                                        @click="adealCat()"
                                        :fillSearch="true"
                                        >ยืนยัน</base-button
                                      >
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-col></v-row
                            >
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import filterList from "@/assets/data/filterList.json";
import provinceList from "@/assets/data/province.json";
import BaseButton from "../components/punmaew/components/BaseButton.vue";
export default {
  middleware: "auth",
  components: { BaseButton, filterList, provinceList },
  data() {
    return {
      answerOne: { id: 1, answer: "" },
      answerTwo: { id: 2, answer: "" },
      answerThree: { id: 3, answer: "" },
      answerFour: { id: 4, answer: "" },
      answerFive: { id: 5, answer: "" },
      answerSix: { id: 6, answer: "" },
      answerSeven: { id: 7, answer: "" },
      answerEight: { id: 8, answer: "" },
      answerNine: { id: 9, answer: "" },
      answerTen: { id: 10, answer: "" },

      choiceListOne: [
        { id: 1, answer: "1-3 เดือน" },
        { id: 2, answer: "4 - 6 เดือน" },
        { id: 3, answer: "7 - 9 เดือน" },
        { id: 4, answer: "10 - 12 เดือน" },
        { id: 5, answer: "1 ปีขึ้นไป" },
      ],
      choiceListTwo: [
        { id: 1, answer: "ขนสั้น" },
        { id: 2, answer: "ขนยาว" },
        { id: 3, answer: "ไม่มีขน" },
      ],
      choiceListThree: [
        { id: 1, answer: "เพศเมีย" },
        { id: 2, answer: "เพศผู้" },
        { id: 3, answer: "ไม่จำกัด" },
      ],
      choiceListFour: [
        { id: 1, answer: "สีล้วน" },
        { id: 2, answer: "สองสี" },
        { id: 3, answer: "สีเปรอะ" },
        { id: 4, answer: "สามสี" },
        { id: 5, answer: "ลายสลิด" },
        { id: 6, answer: "ลายแต้ม" },
      ],
      choiceListFive: [{ id: 1, answer: provinceList }],
      choiceListSix: [{ id: 1, answer: "District" }],
      choiceListSeven: [{ id: 1, answer: "Breed" }],
      choiceListEight: [
        { id: 1, answer: "ใช้กระบะทรายเป็น" },
        { id: 2, answer: "ไม่จำเป็นต้องใช้กระบะทรายเป็น" },
      ],
      choiceListNine: [
        { id: 1, answer: "ทำหมันแล้ว" },
        { id: 2, answer: "ยังไม่ได้ทำหมัน" },
        { id: 3, answer: "ไม่จำกัด" },
      ],
      choiceListTen: [
        { id: 1, answer: "ได้รับวัคซีนครบ" },
        { id: 2, answer: "ยังไม่ได้รับวัคซีน" },
        { id: 3, answer: "ได้รับวัคซีนบางชนิด" },
        { id: 4, answer: "ไม่จำกัด" },
      ],
      currentStep: 1,
      province: provinceList,
      filterList: filterList,
    };
  },
  methods: {
    async adealCat() {
      try {
        const res = await this.$axios.put(
          `${this.$config.authURL}user/idealCat?id=${this.$store.state.auth.user._id}`,
          {
            idealCat: [
              { answer: this.answerOne.answer },
              { answer: this.answerTwo.answer },
              { answer: this.answerThree.answer },
              { answer: this.answerFour.answer },
              { answer: this.answerFive.answer },
              { answer: this.answerSix.answer },
              { answer: this.answerSeven.answer },
              { answer: this.answerEight.answer },
              { answer: this.answerNine.answer },
              { answer: this.answerTen.answer },
            ],
          }
        );
        console.log(res);
        this.$router.push("/adoptCat");
      } catch (error) {
        console.log(error);
      }
    },
    nextStep() {
      // console.log(id);
      // if (this.questions.id === 1 || this.questions.id < 10) {
      //   this.questions.id += 1;
      // } else {
      //   console.log("Submit Matching Form");
      // }
      if (this.currentStep === 1 || this.currentStep < 10) {
        this.currentStep += 1;
      } else {
        console.log("Hello");
      }
    },
    prevStep() {
      if (this.currentStep > 1 || this.currentStep <= 10) {
        return (this.currentStep -= 1);
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.set-container {
  min-height: 350px;
}
.gap-btn {
  gap: 10px;
}
.valid-form {
  color: $error;
  font-weight: bold;
  font-size: 12px;
}
::v-deep .v-input--dense > .v-input__control > .v-input__slot {
  margin-bottom: 0px;
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none;
}
::v-deep .v-input__slot {
  border-radius: 50px;
  margin-bottom: 0px;
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:after {
  border-style: none !important;
}
::v-deep .v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px;
  padding: 0px;
}
.question-ideal {
  font-size: 14px;
  @media (min-width: 1440px) {
    font-size: 24px;
  }
}
.ideal-cats {
  margin-bottom: 56px;
  @media (min-width: 1440px) {
    margin-bottom: 450px;
  }
  .ideal-title {
    font-size: 24px;
    @media (min-width: 1440px) {
      font-size: 36px;
    }
  }
  .ideal-line {
    position: relative;
    border-top: 3px solid $light;
    .ideal-container {
      padding-left: 22px;
      padding-right: 22px;
      @media (min-width: 768px) {
        padding-left: 48px;
        padding-right: 48px;
      }
      @media (min-width: 768px) {
        padding-left: 100px;
        padding-right: 100px;
      }
      @media (min-width: 2560px) {
        padding-left: 300px;
        padding-right: 300px;
      }
    }
    @media (min-width: 1440px) {
      border-top: 5px solid $light;
    }
  }
  .ideal-step {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    .ideal {
      position: relative;
      top: -10px;
      border-radius: 50px;
      width: 16px;
      height: 16px;
      background-color: $gray;
      @media (min-width: 1440px) {
        top: -16px;
        width: 28px;
        height: 28px;
      }
    }
  }
}
</style>
