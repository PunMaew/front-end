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
                <!-- <div class="profile-details mt-7">
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
                </div> -->

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
            <div class="d-flex justify-space-between my-post items-center">
              <div>โพสต์หาบ้านของฉันทั้งหมด</div>
              <div @click="goFindHome" class="new-post-btn">สร้างโพสต์ใหม่</div>
            </div>
            <div class="head-table">
              <v-container>
                <v-row>
                  <v-col class="pt-2 px-7">
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
                <v-col>
                  <div class="name-article-header">
                    <!-- <img
                          :src="`${$config.findHome}readFileIdFindHome?id=${p._id}`"
                          alt=""
                        /> -->
                    <img
                      :src="`${$config.findHome}readFileIdFindHome?id=${post._id}`"
                      alt=""
                    />
                    {{ post.generalInfo.catName }}
                  </div>
                </v-col>
                <v-col class="name-article">
                  <div>{{ convertDateTime(post.createdAt) }}</div>
                </v-col>

                <v-col class="name-article">
                  <div
                    @click="changeStatus(post)"
                    :class="
                      post.statusbar === 'ยังไม่ถูกรับเลี้ยง'
                        ? 'not-adopt'
                        : 'adopted'
                    "
                    class="cat-state-adopt"
                  >
                    รับเลี้ยงสำเร็จ
                  </div>
                </v-col>

                <v-col class="name-article-bottom">
                  <div class="icon-article">
                    <nuxt-link :to="`/finderHome?isEdit=true&id=` + post._id">
                      <i class="fi fi-rr-pencil"></i>
                    </nuxt-link>
                  </div>
                  <div @click="deletePost(post._id)" class="icon-article">
                    <i class="fi fi-rr-trash trash"></i>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>

          <!-- matchCat -->
          <div v-if="selectProfileId == 3" class="mt-6 mt-lg-11">
            <div v-if="this.$store.state.auth.user.idealCat.length > 0">
              <validation-observer ref="idealForm">
                <form @submit.prevent="editIdealCat">
                  <div class="input-area">
                    <v-row>
                      <v-col lg="6" class="">
                        <p>1. ต้องการแมวช่วงอายุเท่าไหร่</p>
                        <validation-provider
                          rules="required"
                          v-slot="{ errors }"
                          name="answerOne"
                          ref="answerOne"
                        >
                          <div class="px-0" fluid>
                            <v-radio-group name="answerOne" v-model="answerOne">
                              <v-radio
                                v-for="n in choiceListOne"
                                :key="n.answer"
                                :label="`${n.answer}`"
                                :value="n"
                              />
                            </v-radio-group>
                          </div>
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
                    <p>3. ต้องการแมวเพศไหน</p>
                    <v-row>
                      <v-col lg="6">
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
                      </v-col>
                    </v-row>
                  </div>
                  <div class="input-area mt-2">
                    <p>4. สีแมวที่ต้องการ</p>
                    <v-row>
                      <v-col lg="6">
                        <validation-provider
                          rules="required"
                          v-slot="{ errors }"
                          ref="answerFour"
                        >
                          <v-select
                            dense
                            filled
                            :items="filterList.colorSecond"
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
                      </v-col>
                    </v-row>
                  </div>
                  <div class="input-area mt-2">
                    <p>5. ต้องการแมวจากจังหวัดไหน</p>
                    <v-row>
                      <v-col lg="6">
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
                      </v-col>
                    </v-row>
                  </div>
                  <div class="input-area mt-2">
                    <p>6. ต้องการแมวจากเขตไหน</p>
                    <v-row>
                      <v-col lg="6">
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
                      </v-col>
                    </v-row>
                  </div>
                  <div class="input-area mt-2">
                    <p>7. สายพันธุ์แมวที่ต้องการ</p>
                    <v-row>
                      <v-col lg="6">
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
                      </v-col>
                    </v-row>
                  </div>
                  <div class="input-area mt-2">
                    <p>8. ต้องการแมวที่...</p>
                    <validation-provider
                      rules="required"
                      v-slot="{ errors }"
                      ref="answerEight"
                    >
                      <v-radio-group name="answerEight" v-model="answerEight">
                        <v-radio
                          v-for="n in choiceListEight"
                          :key="n.answer"
                          :label="`${n.answer}`"
                          :value="n"
                        />
                      </v-radio-group>
                      <span class="valid-form">
                        {{ errors[0] }}
                      </span>
                    </validation-provider>
                  </div>
                  <div class="input-area mt-2">
                    <p>9. ต้องการแมวที่...</p>
                    <validation-provider
                      rules="required"
                      v-slot="{ errors }"
                      ref="answerNine"
                    >
                      <v-radio-group name="answerNine" v-model="answerNine">
                        <v-radio
                          v-for="n in choiceListNine"
                          :key="n.answer"
                          :label="`${n.answer}`"
                          :value="n"
                        />
                      </v-radio-group>
                      <span class="valid-form">
                        {{ errors[0] }}
                      </span>
                    </validation-provider>
                  </div>
                  <div class="input-area mt-2">
                    <p>10. ต้องการแมวที่...</p>
                    <validation-provider
                      rules="required"
                      v-slot="{ errors }"
                      ref="answerTen"
                    >
                      <v-radio-group name="answerTen" v-model="answerTen">
                        <v-radio
                          v-for="n in choiceListTen"
                          :key="n.answer"
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
                      <v-col cols="3">
                        <div class="banner">
                          <img src="@/assets/imgs/banner.png" alt="" />
                        </div>
                      </v-col>
                    </v-row>
                  </div>

                  <div>
                    <v-row justify="center">
                      <v-col cols="6">
                        <div class="match-cat mt-5">
                          <p class="text-center title font-weight-bold">
                            จับคู่แมวตัวโปรดของคุณ
                          </p>
                          <p class="text-center desc mt-6">
                            ค้นหาแมวที่ต้องการช่วยเหลือให้ตรงใจคุณ
                          </p>
                        </div>
                      </v-col>
                      v
                    </v-row>
                  </div>
                  <div>
                    <v-row justify="center">
                      <v-col cols="4">
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

          <div v-if="selectProfileId == 4" class="mt-12">
            <div v-if="this.userProfile.favor.length <= 0">
              <v-row justify="center">
                <v-col cols="12">
                  <div>
                    <v-row justify="center">
                      <v-col cols="3">
                        <div class="banner">
                          <img src="@/assets/imgs/cat-favor.png" alt="" />
                        </div>
                      </v-col>
                    </v-row>
                  </div>

                  <div>
                    <v-row justify="center">
                      <v-col cols="6">
                        <div class="match-cat">
                          <p class="text-center title font-weight-bold">
                            ยังไม่มีโพสต์แมวที่ถูกใจ
                          </p>
                        </div>
                      </v-col>
                      v
                    </v-row>
                  </div>
                </v-col>
              </v-row>
            </div>
            <div v-else>
              <div class="d-flex justify-space-between my-post items-center">
                <div>โพสต์หาบ้านของฉันทั้งหมด</div>
                <div @click="goFindHome" class="new-post-btn">
                  สร้างโพสต์ใหม่
                </div>
              </div>
              <!-- <div>Card</div> -->
              <div>
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
    <!-- </form>
    </validation-observer> -->
  </section>
</template>

<script>
import filterList from "@/assets/data/filterList.json";
import tambonList from "@/assets/data/tambon.json";
import provinceList from "@/assets/data/province.json";
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import BaseButton from "../components/punmaew/components/BaseButton.vue";
export default {
  // middleware: "auth",

  components: {
    ValidationProvider,
    ValidationObserver,
    provinceList,
    BaseButton,
    tambonList,
    filterList,
  },

  //   mounted() {
  //   if (this.$store.state.auth.loggedIn === false) {
  //     this.$router.push("/login");
  //   }
  // },
  created() {
    this.userProfile = JSON.parse(JSON.stringify(this.$store.state.auth.user));
    const menu = this.$route.query.menu;
    if (menu) this.selectProfileId = menu;

    // if (this.$store.state.auth.loggedIn === false) {
    //   this.$router.push("/login");
    // }
  },
  async asyncData({ $axios, $config, store }) {
    try {
      const res = await $axios.get(
        `${$config.findHome}getMyPost?id=${store.state.auth.user._id}`
      );
      const ideal = await $axios.get(`${$config.authURL}user/getIdealCat`);
      // console.log(ideal.data);

      const favor = await $axios.get(`${$config.findHome}getLikePost`);
      console.log(favor.data);

      if (ideal.data.idealCat.length > 0) {
        return {
          posts: res.data.mypost,
          answerOne: { answer: ideal.data.idealCat[0].answer },
          answerTwo: { answer: ideal.data.idealCat[1].answer },
          answerThree: ideal.data.idealCat[2].answer,
          answerFour: ideal.data.idealCat[3].answer,
          answerFive: ideal.data.idealCat[4].answer,
          answerSix: ideal.data.idealCat[5].answer,
          answerSeven: ideal.data.idealCat[6].answer,
          answerEight: { answer: ideal.data.idealCat[7].answer },
          answerNine: { answer: ideal.data.idealCat[8].answer },
          answerTen: { answer: ideal.data.idealCat[9].answer },
          favorList: favor.data,
        };
      } else {
        return {
          posts: res.data.mypost,
          favorList: favor.data,
        };
      }
    } catch (error) {
      console.log(error);
    }
  },

  data() {
    return {
      favorList: [],
      profiles: [
        { id: 1, name: "ข้อมูลส่วนตัว" },
        { id: 2, name: "โพสต์หาบ้านให้แมว" },
        { id: 3, name: "แมวในอุดมคติ" },
        { id: 4, name: "การถูกใจของฉัน" },
      ],
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
      answerFive: null,
      answerSix: null,
      answerSeven: null,
      answerEight: null,
      answerNine: null,
      answerTen: null,
      choiceListOne: [
        { answer: "1-3 เดือน" },
        { answer: "4-6 เดือน" },
        { answer: "7-9 เดือน" },
        { answer: "10-12 เดือน" },
        { answer: "1 ปีขึ้นไป" },
      ],
      choiceListTwo: [
        { answer: "ขนสั้น" },
        { answer: "ขนยาว" },
        { answer: "ไม่มีขน" },
        { answer: "ไม่จำกัด" },
      ],
      choiceListThree: [
        { answer: "เพศเมีย" },
        { answer: "เพศผู้" },
        { answer: "ไม่จำกัด" },
      ],
      choiceListEight: [
        { answer: "ใช้กระบะทรายเป็น" },
        { answer: "ไม่จำเป็นต้องใช้กระบะทรายเป็น" },
      ],
      choiceListNine: [
        { answer: "ทำหมันแล้ว" },
        { answer: "ยังไม่ได้ทำหมัน" },
        { answer: "ไม่จำกัด" },
      ],
      choiceListTen: [
        { answer: "ยังไม่ได้รับวัคซีน" },
        { answer: "ได้รับวัคซีนครบตามช่วงอายุของแมว" },
        { answer: "ได้รับวัคซีนบางชนิด" },
        { answer: "ไม่จำกัด" },
      ],
    };
  },

  methods: {
    async editIdealCat() {
      try {
        const success = await this.$refs.idealForm.validate();
        if (!success) {
          return;
        }
        const res = await this.$axios.put(
          `${this.$config.authURL}user/idealCat?id=${this.$store.state.auth.user._id}`,
          {
            idealCat: [
              { answer: this.answerOne.answer.answer },
              { answer: this.answerTwo.answer },
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
        this.$swal.fire({
          confirmButtonColor: "#19ba88",
          confirmButtonText: "ตกลง",
          text: "แก้ไขแมวในอุดมคติของคุณเรียบร้อยแล้ว",
          icon: "success",
        });

        // console.log(res.data);
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
            text: error.message,
            icon: "warning",
          });
          console.log(error);
        }
      }

      // findHome/changeStatus
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
                // address: {
                //   province: this.userProfile.address.province,
                //   district: this.userProfile.address.district,
                //   subDistrict: this.userProfile.address.subDistrict,
                //   zipCode: this.userProfile.address.zipCode,
                // },
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
    font-size: 40px !important;
  }
  .desc {
    font-size: 18px !important;
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
  padding: 16px 24px;
  font-weight: bold;
  .name-article-header {
    display: flex;
    gap: 16px;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 8px;
      max-width: 100%;
      object-fit: cover;
      align-items: center;
    }
  }
  .name-article {
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

      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
      padding: 14px 30px;
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
  .icon-article {
    display: flex;
    gap: 16px;
    i {
      font-size: 24px;
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
  font-size: 20px;
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
  position: relative;
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
