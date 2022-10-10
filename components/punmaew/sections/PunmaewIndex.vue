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
            v-for="(post, index) in posts"
            :key="post._id"
            cols="12"
            sm="4"
            md="4"
            lg="4"
            xl="4"
            align-self="center"
          >
            <div class="card position-relative">
              <div :class="[index == 2 ? 'backdrop' : '']"></div>
              <button
                @click="adoptCat"
                v-if="index === 2"
                :class="[index == 2 ? 'more' : '']"
              >
                ดูทั้งหมด
              </button>
              <div
                v-if="post.generalInfo.gender === 'เพศเมีย'"
                class="gender-icon"
              >
                <i class="fi fi-rr-venus"></i>
              </div>
              <div v-else class="gender-icon-male">
                <i class="fi fi-rr-mars"></i>
              </div>
              <div class="thumbnail">
                <img src="@/assets/imgs/img-thumbnail.jpg" alt="" />
              </div>
              <div class="card-title">
                <v-row justify="center">
                  <v-col cols="12" class="pb-lg-3 pb-sm-3">
                    <div>
                      <h2 class="h4">{{ post.generalInfo.catName }}</h2>
                      <p class="mb-0 location">
                        <i class="fi fi-rr-marker"></i>
                        {{
                          post.generalInfo.location.province +
                          " " +
                          post.generalInfo.location.district
                        }}
                      </p>
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
          >
            <div class="card position-relative">
              <div :class="[i == 3 ? 'backdrop' : '']"></div>
              <button v-if="i === 3" :class="[i == 3 ? 'more' : '']">
                ดูทั้งหมด
              </button>
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
                        <v-col cols="12" class="d-flex mt-1">
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
export default {
  props: {
    posts: {
      type: Array,
    },
  },

  methods: {
    adoptCat() {
      this.$router.push(`/adoptCat`);
    },
  },
};
</script>

<style lang="scss" scoped>
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
.backdrop {
  background: #000000;
  z-index: 10;
  opacity: 0.5;
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.more {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: $white;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid $white;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 32px 8px 32px;
  &:hover {
    background-color: $white;
    opacity: 0.8;
    color: $dark;
  }
  @media (min-width: 1440px) {
    font-size: 22px;
    padding: 12px 44px 13px 45px;
  }
}
.read-articles {
  color: $orange;
}
.pm-articles {
  margin-top: 64px;
}
.card {
  position: relative;
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
  text-align: left;
  @media (min-width: 1024px) {
    font-size: 36px;
  }
}
@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>
