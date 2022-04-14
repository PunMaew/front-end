<template>
  <section class="index-section">
    <v-container>
      <div>
        <v-row justify="center">
          <v-col cols="12" align-self="center">
            <h2 class="pm-title">น้องแมวรอการช่วยเหลือ</h2>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="4" align-self="center">
            <div class="card position-relative">
              <div class="thumbnail">
                <img src="" alt="" />
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
          <v-col cols="4" align-self="center">
            <div class="card position-relative">
              <div class="thumbnail">
                <img src="" alt="" />
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
          <v-col cols="4" align-self="center">
            <div class="card position-relative">
              <div class="thumbnail">
                <img src="" alt="" />
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
      <div>
        <v-row justify="center">
          <v-col cols="12" align-self="center">
            <h2 class="pm-title">บทความ</h2>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="4" align-self="center">
            <div class="card position-relative">
              <div class="thumbnail">
                <img src="" alt="" />
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
                          <!-- <v-icon class="icon">mdi-download</v-icon> -->
                          <h6 class="download-text ml-1 mt-1">อ่านบทความ >></h6>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-col>
          <v-col cols="4" align-self="center">
            <div class="card position-relative">
              <div class="thumbnail">
                <img src="" alt="" />
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
                          <!-- <v-icon class="icon">mdi-download</v-icon> -->
                          <h6 class="download-text ml-1 mt-1">อ่านบทความ >></h6>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-col>
          <v-col cols="4" align-self="center">
            <div class="card position-relative">
              <div class="thumbnail">
                <img src="" alt="" />
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
                          <!-- <v-icon class="icon">mdi-download</v-icon> -->
                          <h6 class="download-text ml-1 mt-1">อ่านบทความ >></h6>
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
.index-section {
  position: relative;
  z-index: 20;
}
.card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  // @include card-shadow;
  .thumbnail {
    overflow: hidden;
    line-height: 0;
  }
  img {
    transition: 0.3s all;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  @media (min-width: 768px) {
    img {
      width: 100%;
      object-fit: cover;
      align-items: center;
    }
  }
  .card-title {
    padding: 12px;
  }
  &:hover {
    .card-title {
      color: $dark;
    }
  }
}
.pm-title {
  font-size: 36px;
  font-weight: bold;
}
</style>
