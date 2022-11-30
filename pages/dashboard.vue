<template>
  <div>
    <section class="d-none d-md-flex d-lg-flex d-xl-flex">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" align-self="center">
            <div v-if="currentMenu === 'dashboard'">
              <div class="head-title font-weight-bold">Dashboard</div>
              <div class="dashboard-bar mt-4">
                <v-container>
                  <v-row justify="center">
                    <v-col
                      @click="selectTabs('article')"
                      cols="4"
                      align-self="center"
                      class="bar-block"
                    >
                      <div class="text-center">บทความ</div>
                    </v-col>
                    <v-col
                      @click="selectTabs('findHome')"
                      cols="4"
                      align-self="center"
                      class="bar-block"
                    >
                      <div class="text-center">โพสต์หาบ้าน</div>
                    </v-col>
                    <v-col
                      @click="selectTabs('allAccount')"
                      cols="4"
                      align-self="center"
                      class="bar-block"
                    >
                      <div class="text-center">บัญชีผู้ใช้</div>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
              <div class="mt-7 mb-16">
                <div ref="article">
                  <div class="d-flex justify-space-between align-center">
                    <div class="font-weight-bold title">
                      <i class="fi fi-rr-book-alt"></i>
                      บทความทั้งหมด
                    </div>
                    <div @click="menuDashboard('article')" class="manage-more">
                      จัดการบทความ
                      <i class="fi fi-rr-arrow-small-right"></i>
                    </div>
                  </div>
                  <div class="mt-4">
                    <v-row>
                      <v-col
                        v-for="i in allPostsArticles"
                        :key="i._id"
                        cols="12"
                        sm="4"
                        md="4"
                        lg="4"
                        xl="4"
                        align-self="center"
                      >
                        <div class="card-block">
                          <div class="thumbnail">
                            <img
                              :src="`${$config.articleURL}readFileId?id=${i._id}`"
                              alt=""
                            />
                          </div>
                          <div class="card-title">
                            <v-row justify="center">
                              <v-col cols="12" class="pb-lg-3 pb-sm-3">
                                <div>
                                  <h2 class="h4">{{ i.title }}</h2>
                                  <p class="mb-0 intro-content-card">
                                    {{ i.details[0].text }}
                                  </p>
                                </div>
                              </v-col>
                            </v-row>
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col>
                        <div
                          v-if="moreArticle"
                          @click="showMoreArticle"
                          class="see-more font-weight-bold"
                        >
                          ดูน้อยลง <i class="fi fi-rr-angle-small-up"></i>
                        </div>
                        <div
                          v-else
                          @click="showMoreArticle"
                          class="see-more font-weight-bold"
                        >
                          ดูทั้งหมด <i class="fi fi-rr-angle-small-down"></i>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </div>

                <div ref="findHome" class="mt-7">
                  <div class="d-flex justify-space-between align-center">
                    <div class="font-weight-bold title">
                      <img src="@/assets/imgs/icon-find-home.svg" alt="" />
                      โพสต์หาบ้านทั้งหมด
                    </div>
                    <div @click="menuDashboard('findhome')" class="manage-more">
                      จัดการโพสต์หาบ้าน
                      <i class="fi fi-rr-arrow-small-right"></i>
                    </div>
                  </div>
                  <div class="mt-4">
                    <v-row>
                      <v-col
                        v-for="p in allPostFindHome"
                        :key="p._id"
                        cols="12"
                        sm="4"
                        md="4"
                        lg="4"
                        xl="4"
                        align-self="center"
                      >
                        <div class="card-block">
                          <div class="thumbnail">
                            <img
                              :src="`${$config.findHome}readFileIdFindHome?id=${p._id}`"
                              alt=""
                            />
                          </div>
                          <div class="card-title">
                            <v-row justify="center">
                              <v-col cols="12" class="pb-lg-3 pb-sm-3">
                                <div>
                                  <h2 class="h4">
                                    {{ p.generalInfo.catName }}
                                  </h2>
                                  <p class="mb-0 location">
                                    <i class="fi fi-rr-marker"></i>
                                    {{
                                      "จังหวัด" +
                                      p.generalInfo.location.province +
                                      " " +
                                      "เขต" +
                                      p.generalInfo.location.district
                                    }}
                                  </p>
                                </div>
                              </v-col>
                            </v-row>
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col>
                        <div
                          v-if="morePost"
                          @click="showMorePost"
                          class="see-more font-weight-bold"
                        >
                          ดูน้อยลง <i class="fi fi-rr-angle-small-up"></i>
                        </div>
                        <div
                          v-else
                          @click="showMorePost"
                          class="see-more font-weight-bold"
                        >
                          ดูทั้งหมด <i class="fi fi-rr-angle-small-down"></i>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </div>

                <div ref="allAccount" class="mt-7">
                  <div class="d-flex justify-space-between align-center">
                    <div class="font-weight-bold title">
                      <i class="fi fi-rr-user"></i>
                      บัญชีผู้ใช้ทั้งหมด
                    </div>
                    <div @click="menuDashboard('users')" class="manage-more">
                      จัดการบัญชีผู้ใช้
                      <i class="fi fi-rr-arrow-small-right"></i>
                    </div>
                  </div>
                  <div class="mt-4">
                    <v-row>
                      <v-col
                        v-for="i in allUsersAccount"
                        :key="i.id"
                        cols="12"
                        sm="4"
                        md="4"
                        lg="4"
                        xl="4"
                        align-self="center"
                      >
                        <div class="d-flex card-block-account">
                          <i class="fi fi-rr-portrait"></i>
                          <div>
                            <p class="full-name mb-0">
                              {{ i.firstName + " " + i.lastName }}
                            </p>

                            <p class="email mb-0">{{ i.email }}</p>
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col>
                        <div
                          v-if="moreUser"
                          @click="showMoreUser"
                          class="see-more font-weight-bold"
                        >
                          ดูน้อยลง <i class="fi fi-rr-angle-small-up"></i>
                        </div>
                        <div
                          v-else
                          @click="showMoreUser"
                          class="see-more font-weight-bold"
                        >
                          ดูทั้งหมด <i class="fi fi-rr-angle-small-down"></i>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="currentMenu === 'article'">
              <div v-if="isNewArticle === false && isEditArticle === false">
                <div class="head-title font-weight-bold">Article Posts</div>
                <div class="mt-4">
                  <v-row justify="center">
                    <v-col cols="9">
                      <div class="search-area d-flex">
                        <i class="fi fi-rr-search mr-2"></i>
                        <input
                          v-model="searchArticle"
                          type="text"
                          placeholder="ค้นหาชื่อบทความ..."
                        />
                      </div>
                    </v-col>
                    <v-col cols="3">
                      <base-button
                        @click="isNewArticle = true"
                        :fillSearch="true"
                      >
                        สร้างบทความใหม่
                      </base-button>
                    </v-col>
                  </v-row>
                </div>
                <div class="mt-11">
                  <h2>บทความทั้งหมด</h2>
                  <div
                    v-for="a in filterByArticle"
                    :key="a._id"
                    class="card-article mt-4"
                  >
                    <v-row>
                      <v-col cols="6">
                        <div class="name-article-header">
                          <img
                            :src="`${$config.articleURL}readFileId?id=${a._id}`"
                            alt=""
                          />

                          {{ a.title }}
                        </div>
                      </v-col>
                      <v-col cols="4" class="name-article-header">
                        <div>{{ convertDateTime(a.createdAt) }}</div>
                      </v-col>
                      <v-col cols="2" class="name-article-bottom">
                        <div class="icon-article">
                          <i
                            @click="getDataArticle(a)"
                            class="fi fi-rr-pencil"
                          ></i>

                          <i
                            @click="deleteArticle(a._id)"
                            class="fi fi-rr-trash trash"
                          ></i>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </div>

              <div v-if="isNewArticle === true">
                <div class="head-title font-weight-bold">
                  Article Posts > สร้างบทความ
                </div>
                <div class="new-article-card mt-4">
                  <validation-observer ref="createArticleForm">
                    <form @submit.prevent="newCreateArticle">
                      <v-row justify="center">
                        <v-col cols="12">
                          <div class="mb-10">
                            <validation-provider
                              rules="required|image"
                              v-slot="{ errors }"
                              ref="provider"
                            >
                              <div @click="onClickImage" class="upload-image">
                                <div
                                  v-if="!imageData"
                                  class="icon-upload text-center"
                                >
                                  <i class="fi fi-rr-picture"></i>
                                  <p>เพิ่มรูป <span>ที่นี่</span></p>
                                </div>
                                <div class="img-container" v-else>
                                  <div class="edit-img-btn">
                                    <i class="fi fi-rr-pencil"></i> แก้ไขรูป
                                  </div>
                                  <div class="mb-10 article-img">
                                    <img
                                      :src="imageData"
                                      class="preview"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <input
                                  id="edit-article-image"
                                  ref="fileInput"
                                  type="file"
                                  accept="image/*"
                                  @change="uploadImage($event)"
                                  name="imageData"
                                />
                              </div>
                              <span class="valid-form">
                                {{ errors[0] }}
                              </span>
                            </validation-provider>
                          </div>
                          <div class="input-area mb-4">
                            <p>ชื่อบทความ<span>*</span></p>
                            <validation-provider
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <input
                                v-model="articleName"
                                name="articleName"
                                type="text"
                                placeholder="กรุณากรอกชื่อบทความ"
                              />
                              <span class="valid-form">
                                {{ errors[0] }}
                              </span>
                            </validation-provider>
                          </div>

                          <div>
                            <div
                              v-for="(p, index) in pars"
                              :key="index"
                              class="input-area mb-4"
                            >
                              <p>ย่อหน้าที่ {{ p.no }}<span>*</span></p>
                              <validation-provider
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <textarea
                                  v-model="p.text"
                                  name="paragraph"
                                  type="text"
                                  :placeholder="
                                    'กรุณากรอกเนื้อหาย่อหน้าที่' + p.no
                                  "
                                />
                                <span class="valid-form">
                                  {{ errors[0] }}
                                </span>
                              </validation-provider>
                            </div>
                            <div
                              @click="addParagraph"
                              class="font-weight-bold font-orange mb-4"
                            >
                              + เพิ่มย่อหน้า
                            </div>
                          </div>
                          <div class="input-area mb-4">
                            <p>ที่มา</p>
                            <input
                              v-model="sourceArticle"
                              name="sourceArticle"
                              type="text"
                              placeholder="Source URL"
                            />
                          </div>
                          <div class="mt-12">
                            <v-row no-gutters justify="center" class="btn-area">
                              <v-col align-self="center">
                                <base-button
                                  @click="cancleArticle"
                                  :outline="true"
                                  >ยกเลิก</base-button
                                >
                              </v-col>
                              <v-col align-self="center">
                                <base-button :fillSearch="true" :type="'submit'"
                                  >สร้างบทความ</base-button
                                >
                              </v-col>
                            </v-row>
                          </div>
                        </v-col>
                      </v-row>
                    </form>
                  </validation-observer>
                </div>
              </div>

              <div v-if="isEditArticle === true">
                <div class="head-title font-weight-bold">
                  Article Posts > แก้ไขบทความ
                </div>
                <div class="new-article-card mt-4">
                  <validation-observer ref="updateArticleForm">
                    <form @submit.prevent="updateArticle">
                      <v-row justify="center">
                        <v-col cols="12">
                          <div class="mb-10">
                            <validation-provider
                              :rules="isEditArticle ? '' : 'required|image'"
                              v-slot="{ errors }"
                              ref="provider"
                            >
                              <div @click="onClickImage" class="upload-image">
                                <div
                                  v-if="!imageData"
                                  class="icon-upload text-center"
                                >
                                  <i class="fi fi-rr-picture"></i>
                                  <p>เพิ่มรูป <span>ที่นี่</span></p>
                                </div>
                                <div class="img-container" v-else>
                                  <div class="edit-img-btn">
                                    <i class="fi fi-rr-pencil"></i> แก้ไขรูป
                                  </div>
                                  <div class="mb-10 article-img">
                                    <img
                                      :src="imageData"
                                      class="preview"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <input
                                  id="edit-article-image"
                                  ref="fileInput"
                                  type="file"
                                  accept="image/*"
                                  @change="uploadImage($event)"
                                  name="imageData"
                                />
                              </div>
                              <span class="valid-form">
                                {{ errors[0] }}
                              </span>
                            </validation-provider>
                          </div>
                          <div class="input-area mb-4">
                            <p>ชื่อบทความ<span>*</span></p>
                            <validation-provider
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <input
                                v-model="articleName"
                                name="articleName"
                                type="text"
                                placeholder="กรุณากรอกชื่อบทความ"
                              />
                              <span class="valid-form">
                                {{ errors[0] }}
                              </span>
                            </validation-provider>
                          </div>

                          <div>
                            <div
                              v-for="(p, index) in pars"
                              :key="index"
                              class="input-area mb-4"
                            >
                              <p>ย่อหน้าที่ {{ p.no }}<span>*</span></p>
                              <validation-provider
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <textarea
                                  v-model="p.text"
                                  name="paragraph"
                                  type="text"
                                  :placeholder="
                                    'กรุณากรอกเนื้อหาย่อหน้าที่' + p.no
                                  "
                                />
                                <span class="valid-form">
                                  {{ errors[0] }}
                                </span>
                              </validation-provider>
                            </div>
                            <div
                              @click="addParagraph"
                              class="font-weight-bold font-orange mb-4"
                            >
                              + เพิ่มย่อหน้า
                            </div>
                          </div>

                          <div class="input-area">
                            <p>ที่มา</p>
                            <input
                              v-model="sourceArticle"
                              name="sourceArticle"
                              type="text"
                              placeholder="Source URL"
                            />
                          </div>

                          <div class="mt-12">
                            <v-row no-gutters justify="center" class="btn-area">
                              <v-col align-self="center">
                                <base-button
                                  @click="cancleArticle"
                                  :outline="true"
                                  >ยกเลิก</base-button
                                >
                              </v-col>
                              <v-col align-self="center">
                                <base-button :fillSearch="true" :type="'submit'"
                                  >บันทึก</base-button
                                >
                              </v-col>
                            </v-row>
                          </div>
                        </v-col>
                      </v-row>
                    </form>
                  </validation-observer>
                </div>
              </div>
            </div>

            <div v-if="currentMenu === 'findhome'">
              <div class="head-title font-weight-bold">Finder Home Posts</div>
              <div class="mt-4">
                <v-row>
                  <v-col cols="12">
                    <div class="search-area d-flex">
                      <i class="fi fi-rr-search mr-2"></i>
                      <input type="text" placeholder="ค้นหาชื่อโพสต์..." />
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div class="mt-11">
                <h2>โพสต์หาบ้านทั้งหมด</h2>
                <div v-for="p in posts" :key="p.id" class="card-article mt-4">
                  <v-row>
                    <v-col>
                      <div class="name-article-header">
                        <img
                          :src="`${$config.findHome}readFileIdFindHome?id=${p._id}`"
                          alt=""
                        />

                        {{ p.generalInfo.catName }}
                      </div>
                    </v-col>
                    <v-col class="name-article">
                      <div>{{ convertDateTime(p.updatedAt) }}</div>
                    </v-col>

                    <v-col class="name-article">
                      <div>
                        {{
                          p.authorInfo.firstName + " " + p.authorInfo.lastName
                        }}
                      </div>
                    </v-col>
                    <v-col
                      class="name-article"
                      :class="[
                        p.status === 'ยังไม่ถูกรับเลี้ยง'
                          ? 'inactive'
                          : 'active',
                      ]"
                    >
                      <div>{{ p.status }}</div>
                    </v-col>

                    <v-col class="name-article-bottom">
                      <div @click="deleteFindHome(p._id)" class="icon-article">
                        <i class="fi fi-rr-trash trash"></i>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>

            <div v-if="currentMenu === 'users'">
              <div class="head-title font-weight-bold">Users</div>
              <div class="mt-4">
                <v-row>
                  <v-col cols="12">
                    <div class="search-area d-flex">
                      <i class="fi fi-rr-search mr-2"></i>
                      <input
                        v-model="searchAccount"
                        type="text"
                        placeholder="ค้นหาชื่อบัญชี..."
                      />
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div class="mt-11">
                <h2>บัญชีผู้ใช้ทั้งหมด</h2>
                <div class="mt-4">
                  <v-row>
                    <v-col
                      v-for="account in filterByAccount"
                      :key="account._id"
                      cols="12"
                      sm="4"
                      md="4"
                      lg="4"
                      xl="4"
                      align-self="center"
                    >
                      <div class="card-block-user">
                        <i class="fi fi-rr-portrait"></i>

                        <div>
                          <p class="mb-0 font-weight-bold full-name">
                            {{ account.firstName + " " + account.lastName }}
                          </p>
                          <p class="mb-0">{{ account.email }}</p>
                          <p class="mb-0">{{ account.tel }}</p>
                        </div>
                        <div
                          @click="deleteAccount(account._id)"
                          class="mt-4 footer-btn font-weight-bold cur-pointer"
                        >
                          ลบบัญชีผู้ใช้
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="d-md-none d-lg-none d-xl-none">
      <div class="text-center">
        <v-container>
          <v-row justify="center">
            <v-col align-self="center" cols="12">
              This website is supported on desktop only.
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import BaseButton from "../components/punmaew/components/BaseButton.vue";
import CardDialog from "../components/punmaew/components/CardDialog.vue";
export default {
  auth: false,
  components: {
    BaseButton,
    CardDialog,
    ValidationProvider,
    ValidationObserver,
  },
  layout: "menu",
  computed: {
    currentMenu() {
      return this.$store.state.currentMenu;
    },
    allPostsArticles() {
      return this.articles.slice(0, this.articleCount);
    },
    allPostFindHome() {
      return this.posts.slice(0, this.postCount);
    },
    allUsersAccount() {
      return this.users.slice(0, this.userCount);
    },
    filterByArticle() {
      return this.searchArticle
        ? this.articles.filter((article) => {
            return article.title
              .toLowerCase()
              .includes(this.searchArticle.toLowerCase());
          })
        : this.articles;
    },
    filterByAccount() {
      return this.searchAccount
        ? this.users.filter((account) => {
            return account.firstName
              .toLowerCase()
              .includes(this.searchAccount.toLowerCase());
          })
        : this.users;
    },
  },
  data() {
    return {
      tabs: [
        { id: 1, name: "บทความ" },
        { id: 2, name: "โพสต์หาบ้าน" },
        { id: 3, name: "บัญชีผู้ใช้" },
      ],

      isEditArticle: false,
      isNewArticle: false,
      sourceArticle: "",
      articleName: "",
      paragraph: "",
      isLoading: false,
      articles: [],

      articleCount: 3,
      moreArticle: false,
      moreUser: false,
      morePost: false,
      posts: [],

      postCount: 3,
      users: [],

      userCount: 3,
      newArticle: false,
      pars: [{ id: 1, no: 1, text: "" }],
      newParagraph: "",
      imageData: "",
      imageFile: "",

      searchArticle: "",
      searchAccount: "",
      editArticleId: "",
      tabsFocus: "article",
    };
  },
  async asyncData({ route, store }) {
    const menu = route.query.menu;
    if (!menu) {
      store.commit("SET_MENU", "dashboard");
    } else {
      store.commit("SET_MENU", menu);
    }
  },

  mounted() {
    window.onbeforeunload = function () {
      return "Changes you made may not be saved.";
    };
  },
  async created() {
    if (
      this.$store.state.auth.loggedIn == false ||
      this.$store.state.auth.strategy != "admin"
    ) {
      this.$router.push("/loginAdmin");
    }
    await this.fetchData();
  },
  methods: {
    async updateArticle() {
      try {
        const success = await this.$refs.updateArticleForm.validate();
        console.log(success);
        if (!success) {
          return;
        }
        const details = [];

        for (let index = 0; index < this.pars.length; index++) {
          details.push({
            paraNumber: this.pars[index].no,
            text: this.pars[index].text,
          });
        }
        this.$axios.put(
          `${this.$config.articleURL}updateArticle?id=${this.editArticleId}`,
          {
            title: this.articleName,
            source: this.sourceArticle,
            details,
          }
        );

        if (this.imageFile) {
          let formData = new FormData();
          formData.append("image", this.imageFile);

          await this.$axios.post(
            `${this.$config.articleURL}updateImageArticle?id=${this.editArticleId}`,
            formData
          );
        }
        this.$nextTick(() => {
          this.$refs.updateArticleForm.reset();
        });
        this.cancleArticle();
        await this.fetchData();
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
    getDataArticle(article) {
      this.isEditArticle = true;
      this.editArticleId = article._id;

      this.articleName = article.title;
      const pars = [];
      for (let index = 0; index < article.details.length; index++) {
        pars.push({
          id: article.details[index]._id,
          no: article.details[index].paraNumber,
          text: article.details[index].text,
        });
      }
      this.pars = pars;
      this.sourceArticle = article.source;
      this.imageData = `${this.$config.articleURL}readFileId?id=${article._id}`;
    },
    async newCreateArticle() {
      try {
        const success = await this.$refs.createArticleForm.validate();
        console.log(success);
        if (!success) {
          return;
        }

        const details = [];

        for (let index = 0; index < this.pars.length; index++) {
          details.push({
            paraNumber: this.pars[index].no,
            text: this.pars[index].text,
          });
        }

        const articleDetails = await this.$axios.post(
          `${this.$config.articleURL}createArticle`,
          {
            title: this.articleName,
            details,
            source: this.sourceArticle,
          }
        );

        let formData = new FormData();
        formData.append("image", this.imageFile);

        await this.$axios.post(
          `${this.$config.articleURL}uploadArticle/${articleDetails.data.postIdArticle}`,
          formData
        );

        this.$nextTick(() => {
          this.$refs.createArticleForm.reset();
        });

        this.cancleArticle();
        await this.fetchData();
      } catch (error) {
        console.log(error);
      }
    },
    async fetchData() {
      try {
        const article = await this.$axios.get(
          `${this.$config.articleURL}allArticle`
        );
        this.articles = article.data;

        const res = await this.$axios.get(`${this.$config.findHome}allPost`);
        this.posts = res.data;

        const user = await this.$axios.get(
          `${this.$config.authURL}user/getallusers`
        );
        this.users = user.data;
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
    cancleArticle() {
      this.isNewArticle = false;
      this.isEditArticle = false;
      this.imageData = "";
      this.articleName = "";
      this.pars = [{ id: 1, no: 1, text: "" }];
      this.sourceArticle = "";
    },
    menuDashboard(menu) {
      if (menu === "article") {
        try {
          this.$store.commit("SET_MENU", "article");
        } catch (error) {
          console.log(error);
        }
      }
      if (menu === "findhome") {
        try {
          this.$store.commit("SET_MENU", "findhome");
        } catch (error) {
          console.log(error);
        }
      }
      if (menu === "users") {
        try {
          this.$store.commit("SET_MENU", "users");
        } catch (error) {
          console.log(error);
        }
      }
    },
    async deleteArticle(id) {
      try {
        const result = await this.$swal.fire({
          text: "ยืนยันที่จะลบโพสต์หรือไม่ ?",
          icon: "warning",
          confirmButtonColor: "#F77272",
          showCancelButton: true,
          confirmButtonText: "ลบ",
          cancelButtonText: "ยกเลิก",
        });
        if (result.isConfirmed) {
          await this.$axios.delete(
            `${this.$config.articleURL}delArticle?id=${id}`
          );
          this.$swal.fire({
            confirmButtonColor: "#19ba88",
            confirmButtonText: "ตกลง",
            text: "โพสต์ของคุณถูกลบแล้ว",
            icon: "success",
          });
          let newArray = this.articles.filter((item) => item._id != id);
          this.articles = newArray;
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
    },
    async deleteFindHome(id) {
      try {
        const result = await this.$swal.fire({
          text: "ยืนยันที่จะลบโพสต์หรือไม่ ?",
          icon: "warning",
          confirmButtonColor: "#F77272",
          showCancelButton: true,
          confirmButtonText: "ลบ",
          cancelButtonText: "ยกเลิก",
        });
        if (result.isConfirmed) {
          await this.$axios.delete(
            `${this.$config.findHome}deletePost?id=${id}`
          );
          this.$swal.fire({
            confirmButtonColor: "#19ba88",
            confirmButtonText: "ตกลง",
            text: "โพสต์ของคุณถูกลบแล้ว",
            icon: "success",
          });
          let newArray = this.posts.filter((item) => item._id != id);
          this.posts = newArray;
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
    },
    async deleteAccount(id) {
      try {
        const result = await this.$swal.fire({
          text: "ยืนยันที่จะลบบัญชีนี้หรือไม่ ?",
          icon: "warning",
          confirmButtonColor: "#F77272",
          showCancelButton: true,
          confirmButtonText: "ลบ",
          cancelButtonText: "ยกเลิก",
        });
        if (result.isConfirmed) {
          await this.$axios.delete(
            `${this.$config.authURL}user/deleteUser?id=${id}`
          );
          this.$swal.fire({
            confirmButtonColor: "#19ba88",
            confirmButtonText: "ตกลง",
            text: "โพสต์ของคุณถูกลบแล้ว",
            icon: "success",
          });
          let newArray = this.users.filter((item) => item._id != id);
          this.users = newArray;
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
    },
    onClickImage() {
      this.$refs.fileInput.click();
    },
    async uploadImage(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        const { valid } = await this.$refs.provider.validate(event);
        if (valid) {
          this.imageFile = event.target.files[0];
          var reader = new FileReader();
          reader.onload = (e) => {
            this.imageData = e.target.result;
          };
          reader.readAsDataURL(input.files[0]);
        }
      }
    },
    addParagraph() {
      this.pars.push({
        id: this.pars.length + 1,
        no: this.pars.length + 1,
      });
      this.newParagraph = "";
    },
    selectTabs(refName) {
      this.tabsFocus = refName;
      this.$refs[refName].scrollIntoView({ behavior: "smooth" });
    },
    showMoreArticle() {
      this.moreArticle = !this.moreArticle;

      if (this.articleCount === this.articles.length) {
        this.articleCount = 3;
        return;
      }
      if (this.articleCount > this.articles.length) return;
      this.articleCount = this.articles.length;
    },
    showMorePost() {
      this.morePost = !this.morePost;

      if (this.postCount === this.posts.length) {
        this.postCount = 3;
        return;
      }
      if (this.postCount > this.posts.length) return;
      this.postCount = this.posts.length;
    },
    showMoreUser() {
      this.moreUser = !this.moreUser;

      if (this.userCount === this.users.length) {
        this.userCount = 3;
        return;
      }
      if (this.userCount > this.users.length) return;
      this.userCount = this.users.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.cur-pointer {
  cursor: pointer;
}
.valid-form {
  color: $error;
  font-weight: bold;
  font-size: 12px;
}
.inactive {
  color: $error;
}
.active {
  color: $success;
}
.preview {
  width: 100%;
  max-height: 248px;
  object-fit: cover;
  align-items: center;
  padding: 16px;
}
#edit-article-image {
  display: none;
}
.img-container {
  position: relative;
  .edit-img-btn {
    position: absolute;
    top: 24px;
    right: 24px;
    background-color: $white;
    padding: 10px 14px;
    border-radius: 50px;
  }
}

.article-img {
  img {
    display: flex;
    width: 100%;
    max-height: 248px;
    border-radius: 20px;
    object-fit: cover;
    align-items: center;
  }
}
.new-article-card {
  background-color: $white;
  padding: 56px;
  border-radius: 20px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
}

.btn-area {
  gap: 10px;
}
::v-deep .v-dialog {
  border-radius: 30px;
}
.set-bg-otp {
  background-color: $white;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  padding: 20px;

  @media (min-width: 1440px) {
    padding: 40px;
  }
}
.font-orange {
  color: $orange-dark;
}
.input-area {
  p {
    font-size: 14px;
    margin-bottom: 4px;
    span {
      color: $error;
      font-size: 14px;
      @media (min-width: 1440px) {
        font-size: 16px;
      }
    }
    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }
  input {
    width: 100%;
    background-color: $light;
    padding: 7px 20px;
    font-size: 14px;
    border-radius: 50px;
    @media (min-width: 1440px) {
      font-size: 16px;
      padding: 13px 20px;
    }
  }
  textarea {
    width: 100%;
    min-height: 152px;
    background-color: $light;
    padding: 16px;
    font-size: 14px;
    border-radius: 10px;
    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }
  textarea::placeholder {
    font-size: 14px;
    color: $gray;
    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }
}
.upload-image {
  cursor: pointer;
  position: relative;
  min-height: 248px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23333' stroke-width='1' stroke-dasharray='3' stroke-dashoffset='22' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 8px;
  background-size: 100%;
  .icon-upload {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p {
      font-size: 12px;
      span {
        text-decoration: underline;
        color: $orange-dark !important;
        font-weight: bold;
      }
    }
  }
}
.footer-btn {
  font-size: 16px;
  padding: 8px;
  color: $error;
  border-radius: 50px;
  border: 1px solid $error;
  background-color: $white;
  &:hover {
    background-color: $error;
    color: $white;
  }
}
.card-block-user {
  background-color: $white;
  padding: 24px;
  gap: 16px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  justify-content: center;
  text-align: center;
  .full-name {
    font-size: 20px;
  }

  i {
    font-size: 42px;
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
    justify-content: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 8px;
      max-width: 100%;
      object-fit: cover;
      align-items: center;
    }
  }
  .name-article-bottom {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: flex-end;
  }
  .icon-article {
    cursor: pointer;
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
.search-area {
  background-color: $white;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  padding: 16px;
  input {
    width: 100%;
    outline: none;
  }
  i {
    font-size: 16px;
  }
  input::placeholder {
    font-size: 18px;
    color: $gray;
  }
}
.card-block-account {
  background-color: $white;
  padding: 24px;
  gap: 16px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  justify-content: center;
  .full-name {
    font-size: 20px;
  }
  .email {
    color: $gray;
  }

  i {
    font-size: 42px;
  }
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
.gender-icon-male {
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: $white;
  border-radius: 50%;
  padding: 6px;
  z-index: 0;
  i {
    display: flex;
    justify-content: center;
    font-size: 16px;
    color: #13b8ff;
  }
}
.gender-icon {
  position: absolute;
  z-index: 0;
  top: 5%;
  right: 5%;
  background-color: $white;
  border-radius: 50%;
  padding: 6px;
  i {
    display: flex;
    justify-content: center;
    font-size: 16px;
    color: #ff90e0;
  }
}
.manage-more {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    display: flex;
  }
}
.see-more {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  color: $purple-dark;
  i {
    display: flex;
  }
  &:hover {
    color: $purple;
  }
}
.read-articles {
  color: $orange;
}

.card-block {
  background: $white;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  .thumbnail {
    overflow: hidden;
    line-height: 0;
    img {
      max-width: 100%;

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
    padding: 22px;
    .intro-content-card {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  &:hover {
    .card-title {
      color: $dark;
    }
  }
}
.title {
  font-size: 24px !important;
  display: flex;
  gap: 15px;
}
.dashboard-bar {
  background-color: $purple-light;
  border-radius: 10px;
  font-size: 24px;
}
.bar-block {
  cursor: pointer;
  &:hover {
    border-radius: 10px;
    color: $purple-dark;
  }
}

.head-title {
  font-size: 36px;
}
@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>
