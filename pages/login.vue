<template>
  <section class="set-bg-login">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" align-self="center">
          <v-row justify="center">
            <v-col cols="8">
              <div class="py-12">
                <div class="bg-card">
                  <v-row justify="center">
                    <v-col cols="9" align-self="center">
                      <v-row justify="center">
                        <v-col cols="6" align-self="center">
                          <div class="set-img-logo">
                            <img
                              src="~/assets/imgs/logo.png"
                              alt="punmaew"
                              id="logo"
                            />
                          </div>
                        </v-col>
                      </v-row>

                      <div class="con">
                        <div class="tabs">
                          <input
                            type="radio"
                            id="radio-1"
                            name="tabs"
                            checked
                          />
                          <label class="tab" for="radio-1" @click="toggleTabs()"
                            >เข้าสู่ระบบ</label
                          >

                          <input type="radio" id="radio-2" name="tabs" />
                          <label
                            class="tab"
                            for="radio-2"
                            @click="toggleTabs2()"
                            >สมัครสมาชิก</label
                          >
                          <span class="glider"></span>
                        </div>
                      </div>
                      <!-- Login -->
                      <div v-if="openTab">
                        <div class="mt-6">
                          <validation-observer ref="form">
                            <form @submit.prevent="login">
                              <div class="input-area">
                                <p>อีเมล</p>
                                <validation-provider
                                  rules="required"
                                  v-slot="{ errors }"
                                >
                                  <input
                                    v-model="emailLogin"
                                    type="email"
                                    placeholder="กรุณากรอกอีเมล"
                                    name="emailLogin"
                                  />
                                  <span class="valid-form">
                                    {{ errors[0] }}
                                  </span>
                                </validation-provider>
                              </div>
                              <div class="input-area mt-5">
                                <p>รหัสผ่าน</p>
                                <validation-provider
                                  rules="required"
                                  v-slot="{ errors }"
                                >
                                  <input
                                    v-model="password"
                                    type="password"
                                    placeholder="กรุณากรอกรหัสผ่าน"
                                    name="password"
                                  />
                                  <span class="valid-form">
                                    {{ errors[0] }}
                                  </span>
                                </validation-provider>
                              </div>
                            </form>
                          </validation-observer>
                          <div class="mt-4">
                            <p class="set-forget-pass" @click="dialog2 = true">
                              หากลืมรหัสผ่าน
                            </p>
                            <validation-observer ref="otpForm">
                              <form @submit.prevent="nextStep">
                                <card-dialog
                                  :dialog="dialog2"
                                  v-if="this.currentStep === 1"
                                >
                                  <template slot="title">
                                    <p class="otp-title">รีเซ็ตรหัสผ่าน</p>
                                  </template>
                                  <template slot="description">
                                    <p class="otp-desc">
                                      กรุณากรอกอีเมลเพื่อรับรหัส OTP
                                      สำหรับรีเซ็ตรหัสผ่าน
                                    </p>
                                  </template>
                                  <template slot="content">
                                    <validation-provider
                                      rules="required|email"
                                      v-slot="{ errors }"
                                      class="otp-content"
                                    >
                                      <input
                                        v-model="emailOtp"
                                        placeholder="กรุณากรอกอีเมล"
                                        name="email"
                                      />
                                      <span class="valid-form">
                                        {{ errors[0] }}
                                      </span>
                                      <base-button
                                        :fillSearch="true"
                                        class="mt-6"
                                        :type="'submit'"
                                        @click="nextStep"
                                      >
                                        ส่งรหัส OTP
                                      </base-button>
                                    </validation-provider>
                                  </template>
                                </card-dialog>
                                <card-dialog
                                  :dialog="dialog2"
                                  v-if="this.currentStep === 2"
                                >
                                  <template slot="title">
                                    <p class="otp-title">ยืนยันรหัส OTP</p>
                                  </template>
                                  <template slot="description">
                                    <p class="otp-desc">
                                      กรุณายืนยันรหัส OTP ที่ส่งไปที่อีเมล
                                      warisara@gmail.com
                                    </p>
                                  </template>
                                  <template slot="content">
                                    <p class="otp-countDown">
                                      {{ total.minutes }}:{{ total.seconds }}
                                    </p>
                                    <div>
                                      <v-row justify="center">
                                        <v-col cols="8" align-self="center">
                                          <v-otp-input length="6"></v-otp-input>
                                        </v-col>
                                      </v-row>
                                    </div>
                                    <base-button
                                      :fillSearch="true"
                                      class="mt-6"
                                      @click="dialog2 = false"
                                    >
                                      ยืนยันรหัส OTP
                                    </base-button>
                                  </template>
                                </card-dialog>
                              </form>
                            </validation-observer>
                          </div>

                          <div class="mt-5">
                            <base-button :fillSearch="true" :type="'submit'">
                              เข้าสู่ระบบ
                            </base-button>
                          </div>
                        </div>
                      </div>
                      <!-- Register -->

                      <div v-else>
                        <div class="mt-6">
                          <validation-observer ref="form">
                            <form @submit.prevent="onSubmit">
                              <v-row justify="center">
                                <v-col align-self="center">
                                  <div class="input-area">
                                    <p>ชื่อจริง</p>
                                    <validation-provider
                                      rules="required"
                                      v-slot="{ errors }"
                                    >
                                      <input
                                        type="text"
                                        placeholder="กรุณากรอกชื่อจริง"
                                        v-model="firstName"
                                        name="firstname"
                                      />
                                      <span class="valid-form">
                                        {{ errors[0] }}
                                      </span>
                                    </validation-provider>
                                  </div>
                                </v-col>

                                <v-col align-self="center">
                                  <div class="input-area">
                                    <p>นามสกุล</p>
                                    <validation-provider
                                      rules="required"
                                      v-slot="{ errors }"
                                    >
                                      <input
                                        type="text"
                                        placeholder="กรุณากรอกนามสกุล"
                                        v-model="lastName"
                                        name="lastname"
                                      />
                                      <span class="valid-form">
                                        {{ errors[0] }}
                                      </span>
                                    </validation-provider>
                                  </div>
                                </v-col>
                              </v-row>

                              <v-row justify="center" class="mt-2">
                                <v-col align-self="center">
                                  <div class="input-area">
                                    <p>อีเมล</p>
                                    <validation-provider
                                      rules="required"
                                      v-slot="{ errors }"
                                    >
                                      <input
                                        type="email"
                                        placeholder="กรุณากรอกอีเมล"
                                        v-model="emailRegis"
                                        name="emailRegis"
                                      />
                                      <span class="valid-form">
                                        {{ errors[0] }}
                                      </span>
                                    </validation-provider>
                                  </div>
                                </v-col>
                              </v-row>

                              <v-row justify="center">
                                <v-col align-self="center" class="mt-0 pb-0">
                                  <div class="input-area">
                                    <p>จังหวัด</p>
                                    <validation-provider
                                      rules="required"
                                      v-slot="{ errors }"
                                    >
                                      <v-select
                                        :items="province"
                                        item-text="province"
                                        name="province"
                                        filled
                                        label="กรุณาเลือกจังหวัด"
                                        dense
                                        v-model="select"
                                        :error-messages="errors"
                                        data-vv-name="select"
                                        required
                                      ></v-select>
                                    </validation-provider>
                                  </div>
                                </v-col>

                                <v-col align-self="center" class="mt-0 pb-0">
                                  <div class="input-area">
                                    <p>รหัสไปรษณีย์</p>

                                    <validation-provider
                                      rules="required"
                                      v-slot="{ errors }"
                                    >
                                      <v-select
                                        :items="province"
                                        filled
                                        label="กรุณาเลือกรหัสไปรษณีย์"
                                        name="zipCode"
                                        item-text="zip"
                                        dense
                                        v-model="select"
                                        :error-messages="errors"
                                        data-vv-name="select"
                                        required
                                      ></v-select>
                                    </validation-provider>
                                  </div>
                                </v-col>
                              </v-row>
                              <v-row justify="center" class="mt-2">
                                <v-col align-self="center">
                                  <div class="input-area">
                                    <p>รหัสผ่าน</p>
                                    <validation-provider
                                      rules="required"
                                      v-slot="{ errors }"
                                    >
                                      <input
                                        type="password"
                                        placeholder="กรุณากรอกรหัสผ่าน"
                                        v-model="passwordRegis"
                                        name="passwordRegis"
                                      />
                                      <span class="valid-form">
                                        {{ errors[0] }}
                                      </span>
                                    </validation-provider>
                                  </div>
                                </v-col>

                                <v-col align-self="center">
                                  <div class="input-area">
                                    <p>ยืนยันรหัสผ่าน</p>
                                    <validation-provider
                                      rules="required"
                                      v-slot="{ errors }"
                                    >
                                      <input
                                        type="password"
                                        placeholder="กรุณายืนยันรหัสผ่าน"
                                        v-model="confirm"
                                        name="confirm"
                                      />
                                      <span class="valid-form">
                                        {{ errors[0] }}
                                      </span>
                                    </validation-provider>
                                  </div>
                                </v-col>
                              </v-row>
                              <v-row justify="center">
                                <v-col align-self="center">
                                  <div>
                                    <base-button
                                      v-if="onSubmit"
                                      :fillSearch="true"
                                      :type="'submit'"
                                    >
                                      สมัครสมาชิก
                                    </base-button>
                                  </div>
                                </v-col>
                              </v-row>
                            </form>
                          </validation-observer>
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

      <!--  -->
      <!-- move code -->
      <!-- New password -->
      <!-- <div>
        <validation-observer ref="form">
          <form @submit.prevent="onSubmitNewPass">
            <v-row justify="center">
              <v-dialog v-model="dialog4" max-width="540">
                <div class="set-bg-otp">
                  <p class="otp-title">สร้างรหัสผ่านใหม่</p>
                  <div>
                    <v-row justify="center">
                      <v-col cols="10" align-self="center">
                        <div class="input-area">
                          <p>รหัสผ่านใหม่</p>
                          <validation-provider
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <input
                              type="password"
                              placeholder="กรุณากรอกรหัสผ่านใหม่"
                              v-model="newPass"
                              name="newPass"
                            />
                            <span class="valid-form">
                              {{ errors[0] }}
                            </span>
                          </validation-provider>
                        </div>

                        <div class="input-area mt-5">
                          <p>ยืนยันรหัสผ่าน</p>
                          <validation-provider
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <input
                              type="password"
                              placeholder="กรุณายืนยันรหัสผ่าน"
                              v-model="newConfirm"
                              name="newConfirm"
                            />
                            <span class="valid-form">
                              {{ errors[0] }}
                            </span>
                          </validation-provider>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                  <div>
                    <v-row justify="center my-5">
                      <v-col cols="10" align-self="center">
                        <base-button :fillSearch="true"> ยืนยัน </base-button>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-dialog>
            </v-row>
          </form>
        </validation-observer>
      </div> -->
    </v-container>
  </section>
</template>

<script>
import BaseButton from "../components/punmaew/components/BaseButton.vue";
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import provinceList from "@/assets/data/province.json";
import CardDialog from "../components/punmaew/components/CardDialog.vue";
export default {
  layout: "adoption",
  components: {
    BaseButton,
    ValidationProvider,
    ValidationObserver,
    CardDialog,
  },
  data() {
    return {
      province: provinceList,
      select: null,
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      openTab: true,
      dialog: false,
      dialog2: false,
      // dialog3: false,
      // dialog4: false,
      total: {
        minutes: 0,
        seconds: 0,
      },
      timeInterval: null,
      errors: [],
      emailOtp: "",
      emailLogin: "",
      password: "",
      emailRegis: "",
      passwordRegis: "",
      firstName: "",
      lastName: "",
      newPass: "",
      newConfirm: "",
      zipCode: "",
      confirm: "",
      currentStep: 1,
    };
  },
  methods: {
    login() {
      try {
        if (this.emailLogin.length !== 0 && this.password) {
          console.log("login successfully");
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },
    nextStep() {
      this.$refs.otpForm.validate().then((success) => {
        if (!success) {
          return;
        }

        this.currentStep += 1;
        this.countdown();

        // Resetting Values
        // this.firstName = this.lastName = this.emailRegis = "";

        // Wait until the models are updated in the UI
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
    },

    onSubmit() {
      if (
        (this.emailRegis.length !== 0 &&
          this.passwordRegis.length !== 0 &&
          this.firstName.length !== 0 &&
          this.lastName.length !== 0) ||
        (this.province.length !== 0 &&
          this.zipCode.length !== 0 &&
          this.confirm.length !== 0)
      ) {
        this.dialog = true;
      } else {
        this.$refs.form.validate().then((success) => {
          if (!success) {
            return;
          }

          alert("Form has been submitted!");

          // Resetting Values
          // this.firstName = this.lastName = this.emailRegis = "";

          // Wait until the models are updated in the UI
          this.$nextTick(() => {
            this.$refs.form.reset();
          });
        });
      }
    },
    toggleTabs() {
      this.openTab = false;
      this.openTab = !this.openTab;
    },
    toggleTabs2() {
      this.openTab = true;
      this.openTab = !this.openTab;
    },
    countdown() {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const countdown = new Date().getTime() + 15 * 60 * 1000;

      this.timeInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdown - now;

        this.total.minutes = Math.floor((distance % hour) / minute);
        this.total.seconds = Math.floor((distance % minute) / second);
        if (distance < 1) {
          clearInterval(this.timeInterval);
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none;
}
::v-deep .v-input__slot {
  border-radius: 50px;
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:after {
  border-style: none !important;
}
.valid-form {
  color: $error;
  font-weight: bold;
  font-size: 12px;
}
.set-bg-login {
  background-color: $orange-light;
  min-height: 100%;
}

.set-img-logo {
  img {
    width: 100%;
  }
  margin-bottom: 20px;
}
.test {
  text-align: center;
}

.bg-card {
  background-color: $white;
  border-radius: 30px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  // padding-top: 56px;
  // padding-bottom: 56px;
  padding: 56px 0px 56px 0px;
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

.con {
  display: flex;
  justify-content: center;
}
.tabs {
  display: flex;
  position: relative;
  background-color: #fff;
  border: 2px solid $yellow;
  border-radius: 99px;
  * {
    z-index: 2;
  }
}

input[type="radio"] {
  display: none;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 200px;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;
}

input[type="radio"] {
  &:checked {
    & + label {
      color: $white;
    }
  }
}

input[id="radio-1"] {
  &:checked {
    & ~ .glider {
      transform: translateX(0);
    }
  }
}

input[id="radio-2"] {
  &:checked {
    & ~ .glider {
      transform: translateX(100%);
    }
  }
}

input[id="radio-3"] {
  &:checked {
    & ~ .glider {
      transform: translateX(200%);
    }
  }
}

.glider {
  position: absolute;
  display: flex;
  height: 54px;
  width: 200px;
  background-color: $yellow-dark;
  z-index: 1;
  border-radius: 99px; // just a high number to create pill effect
  transition: 0.25s ease-out;
}

.input-area {
  p {
    font-size: 14px;
    margin-bottom: 5px !important;
  }
  input {
    width: 100%;
    background-color: $light;
    padding: 14px 24px;
    font-size: 16px;
    border-radius: 50px;
  }
  textarea {
    width: 100%;
    min-height: 152px;
    background-color: $light;
    padding: 14px 24px;
    font-size: 16px;
    border-radius: 10px;
  }
}

::v-deep .v-dialog {
  border-radius: 30px;
}

.otp-title {
  text-align: center;

  font-size: 24px;
  font-weight: bold;
}
.otp-desc {
  text-align: center;
  font-size: 16px;
}
.otp-content {
  input {
    width: 100%;
    background-color: $light;
    padding: 14px 24px;
    font-size: 16px;
    border-radius: 50px;
  }
}

.otp-countDown {
  text-align: center;
  font-size: 16px;
  font-weight: medium;
  color: $orange-dark;
}

.set-sent-again {
  text-align: center;
  padding: 15px 0px 15px 0px;
  text-decoration: underline;
  color: $gray !important;
}

.set-forget-pass {
  padding: 10px 0px 10px 0px;
  text-decoration: underline;
  cursor: pointer;
}
::v-deep .v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px;
}
@media (max-width: 700px) {
  .tabs {
    transform: scale(0.6);
  }
}
@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>
