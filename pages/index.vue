<template>
  <div>
    <section class="pm-section">
      <v-container class="pm-container">
        <v-row justify="center">
          <v-col cols="12" align-self="center">
            <v-row justify="center">
              <v-col
                lg="6"
                md="6"
                sm="5"
                cols="12"
                order-sm="2"
                align-self="center"
              >
                <div class="pm-avatar">
                  <img src="@/assets/imgs/avatar.png" alt="" />
                </div>
              </v-col>
              <v-col lg="6" md="6" sm="5" cols="12">
                <div class="pm-title text-center text-sm-left">
                  <h1>PunMaew</h1>
                  <p class="pm-description">
                    Web Application <br />
                    สำหรับช่วยเหลือน้องแมวไร้บ้าน
                  </p>
                </div>

                <div class="btn-area">
                  <v-row no-gutters justify="center" class="btn-set-row">
                    <v-col align-self="center">
                      <button @click="finderHome" class="adoption-btn">
                        <img
                          src="@/assets/imgs/icon-cat.svg"
                          alt="finderHome"
                        />
                        <span>หาบ้านให้แมว</span>
                      </button>
                    </v-col>
                    <v-col align-self="center">
                      <button @click="adoptCat" class="adoption-btn">
                        <img src="@/assets/imgs/icon-cat2.svg" alt="adoptCat" />
                        <span>รับเลี้ยงแมว</span>
                      </button>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <!-- <div class="header-img d-none d-lg-block">
        <img src="@/assets/imgs/header-landing.svg" alt="" />
      </div> -->
    </section>

    <section class="pm-banner">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" lg="12" align-self="center">
            <div class="set-banner">
              <v-row justify="center">
                <v-col cols="4" sm="4" lg="3" class="pb-0" align-self="center">
                  <img src="@/assets/imgs/banner.png" alt="" />
                </v-col>
                <v-col cols="12" sm="6" lg="7" align-self="center" class="pt-0">
                  <p
                    class="text-center font-weight-bold text-sm-left mb-2 title-banner"
                  >
                    Lorem ipsum
                  </p>
                  <p class="text-center text-sm-left desc-banner mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit
                  </p>
                  <button class="btn-search d-none d-sm-flex mt-4">
                    <img src="@/assets/imgs/icon-search.svg" alt="" />
                    เริ่มค้นหาแมวในอุดมคติ
                  </button>
                </v-col>
                <v-col
                  cols="10"
                  align-self="center"
                  class="pt-0 d-sm-none d-md-none d-lg-none d-xl-none"
                >
                  <button class="btn-search">
                    <img src="@/assets/imgs/icon-search.svg" alt="" />
                    เริ่มค้นหาแมวในอุดมคติ
                  </button>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <PunmaewIndex class="pm-set-top" />
    <section class="pm-banner2 pm-set-top">
      <v-container>
        <v-row justify="center">
          <v-col
            cols="12"
            sm="10"
            lg="12"
            align-self="center"
            class="px-0 py-0"
          >
            <div class="set-banner2">
              <v-row justify="center">
                <v-col
                  order-sm="2"
                  cols="4"
                  sm="4"
                  lg="3"
                  class="pb-0"
                  align-self="center"
                >
                  <img src="@/assets/imgs/banner2.png" alt="" />
                </v-col>
                <v-col cols="12" sm="6" lg="7" align-self="center" class="pt-0">
                  <p
                    class="text-center font-weight-bold text-sm-left mb-2 title-banner"
                  >
                    Lorem ipsum
                  </p>
                  <div>
                    <v-row justify="center" class="banner-set-row">
                      <v-col cols="12" lg="10" align-self="center" class="pt-0">
                        <div class="btn-area">
                          <v-row
                            no-gutters
                            justify="center"
                            class="btn-set-row"
                          >
                            <v-col align-self="center">
                              <button @click="finderHome" class="adoption-btn">
                                <img
                                  src="@/assets/imgs/icon-cat.svg"
                                  alt="finderHome"
                                />
                                <span>หาบ้านให้แมว</span>
                              </button>
                            </v-col>
                            <v-col align-self="center">
                              <button @click="adoptCat" class="adoption-btn">
                                <img
                                  src="@/assets/imgs/icon-cat2.svg"
                                  alt="adoptCat"
                                />
                                <span>รับเลี้ยงแมว</span>
                              </button>
                            </v-col>
                          </v-row>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                  <!-- <button class="btn-search d-none d-sm-flex mt-4">
                    <img src="@/assets/imgs/icon-search.svg" alt="" />
                    เริ่มค้นหาแมวในอุดมคติ
                  </button> -->
                </v-col>
                <!-- <v-col
                  cols="10"
                  align-self="center"
                  class="pt-0 d-sm-none d-md-none d-lg-none d-xl-none"
                >
                  <button class="btn-search">
                    <img src="@/assets/imgs/icon-search.svg" alt="" />
                    เริ่มค้นหาแมวในอุดมคติ
                  </button>
                </v-col> -->
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import PunmaewIndex from "../components/punmaew/sections/PunmaewIndex.vue";
import PunmaewBanner from "../components/punmaew/elements/PunmaewBanner.vue";
import PunmaewBanner2 from "../components/punmaew/elements/PunmaewBanner2.vue";
export default {
  components: { PunmaewBanner, PunmaewIndex, PunmaewBanner2 },
  methods: {
    finderHome() {
      this.$router.push(`/finderHome`);
    },
    adoptCat() {
      this.$router.push(`/adoptCat`);
    },
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 1440px) {
  .banner-set-row {
    justify-content: flex-start !important;
  }
}
.title-banner {
  @media (min-width: 1440px) {
    font-size: 40px;
  }
}
.desc-banner {
  font-size: 14px;
  @media (min-width: 1440px) {
    font-size: 18px;
  }
}
.btn-set-row {
  gap: 10px;
  @media (min-width: 768px) {
    justify-content: left !important;
  }
  @media (min-width: 1440px) {
    gap: 30px;
  }
}
.btn-area {
  margin-top: 24px;
}
.adoption-btn {
  width: 100%;
  background: #ffffff;
  border: 1px solid $purple-dark;
  color: $purple-dark;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 15px 12px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 24px !important;
    margin-right: 1px;
  }
  @media (min-width: 1440px) {
    border: 2px solid $purple-dark;
    border-radius: 10px;
    padding: 34px 30px;
    font-size: 20px;
    img {
      width: 54px !important;
      margin-right: 15px;
    }
  }
}
.pm-banner2 {
  background-color: $purple-light;
  padding: 30px 20px;

  .set-banner2 {
    background-color: $white;
    padding: 18px 9px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;

    img {
      width: 100%;
    }
  }
}
.pm-set-top {
  margin-top: 64px;
}
.btn-search {
  background: linear-gradient(180deg, #fdc454 0%, #ff9474 100%);
  box-shadow: 0px 4px 15px #ffcab4;
  border-radius: 50px;
  width: 100%;
  color: $white;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  justify-content: center;
  img {
    width: 15px !important;
    margin-right: 5px;
  }
  @media (min-width: 1440px) {
    width: 55%;
    padding-top: 14px;
    padding-bottom: 14px;
    font-size: 18px;
    img {
      width: 20px !important;
      margin-right: 12px;
    }
  }
}
.pm-banner {
  background-color: $yellow-light;
  padding: 18px 8px;

  .set-banner {
    background-color: $white;
    padding: 18px 9px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;

    img {
      width: 100%;
    }
    @media (min-width: 768px) {
      padding: 32px 16px !important;
    }
    @media (min-width: 1440px) {
      padding: 40px 16px !important;
    }
  }
}

.header-img {
  position: absolute;
  z-index: 5;
  width: 100%;
  min-height: 100%;
  img {
    width: 100%;
  }
  @media (min-width: 1440px) {
    top: -8%;
  }
}
.pm-avatar {
  text-align: center;
  img {
    width: 100%;
  }
}
.pm-title {
  h1 {
    font-size: 32px;
    margin-bottom: 16px;
  }
  .pm-description {
    font-size: 16px;
    margin-bottom: 0px;
  }
  @media (min-width: 1440px) {
    > h1 {
      font-size: 72px;
    }
    > .pm-description {
      font-size: 20px;
    }
  }
}
.pm-section {
  position: relative;
  @media (min-width: 768px) {
    padding-top: 53px;
  }
  @media (min-width: 1440px) {
    padding-top: 107px;
  }
  .pm-container {
    position: relative;
    z-index: 10;
    margin-bottom: 48px;
  }
}
@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>
