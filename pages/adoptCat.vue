<template>
  <section>
    <punmaew-banner :color="true" :ordersm="false" class="mt-0">
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

    <div class="mt-6">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" align-self="center">
            <!--  -->
            <v-row class="d-md-none d-lg-none d-xl-none">
              <v-col cols="12" align-self="center">
                <h2>รับเลี้ยงแมว</h2>
              </v-col>
              <v-col cols="12" align-self="center">
                <div>
                  <template>
                    <v-row no-gutters align-self="center" class="gap-drop-down">
                      <v-col class="d-flex">
                        <v-select
                          :items="items"
                          label="ตัวกรอง"
                          outlined
                        ></v-select>
                      </v-col>
                      <v-col class="d-flex">
                        <v-select
                          :items="items"
                          label="เรียงตาม"
                          outlined
                        ></v-select>
                      </v-col>
                    </v-row>
                  </template>
                </div>
              </v-col>
              <v-col cols="12" align-self="center">
                <div>
                  <v-row>
                    <v-col
                      v-for="i in 10"
                      :key="i"
                      cols="12"
                      sm="4"
                      md="4"
                      lg="4"
                      xl="4"
                      align-self="center"
                    >
                      <div class="card position-relative">
                        <div class="thumbnail">
                          <img src="@/assets/imgs/img-thumbnail.jpg" alt="" />
                        </div>
                        <div class="card-title">
                          <v-row justify="center">
                            <v-col cols="12" class="pb-lg-3 pb-sm-3">
                              <div>
                                <h2 class="h4">Name</h2>
                                <p class="mb-0">Location</p>
                              </div>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
              <!--  -->
            </v-row>
            <!--  -->
            <v-row justify="center" class="d-none d-md-flex">
              <v-col cols="3">
                <div>
                  <p><b>ค้นหาจากพิกัด</b></p>
                  <div>
                    <div class="iput-search d-flex">
                      <i class="fi fi-rr-search mr-2"></i>
                      <input placeholder="กรุณากรอกจังหวัด" type="text" />
                    </div>
                    <template>
                      <v-container>
                        <div class="scroll-bar">
                          <v-checkbox
                            v-for="i in 10"
                            :key="i"
                            label="Lorem ipsum"
                            hide-details
                          ></v-checkbox>
                        </div>
                        <div class="line"></div>
                        <div class="lorem">
                          <p>Lorem ipsum</p>
                          <v-checkbox
                            v-for="i in 5"
                            :key="i"
                            label="Lorem ipsum"
                            hide-details
                          ></v-checkbox>
                        </div>
                      </v-container>
                    </template>
                  </div>
                </div>
              </v-col>
              <v-col cols="9">
                <div>
                  <v-row no-gutters justify="center">
                    <v-col cols="10">
                      <div><h2>รับเลี้ยงแมว</h2></div>
                    </v-col>
                    <v-col cols="2">
                      <template>
                        <v-row align="center">
                          <v-col class="d-flex">
                            <v-select
                              label="เรียงตาม"
                              :items="items"
                              outlined
                            ></v-select>
                          </v-col>
                        </v-row>
                      </template>
                    </v-col>
                  </v-row>
                </div>
                <v-row>
                  <v-col
                    v-for="i in 10"
                    :key="i"
                    cols="12"
                    sm="4"
                    md="4"
                    lg="4"
                    xl="4"
                    align-self="center"
                  >
                    <div class="card position-relative">
                      <div class="thumbnail">
                        <img src="@/assets/imgs/img-thumbnail.jpg" alt="" />
                      </div>
                      <div class="card-title">
                        <v-row justify="center">
                          <v-col cols="12" class="pb-lg-3 pb-sm-3">
                            <div>
                              <h2 class="h4">Name</h2>
                              <p class="mb-0">Location</p>
                            </div>
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
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
  </section>
</template>

<script>
import AdoptBtnGroup from "../components/punmaew/components/AdoptBtnGroup.vue";
import BaseButton from "../components/punmaew/components/BaseButton.vue";
import PunmaewBanner from "../components/punmaew/elements/PunmaewBanner.vue";
import PunmaewAllAdoption from "../components/punmaew/sections/PunmaewAllAdoption.vue";
export default {
  data() {
    return {
      items: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },
  methods: {},
  components: { PunmaewAllAdoption, PunmaewBanner, BaseButton, AdoptBtnGroup },
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
.set-test {
  img {
    width: 100%;
  }
}
.bg {
  background-color: #000000;
}
.card {
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
::v-deep .v-select > .v-input__control > .v-input__slot {
  padding: 0 30px !important;
}
.lorem {
  margin-top: 30px;
}
.line {
  margin-top: 30px;
  width: 100%;
  border: 1px solid $light;
}
.scroll-bar {
  max-height: 165px;
  overflow-y: scroll;
}
::v-deep .v-input--selection-controls.v-input {
  padding-top: 0px;
  margin-top: 9px;
}
.iput-search {
  background-color: $light;
  border-radius: 50px;
  padding: 11px 14px;
  input {
    width: 100%;
  }
}
::v-deep .v-input__slot {
  border-radius: 50px;
  margin-bottom: 0px;
}
.gap-drop-down {
  gap: 10px;
}
// .pm-set-top {
//   margin-top: 48px;
// }
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
@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>
