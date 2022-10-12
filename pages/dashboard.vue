<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" align-self="center">
          <!-- <div>
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
                  <div class="manage-more">
                    จัดการบทความ
                    <i class="fi fi-rr-arrow-small-right"></i>
                  </div>
                </div>
                <div class="mt-4">
                  <v-row justify="center">
                    <v-col
                      v-for="i in 3"
                      :key="i"
                      cols="12"
                      sm="4"
                      md="4"
                      lg="4"
                      xl="4"
                      align-self="center"
                    >
                      <div class="card-block">
                        <div class="thumbnail">
                          <img src="@/assets/imgs/img-thumbnail.jpg" alt="" />
                        </div>
                        <div class="card-title">
                          <v-row justify="center">
                            <v-col cols="12" class="pb-lg-3 pb-sm-3">
                              <div>
                                <h2 class="h4">Name</h2>
                                <p class="mb-0">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Velit enim id hendrerit velit
                                  egestas cum quam.
                                </p>
                                <v-row>
                                  <v-col cols="12" class="d-flex mt-1">
                                    <h6 class="read-articles ml-1 mt-1">
                                      อ่านบทความ >>
                                    </h6>
                                  </v-col>
                                </v-row>
                              </div>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="see-more font-weight-bold">
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
                  <div class="manage-more">
                    จัดการโพสต์หาบ้าน
                    <i class="fi fi-rr-arrow-small-right"></i>
                  </div>
                </div>
                <div class="mt-4">
                  <v-row justify="center">
                    <v-col
                      v-for="i in 3"
                      :key="i"
                      cols="12"
                      sm="4"
                      md="4"
                      lg="4"
                      xl="4"
                      align-self="center"
                    >
                      <div class="card-block">
                        <div class="thumbnail">
                          <img src="@/assets/imgs/img-thumbnail.jpg" alt="" />
                        </div>
                        <div class="card-title">
                          <v-row justify="center">
                            <v-col cols="12" class="pb-lg-3 pb-sm-3">
                              <div>
                                <h2 class="h4">Name</h2>
                                <p class="mb-0 location">
                                  <i class="fi fi-rr-marker"></i>
                                  Location
                                </p>
                              </div>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="see-more font-weight-bold">
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
                  <div class="manage-more">
                    จัดการบัญชีผู้ใช้
                    <i class="fi fi-rr-arrow-small-right"></i>
                  </div>
                </div>
                <div class="mt-4">
                  <v-row justify="center">
                    <v-col
                      v-for="i in 3"
                      :key="i"
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
                          <p class="full-name mb-0">Firstname Lastname</p>
                          <p class="email mb-0">example@gmail.com</p>
                        </div>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="see-more font-weight-bold">
                        ดูทั้งหมด <i class="fi fi-rr-angle-small-down"></i>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </div> -->

          <div>
            <div class="head-title font-weight-bold">Article Posts</div>
            <div class="mt-4">
              <v-row justify="center">
                <v-col cols="9">
                  <div class="search-area d-flex">
                    <i class="fi fi-rr-search mr-2"></i>
                    <input type="text" placeholder="ค้นหาชื่อบทความ..." />
                  </div>
                </v-col>
                <v-col cols="3">
                  <base-button @click="newArticle" :fillSearch="true">
                    สร้างบทความใหม่
                  </base-button>
                </v-col>
              </v-row>
            </div>
            <div class="mt-11">
              <h2>บทความทั้งหมด</h2>
              <div v-for="i in 5" :key="i" class="card-article mt-4">
                <v-row>
                  <v-col cols="4">
                    <div class="name-article-header">
                      <img src="@/assets/imgs/img-thumbnail.jpg" alt="" />
                      ชื่อบทความ
                    </div>
                  </v-col>
                  <v-col cols="6" class="name-article-header">
                    <div>dd/mm/yyyy</div>
                  </v-col>
                  <v-col cols="2" class="name-article-bottom">
                    <div class="icon-article">
                      <i class="fi fi-rr-pencil"></i>
                      <i class="fi fi-rr-trash trash"></i>
                    </div>
                  </v-col>
                  <!-- <card-dialog :dialog="dialog">
                    <template slot="content">
                      <p>ชื่อบทความ*</p>
                    </template>
                  </card-dialog> -->
                </v-row>
              </div>
            </div>
          </div>

          <!-- <div>
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
              <div v-for="i in 5" :key="i" class="card-article mt-4">
                <v-row>
                  <v-col>
                    <div class="name-article-header">
                      <img src="@/assets/imgs/img-thumbnail.jpg" alt="" />
                      ชื่อโพสต์
                    </div>
                  </v-col>
                  <v-col class="name-article">
                    <div>dd/mm/yyyy</div>
                  </v-col>
                  <v-col class="name-article">
                    <div>ชื่อผู้โพสต์ นามสกุล</div>
                  </v-col>
                  <v-col class="name-article">
                    <div>รับเลี้ยงแล้ว</div>
                  </v-col>
                  <v-col class="name-article-bottom">
                    <div class="icon-article">
                      <i class="fi fi-rr-trash trash"></i>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div> -->

          <!-- <div>
            <div class="head-title font-weight-bold">Users</div>
            <div class="mt-4">
              <v-row>
                <v-col cols="12">
                  <div class="search-area d-flex">
                    <i class="fi fi-rr-search mr-2"></i>
                    <input type="text" placeholder="ค้นหาชื่อบัญชี..." />
                  </div>
                </v-col>
              </v-row>
            </div>
            <div class="mt-11">
              <h2>บัญชีผู้ใช้ทั้งหมด</h2>
              <div class="mt-4">
                <v-row justify="center">
                  <v-col
                    v-for="i in 3"
                    :key="i"
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
                          Firstname Lastname
                        </p>
                        <p class="mb-0">example@gmail.com</p>
                        <p class="mb-0">0812345678</p>
                        <p class="mb-0">
                          กรุงเทพมหานคร, บางมด, ประชาอุทิศ, 10140
                        </p>
                      </div>
                      <div class="mt-4 footer-btn font-weight-bold">
                        ลบบัญชีผู้ใช้
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div> -->
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import BaseButton from "../components/punmaew/components/BaseButton.vue";
import CardDialog from "../components/punmaew/components/CardDialog.vue";
export default {
  components: { BaseButton, CardDialog },
  layout: "menu",
  data() {
    return {
      tabs: [
        { id: 1, name: "บทความ" },
        { id: 2, name: "โพสต์หาบ้าน" },
        { id: 3, name: "บัญชีผู้ใช้" },
      ],
      selectTabId: 1,
      dialog: false,
    };
  },
  methods: {
    selectTabs(refName) {
      this.$refs[refName].scrollIntoView({ behavior: "smooth" });

      // this.selectTabId = item.id;
    },
    newArticle() {
      this.dialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-btn {
  font-size: 16px;
  padding: 8px;
  color: $error;
  border-radius: 50px;
  border: 1px solid $error;
  background-color: $white;
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
  // margin-top: 16px;
  background-color: $white;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  padding: 16px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    display: flex;
  }
}
.see-more {
  display: flex;
  justify-content: center;
  align-items: center;
  // color: $purple;
  color: $purple-dark;
  i {
    display: flex;
  }
  &:hover {
    // color: $purple-dark;
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
    }
  }

  .card-title {
    padding: 22px;
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
  // .bar-block {
  //   // border-bottom: 3px solid red;
  // }
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
