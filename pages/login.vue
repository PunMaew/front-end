<template>
  <section class="set-bg-login">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" align-self="center">
          <card-form-adopt class="card-form-adopt">
            <template slot="content">
              <div>
                <v-row justify="center">
                  <v-col cols="7" sm="6" md="6" lg="5">
                    <div class="set-img-logo">
                      <img
                        src="~/assets/imgs/pmlogo.png"
                        alt="punmaew"
                        id="logo"
                      />
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div class="con">
                <div class="tabs">
                  <input type="radio" id="radio-1" name="tabs" checked />
                  <label class="tab" for="radio-1" @click="toggleTabs()"
                    >เข้าสู่ระบบ</label
                  >

                  <input type="radio" id="radio-2" name="tabs" />
                  <label class="tab" for="radio-2" @click="toggleTabs2()"
                    >สมัครสมาชิก</label
                  >
                  <span class="glider"></span>
                </div>
              </div>

              <!-- Login -->
              <div v-if="openTab" class="mt-3">
                <validation-observer ref="loginForm">
                  <form @submit.prevent="login">
                    <div class="input-area">
                      <p>อีเมล</p>
                      <validation-provider rules="required" v-slot="{ errors }">
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
                    <div class="input-area mt-4">
                      <p>รหัสผ่าน</p>
                      <validation-provider rules="required" v-slot="{ errors }">
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

                    <div class="mt-2">
                      <p class="set-forget-pass" @click="dialog2 = true">
                        หากลืมรหัสผ่าน
                      </p>

                      <validation-observer ref="otpForm">
                        <card-dialog
                          :dialog="dialog2"
                          v-if="this.currentStep === 1"
                        >
                          <template slot="icon">
                            <div
                              @click="dialog2 = !dialog2"
                              class="ui-icon-cross"
                            >
                              <i class="fi fi-rr-cross-circle"></i>
                            </div>
                          </template>

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
                          <template slot="icon">
                            <div
                              @click="dialog2 = !dialog2"
                              class="ui-icon-cross"
                            >
                              <i class="fi fi-rr-cross-circle"></i>
                            </div>
                          </template>
                          <template slot="description">
                            <p class="otp-desc">
                              กรุณายืนยันรหัส OTP ที่ส่งไปที่อีเมล
                              {{ this.emailOtp }}
                            </p>
                          </template>
                          <template slot="content">
                            <p class="otp-countDown">
                              {{ total.minutes }}:{{ total.seconds }}
                            </p>
                            <div>
                              <v-row justify="center">
                                <v-col
                                  cols="12"
                                  sm="7"
                                  lg="8"
                                  align-self="center"
                                >
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
                                      @click="confirmOtpNewPassWord"
                                    >
                                      ยืนยันรหัส OTP
                                    </base-button>
                                    <div
                                      @click="resendOtpRegister"
                                      class="mt-5 text-center text-decoration-underline"
                                    >
                                      ส่งรหัสใหม่อีกครั้ง
                                    </div>
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
                                        @click="setNewPassword"
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

                    <base-button :fillSearch="true" :type="'submit'">
                      เข้าสู่ระบบ
                    </base-button>
                  </form>
                </validation-observer>
              </div>
              <!-- Register -->
              <div class="mt-3" v-else>
                <validation-observer ref="registerForm">
                  <form @submit.prevent="register">
                    <v-row justify="center">
                      <v-col>
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

                      <v-col>
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

                    <v-row justify="center" class="mt-1">
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
                      <v-col>
                        <div class="input-area-pass">
                          <p>รหัสผ่าน</p>
                          <validation-provider
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <div class="pass-input">
                              <input
                                type="password"
                                placeholder="กรุณากรอกรหัสผ่าน"
                                v-model="passwordRegis"
                                name="passwordRegis"
                              />

                              <div class="tooltip">
                                <i class="fi fi-rr-info"></i>
                              </div>
                            </div>
                            <p class="annotation">
                              รหัสผ่านต้องมีอย่างน้อย 6 ตัว
                            </p>
                            <span class="valid-form">
                              {{ errors[0] }}
                            </span>
                          </validation-provider>
                        </div>
                      </v-col>
                      <v-col>
                        <div class="input-area">
                          <p>ยืนยันรหัสผ่าน</p>
                          <validation-provider
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <input
                              type="password"
                              placeholder="กรุณากรอกรหัสผ่านอีกครั้ง"
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

                        <!--  -->
                      </v-col>
                    </v-row>
                  </form>
                </validation-observer>
              </div>
              <validation-observer ref="otpRegisForm">
                <card-dialog :dialog="dialog">
                  <template slot="title">
                    <p class="otp-title">ยืนยันรหัส OTP</p>
                  </template>
                  <template slot="description">
                    <p class="otp-desc">
                      กรุณายืนยันรหัส OTP ที่ส่งไปที่อีเมล
                      {{ this.emailRegis }}
                    </p>
                  </template>
                  <template slot="content">
                    <p class="otp-countDown">
                      {{ total.minutes }}:{{ total.seconds }}
                    </p>
                    <div>
                      <v-row justify="center">
                        <v-col cols="12" sm="7" lg="8" align-self="center">
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
                              @click="confirmOtpRegister"
                            >
                              ยืนยันรหัส OTP
                            </base-button>
                            <!-- @click="resendOtpRegister(._id)" -->
                            <div
                              @click="resendOtpRegister"
                              class="mt-5 text-center text-decoration-underline"
                            >
                              ส่งรหัสใหม่อีกครั้ง
                            </div>
                          </validation-provider>
                        </v-col>
                      </v-row>
                    </div>
                  </template>
                </card-dialog>
              </validation-observer>
            </template>
          </card-form-adopt>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import BaseButton from "../components/punmaew/components/BaseButton.vue";
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
// import provinceList from "@/assets/data/province.json";
import CardDialog from "../components/punmaew/components/CardDialog.vue";
import CardFormAdopt from "../components/punmaew/components/CardFormAdopt.vue";
export default {
  layout: "adoption",
  auth: false,
  components: {
    BaseButton,
    ValidationProvider,
    ValidationObserver,
    CardDialog,
    CardFormAdopt,
  },
  data() {
    return {
      // province: provinceList,
      // selectProvince: "",
      // selectZip: "",
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      openTab: true,
      dialog: false,
      dialog2: false,
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
      // zipCode: "",
      confirm: "",
      currentStep: 1,
      otpCode: "",
      regisId: "",
    };
  },
  mounted() {
    if (this.$store.state.auth.loggedIn === true) {
      this.$router.push("/");
    }
  },

  methods: {
    async login() {
      try {
        const success = await this.$refs.loginForm.validate();
        if (!success) {
          return;
        }

        await this.$auth.loginWith("user", {
          data: {
            email: this.emailLogin,
            password: this.password,
          },
        });

        this.$nextTick(() => {
          this.$refs.loginForm.reset();
        });

        this.$router.push("/");
        // console.log("login successfully");
      } catch (error) {
        if (error.response.data.active === false) {
          this.regisId = error.response.data._id;
          this.dialog = true;
          this.countdown();
        } else {
          console.log(error.response);
          this.$swal.fire({
            confirmButtonColor: "#19ba88",
            confirmButtonText: "ตกลง",
            title: "เกิดข้อผิดพลาด",
            text: error.response.data.message,
            icon: "warning",
          });
        }
      }
    },
    async nextStep() {
      try {
        // this.$refs.otpForm.validate().then((success) => {
        //   if (!success) {
        //     return;
        //   }
        const success = this.$refs.otpForm.validate();
        if (!success) {
          return;
        }
        await this.$axios.patch(`${this.$config.authURL}user/forgot`, {
          email: this.emailOtp,
        });
        this.currentStep += 1;
        this.countdown();
        // .then((res) => {
        //   console.log(res);
        //   this.currentStep += 1;
        //   this.countdown();
        //   // this.setNewPassword();
        // });
        this.$nextTick(() => {
          this.$refs.otpForm.reset();
        });
        // });
      } catch (error) {
        console.log(error);
      }
    },
    confirmOtpNewPassWord() {
      try {
        this.$refs.otpForm.validate().then((success) => {
          if (!success) {
            return;
          }

          this.$axios
            .patch(`${this.$config.authURL}user/resetotp`, {
              token: this.otpCode,
            })
            .then((res) => {
              console.log(res);
              this.currentStep += 1;
            });
          this.$nextTick(() => {
            this.$refs.otpForm.reset();
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    setNewPassword() {
      try {
        this.$refs.otpForm.validate().then((success) => {
          if (!success) {
            return;
          }
          this.$axios
            .patch(`${this.$config.authURL}user/newpassword`, {
              token: this.otpCode,
              newPassword: this.newPass,
              confirmPassword: this.newConfirm,
            })
            .then((res) => {
              console.log(res);
              location.reload();
            });
          //this.dialog2 = false;
          this.$nextTick(() => {
            this.$refs.otpForm.reset();
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    async register() {
      try {
        const success = await this.$refs.registerForm.validate();
        // console.log(success);
        if (!success) {
          return;
        }

        // const res =
        await this.$axios.post(`${this.$config.authURL}user/signup`, {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.emailRegis,
          password: this.passwordRegis,
          confirmPassword: this.confirm,
        });
        // console.log(res);
        this.regisId = res.data._id;
        this.$nextTick(() => {
          this.$refs.registerForm.reset();
        });
        // console.log(res);
        this.dialog = true;
        this.countdown();
      } catch (error) {
        // console.log(error);
        // console.log(error.toJSON().config.data);
        this.$swal.fire({
          confirmButtonColor: "#19ba88",
          confirmButtonText: "ตกลง",
          title: "เกิดข้อผิดพลาด",
          text: error.response.data.message,
          icon: "warning",
        });
      }
    },

    async confirmOtpRegister() {
      try {
        const success = this.$refs.otpRegisForm.validate();
        if (!success) {
          return;
        }

        if (this.dialog === true) {
          this.countdown();
          await this.$axios
            .patch(`${this.$config.authURL}user/activate`, {
              email: this.openTab ? this.emailLogin : this.emailRegis,
              code: this.otpCode,
            })
            .then((res) => {
              console.log(res);
              clearInterval(this.timeInterval);
              location.reload();
            });
        } else {
          console.log(error);
        }

        this.$nextTick(() => {
          this.$refs.otpRegisForm.reset();
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
      // const countdown = new Date().getTime() + 1 * 60 * 1000;

      this.timeInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdown - now;

        this.total.minutes = Math.floor((distance % hour) / minute);
        this.total.seconds = Math.floor((distance % minute) / second);
        if (distance < 1) {
          this.total.minutes = 0;
          this.total.seconds = 0;
          clearInterval(this.timeInterval);
        }
      }, 1000);
    },
    async resendOtpRegister() {
      console.log("resend");
      try {
        const res = await this.$axios.put(
          `${this.$config.authURL}user/againOTP?id=${this.regisId}`
        );
        console.log(res);
        clearInterval(this.timeInterval);
        this.countdown();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tooltip::after {
  content: "เพื่อความปลอดภัยที่มากขึ้น รหัสผ่านควรประกอบไปด้วยตัวเลข และอักษรตัวพิมพ์เล็ก ตัวพิมพ์ใหญ่";
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid $gray;
  display: none;
  padding: 8px;
  font-size: 8px;
  position: absolute;
  transform: translate(-25%, calc(-100% - -97px));
  width: 130px;
  text-align: center;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 15%);
  @media (min-width: 1440px) {
    padding: 8px 12px;
    font-size: 10px;
    transform: translate(-18%, calc(-100% - -116px));
    width: 180px;
    text-align: center;
    min-height: 60px;
  }
}

.tooltip:hover::after {
  display: block;
}
.tooltip {
  position: relative;
  cursor: pointer;
  // .tooltip-text {

  // }
}
.ui-icon-cross {
  display: flex;
  justify-content: right;
  i {
    font-size: 20px;
  }
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
  border: 2px solid $yellow-dark;
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
  font-size: 24px;

  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;
  @media (min-width: 768px) {
    font-size: 16px;
    height: 40px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    height: 44px;
  }
  @media (min-width: 2560px) {
    width: 150px;
  }
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
  border-radius: 99px;
  transition: 0.25s ease-out;
  @media (min-width: 768px) {
    height: 40px;
  }
  @media (min-width: 1440px) {
    height: 44px;
  }
  @media (min-width: 2560px) {
    width: 150px;
  }
}

.card-form-adopt::v-deep .content {
  min-height: 370px !important;
  @media (min-width: 768px) {
    padding: 40px;
  }
  @media (min-width: 1440px) {
    padding: 56px;
  }
  @media (min-width: 2560px) {
    padding: 38px;
  }
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none;
}
::v-deep .v-input__slot {
  border-radius: 50px;
  font-size: 12px;
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:after {
  border-style: none !important;
}
.valid-form {
  color: $error;
  font-weight: bold;
  font-size: 10px;
  @media (min-width: 1024px) {
    font-size: 12px;
  }
}
.set-bg-login {
  background-color: $orange-light;
  min-height: 100%;
}

.set-img-logo {
  img {
    width: 100%;
  }
  // margin-bottom: 20px;
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
.input-area-pass {
  .pass-input {
    display: flex;
    position: relative;
    input {
      width: 100%;
      background-color: $light;
      padding: 6px 40px 6px 16px;
      font-size: 16px;
      border-radius: 50px;
      @media (min-width: 1440px) {
        width: 100%;
        background-color: $light;
        // padding: 14px 24px;
        padding: 14px 48px 14px 16px;
        font-size: 16px;
        border-radius: 50px;
      }
    }
    input::placeholder {
      font-size: 12px;
      color: $gray;
    }
    i {
      position: absolute;
      top: 8px;
      right: 16px;
      font-size: 16px;
      @media (min-width: 1440px) {
        top: 16px;
      }
    }
  }
  .annotation {
    font-size: 10px;
    margin-top: 8px;
  }
  p {
    font-size: 12px;
    margin-bottom: 5px !important;
    @media (min-width: 1440px) {
      font-size: 14px;
      // margin-bottom: 5px !important;
    }
  }
}
.input-area {
  p {
    font-size: 12px;
    margin-bottom: 5px !important;
    @media (min-width: 1440px) {
      font-size: 14px;
      // margin-bottom: 5px !important;
    }
  }
  input {
    width: 100%;
    background-color: $light;
    padding: 6px 24px;
    font-size: 16px;
    border-radius: 50px;
    @media (min-width: 1440px) {
      width: 100%;
      background-color: $light;
      padding: 14px 24px;
      font-size: 16px;
      border-radius: 50px;
    }
  }
  input::placeholder {
    font-size: 12px;
    color: $gray;
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
  font-size: 18px;
  font-weight: bold;
  @media (min-width: 1440px) {
    font-size: 24px;
  }
}
.otp-desc {
  text-align: center;
  font-size: 14px;
  @media (min-width: 1440px) {
    font-size: 16px;
  }
}
.otp-content {
  input {
    width: 100%;
    background-color: $light;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 50px;
    @media (min-width: 1440px) {
      padding: 14px 24px;
    }
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
  font-size: 12px;
  // padding: 10px 0px 10px 0px;
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
