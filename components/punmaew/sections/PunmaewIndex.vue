<template>
  <section>
    <v-container>
      <div>
        <v-row justify="center">
          <v-col cols="12" align-self="center">
            <h2 class="pm-title">น้องแมวรอการช่วยเหลือ</h2>
          </v-col>
        </v-row>
        <v-row>
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
            <div v-if="posts.length > 0" class="card position-relative">
              <div :class="[index == 2 ? 'backdrop' : '']"></div>
              <button
                @click="adoptCat"
                v-if="index === 2"
                :class="[index == 2 ? 'more' : '']"
              >
                ดูทั้งหมด
              </button>
              <div
                v-if="post.statusbar === 'รับเลี้ยงสำเร็จ'"
                class="status-adopt-success"
              >
                รับเลี้ยงแล้ว
              </div>
              <div v-else class="status-adopt">ยังไม่ถูกรับเลี้ยง</div>

              <div class="thumbnail">
                <img
                  :src="`${$config.findHome}readFileIdFindHome?id=${post._id}`"
                  alt=""
                />
                <!-- <img src="@/assets/imgs/img-thumbnail.jpg" alt="" /> -->
              </div>
              <div class="card-title">
                <v-row justify="center">
                  <v-col cols="12" class="pb-lg-3 pb-sm-3">
                    <div>
                      <h2 class="h4">{{ post.generalInfo.catName }}</h2>
                      <p class="mb-0 location">
                        <i class="fi fi-rr-marker"></i>
                        {{
                          "จังหวัด" +
                          post.generalInfo.location.province +
                          " " +
                          "เขต" +
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
        <v-row>
          <v-col
            v-for="(i, index) in articles"
            :key="i._id"
            cols="12"
            sm="4"
            md="4"
            lg="4"
            xl="4"
            align-self="center"
          >
            <div v-if="articles.length > 0" class="card position-relative">
              <div :class="[index == 2 ? 'backdrop' : '']"></div>
              <button
                @click="article"
                v-if="index === 2"
                :class="[index == 2 ? 'more' : '']"
              >
                ดูทั้งหมด
              </button>
              <div class="thumbnail">
                <img
                  :src="`${$config.articleURL}readFileId?id=${i._id}`"
                  alt=""
                />
              </div>
              <div class="card-title">
                <v-row justify="center">
                  <v-col cols="12" class="pb-lg-3 pb-sm-3">
                    <div>
                      <h2 class="h4">{{ i.title }}</h2>
                      <p class="mb-0 intro-content-card">
                        {{ i.details[0].text }}
                      </p>

                      <div class="d-flex mt-2">
                        <h6 class="read-articles">
                          อ่านบทความ
                          <i class="d-flex fi fi-rr-arrow-right"></i>
                        </h6>
                      </div>
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
  data() {
    return {
      posts: [],
      articles: [],
    };
  },
  async created() {
    await this.fetchData();
  },

  methods: {
    async fetchData() {
      try {
        const res = await this.$axios.get(`${this.$config.findHome}RandomPost`);

        this.posts = res.data;

        const article = await this.$axios.get(
          `${this.$config.articleURL}randomPostArticle`
        );

        this.articles = article.data;
      } catch (error) {
        console.log(error);
      }
    },
    adoptCat() {
      this.$router.push(`/adoptCat`);
    },
    article() {
      this.$router.push(`/articles`);
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
.status-adopt-success {
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: $success;
  border-radius: 50px;
  padding: 8px 12px;
  font-size: 14px;
  color: $white;
}
.status-adopt {
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: $error;
  border-radius: 50px;
  padding: 8px 12px;
  font-size: 14px;
  color: $white;
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
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
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
      height: 200px;
      width: 100%;
      object-fit: cover;
      transition: 0.3s all;
      &:hover {
        transform: scale(1.1);
      }
      @media (min-width: 768px) {
        object-fit: cover;
        align-items: center;
      }
      @media (min-width: 1024px) {
        width: 100%;
        height: 260px;
      }
    }
  }

  .card-title {
    padding: 22px;
    .intro-content-card {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
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
