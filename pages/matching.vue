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
                    <v-row no-gutters class="ideal-step-container">
                      <v-col v-for="i in 10" :key="i" align-self="center">
                        <div class="ideal-step" />
                      </v-col>
                    </v-row>
                  </div>
                  <div class="set-container">
                    <v-row justify="center">
                      <v-col cols="12" sm="8">
                        <div v-if="currentStep === 1">
                          <div class="mt-12 mb-6 text-center">
                            <p>
                              1. Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Mollis a, pellentesque
                              sollicitudin rutrum natoque enim eget egestas.
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-select
                                    dense
                                    filled
                                    :items="answerList"
                                    item-text="answer"
                                    name="answer"
                                    v-model="selectMatching"
                                    data-vv-name="select"
                                    required
                                    placeholder="กรุณาเลือกคำตอบ"
                                  >
                                  </v-select>
                                </div>
                                <base-button
                                  @click="nextStep()"
                                  :fillSearch="true"
                                  >ต่อไป</base-button
                                >
                              </v-col>
                            </v-row>
                          </div>
                        </div>
                        <div v-if="currentStep === 2">
                          <div class="mt-12 mb-6 text-center">
                            <p>
                              2. Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Mollis a, pellentesque
                              sollicitudin rutrum natoque enim eget egestas.
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-select
                                    dense
                                    filled
                                    :items="answerList"
                                    item-text="answer"
                                    name="answer"
                                    v-model="selectMatching"
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
                            <p>
                              3. Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Mollis a, pellentesque
                              sollicitudin rutrum natoque enim eget egestas.
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-select
                                    dense
                                    filled
                                    :items="answerList"
                                    item-text="answer"
                                    name="answer"
                                    v-model="selectMatching"
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
                            <p>
                              4. Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Mollis a, pellentesque
                              sollicitudin rutrum natoque enim eget egestas.
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-select
                                    dense
                                    filled
                                    :items="answerList"
                                    item-text="answer"
                                    name="answer"
                                    v-model="selectMatching"
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
                            <p>
                              5. Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Mollis a, pellentesque
                              sollicitudin rutrum natoque enim eget egestas.
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-select
                                    dense
                                    filled
                                    :items="answerList"
                                    item-text="answer"
                                    name="answer"
                                    v-model="selectMatching"
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
                        <div v-if="currentStep === 6">
                          <div class="mt-12 mb-6 text-center">
                            <p>
                              6. Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Mollis a, pellentesque
                              sollicitudin rutrum natoque enim eget egestas.
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-select
                                    dense
                                    filled
                                    :items="answerList"
                                    item-text="answer"
                                    name="answer"
                                    v-model="selectMatching"
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
                        <div v-if="currentStep === 7">
                          <div class="mt-12 mb-6 text-center">
                            <p>
                              7. Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Mollis a, pellentesque
                              sollicitudin rutrum natoque enim eget egestas.
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-select
                                    dense
                                    filled
                                    :items="answerList"
                                    item-text="answer"
                                    name="answer"
                                    v-model="selectMatching"
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
                        <div v-if="currentStep === 8">
                          <div class="mt-12 mb-6 text-center">
                            <p>
                              8. Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Mollis a, pellentesque
                              sollicitudin rutrum natoque enim eget egestas.
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-select
                                    dense
                                    filled
                                    :items="answerList"
                                    item-text="answer"
                                    name="answer"
                                    v-model="selectMatching"
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
                            <p>
                              9. Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Mollis a, pellentesque
                              sollicitudin rutrum natoque enim eget egestas.
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-select
                                    dense
                                    filled
                                    :items="answerList"
                                    item-text="answer"
                                    name="answer"
                                    v-model="selectMatching"
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
                            <p>
                              10. Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Mollis a, pellentesque
                              sollicitudin rutrum natoque enim eget egestas.
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <v-select
                                    dense
                                    filled
                                    :items="answerList"
                                    item-text="answer"
                                    name="answer"
                                    v-model="selectMatching"
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
import BaseButton from "../components/punmaew/components/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      selectMatching: [],
      answerList: [
        { id: 1, answer: "Hello" },
        { id: 1, answer: "Hello 2" },
        { id: 1, answer: "Hello 3" },
        { id: 1, answer: "Hello 4" },
        { id: 1, answer: "Hello 5" },
        { id: 1, answer: "Hello 6" },
      ],
      currentStep: 1,
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep === 1 || this.currentStep < 10) {
        this.currentStep += 1;
      } else {
        console.log("Submit Matching Form");
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
.ideal-cats {
  .ideal-title {
    font-size: 24px;
    @media (min-width: 1440px) {
      font-size: 36px;
    }
  }
  .ideal-line {
    position: relative;
    border-top: 3px solid $light;
    border-radius: 50px;
  }
  .ideal-step {
    position: absolute;
    top: -10px;
    border-radius: 50px;
    width: 16px;
    height: 16px;
    background-color: $gray;
  }
  .ideal-step-container {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
}
</style>
