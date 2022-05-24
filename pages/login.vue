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
                      <div v-if="openTab" class="mt-6">
                        <validation-observer ref="loginForm">
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

                            <div class="mt-4">
                              <p
                                class="set-forget-pass"
                                @click="dialog2 = true"
                              >
                                หากลืมรหัสผ่าน
                              </p>

                              <validation-observer ref="otpForm">
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
                                          <validation-provider
                                            rules="required"
                                            v-slot="{ errors }"
                                            class="otp-content"
                                          >
                                            <v-otp-input
                                              length="6"
                                              v-model="otpCode"
                                              name="otpCode"
                                            ></v-otp-input>
                                            <span class="valid-form">
                                              {{ errors[0] }}
                                            </span>
                                            <base-button
                                              :fillSearch="true"
                                              class="mt-6"
                                              @click="nextStep"
                                            >
                                              ยืนยันรหัส OTP
                                            </base-button>
                                          </validation-provider>
                                        </v-col>
                                      </v-row>
                                    </div>
                                  </template>
                                </card-dialog>

                                <card-dialog
                                  :dialog="dialog2"
                                  v-if="this.currentStep === 3"
                                >
                                  <template slot="title">
                                    <p class="otp-title">สร้างรหัสผ่านใหม่</p>
                                  </template>
                                  <template slot="content">
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
                                              <base-button
                                                :fillSearch="true"
                                                class="mt-6"
                                                @click="dialog2 = false"
                                              >
                                                ยืนยัน
                                              </base-button>
                                            </validation-provider>
                                          </div>
                                        </v-col>
                                      </v-row>
                                    </div>
                                  </template>
                                </card-dialog>
                              </validation-observer>
                            </div>

                            <div class="mt-5">
                              <base-button :fillSearch="true" :type="'submit'">
                                เข้าสู่ระบบ
                              </base-button>
                            </div>
                          </form>
                        </validation-observer>
                      </div>

                      <!-- Register -->
                      <!-- <div v-else> -->
                      <div class="mt-6" v-else>
                        <validation-observer ref="registerForm">
                          <form @submit.prevent="register">
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
                                    v-if="register"
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
      otpCode: "",
    };
  },
  methods: {
    login() {
      try {
        this.$refs.loginForm.validate().then((success) => {
          if (!success) {
            return;
          }

          console.log("login successfully");

          this.$nextTick(() => {
            this.$refs.loginForm.reset();
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    nextStep() {
      try {
        this.$refs.otpForm.validate().then((success) => {
          if (!success) {
            return;
          }

          this.currentStep += 1;
          this.countdown();

          this.$nextTick(() => {
            this.$refs.otpForm.reset();
          });
        });
      } catch (error) {
        console.log(error);
      }
    },

    register() {
      try {
        this.$refs.registerForm.validate().then((success) => {
          if (!success) {
            return;
          }

          this.dialog = true;

          this.$nextTick(() => {
            this.$refs.registerForm.reset();
          });
        });
      } catch (error) {
        console.log(error);
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
