<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" align-self="center">
          <v-row justify="center">
            <v-col cols="12" align-self="center">
              <div
                v-if="this.$store.state.auth.user.idealCat.length <= 0"
                class="ideal-cats"
              >
                <h2 class="ideal-title">ค้นหาแมวในอุดมคติ</h2>
                <div>
                  <div>
                    <div class="ideal-line mt-8 mt-lg-12">
                      <div class="ideal-container">
                        <div class="ideal-step">
                          <div
                            v-for="i in 10"
                            :key="i"
                            class="ideal"
                            :class="[i <= currentStep && 'step-active']"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="ideal-line-orange"
                      :style="{
                        width:
                          currentStep == 10
                            ? currentStep * 10 + '%'
                            : currentStep * 9 + '%',
                      }"
                    ></div>
                  </div>
                  <div class="set-container">
                    <v-row justify="center">
                      <v-col cols="12" sm="8">
                        <!-- <validation-observer ref="idealForm"> -->
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
                                  <validation-provider
                                    rules="required"
                                    v-slot="{ errors }"
                                    name="answerOne"
                                    ref="answerOne"
                                  >
                                    <div class="px-0" fluid>
                                      <v-radio-group
                                        name="answerOne"
                                        v-model="answerOne"
                                      >
                                        <v-radio
                                          v-for="n in choiceListOne"
                                          :key="n.id"
                                          :label="`${n.answer}`"
                                          :value="n"
                                        />
                                      </v-radio-group>
                                    </div>
                                    <span class="valid-form">
                                      {{ errors[0] }}
                                    </span>
                                  </validation-provider>
                                  <!--  -->
                                </div>
                                <base-button
                                  @click="nextStep('answerOne')"
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
                                  <validation-provider
                                    rules="required"
                                    v-slot="{ errors }"
                                    ref="answerTwo"
                                  >
                                    <v-select
                                      dense
                                      filled
                                      :items="choiceListTwo"
                                      item-text="answer"
                                      name="answerTwo"
                                      v-model="answerTwo"
                                      data-vv-name="select"
                                      required
                                      placeholder="กรุณาเลือกคำตอบ"
                                    />
                                    <span class="valid-form">
                                      {{ errors[0] }}
                                    </span>
                                  </validation-provider>
                                </div>
                                <div>
                                  <v-row
                                    no-gutters
                                    justify="center"
                                    class="gap-btn"
                                  >
                                    <v-col align-self="center">
                                      <base-button
                                        @click="prevStep"
                                        :outline="true"
                                        >กลับ</base-button
                                      >
                                    </v-col>
                                    <v-col>
                                      <base-button
                                        @click="nextStep('answerTwo')"
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
                                  <validation-provider
                                    rules="required"
                                    v-slot="{ errors }"
                                    ref="answerThree"
                                  >
                                    <v-select
                                      dense
                                      filled
                                      :items="choiceListThree"
                                      item-text="answer"
                                      name="answerThree"
                                      v-model="answerThree"
                                      data-vv-name="select"
                                      required
                                      placeholder="กรุณาเลือกคำตอบ"
                                    >
                                    </v-select>
                                    <span class="valid-form">
                                      {{ errors[0] }}
                                    </span>
                                  </validation-provider>
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
                                        @click="nextStep('answerThree')"
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
                                  <validation-provider
                                    rules="required"
                                    v-slot="{ errors }"
                                    ref="answerFour"
                                  >
                                    <v-select
                                      dense
                                      filled
                                      :items="filterList.color"
                                      item-text="name"
                                      name="answerFour"
                                      v-model="answerFour"
                                      data-vv-name="select"
                                      required
                                      placeholder="กรุณาเลือกคำตอบ"
                                    >
                                    </v-select>
                                    <span class="valid-form">
                                      {{ errors[0] }}
                                    </span>
                                  </validation-provider>
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
                                        @click="nextStep('answerFour')"
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
                                  <validation-provider
                                    rules="required"
                                    v-slot="{ errors }"
                                    ref="answerFive"
                                  >
                                    <v-autocomplete
                                      dense
                                      filled
                                      :items="province"
                                      item-text="province"
                                      name="province"
                                      v-model="answerFive"
                                      data-vv-name="select"
                                      required
                                      placeholder="กรุณาเลือกคำตอบ"
                                    >
                                    </v-autocomplete>
                                    <span class="valid-form">
                                      {{ errors[0] }}
                                    </span>
                                  </validation-provider>
                                </div>
                                <div>
                                  <v-row
                                    no-gutters
                                    justify="center"
                                    class="gap-btn"
                                  >
                                    <v-col align-self="center">
                                      <base-button
                                        @click="prevStep"
                                        :outline="true"
                                        >กลับ</base-button
                                      >
                                    </v-col>
                                    <v-col>
                                      <base-button
                                        @click="nextStep('answerFive')"
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
                                  <validation-provider
                                    rules="required"
                                    v-slot="{ errors }"
                                    ref="answerSix"
                                  >
                                    <v-autocomplete
                                      dense
                                      filled
                                      :items="province"
                                      item-text="district"
                                      name="district"
                                      v-model="answerSix"
                                      data-vv-name="select"
                                      required
                                      placeholder="กรุณาเลือกคำตอบ"
                                    >
                                    </v-autocomplete>
                                    <span class="valid-form">
                                      {{ errors[0] }}
                                    </span>
                                  </validation-provider>
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
                                        @click="nextStep('answerSix')"
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
                                  <validation-provider
                                    rules="required"
                                    v-slot="{ errors }"
                                    ref="answerSeven"
                                  >
                                    <v-autocomplete
                                      dense
                                      filled
                                      :items="filterList.breed"
                                      item-text="name"
                                      name="breeds"
                                      v-model="answerSeven"
                                      data-vv-name="select"
                                      required
                                      placeholder="กรุณาเลือกคำตอบ"
                                    >
                                    </v-autocomplete>
                                    <span class="valid-form">
                                      {{ errors[0] }}
                                    </span>
                                  </validation-provider>
                                </div>
                                <div>
                                  <v-row
                                    no-gutters
                                    justify="center"
                                    class="gap-btn"
                                  >
                                    <v-col align-self="center">
                                      <base-button
                                        @click="prevStep"
                                        :outline="true"
                                        >กลับ</base-button
                                      >
                                    </v-col>
                                    <v-col>
                                      <base-button
                                        @click="nextStep('answerSeven')"
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
                                  <validation-provider
                                    rules="required"
                                    v-slot="{ errors }"
                                    ref="answerEight"
                                  >
                                    <v-radio-group
                                      name="answerEight"
                                      v-model="answerEight"
                                    >
                                      <v-radio
                                        v-for="n in choiceListEight"
                                        :key="n.id"
                                        :label="`${n.answer}`"
                                        :value="n"
                                      />
                                    </v-radio-group>
                                    <span class="valid-form">
                                      {{ errors[0] }}
                                    </span>
                                  </validation-provider>
                                </div>
                                <div>
                                  <v-row
                                    no-gutters
                                    justify="center"
                                    class="gap-btn"
                                  >
                                    <v-col align-self="center">
                                      <base-button
                                        @click="prevStep"
                                        :outline="true"
                                        >กลับ</base-button
                                      >
                                    </v-col>
                                    <v-col>
                                      <base-button
                                        @click="nextStep('answerEight')"
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
                              9. ต้องการแมวที่...
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <validation-provider
                                    rules="required"
                                    v-slot="{ errors }"
                                    ref="answerNine"
                                  >
                                    <v-radio-group
                                      name="answerNine"
                                      v-model="answerNine"
                                    >
                                      <v-radio
                                        v-for="n in choiceListNine"
                                        :key="n.id"
                                        :label="`${n.answer}`"
                                        :value="n"
                                      />
                                    </v-radio-group>
                                    <span class="valid-form">
                                      {{ errors[0] }}
                                    </span>
                                  </validation-provider>
                                </div>
                                <div>
                                  <v-row
                                    no-gutters
                                    justify="center"
                                    class="gap-btn"
                                  >
                                    <v-col align-self="center">
                                      <base-button
                                        @click="prevStep"
                                        :outline="true"
                                        >กลับ</base-button
                                      >
                                    </v-col>
                                    <v-col>
                                      <base-button
                                        @click="nextStep('answerNine')"
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
                              10. ต้องการแมวที่...
                            </p>
                          </div>
                          <div>
                            <v-row justify="center">
                              <v-col cols="12" sm="8" lg="6">
                                <div class="mb-7">
                                  <validation-provider
                                    rules="required"
                                    v-slot="{ errors }"
                                    ref="answerTen"
                                  >
                                    <v-radio-group
                                      name="answerTen"
                                      v-model="answerTen"
                                    >
                                      <v-radio
                                        v-for="n in choiceListTen"
                                        :key="n.id"
                                        :label="`${n.answer}`"
                                        :value="n"
                                      />
                                    </v-radio-group>
                                    <span class="valid-form">
                                      {{ errors[0] }}
                                    </span>
                                  </validation-provider>
                                </div>
                                <div>
                                  <v-row
                                    no-gutters
                                    justify="center"
                                    class="gap-btn"
                                  >
                                    <v-col align-self="center">
                                      <base-button
                                        @click="prevStep"
                                        :outline="true"
                                        >กลับ</base-button
                                      >
                                    </v-col>
                                    <v-col>
                                      <base-button
                                        @click="adealCat('answerTen')"
                                        :fillSearch="true"
                                        >ยืนยัน</base-button
                                      >
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-col>
                            </v-row>
                          </div>
                        </div>
                        <!-- </validation-observer> -->
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </div>
              <div class="ideal-cats-second" v-else>
                <div class="ideal-title mb-6 mb-lg-16">
                  <h2>ค้นหาแมวในอุดมคติ</h2>
                </div>
                <div>
                  <v-row justify="center">
                    <v-col cols="12">
                      <div class="text-center">
                        <div class="ideal-success">
                          <v-row justify="center">
                            <v-col cols="6" md="3">
                              <img src="@/assets/imgs/banner.png" alt="" />
                            </v-col>
                          </v-row>
                        </div>

                        <div>
                          <v-row justify="center">
                            <v-col cols="12" md="6">
                              <p class="mb-0 font-weight-bold ideal-second">
                                คุณทำแบบสอบถามนี้แล้ว
                              </p>
                              <base-button></base-button>
                              <base-button
                                @click="editIdealCat"
                                :fillSearch="true"
                                >แก้ไขแมวในอุดมคติ</base-button
                              >
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
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
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import filterList from "@/assets/data/filterList.json";
import provinceList from "@/assets/data/province.json";
import BaseButton from "../components/punmaew/components/BaseButton.vue";
export default {
  middleware: "auth",
  components: {
    ValidationProvider,
    ValidationObserver,
    BaseButton,
    filterList,
    provinceList,
  },
  data() {
    return {
      answerOne: null,
      answerTwo: null,
      answerThree: null,
      answerFour: null,
      answerFive: null,
      answerSix: null,
      answerSeven: null,
      answerEight: null,
      answerNine: null,
      answerTen: null,

      choiceListOne: [
        { id: 1, answer: "1-3 เดือน" },
        { id: 2, answer: "4-6 เดือน" },
        { id: 3, answer: "7-9 เดือน" },
        { id: 4, answer: "10-12 เดือน" },
        { id: 5, answer: "1 ปีขึ้นไป" },
      ],
      choiceListTwo: [
        { id: 1, answer: "ขนสั้น" },
        { id: 2, answer: "ขนยาว" },
        { id: 3, answer: "ไม่มีขน" },
        { id: 4, answer: "ไม่จำกัด" },
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
        { id: 1, answer: "ยังไม่ได้รับวัคซีน" },
        { id: 2, answer: "ได้รับวัคซีนครบตามช่วงอายุของแมว" },
        { id: 3, answer: "ได้รับวัคซีนบางชนิด" },
        { id: 4, answer: "ไม่จำกัด" },
      ],
      currentStep: 1,
      province: provinceList,
      filterList: filterList,
    };
  },
  methods: {
    editIdealCat() {
      this.$router.push("/editProfile?menu=3");
    },
    async adealCat(answer) {
      try {
        const success = await this.$refs[answer].validate();
        if (!success.valid) {
          return;
        }
        const res = await this.$axios.put(
          `${this.$config.authURL}user/idealCat?id=${this.$store.state.auth.user._id}`,
          {
            idealCat: [
              { answer: this.answerOne.answer },
              { answer: this.answerTwo },
              { answer: this.answerThree },
              { answer: this.answerFour },
              { answer: this.answerFive },
              { answer: this.answerSix },
              { answer: this.answerSeven },
              { answer: this.answerEight.answer },
              { answer: this.answerNine.answer },
              { answer: this.answerTen.answer },
            ],
          }
        );
        this.$store.commit("SET_IDEAL", [
          { answer: this.answerOne.answer },
          { answer: this.answerTwo },
          { answer: this.answerThree },
          { answer: this.answerFour },
          { answer: this.answerFive },
          { answer: this.answerSix },
          { answer: this.answerSeven },
          { answer: this.answerEight.answer },
          { answer: this.answerNine.answer },
          { answer: this.answerTen.answer },
        ]);
        console.log(res.data);
        this.$router.push("/adoptCat");
      } catch (error) {
        console.log(error);
      }
    },

    async nextStep(answer) {
      // console.log("ข้อที่: ", answer);
      const success = await this.$refs[answer].validate();
      // console.log(success);
      if (!success.valid) {
        return;
      }
      if (this.currentStep === 1 || this.currentStep < 10) {
        await this.$refs[answer].reset();
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
.ideal-second {
  p {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 40px;
  }
}
.ideal-cats-second {
  margin-bottom: 200px;
}
.ideal-success {
  img {
    width: 100%;
  }
}
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
.ideal-title {
  font-size: 24px;
  @media (min-width: 1440px) {
    font-size: 36px;
  }
}
.ideal-cats {
  margin-bottom: 56px;
  @media (min-width: 1440px) {
    margin-bottom: 450px;
  }

  .ideal-line-orange {
    position: relative;
    border-top: 3px solid $yellow-dark;
    top: -19px;
    transition: width 0.5s;

    @media (min-width: 1440px) {
      border-top: 5px solid $yellow-dark;
      top: -33px;
      transition: width 0.5s;
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
    .step-active {
      background-color: $yellow-dark !important;
      transition: background-color 1.5s;
    }
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
