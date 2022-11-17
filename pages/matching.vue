<template>
  <div>
    <section
      v-if="
        this.$store.state.auth.user.idealCat &&
        this.$store.state.auth.user.idealCat.length <= 0
      "
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="12" align-self="center">
            <v-row justify="center">
              <v-col cols="12" align-self="center">
                <div
                  v-if="
                    this.$store.state.auth.user.idealCat &&
                    this.$store.state.auth.user.idealCat.length <= 0
                  "
                  class="ideal-cats"
                >
                  <div>
                    <div>
                      <div class="ideal-line mt-8 mt-lg-12">
                        <div class="ideal-container">
                          <div class="ideal-step"></div>
                        </div>
                      </div>
                      <div
                        class="ideal-line-orange"
                        :style="{
                          width:
                            currentStep == 4
                              ? currentStep * 21 + '%'
                              : currentStep * 20 + '%',
                        }"
                      ></div>
                    </div>
                  </div>
                </div>

                <div class="mt-12 mb-16 text-center">
                  <h2 v-if="loggedIn" class="welcome-text">
                    สวัสดี {{ user.firstName }}!
                    มาเริ่มต้นหาแมวในอุดมคติของคุณกัน
                    <i class="fi fi-rr-paw"></i>
                  </h2>
                  <base-select-matching
                    class="mt-14"
                    v-model="answerOne"
                    title="ฉันต้องการแมวที่มีขน..."
                    refType="answerOne"
                    :choiceList="choiceListOne"
                    answerChoice="answer"
                  ></base-select-matching>
                  <base-select-matching
                    class="fade-trans"
                    v-if="answerOne"
                    v-model="answerTwo"
                    title="แมวของฉันเคยทำหมันหรือไม่..."
                    refType="answerTwo"
                    :choiceList="choiceListTwo"
                    answerChoice="answer"
                  ></base-select-matching>
                  <base-select-matching
                    class="fade-trans"
                    v-if="answerOne && answerTwo"
                    v-model="answerThree"
                    title="แมวของฉันสามารถใช้กระบะทราย..."
                    refType="answerThree"
                    :choiceList="choiceListThree"
                    answerChoice="answer"
                  ></base-select-matching>
                  <base-select-matching
                    class="fade-trans"
                    v-if="answerOne && answerTwo && answerThree"
                    v-model="answerFour"
                    title="แมวของฉันต้องได้รับวัคซีน..."
                    refType="answerFour"
                    :choiceList="choiceListFour"
                    answerChoice="answer"
                  ></base-select-matching>
                  <p
                    class="font-weight-bold fade-trans mt-8 mt-lg-14 success-text"
                    v-if="answerOne && answerTwo && answerThree && answerFour"
                  >
                    เย้! คุณทำแบบสอบถามเสร็จแล้ว ยืนยันคำตอบหรือไม่...
                  </p>
                  <div
                    v-if="answerOne && answerTwo && answerThree && answerFour"
                    class="mt-8"
                  >
                    <v-row justify="center">
                      <v-col cols="12" sm="6" md="6" lg="6" xl="4">
                        <base-button @click="adealCat" :fillSearch="true"
                          >ยืนยัน</base-button
                        >
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

    <section v-else>
      <v-container>
        <div class="ideal-cats-second">
          <div class="ideal-title mb-6 mb-lg-16 mt-8 mt-lg-12">
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
                        <base-button @click="editIdealCat" :fillSearch="true"
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
      </v-container>
    </section>
    <card-dialog v-if="dialog" :dialog="dialog">
      <template slot="title">
        <p class="text-center title-dialog">เราได้รับคำตอบของคุณแล้ว!</p>
      </template>
      <template slot="description">
        <p class="text-center desc-dialog">
          สามารถดูแมวในอุดมคติของคุณได้ที่หน้า “รับเลี้ยงแมว”
        </p>
      </template>
      <template slot="content">
        <div class="content-img-dialog">
          <img src="@/assets/imgs/instruction.jpg" alt="" />
        </div>
        <base-button @click="goAdoptCat" class="mt-6" :fillSearch="true"
          >เริ่มหาแมวของคุณ</base-button
        >
      </template>
    </card-dialog>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import filterList from "@/assets/data/filterList.json";
import provinceList from "@/assets/data/province.json";
import BaseButton from "../components/punmaew/components/BaseButton.vue";
import BaseSelectMatching from "../components/punmaew/elements/BaseSelectMatching.vue";
import CardDialog from "../components/punmaew/components/CardDialog.vue";
export default {
  middleware: "auth",
  components: {
    ValidationProvider,
    ValidationObserver,
    BaseButton,
    filterList,
    provinceList,
    BaseSelectMatching,
    CardDialog,
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.loggedIn;
    },
    user() {
      return this.$store.state.auth.user;
    },
  },
  watch: {
    answerOne(newValue, oldValue) {
      if (oldValue) {
        return;
      }
      if (newValue && newValue != oldValue) {
        this.currentStep += 1;
      }
    },
    answerTwo(newValue, oldValue) {
      if (oldValue) {
        return;
      }
      if (newValue && newValue != oldValue) {
        this.currentStep += 1;
      }
    },
    answerThree(newValue, oldValue) {
      if (oldValue) {
        return;
      }
      if (newValue && newValue != oldValue) {
        this.currentStep += 1;
      }
    },
    answerFour(newValue, oldValue) {
      if (oldValue) {
        return;
      }
      if (newValue && newValue != oldValue) {
        this.currentStep += 1;
      }
    },
  },
  data() {
    return {
      answerOne: null,
      answerTwo: null,
      answerThree: null,
      answerFour: null,

      choiceListOne: [
        { id: 1, answer: "ขนสั้น" },
        { id: 2, answer: "ขนยาว" },
        { id: 3, answer: "ไม่มีขน" },
      ],
      choiceListThree: [
        { id: 1, answer: "ใช้กระบะทรายเป็น" },
        { id: 2, answer: "ใช้กระบะทรายไม่เป็น" },
      ],
      choiceListTwo: [
        { id: 1, answer: "ทำหมันแล้ว" },
        { id: 2, answer: "ยังไม่ได้ทำหมัน" },
      ],
      choiceListFour: [
        { id: 1, answer: "ยังไม่ได้รับวัคซีน" },
        { id: 2, answer: "ได้รับวัคซีนครบตามช่วงอายุของแมว" },
        { id: 3, answer: "ได้รับวัคซีนบางชนิด" },
      ],
      currentStep: 1,
      dialog: false,
    };
  },
  methods: {
    editIdealCat() {
      this.$router.push("/editProfile?menu=3");
    },
    goAdoptCat() {
      this.dialog = false;
      this.$router.push("/adoptCat");
    },
    async adealCat() {
      try {
        const res = await this.$axios.put(
          `${this.$config.authURL}user/idealCat?id=${this.$store.state.auth.user._id}`,
          {
            idealCat: [
              { answer: this.answerOne },
              { answer: this.answerTwo },
              { answer: this.answerThree },
              { answer: this.answerFour },
            ],
          }
        );
        this.$store.commit("SET_IDEAL", [
          { answer: this.answerOne.answer },
          { answer: this.answerTwo.answer },
          { answer: this.answerThree },
          { answer: this.answerFour },
        ]);
        console.log(res.data);
        this.dialog = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content-img-dialog {
  text-align: center;
  img {
    width: 200px;
    @media (min-width: 1440px) {
      width: 350px;
    }
  }
}
.desc-dialog {
  font-size: 14px;
  line-height: 24px;
  @media (min-width: 1440px) {
    font-size: 18px;
  }
}
.title-dialog {
  font-size: 18px;
  color: $success;
  font-weight: bold;
  @media (min-width: 1440px) {
    font-size: 24px;
  }
}
.success-text {
  font-size: 18px;
  @media (min-width: 1440px) {
    font-size: 24px;
  }
}
.welcome-text {
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 36px;
  }
}
.fade-trans {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
}
@keyframes slide-out {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
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
  // margin-bottom: 56px;
  @media (min-width: 1440px) {
    // margin-bottom: 450px;
  }

  .ideal-line-orange {
    position: relative;
    border-top: 3px solid $yellow-dark;
    top: -3px;
    transition: width 0.5s;

    @media (min-width: 1440px) {
      border-top: 5px solid $yellow-dark;
      top: -5px;
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
