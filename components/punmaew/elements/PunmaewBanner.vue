<template>
  <section class="set-bg-banner">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" xl="8" align-self="center">
          <v-row justify="center">
            <v-col cols="12" align-self="center">
              <div class="card-banner">
                <v-row justify="center" class="set-flex-row">
                  <v-col cols="12" sm="6" md="3" align-self="center">
                    <div>
                      <img
                        src="@/assets/imgs/banner.png"
                        alt="banner"
                        width="250"
                      />
                    </div>
                  </v-col>
                  <v-col cols="12" sm="6" md="7" align-self="center">
                    <h1 class="banner-title">Lorem ipsum</h1>
                    <p class="banner-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Velit
                    </p>
                    <button class="btn-search">
                      <img
                        class="mr-3"
                        src="@/assets/imgs/icon-search.svg"
                        alt=""
                      />
                      เริ่มค้นหาแมวในอุดมคติ
                    </button>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>

<style scoped lang="scss">
.banner-description {
  font-size: 14px;
}
.banner-title {
  font-size: 20px;
}
.btn-search {
  background: linear-gradient(180deg, #fdc454 0%, #ff9474 100%);
  box-shadow: 0px 4px 15px #ffcab4;
  border-radius: 50px;
  width: 100%;
  color: $white;
  padding: 10px 20px;
  font-weight: bold;
  letter-spacing: 1px;
  @media (min-width: 1440px) {
    padding: 14px 30px;
    width: 287px;
  }
}
.set-flex-row {
  justify-content: flex-start !important;
  display: flex;
}
.card-banner {
  background: $yellow-light;
  border-radius: 30px;
  margin-top: 40px;
  padding: 15px 15px;
  @media (min-width: 768px) {
    border-radius: 14px;
    padding: 30px 45px;
  }
  @media (min-width: 1024px) {
    border-radius: 16px;
    margin-top: 50px;
    padding: 40px 65px;
  }
}
.set-bg-banner {
  // position: absolute;
  // top: 650px;
  // left: 0%;
  margin-top: -173px;
  z-index: 20;
  width: 100%;
}
</style>
