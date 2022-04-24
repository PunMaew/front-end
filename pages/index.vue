<template>
  <v-app>
    <section class="pm-section">
      <v-container class="pm-container">
        <v-row justify="center">
          <v-col lg="6" md="6" sm="4" cols="12">
            <div class="pm-title text-center text-sm-left">
              <h1>PunMaew</h1>
              <p class="pm-description">
                Web Application สำหรับช่วยเหลือน้องแมวไร้บ้าน
              </p>
            </div>
            <div class="adoption-area">
              <v-row no-gutters justify="center" class="set-row-area">
                <v-col cols="10" md="5" align-self="center">
                  <button @click="finderHome" class="adoption-btn">
                    <img class="mr-3" src="@/assets/imgs/icon-cat.svg" alt="" />
                    หาบ้านให้แมว
                  </button>
                </v-col>
                <v-col cols="10" md="5" align-self="center">
                  <button @click="adoptCat" class="adoption-btn">
                    <img
                      class="mr-3"
                      src="@/assets/imgs/icon-cat2.svg"
                      alt=""
                    />
                    รับเลี้ยงแมว
                  </button>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col lg="6" md="6" sm="5" cols="12" align-self="center">
            <div class="pm-avatar">
              <img src="@/assets/imgs/avatar.png" alt="" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <div class="header-img d-none d-lg-block d-xl-none">
      <img src="@/assets/imgs/header-landing.svg" alt="" />
    </div>
    <PunmaewBanner class="set-pmBanner" />
    <PunmaewIndex />
    <PunmaewBanner2 />
  </v-app>
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
.set-pmBanner {
  margin-bottom: 131px;
}
.header-img {
  position: absolute;
  // top: -6.5%;
  top: -2.7%;
  width: 100%;
}
.pm-avatar {
  text-align: center;
  img {
    width: 256px;
    @media (min-width: 1440px) {
      width: 635px;
    }
  }
}
.adoption-area {
  @media (min-width: 768px) {
    .set-row-area {
      justify-content: flex-start !important;
    }
  }
  @media (min-width: 1024px) {
    .set-row-area {
      gap: 30px;
    }
  }

  .adoption-btn {
    margin-top: 19px;
    border: 2px solid $purple-dark;
    background-color: $white;
    color: $purple-dark;
    font-weight: bold;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 15px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 40px;
    }
    @media (min-width: 1024px) {
      width: 190px;
    }
    @media (min-width: 1440px) {
      width: 255px;
      border: 2px solid $purple-dark;
      border-radius: 10px;
      background-color: $white;
      color: $purple-dark;
      font-weight: bold;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      line-height: 26px;
      padding: 34px 30px;
      margin-top: 17px;
      img {
        width: 54px;
      }
    }
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
  z-index: 20;
  @media (min-width: 768px) {
    padding-top: 53px;
  }
  @media (min-width: 1440px) {
    padding-top: 107px;
  }
  .pm-container {
    margin-bottom: 230px;
  }
}
@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>
