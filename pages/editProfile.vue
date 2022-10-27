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
              >
                <div>{{ profile.name }}</div>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <div class="mt-sm-11">
          <!-- personal info -->
          <div v-if="selectProfileId == 1">
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
                        <div class="input-area">
                          <p>ชื่อจริง</p>
                          <validation-provider
                            name="firstName"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <input
                              v-model="userProfile.firstName"
                              type="text"
                            />
                            <span class="valid-form">
                              {{ errors[0] }}
                            </span>
                          </validation-provider>
                        </div>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <div class="input-area">
                          <p>นามสกุล</p>
                          <validation-provider
                            name="lastName"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <input v-model="userProfile.lastName" type="text" />
                            <span class="valid-form">
                              {{ errors[0] }}
                            </span>
                          </validation-provider>
                        </div>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <div class="input-area">
                          <p>เบอร์โทรศัพท์</p>
                          <input v-model="userProfile.tel" type="text" />
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </div>

                <!-- account info -->
                <div class="profile-details mt-7">
                  <div class="title-profile d-flex">
                    <i class="fi fi-rr-user"></i>
                    <h5>ข้อมูลบัญชี</h5>
                  </div>
                  <div>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <div class="input-area">
                          <p>อีเมล</p>
                          <validation-provider
                            name="email"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <input v-model="userProfile.email" type="text" />
                            <span class="valid-form">
                              {{ errors[0] }}
                            </span>
                          </validation-provider>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </div>

                <!-- contact info -->
                <div class="profile-details mt-7">
                  <div class="title-profile d-flex">
                    <i class="fi fi-rr-portrait"></i>
                    <h5>ข้อมูลติดต่อ</h5>
                  </div>
                  <div>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <div class="input-area">
                          <p>จังหวัด</p>
                          <validation-provider
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <v-autocomplete
                              dense
                              filled
                              :items="province"
                              item-text="province"
                              name="province"
                              v-model="userProfile.address.province"
                              :error-messages="errors"
                              data-vv-name="select"
                              placeholder="กรุณาเลือกจังหวัด"
                              required
                            >
                            </v-autocomplete>
                          </validation-provider>
                        </div>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <div class="input-area">
                          <p>เขต/อำเภอ</p>
                          <v-autocomplete
                            dense
                            filled
                            :items="province"
                            item-text="district"
                            name="district"
                            v-model="userProfile.address.district"
                            data-vv-name="select"
                            placeholder="กรุณาเลือกเขต/อำเภอ"
                          >
                          </v-autocomplete>
                        </div>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <div class="input-area">
                          <p>แขวง/ตำบล</p>

                          <v-autocomplete
                            dense
                            filled
                            :items="tambon"
                            item-text="name_th"
                            name="tambon"
                            v-model="userProfile.address.subDistrict"
                            data-vv-name="select"
                            placeholder="กรุณาเลือกแขวง/ตำบล"
                          >
                          </v-autocomplete>
                        </div>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <div class="input-area">
                          <p>รหัสไปรษณีย์</p>
                          <validation-provider
                            name="zipCode"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <v-autocomplete
                              :items="province"
                              filled
                              name="zipCode"
                              item-text="zip"
                              dense
                              v-model="userProfile.address.zipCode"
                              :error-messages="errors"
                              data-vv-name="select"
                              placeholder="กรุณาเลือกรหัสไปรษณีย์"
                              required
                            ></v-autocomplete>
                          </validation-provider>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </div>

                <!-- button submit edit profile -->
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

          <!-- myPost -->
          <div v-if="selectProfileId == 2" class="mt-6">
            <!-- <div class="d-flex justify-space-between my-post items-center">
              <div>โพสต์ทั้งหมด</div>
              <div class="new-post-btn">สร้างโพสต์ใหม่</div>
            </div>
            <div></div> -->
            <nuxt-link to="/finderHome" class="create-btn d-sm-none">
              <img src="@/assets/imgs/catFindHome.png" alt="" />
              สร้างโพสหาบ้าน
            </nuxt-link>
            <div class="mt-6">
              <v-row>
                <v-col
                  class="d-sm-flex d-lg-flex d-xl-flex d-none"
                  cols="12"
                  sm="4"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <nuxt-link to="/finderHome" class="create-btn-desktop">
                    <img src="@/assets/imgs/catFindHome.png" alt="" />
                    <p class="mb-0">สร้างโพสหาบ้าน</p>
                  </nuxt-link>
                </v-col>
                <v-col
                  v-for="post in posts"
                  :key="post._id"
                  cols="12"
                  sm="4"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <div class="card position-relative">
                    <div class="thumbnail">
                      <img src="@/assets/imgs/img-thumbnail.jpg" alt="" />
                    </div>
                    <div class="card-title">
                      <v-row justify="center">
                        <v-col cols="12" class="pb-lg-3 pb-sm-3">
                          <div>
                            <h2 class="h4">{{ post.generalInfo.catName }}</h2>
                            <p class="mb-0 mt-2">
                              โพสต์เมื่อ {{ convertDateTime(post.createdAt) }}
                            </p>
                            <div class="footer-card">
                              <nuxt-link
                                :to="`/finderHome?isEdit=true&id=` + post._id"
                                class="action-btn"
                              >
                                <i class="fi fi-rr-pencil"></i>แก้ไข
                              </nuxt-link>

                              <div
                                @click="deletePost(post._id)"
                                class="action-btn del"
                              >
                                <i class="fi fi-rr-trash"></i>ลบ
                              </div>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>

          <!-- matchCat -->
          <div v-if="selectProfileId == 3" class="mt-6 mt-lg-11">
            <div class="input-area">
              <v-row>
                <v-col lg="6" class="">
                  <p>คำถามข้อที่ 1</p>
                  <v-select
                    dense
                    filled
                    :items="province"
                    item-text="province"
                    name="province"
                    v-model="selectProvince"
                    data-vv-name="select"
                    required
                  >
                  </v-select>
                </v-col>
              </v-row>
            </div>
            <div class="input-area mt-2">
              <v-row>
                <v-col lg="6" class="pt-0">
                  <p>คำถามข้อที่ 2</p>
                  <v-select
                    dense
                    filled
                    :items="province"
                    item-text="province"
                    name="province"
                    v-model="selectProvince"
                    data-vv-name="select"
                    required
                  >
                  </v-select>
                </v-col>
              </v-row>
            </div>
            <div class="input-area mt-2">
              <p>คำถามข้อที่ 3</p>
              <v-radio-group v-model="radioGroup">
                <v-radio
                  v-for="n in 3"
                  :key="n"
                  :label="`คำตอบ`"
                  color="indigo lighten-1"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </div>
            <div class="input-area mt-2">
              <p>คำถามข้อที่ 4</p>
              <v-checkbox
                label="คำตอบ"
                color="indigo lighten-1"
                value="คำตอบ"
                hide-details
              ></v-checkbox>
              <v-checkbox
                label="คำตอบ"
                color="indigo lighten-1"
                value="คำตอบ"
                hide-details
              ></v-checkbox>
              <v-checkbox
                label="คำตอบ"
                color="indigo lighten-1"
                value="คำตอบ"
                hide-details
              ></v-checkbox>
            </div>
          </div>
        </div>
      </div>
    </v-container>
    <!-- </form>
    </validation-observer> -->
  </section>
</template>

<script>
import tambonList from "@/assets/data/tambon.json";
import provinceList from "@/assets/data/province.json";
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import BaseButton from "../components/punmaew/components/BaseButton.vue";
export default {
  middleware: "auth",
  components: {
    ValidationProvider,
    ValidationObserver,
    provinceList,
    BaseButton,
    tambonList,
  },
  created() {
    this.userProfile = JSON.parse(JSON.stringify(this.$store.state.auth.user));
  },
  async asyncData({ $axios, $config, store }) {
    try {
      const res = await $axios.get(
        `${$config.findHome}getMyPost?id=${store.state.auth.user._id}`
      );

      return {
        posts: res.data.mypost,
      };
    } catch (error) {
      console.log(error);
    }
  },

  data() {
    return {
      profiles: [
        { id: 1, name: "ข้อมูลส่วนตัว" },
        { id: 2, name: "โพสต์ของฉัน" },
        { id: 3, name: "แมวในอุดมคติ" },
      ],
      province: provinceList,
      tambon: tambonList,
      selectProvince: "",
      selectTambon: "",
      selectDistrict: "",
      selectZipCode: "",
      selectProfile: "ข้อมูลส่วนตัว",
      selectProfileId: 1,
      radioGroup: 1,
      userProfile: {},
    };
  },

  methods: {
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
                text: error.message,
                icon: "warning",
              });
              console.log(error);
            }
          }
        });
    },
    editProfile() {
      try {
        this.$refs.editProfileForm.validate().then((success) => {
          if (!success) {
            return;
          }
          this.$axios
            .put(
              `${this.$config.authURL}user/editProfile?id=${this.userProfile._id}`,
              {
                firstName: this.userProfile.firstName,
                lastName: this.userProfile.lastName,
                email: this.userProfile.email,
                tel: this.userProfile.tel,
                address: {
                  province: this.userProfile.address.province,
                  district: this.userProfile.address.district,
                  subDistrict: this.userProfile.address.subDistrict,
                  zipCode: this.userProfile.address.zipCode,
                },
              }
            )
            .then((res) => {
              this.$swal.fire({
                confirmButtonColor: "#19ba88",
                confirmButtonText: "ตกลง",
                text: "บันทึกข้อมูลเรียบร้อยแล้ว",
                icon: "success",
              });
              console.log(res.data);
            });
        });
      } catch (error) {
        console.log(error);
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
      this.selectProfileId = item.id;
    },
  },
};
</script>

<style lang="scss" scoped>
.my-post {
  font-size: 16px;
  font-weight: bold;
  align-items: center;
}
.new-post-btn {
  border-radius: 50px;
  border: 2px solid $purple-dark;
  box-shadow: 0px 4px 15px #e0d6f9;
  font-size: 14px;
  padding: 8px 20px;
  color: $purple-dark;
}
.valid-form {
  color: $error;
  font-weight: bold;
  font-size: 12px;
}
.menu-tabs {
  background-color: $purple-light;
  border-radius: 10px;
  font-size: 24px;
  color: $dark;
  .tabs {
    border-bottom: 3px solid $purple-dark;
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
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  cursor: pointer;
  .thumbnail {
    overflow: hidden;
    line-height: 0;
    img {
      max-width: 100%;
      // width: 100%;
      // height: 260px;
      transition: 0.3s all;
      &:hover {
        transform: scale(1.1);
      }
      @media (min-width: 768px) {
        object-fit: cover;
        align-items: center;
      }
      @media (min-width: 1024px) {
        width: 100%;
        height: 200px;
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
</style>
