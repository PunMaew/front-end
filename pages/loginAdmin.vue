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
                  <v-col cols="12" class="px-0 py-0">
                    <div class="title">
                      <p class="text-center mb-0">เข้าสู่ระบบ Admin</p>
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div class="mt-12">
                <validation-observer ref="loginAdminForm">
                  <form @submit.prevent="loginAdmin">
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
                    <!--  -->
                    <!-- <div class="mt-2">
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
                                      @click="resendOtp"
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
                    </div> -->
                    <base-button
                      class="mt-6"
                      :fillSearch="true"
                      :type="'submit'"
                      >เข้าสู่ระบบ</base-button
                    >
                  </form>
                </validation-observer>
              </div>
            </template>
          </card-form-adopt>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import CardFormAdopt from "../components/punmaew/components/CardFormAdopt.vue";
import BaseButton from "../components/punmaew/components/BaseButton.vue";
import CardDialog from "../components/punmaew/components/CardDialog.vue";
export default {
  layout: "admin",
  auth: false,
  components: {
    CardFormAdopt,
    ValidationProvider,
    ValidationObserver,
    BaseButton,
    CardDialog,
  },
  data() {
    return {
      emailLogin: "",
      password: "",
      dialog2: false,
      currentStep: 1,
      emailOtp: "",
      total: {
        minutes: 0,
        seconds: 0,
      },
      otpCode: "",
      newPass: "",
      newConfirm: "",
    };
  },
  created() {
    if (
      this.$store.state.auth.loggedIn === true &&
      this.$store.state.auth.strategy == "admin"
    ) {
      this.$router.push("/dashboard");
    }
  },
  // asyncData({ store, redirect }) {
  //   if (store.state.auth.loggedIn === true) {
  //     redirect("/dashboard");
  //   }
  // },
  methods: {
    async loginAdmin() {
      try {
        const success = await this.$refs.loginAdminForm.validate();
        if (!success) {
          return;
        }
        //
        await this.$auth.loginWith("admin", {
          data: {
            email: this.emailLogin,
            password: this.password,
          },
        });
        // .then((res) => {
        // console.log(res.data);
        console.log("login admin successfully");
        this.$router.push("/dashboard");
        // })
      } catch (error) {
        console.log(error);
        this.$swal.fire({
          confirmButtonColor: "#19ba88",
          confirmButtonText: "ตกลง",
          title: "เกิดข้อผิดพลาด",
          text: error.message,
          icon: "warning",
        });
      }
    },
    // nextStep() {},
    //   confirmOtpNewPassWord() {},
    //   resendOtp() {},
    //   setNewPassword() {},
  },
};
</script>

<style lang="scss" scoped>
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
.ui-icon-cross {
  display: flex;
  justify-content: right;
  i {
    font-size: 20px;
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
}
.set-forget-pass {
  font-size: 12px;

  text-decoration: underline;
  cursor: pointer;
}
.input-area {
  p {
    font-size: 12px;
    margin-bottom: 5px !important;
    @media (min-width: 1440px) {
      font-size: 14px;
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
    font-size: 14px;
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
.valid-form {
  color: $error;
  font-weight: bold;
  font-size: 12px;
}
.title {
  p {
    font-size: 40px;
  }
}
.set-img-logo {
  img {
    width: 100%;
  }
}
.set-bg-login {
  background-color: $orange-light;
  min-height: 100%;
}
@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>
