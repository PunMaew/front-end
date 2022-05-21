<template>
  <section>
    <div class="set-bg-login">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" align-self="center">
            <v-row justify="center">
              <v-col cols="8">
                <div class="py-16">
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
                            <label
                              class="tab"
                              for="radio-1"
                              @click="toggleTabs()"
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
                          <div class="mt-12 mb-12">
                            <div class="input-area">
                              <p>อีเมล</p>
                              <input
                                type="email"
                                placeholder="กรุณากรอกอีเมล"
                              />
                            </div>
                            <div class="input-area mt-5">
                              <p>รหัสผ่าน</p>
                              <input
                                type="password"
                                placeholder="กรุณากรอกรหัสผ่าน"
                              />
                            </div>
                          </div>
                          <base-button :fillSearch="true">
                            เข้าสู่ระบบ
                          </base-button>
                        </div>
                        <!-- Register -->
                        
                          <div v-else>
                            <form @submit.prevent="submitForm">
                            <div class="mt-12 mb-12">
                              <v-row justify="center">
                                <v-col align-self="center">
                                  <div class="input-area">
                                    <p>ชื่อจริง</p>
                                    <input
                                      type="text"
                                      placeholder="กรุณากรอกชื่อจริง"
                                      v-model="firstName"
                                    />
                                    <p
                                      v-if="invalidFirstName"
                                      class="invalid-form"
                                    >
                                      ** กรุณากรอกชื่อจริง **
                                    </p>
                                  </div>
                                </v-col>

                                <v-col align-self="center">
                                  <div class="input-area">
                                    <p>นามสกุล</p>
                                    <input
                                      type="text"
                                      placeholder="กรุณากรอกนามสกุล"
                                      v-model="lastName"
                                    />
                                    <p
                                      v-if="invalidLastName"
                                      class="invalid-form"
                                    >
                                      ** กรุณากรอกนามสกุล **
                                    </p>
                                  </div>
                                </v-col>
                              </v-row>

                              <div class="input-area mt-5">
                                <p>อีเมล</p>
                                <input
                                  type="email"
                                  placeholder="กรุณากรอกอีเมล"
                                  v-model="email"
                                />
                              </div>
                              <v-row justify="center">
                                <v-col align-self="center">
                                  <div class="input-area mt-5">
                                    <p>จังหวัด</p>
                                    <input
                                      type="text"
                                      placeholder="กรุณาเลือกจังหวัด"
                                      v-model="province"
                                    />
                                  </div>
                                </v-col>

                                <v-col align-self="center">
                                  <div class="input-area mt-5">
                                    <p>รหัสไปรษณีย์</p>
                                    <input
                                      type="text"
                                      placeholder="กรุณากรอกรหัสไปรษณีย์"
                                      v-model="zipCode"
                                    />
                                  </div>
                                </v-col>
                              </v-row>
                              <v-row justify="center">
                                <v-col align-self="center">
                                  <div class="input-area">
                                    <p>รหัสผ่าน</p>
                                    <input
                                      type="password"
                                      placeholder="กรุณากรอกรหัสผ่าน"
                                    />
                                  </div>
                                </v-col>

                                <v-col align-self="center">
                                  <div class="input-area">
                                    <p>ยืนยันรหัสผ่าน</p>
                                    <input
                                      type="password"
                                      placeholder="กรุณายืนยันรหัสผ่าน"
                                    />
                                  </div>
                                </v-col>
                              </v-row>
                            </div>
                            <base-button
                              :fillSearch="true"
                              @click="dialog = true"
                              type="submit"
                            >
                              สมัครสมาชิก
                            </base-button>
                            </form>
                          </div>
                        
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- OTP -->
        <v-row justify="center">
          <v-dialog v-model="dialog" max-width="540">
            <div class="set-bg-otp">
              <p class="otp-title">ยืนยันรหัส OTP</p>

              <p class="otp-text">
                กรุณายืนยันรหัส OTP ที่ส่งไปที่อีเมล warisara@gmail.com
              </p>
              <p class="otp-countDown">
                {{ total.minutes }}:{{ total.seconds }}
              </p>
              <v-row justify="center">
                <v-col cols="8" align-self="center">
                  <v-otp-input length="6"></v-otp-input>
                </v-col>
              </v-row>
              <div>
                <v-row justify="center">
                  <v-col cols="8" align-self="center">
                    <base-button :fillSearch="true">
                      ยืนยันรหัส OTP
                    </base-button>
                    <div class="set-sent-again">
                      <a>ส่งใหม่อีกครั้ง</a>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-dialog>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
import BaseButton from "../components/punmaew/components/BaseButton.vue";
export default {
  layout: "adoption",
  components: { BaseButton },
  data() {
    return {
      openTab: true,
      dialog: false,
      total: {
        minutes: 0,
        seconds: 0,
      },
      timeInterval: null,
      errors: [],
      firstName: "",
      lastName: "",
      invalidFirstName: false,
      invalidLastName: false,
    };
  },
  mounted() {
    this.countdown();
  },
  methods: {
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
  submitForm() {
    this.invalidFirstName = this.firstName === "" ? true : false;
    if (this.firstName !== "" && this.lastName != "") {
      try {
        this.editAllPostsData();
        alert("Edit Success.");
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: $orange-light;
}

.set-img-logo {
  img {
    width: 100%;
  }
  margin-bottom: 34px;
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
    margin-bottom: 10px;
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
.invalid-form {
  color: $error;
  font-size: 14px;
}

::v-deep .v-dialog {
  border-radius: 30px;
}
.set-bg-otp {
  background-color: $white;
  // border-radius: 30px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
}

.otp-title {
  text-align: center;
  padding-top: 25px;
  font-size: 24px;
  font-weight: bold;
}

.otp-text {
  text-align: center;
  font-size: 16px;
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