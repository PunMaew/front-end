<template>
  <section class="pm-section">
    <v-container class="pm-container">
      <v-row justify="center">
        <v-col cols="12" align-self="center">
          <v-row justify="center" class="mt-10">
            <v-col cols="6" align-self="center">
              <div>
                <div class="pm-container">
                  <h1>PunMaew</h1>
                  <span class="name-th">(ปันแมว)</span>
                </div>
                <p class="pm-description">
                  Web Application สำหรับช่วยเหลือน้องแมวไร้บ้าน
                </p>
                <!-- <base-button class="btn-start">เริ่มต้นใช้งาน</base-button> -->
                <div>
                  <v-row justify="center">
                    <v-col cols="12" align-self="center">
                      <v-row justify="center">
                        <v-col cols="6" align-sel="center">
                          <button class="btn-adoption d-flex text-center">
                            <img
                              class="mr-3"
                              src="@/assets/imgs/icon-cat.svg"
                              alt=""
                            />

                            หาบ้านให้แมว
                          </button>
                        </v-col>
                        <v-col cols="6" align-self="center">
                          <button class="btn-adoption d-flex text-center">
                            <img
                              class="mr-3"
                              src="@/assets/imgs/icon-cat2.svg"
                              alt=""
                            />
                            รับเลี้ยงแมว
                          </button>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col cols="6" align-self="center">
              <div class="main-img">
                <img src="@/assets/imgs/avatar.png" alt="" width="540" />
              </div>
            </v-col>
            <!-- <div class="wave d-none d-md-block">
              <img src="@/assets/imgs/wave-header.svg" alt="" />
            </div> -->
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

<style lang="scss" scoped>
.adoption {
  margin-left: 30px;
}
.btn-adoption {
  padding: 34px 30px;
  background-color: $white;
  border: 2px solid $purple-dark;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 255px;
  color: $purple-dark;
  font-size: 20px;
  font-weight: bold;
  margin-top: 42px;
  align-items: center;
}
.main-img {
  position: relative;
  z-index: 20;
}
// .container {
//   position: relative;
// }
.pm-section {
  position: relative;
  background-color: $orange-light;
  margin-bottom: 262px;
  > .pm-container {
    margin-bottom: 230px;
  }
}
.wave {
  left: 50%;
  position: absolute;
  top: -10%;
  img {
    // animation: ckw 280s linear infinite;
  }
}
.btn-start {
  width: 255px;
  font-weight: bold;
  font-size: 24px;
  padding: 18px 63px;
  // background-color: $orange2;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
}
.pm-description {
  font-size: 20px;
}
.pm-container {
  display: flex;
  align-items: baseline;
  h1 {
    font-size: 72px;
    margin-right: 20px;
  }
  .name-th {
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
