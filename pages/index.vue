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
                    Web Application สำหรับช่วยเหลือน้องแมวไร้บ้าน
                  </p>
                </div>

                <adopt-btn-group>
                  <template slot="finderHome">
                    <button @click="finderHome" class="adoption-btn">
                      <img src="@/assets/imgs/icon-cat.svg" alt="finderHome" />
                      <span>หาบ้านให้แมว</span>
                    </button>
                  </template>
                  <template slot="adoptCat">
                    <button @click="adoptCat" class="adoption-btn">
                      <img src="@/assets/imgs/icon-cat2.svg" alt="adoptCat" />
                      <span>รับเลี้ยงแมว</span>
                    </button>
                  </template>
                </adopt-btn-group>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <!-- <div class="header-img d-none d-lg-block">
        <img src="@/assets/imgs/header-landing.svg" alt="" />
      </div> -->
    </section>

    <punmaew-banner :ordersm="false" :color="true">
      <template slot="img-banner">
        <img src="@/assets/imgs/banner.png" alt="" />
      </template>
      <template slot="content-banner">
        <div>
          <p class="text-center text-sm-left desc-banner mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
          </p>

          <base-button
            :fillSearch="true"
            class="d-none d-sm-flex mt-4 btn-banner"
          >
            <img src="@/assets/imgs/icon-search.svg" alt="" />
            เริ่มค้นหาแมวในอุดมคติ
          </base-button>
        </div>
      </template>
      <template slot="details-other">
        <v-col
          cols="10"
          align-self="center"
          class="pt-0 d-sm-none d-md-none d-lg-none d-xl-none"
        >
          <base-button :fillSearch="true">
            <img src="@/assets/imgs/icon-search.svg" alt="" />
            เริ่มค้นหาแมวในอุดมคติ
          </base-button>
        </v-col>
      </template>
    </punmaew-banner>
    <PunmaewIndex class="mt-6" />
    <punmaew-banner :color="false" :ordersm="true">
      <template slot="img-banner">
        <img src="@/assets/imgs/banner2.png" alt="" />
      </template>
      <template slot="content-banner">
        <div>
          <v-row justify="center" class="banner-set-row">
            <v-col cols="12" lg="10" align-self="center" class="pt-0">
              <adopt-btn-group>
                <template slot="finderHome">
                  <button @click="finderHome" class="adoption-btn">
                    <img src="@/assets/imgs/icon-cat.svg" alt="finderHome" />
                    <span>หาบ้านให้แมว</span>
                  </button>
                </template>
                <template slot="adoptCat">
                  <button @click="adoptCat" class="adoption-btn">
                    <img src="@/assets/imgs/icon-cat2.svg" alt="adoptCat" />
                    <span>รับเลี้ยงแมว</span>
                  </button>
                </template>
              </adopt-btn-group>
            </v-col>
          </v-row>
        </div>
      </template>
    </punmaew-banner>
  </div>
</template>

<script>
import PunmaewIndex from "../components/punmaew/sections/PunmaewIndex.vue";
import PunmaewBanner from "../components/punmaew/elements/PunmaewBanner.vue";
import BaseButton from "../components/punmaew/components/BaseButton.vue";
import AdoptBtnGroup from "../components/punmaew/components/AdoptBtnGroup.vue";
// import PunmaewBanner2 from "../components/punmaew/elements/PunmaewBanner2.vue";
export default {
  components: { PunmaewBanner, PunmaewIndex, BaseButton, AdoptBtnGroup },
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
  .btn-banner {
    width: 55% !important;
  }
}

.desc-banner {
  font-size: 14px;
  @media (min-width: 1440px) {
    font-size: 18px;
  }
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
    padding: 34px 25px;
    font-size: 20px;
    img {
      width: 54px !important;
      margin-right: 15px;
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
