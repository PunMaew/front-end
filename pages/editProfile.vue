<template>
  <section>
    <v-container>
      <div>
        <h2>โปรไฟล์ของฉัน</h2>
        <div class="input-area d-sm-none mt-6">
          <v-select
            dense
            filled
            data-vv-name="select"
            required
            :items="profiles"
            item-text="name"
            name="profiles"
            v-model="selectProfile"
            @change="filteredData"
            class="menu-drop-down"
          >
          </v-select>
        </div>

        <div
          class="text-center menu-tabs mt-7 d-none d-sm-flex d-md-flex d-lg-flex"
        >
          <v-container class="px-12">
            <v-row>
              <v-col
                @click="selectTabs(profile)"
                v-for="(profile, index) in profiles"
                :key="index"
                :class="
                  profile.id === selectProfileId
                    ? 'border-block'
                    : 'cur-pointer'
                "
              >
                <div>{{ profile.name }}</div>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <div class="mt-sm-11">
          <div v-if="selectProfileId == 1 && userProfile">
            <validation-observer ref="editProfileForm">
              <form @submit.prevent="editProfile">
                <div class="profile-details">
                  <div class="title-profile d-flex">
                    <i class="fi fi-rr-info"></i>
                    <h5>ข้อมูลส่วนตัว</h5>
                  </div>
                  <div>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <base-label-input
                          label="ชื่อจริง"
                          nameInput="firstName"
                          requireText="*"
                          placehold="กรุณากรอกชื่อจริง"
                          v-model="userProfile.firstName"
                        />
                      </v-col>

                      <v-col cols="12" sm="6">
                        <base-label-input
                          label="นามสกุล"
                          nameInput="lastName"
                          requireText="*"
                          placehold="กรุณากรอกนามสกุล"
                          v-model="userProfile.lastName"
                        />
                      </v-col>
                      <v-col cols="12" sm="6">
                        <base-label-input
                          label="เบอร์โทรศัพท์"
                          placehold="กรุณากรอกเบอร์โทรศัพท์"
                          v-model="userProfile.tel"
                        />
                      </v-col>
                    </v-row>
                  </div>
                </div>

                <div class="profile-details mt-7">
                  <div class="title-profile d-flex">
                    <i class="fi fi-rr-user"></i>
                    <h5>ข้อมูลบัญชี</h5>
                  </div>
                  <div>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <base-label-input
                          nameInput="email"
                          label="อีเมล"
                          requireText="*"
                          placehold="กรุณากรอกอีเมล"
                          v-model="userProfile.email"
                        />
                      </v-col>
                    </v-row>
                  </div>
                </div>

                <div class="mt-12">
                  <v-row justify="center">
                    <v-col cols="12" sm="6">
                      <base-button :fillSearch="true" :type="'submit'"
                        >บันทึกข้อมูล</base-button
                      >
                    </v-col>
                  </v-row>
                </div>
              </form>
            </validation-observer>
          </div>

          <div>
            <validation-observer ref="otpChangeEmailnPass">
              <card-dialog v-if="this.currentStep === 2" :dialog="dialog">
                <template slot="title">
                  <p class="otp-title">ยืนยันรหัส OTP</p>
                </template>
                <template slot="description">
                  <p class="otp-desc">
                    กรุณายืนยันรหัส OTP ที่ส่งไปที่อีเมล
                    {{ this.$store.state.auth.user.email }}
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
                            @click="confirmOtpResetEmail"
                            :fillSearch="true"
                            class="mt-6"
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
            </validation-observer>
          </div>

          <div v-if="selectProfileId == 2" class="mt-6">
            <div class="d-flex justify-space-between my-post items-center">
              <div>โพสต์หาบ้านของฉันทั้งหมด</div>
              <div @click="goFindHome" class="new-post-btn cur-pointer">
                สร้างโพสต์ใหม่
              </div>
            </div>
            <div
              class="head-table d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex"
            >
              <v-container>
                <v-row>
                  <v-col>
                    <div>โพสต์</div>
                  </v-col>
                  <v-col>
                    <div>วันที่โพสต์</div>
                  </v-col>
                  <v-col>
                    <div>สถานะ</div>
                  </v-col>
                  <v-col> </v-col>
                </v-row>
              </v-container>
            </div>

            <div
              v-for="post in posts"
              :key="post._id"
              class="card-article mt-4"
            >
              <v-row>
                <v-col cols="5" sm="3" align-self="center">
                  <div class="name-article-header">
                    <img
                      :src="`${$config.findHome}readFileIdFindHome?id=${post._id}`"
                      alt=""
                    />
                    {{ post.generalInfo.catName }}
                  </div>
                </v-col>
                <v-col cols="7" sm="3" class="name-article">
                  <div>{{ convertDateTime(post.createdAt) }}</div>
                </v-col>

                <v-col cols="6" sm="3" class="name-article">
                  <div
                    @click="changeStatus(post)"
                    :class="
                      post.statusbar === 'ยังไม่ถูกรับเลี้ยง'
                        ? 'not-adopt'
                        : 'adopted'
                    "
                    class="cat-state-adopt cur-pointer"
                  >
                    {{
                      post.statusbar === "ยังไม่ถูกรับเลี้ยง"
                        ? "รอการรับเลี้ยง"
                        : "รับเลี้ยงสำเร็จ"
                    }}
                  </div>
                </v-col>

                <v-col cols="6" sm="3" class="name-article-bottom">
                  <div
                    v-if="post.statusbar === 'ยังไม่ถูกรับเลี้ยง'"
                    class="icon-article"
                  >
                    <nuxt-link :to="`/finderHome?isEdit=true&id=` + post._id">
                      <i class="fi fi-rr-pencil"></i>
                    </nuxt-link>
                  </div>
                  <div v-else class="icon-article-succes">
                    <i class="fi fi-rr-pencil"></i>
                  </div>
                  <div @click="deletePost(post._id)" class="icon-article">
                    <i class="fi fi-rr-trash trash"></i>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>

          <div v-if="selectProfileId == 3" class="mt-6 mt-lg-11">
            <div v-if="myIdeals.length > 0">
              <validation-observer ref="idealForm">
                <form @submit.prevent="editIdealCat">
                  <div class="input-area mt-2">
                    <v-row>
                      <v-col lg="6" class="pt-0">
                        <p>1. ลักษณะขนของแมวที่ต้องการ</p>
                        <validation-provider
                          rules="required"
                          v-slot="{ errors }"
                          ref="answerOne"
                        >
                          <v-select
                            dense
                            filled
                            :items="choiceListOne"
                            item-text="answer"
                            name="answerOne"
                            v-model="answerOne"
                            data-vv-name="select"
                            required
                            placeholder="กรุณาเลือกคำตอบ"
                          />
                          <span class="valid-form">
                            {{ errors[0] }}
                          </span>
                        </validation-provider>
                      </v-col>
                    </v-row>
                  </div>
                  <div class="input-area mt-2">
                    <v-row>
                      <v-col lg="6" class="pt-0">
                        <p>2. ลักษณะขนของแมวที่ต้องการ</p>
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
                      </v-col>
                    </v-row>
                  </div>
                  <div class="input-area mt-2">
                    <v-row>
                      <v-col lg="6" class="pt-0">
                        <p>3. ลักษณะขนของแมวที่ต้องการ</p>
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
                          />
                          <span class="valid-form">
                            {{ errors[0] }}
                          </span>
                        </validation-provider>
                      </v-col>
                    </v-row>
                  </div>
                  <div class="input-area mt-2">
                    <v-row>
                      <v-col lg="6" class="pt-0">
                        <p>4. แมวของฉันต้องได้รับวัคซีน...</p>
                        <validation-provider
                          rules="required"
                          v-slot="{ errors }"
                          ref="answerFour"
                        >
                          <v-select
                            dense
                            filled
                            :items="choiceListFour"
                            item-text="answer"
                            name="answerFour"
                            v-model="answerFour"
                            data-vv-name="select"
                            required
                            placeholder="กรุณาเลือกคำตอบ"
                          />
                          <span class="valid-form">
                            {{ errors[0] }}
                          </span>
                        </validation-provider>
                      </v-col>
                    </v-row>
                  </div>
                  <div>
                    <v-row justify="center">
                      <v-col cols="6">
                        <base-button
                          class="mt-6"
                          :fillSearch="true"
                          :type="'submit'"
                          >บันทึกข้อมูล</base-button
                        >
                      </v-col>
                    </v-row>
                  </div>
                </form>
              </validation-observer>
            </div>

            <div v-else>
              <v-row justify="center">
                <v-col cols="12">
                  <div>
                    <v-row justify="center">
                      <v-col cols="8" sm="3" xl="2">
                        <div class="banner">
                          <img src="@/assets/imgs/banner.png" alt="" />
                        </div>
                      </v-col>
                    </v-row>
                  </div>

                  <div>
                    <v-row justify="center">
                      <v-col cols="12" sm="6">
                        <div class="match-cat mt-2 mt-lg-5">
                          <p class="text-center title font-weight-bold">
                            จับคู่แมวตัวโปรดของคุณ
                          </p>
                          <p class="text-center desc mt-2 mt-lg-6">
                            ค้นหาแมวที่ต้องการช่วยเหลือให้ตรงใจคุณ
                          </p>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                  <div>
                    <v-row justify="center">
                      <v-col cols="12" sm="4">
                        <base-button @click="goMatching" :fillSearch="true">
                          <i class="fi fi-rr-search mr-2"></i>
                          เริ่มค้นหาแมวในอุดมคติ</base-button
                        >
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>

          <div v-if="selectProfileId == 4" class="mt-6 mt-md-12">
            <div v-if="this.favorList.length == 0">
              <v-row justify="center">
                <v-col cols="12">
                  <div>
                    <v-row justify="center">
                      <v-col cols="8" sm="3" xl="2">
                        <div class="banner">
                          <img src="@/assets/imgs/cat-favor.png" alt="" />
                        </div>
                      </v-col>
                    </v-row>
                  </div>

                  <div>
                    <v-row justify="center">
                      <v-col cols="12" sm="6">
                        <div class="match-cat">
                          <p class="text-center title font-weight-bold">
                            ยังไม่มีโพสต์แมวที่ถูกใจ
                          </p>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
              </v-row>
            </div>
            <div v-else>
              <div class="d-flex justify-space-between my-post items-center">
                <div>โพสต์หาบ้านของฉันทั้งหมด</div>
                <div @click="goFindHome" class="new-post-btn cur-pointer">
                  สร้างโพสต์ใหม่
                </div>
              </div>

              <div class="mt-4">
                <v-row>
                  <v-col
                    v-for="post in favorList"
                    :key="post._id"
                    cols="12"
                    sm="4"
                    md="4"
                    lg="4"
                    xl="4"
                  >
                    <div class="card position-relative">
                      <div
                        v-if="post.statusbar === 'รับเลี้ยงสำเร็จ'"
                        class="status-adopt-success"
                      >
                        รับเลี้ยงแล้ว
                      </div>
                      <div v-else class="status-adopt">ยังไม่ถูกรับเลี้ยง</div>
                      <div class="thumbnail">
                        <img
                          :src="`${$config.findHome}readFileIdFindHome?id=${post._id}`"
                          alt=""
                        />
                      </div>
                      <div class="card-title">
                        <v-row justify="center">
                          <v-col cols="12" class="pb-lg-3 pb-sm-3">
                            <div>
                              <h2 class="h4">
                                {{ post.generalInfo.catName }}
                              </h2>
                              <p class="mb-0 location">
                                <i class="fi fi-rr-marker"></i>
                                {{
                                  "จังหวัด" +
                                  post.generalInfo.location.province +
                                  " " +
                                  "เขต" +
                                  post.generalInfo.location.district
                                }}
                              </p>
                            </div>
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import filterList from "@/assets/data/filterList.json";
import tambonList from "@/assets/data/tambon.json";
import provinceList from "@/assets/data/province.json";
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import BaseButton from "../components/punmaew/components/BaseButton.vue";
import CardDialog from "../components/punmaew/components/CardDialog.vue";
import BaseLabelInput from "../components/punmaew/elements/BaseLabelInput.vue";
export default {
  auth: false,
  components: {
    ValidationProvider,
    ValidationObserver,
    provinceList,
    BaseButton,
    tambonList,
    filterList,
    CardDialog,
    BaseLabelInput,
  },
  async asyncData({ $axios, $config, store, route, redirect, app }) {
    const cookie = await app.$cookies.get("auth._token.user");

    const menu = route.query.menu;

    if (!cookie) {
      return redirect("/login");
    }

    return {
      selectProfileId: menu ? parseInt(menu) : 1,
    };
  },

  data() {
    return {
      newEmail: "",
      currentStep: 1,
      otpCode: "",
      total: {
        minutes: 0,
        seconds: 0,
      },
      dialog: false,
      favorList: [],
      profiles: [
        { id: 1, name: "ข้อมูลส่วนตัว" },
        { id: 2, name: "โพสต์หาบ้านให้แมว" },
        { id: 3, name: "แมวในอุดมคติ" },
        { id: 4, name: "การถูกใจของฉัน" },
      ],
      myIdeals: [],
      province: provinceList,
      filterList: filterList,
      tambon: tambonList,
      selectProvince: "",
      selectTambon: "",
      selectDistrict: "",
      selectZipCode: "",
      selectProfile: "ข้อมูลส่วนตัว",
      selectProfileId: 1,
      radioGroup: 1,
      userProfile: {},
      answerOne: null,
      answerTwo: null,
      answerThree: null,
      answerFour: null,

      choiceListOne: [
        { answer: "ขนสั้น" },
        { answer: "ขนยาว" },
        { answer: "ไม่มีขน" },
      ],

      choiceListThree: [
        { answer: "ใช้กระบะทรายเป็น" },
        { answer: "ใช้กระบะทรายไม่เป็น" },
      ],
      choiceListTwo: [{ answer: "ทำหมันแล้ว" }, { answer: "ยังไม่ได้ทำหมัน" }],
      choiceListFour: [
        { answer: "ยังไม่ได้รับวัคซีน" },
        { answer: "ได้รับวัคซีนครบตามช่วงอายุของแมว" },
        { answer: "ได้รับวัคซีนบางชนิด" },
      ],
      posts: [],
    };
  },
  async created() {
    try {
      const myProfile = await this.$axios.get(
        `${this.$config.authURL}user/getUser`
      );
      this.userProfile = myProfile.data.user;

      const res = await this.$axios.get(
        `${this.$config.findHome}getMyPost?id=${this.$store.state.auth.user._id}`
      );
      this.posts = res.data.mypost;

      const ideal = await this.$axios.get(
        `${this.$config.authURL}user/getIdealCat`
      );
      this.myIdeals = ideal.data.idealCat;
      if (ideal.data.idealCat.length > 0) {
        this.answerOne = ideal.data.idealCat[0].answer;
        this.answerTwo = ideal.data.idealCat[1].answer;
        this.answerThree = ideal.data.idealCat[2].answer;
        this.answerFour = ideal.data.idealCat[3].answer;
      }

      const favor = await this.$axios.get(
        `${this.$config.findHome}getLikePost`
      );
      this.favorList = favor.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async editIdealCat() {
      try {
        const success = await this.$refs.idealForm.validate();
        if (!success) {
          return;
        }

        await this.$axios.put(
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
        this.$swal.fire({
          confirmButtonColor: "#19ba88",
          confirmButtonText: "ตกลง",
          text: "แก้ไขแมวในอุดมคติของคุณเรียบร้อยแล้ว",
          icon: "success",
        });
      } catch (error) {
        this.$swal.fire({
          confirmButtonColor: "#19ba88",
          confirmButtonText: "ตกลง",
          title: "เกิดข้อผิดพลาด",
          text: error.response.data.message,
          icon: "warning",
        });
        console.log(error);
      }
    },
    async changeStatus(post) {
      if (post.statusbar !== "รับเลี้ยงสำเร็จ") {
        try {
          const confirm = await this.$swal.fire({
            text: "ยืนยันแมวตัวนี้ถูกรับเลี้ยงแล้วใช่ไหม?",
            imageUrl: require("@/assets/imgs/icon-cat3.png"),
            imageWidth: 120,
            confirmButtonColor: "#19BA88",
            showCancelButton: true,
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
          });
          if (confirm.isConfirmed) {
            await this.$axios.get(
              `${this.$config.findHome}changeStatus?postID=${post._id}`
            );
            post.statusbar = "รับเลี้ยงสำเร็จ";
          }
        } catch (error) {
          this.$swal.fire({
            confirmButtonColor: "#19ba88",
            confirmButtonText: "ตกลง",
            title: "เกิดข้อผิดพลาด",
            text: error.response.data.message,
            icon: "warning",
          });
          console.log(error);
        }
      }
    },
    deletePost(id) {
      this.$swal
        .fire({
          text: "ยืนยันที่จะลบโพสต์หรือไม่ ?",
          icon: "warning",
          confirmButtonColor: "#F77272",
          showCancelButton: true,
          confirmButtonText: "ลบ",
          cancelButtonText: "ยกเลิก",
        })
        .then((result) => {
          if (result.isConfirmed) {
            try {
              this.$axios.delete(`${this.$config.findHome}deletePost?id=${id}`);
              this.$swal.fire({
                confirmButtonColor: "#19ba88",
                confirmButtonText: "ตกลง",
                text: "โพสต์ของคุณถูกลบแล้ว",
                icon: "success",
              });
              let newArray = this.posts.filter((item) => item._id != id);
              this.posts = newArray;
            } catch (error) {
              this.$swal.fire({
                confirmButtonColor: "#19ba88",
                confirmButtonText: "ตกลง",
                title: "เกิดข้อผิดพลาด",
                text: error.response.data.message,
                icon: "warning",
              });
              console.log(error);
            }
          }
        });
    },
    async resendOtpRegister() {
      console.log("resend");
      try {
        const res = await this.$axios.put(
          `${this.$config.authURL}user/againOTPEmail?id=${this.userProfile._id}`
        );
        console.log(res);
        clearInterval(this.timeInterval);
        this.countdown();
      } catch (error) {
        console.log(error);
      }
    },

    async confirmOtpResetEmail() {
      try {
        const success = this.$refs.otpChangeEmailnPass.validate();
        if (!success) {
          return;
        }
        await this.$axios.put(
          `${this.$config.authURL}user/editProfile?id=${this.userProfile._id}`,
          {
            firstName: this.userProfile.firstName,
            lastName: this.userProfile.lastName,
            tel: this.userProfile.tel,
          }
        );

        await this.$axios.patch(`${this.$config.authURL}user/verify`, {
          email: this.$store.state.auth.user.email,
          code: this.otpCode,
        });
        await this.$axios.put(`${this.$config.authURL}user/editEmail`, {
          email: this.userProfile.email,
        });

        await this.$auth.fetchUser();
        this.$swal.fire({
          confirmButtonColor: "#19ba88",
          confirmButtonText: "ตกลง",
          text: "บันทึกข้อมูลเรียบร้อยแล้ว",
          icon: "success",
        });
        clearInterval(this.timeInterval);
        this.dialog = false;

        console.log("update email success");
      } catch (error) {
        this.$swal.fire({
          confirmButtonColor: "#19ba88",
          confirmButtonText: "ตกลง",
          title: "เกิดข้อผิดพลาด",
          text: error.response.data.message,
          icon: "warning",
        });
      }
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
          this.total.minutes = 0;
          this.total.seconds = 0;
          clearInterval(this.timeInterval);
        }
      }, 1000);
    },

    async editProfile() {
      try {
        const success = await this.$refs.editProfileForm.validate();

        if (!success) {
          return;
        }
        if (this.userProfile.email != this.$store.state.auth.user.email) {
          await this.$axios.put(`${this.$config.authURL}user/resetEmail`);
          this.currentStep += 1;
          this.dialog = true;
          this.countdown();
        } else {
          await this.$axios.put(
            `${this.$config.authURL}user/editProfile?id=${this.userProfile._id}`,
            {
              firstName: this.userProfile.firstName,
              lastName: this.userProfile.lastName,

              tel: this.userProfile.tel,
            }
          );
          this.$swal.fire({
            confirmButtonColor: "#19ba88",
            confirmButtonText: "ตกลง",
            text: "บันทึกข้อมูลเรียบร้อยแล้ว",
            icon: "success",
          });
        }
      } catch (error) {
        this.$swal.fire({
          confirmButtonColor: "#19ba88",
          confirmButtonText: "ตกลง",
          title: "เกิดข้อผิดพลาด",
          text: error.response.data.message,
          icon: "warning",
        });
      }
    },
    convertDateTime(d) {
      let newDate = new Date(d);
      let year = newDate.getFullYear();
      let month = newDate.getMonth() + 1;
      let dt = newDate.getDate();
      if (dt < 10) {
        dt = "0" + dt;
      }
      if (month < 10) {
        month = "0" + month;
      }
      const newFormat = dt + "-" + month + "-" + year;
      return newFormat;
    },
    filteredData(x) {
      let id = this.profiles.filter(
        (profile) => this.selectProfile == profile.name
      )[0].id;
      this.selectProfileId = id;
      console.log(x);
    },
    selectTabs(item) {
      if (item.id != this.selectProfileId) {
        this.selectProfileId = item.id;
        this.$router.replace(`${this.$route.path}?menu=${item.id}`);
      }
    },
    goFindHome() {
      this.$router.push("/finderHome");
    },
    goMatching() {
      this.$router.push("/matching");
    },
  },
};
</script>

<style lang="scss" scoped>
.cur-pointer {
  cursor: pointer;
}
.border-block {
  cursor: pointer;
  border-bottom: 5px solid $purple-dark;
  color: $purple-dark;
}
::v-deep .menu-drop-down {
  .v-input__slot {
    background-color: $purple-light !important;
    border-radius: 10px;
  }
}
.valid-form {
  color: $error;
  font-weight: bold;
  font-size: 10px;
  @media (min-width: 1024px) {
    font-size: 12px;
  }
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
.status-adopt-success {
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: $success;
  border-radius: 50px;
  padding: 8px 12px;
  font-size: 14px;
  color: $white;
}
.status-adopt {
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: $error;
  border-radius: 50px;
  padding: 8px 12px;
  font-size: 14px;
  color: $white;
}
.location {
  i {
    color: $orange;
    font-size: 12px;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
}
.match-cat {
  .title {
    font-size: 24px !important;
    @media (min-width: 1440px) {
      font-size: 40px !important;
    }
  }
  .desc {
    font-size: 14px !important;
    @media (min-width: 1440px) {
      font-size: 18px !important;
    }
  }
}
.banner {
  img {
    width: 100%;
  }
}
.card-article {
  background-color: $white;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 16px;
  font-weight: bold;

  @media (min-width: 768px) {
    padding: 16px 24px;
  }
  .name-article-header {
    display: flex;
    gap: 16px;
    align-items: center;
    font-size: 10px;
    @media (min-width: 768px) {
      font-size: 16px;
    }
    img {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      max-width: 100%;
      object-fit: cover;
      align-items: center;
      @media (min-width: 768px) {
        width: 50px;
        height: 50px;
      }
    }
  }
  .name-article {
    font-size: 10px;
    @media (min-width: 768px) {
      font-size: 16px;
    }
    display: flex;
    gap: 16px;
    align-items: center;
    // justify-content: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 8px;
      max-width: 100%;
      object-fit: cover;
      align-items: center;
    }
    .cat-state-adopt {
      background-color: $white;
      border-radius: 50px;
      padding: 8px 12px;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
      @media (min-width: 768px) {
        padding: 8px 20px;
        font-size: 14px;
      }
      @media (min-width: 1440px) {
        font-size: 16px;
        padding: 14px 30px;
      }
    }
    .not-adopt {
      background-color: $white;
      border: 2px solid $dark;
    }
    .adopted {
      background-color: $success;
      color: $white;
      border: 2px solid $success;
    }
  }
  .name-article-bottom {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: flex-end;
  }
  .icon-article-succes {
    cursor: not-allowed;
    display: flex;
    gap: 16px;
    i {
      color: $gray;
      font-size: 16px;
      @media (min-width: 768px) {
        font-size: 24px;
      }
    }
    .trash {
      color: $error;
    }
  }
  .icon-article {
    cursor: pointer;
    display: flex;
    gap: 16px;
    i {
      font-size: 16px;
      @media (min-width: 768px) {
        font-size: 24px;
      }
    }
    .trash {
      color: $error;
    }
  }
}
.head-table {
  background-color: $light;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 18px;
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
}
.my-post {
  font-size: 12px;
  font-weight: bold;
  align-items: center;
  @media (min-width: 1440px) {
    font-size: 24px;
  }
}
.new-post-btn {
  border-radius: 50px;
  border: 2px solid $purple-dark;
  box-shadow: 0px 4px 15px #e0d6f9;
  font-size: 14px;
  padding: 8px 20px;
  color: $purple-dark;
  @media (min-width: 1440px) {
    padding: 14px 26px;
    font-size: 16px;
  }
}
.valid-form {
  color: $error;
  font-weight: bold;
  font-size: 12px;
}
.menu-tabs {
  background-color: $purple-light;
  border-radius: 10px;
  font-size: 16px;
  color: $dark;
  .tabs {
    border-bottom: 3px solid $purple-dark;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
  }
}
@media (min-width: 1440px) {
  ::v-deep .v-input--selection-controls.v-input {
    margin: 0;
    padding: 0;
  }
  ::v-deep .v-input--checkbox {
    margin: 0;
    padding: 0;
  }
}

.create-btn-desktop {
  width: 100%;
  text-align: center;
  color: $purple-dark;

  padding: 22px;
  background: $white;
  border: 2px solid $purple-dark;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  align-self: center;
  img {
    width: 200px;
    @media (min-width: 1440px) {
      width: 234px;
    }
  }
  p {
    font-size: 16px;
    @media (min-width: 1440px) {
      font-size: 32px;
    }
  }
  @media (min-width: 1440px) {
    padding: 42px;
  }
  @media (min-width: 2560px) {
    padding: 96.5px;
  }
}
.footer-card {
  margin-top: 16px;
  display: flex;
  gap: 10px;
  .action-btn {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 2px solid #a3a3a3;
    border-radius: 50px;
    background-color: $white;
    color: $dark;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    i {
      font-size: 16px;
    }
  }
  .del {
    border: 2px solid $error !important;
    color: $error !important;
  }
}
.card {
  position: relative;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  .thumbnail {
    overflow: hidden;
    line-height: 0;
    img {
      width: 100%;
      height: 200px;
      transition: 0.3s all;
      object-fit: cover;
      &:hover {
        transform: scale(1.1);
      }
      @media (min-width: 768px) {
        object-fit: cover;
        align-items: center;
      }
      @media (min-width: 1024px) {
        width: 100%;
        height: 260px;
      }
    }
  }

  .card-title {
    padding: 16px;
    @media (min-width: 1440px) {
      padding: 22px;
    }
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
  &:hover {
    .card-title {
      color: $dark;
    }
  }
}
.create-btn {
  background-color: $white;
  border: 1px solid $purple-dark;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  padding: 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  font-weight: bold;
  color: $purple-dark;
  img {
    width: 42px;
  }
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

  @media (min-width: 1440px) {
    height: 50px;
  }
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:after {
  border-style: none !important;
}
::v-deep .v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px;
  padding: 0px;
}
.profile-details {
  display: grid;
  row-gap: 16px;
}
.title-profile {
  align-items: center;
  align-self: center;
  gap: 4px;

  h5 {
    font-size: 16px;
  }
  i {
    font-size: 20px;
  }
}
.input-area {
  p {
    font-size: 14px;
    margin-bottom: 4px;

    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }
  input {
    height: 40px;
    width: 100%;
    background-color: $light;
    padding: 7px 20px;
    font-size: 14px;
    border-radius: 50px;
    @media (min-width: 1440px) {
      font-size: 16px;
      padding: 13px 20px;
      height: 50px;
    }
  }
}
@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>
