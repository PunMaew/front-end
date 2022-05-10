<template>
  <section>
    <v-container>
      <div>
        <v-row justify="center">
          <v-col cols="12" align-self="center">
            <h2 class="pm-title">น้องแมวรอการช่วยเหลือ</h2>
          </v-col>
        </v-row>
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
            :class="[i == 3 ? 'backDrop' : '']"
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
      <div class="pm-articles">
        <v-row justify="center">
          <v-col cols="12" align-self="center">
            <h2 class="pm-title">บทความเกี่ยวกับแมว</h2>
          </v-col>
        </v-row>
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
            :class="[i == 3 ? 'backDrop' : '']"
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
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Velit enim id hendrerit velit egestas cum quam.
                      </p>
                      <v-row>
                        <v-col cols="12 d-flex mt-1">
                          <h6 class="read-articles ml-1 mt-1">อ่านบทความ >></h6>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.read-articles {
  color: $orange;
}
.pm-articles {
  margin-top: 64px;
  // margin-bottom: 115px;
  // margin-top: 139px;
}
.backDrop {
  filter: brightness(0.5);
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
.pm-title {
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 36px;
  }
}
</style>
