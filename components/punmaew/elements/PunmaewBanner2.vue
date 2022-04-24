<template>
  <section class="set-bg-banner">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" xl="8" align-self="center">
          <v-row justify="center">
            <v-col cols="12" align-self="center" class="set-col-banner">
              <div class="card-banner">
                <v-row justify="center">
                  <v-col cols="12" sm="5" md="7" align-self="center">
                    <h2>PunMaew</h2>
                    <div class="adoption-area">
                      <v-row no-gutters justify="center" class="set-row-area">
                        <v-col cols="10" md="5" align-self="center">
                          <button class="adoption-btn">
                            <img
                              class="mr-3"
                              src="@/assets/imgs/icon-cat.svg"
                              alt=""
                            />
                            หาบ้านให้แมว
                          </button>
                        </v-col>
                        <v-col cols="10" md="5" align-self="center">
                          <button class="adoption-btn">
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
                  <v-col cols="12" sm="5" md="3" align-self="center">
                    <div class="banner-img">
                      <img src="@/assets/imgs/banner2.png" alt="banner" />
                    </div>
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
export default {};
</script>

<style lang="scss" scoped>
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
    @media (min-width: 1440px) {
      width: 100%;
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
.banner-img {
  img {
    width: 224px;
  }
}
.set-col-banner {
  padding-top: 50px;
  padding-bottom: 50px;

  .card-banner {
    text-align: center;
    background-color: $white;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    width: 100%;
    padding: 15px;

    h2 {
      font-size: 20px;
      @media (min-width: 768px) {
        text-align: left;
      }
      @media (min-width: 1024px) {
        font-size: 40px;
      }
    }
    @media (min-width: 1440px) {
      margin: 100px 0px;
    }
  }
}
.set-bg-banner {
  background-color: $purple-light;
}
</style>
