<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" align-self="center">
          <v-row justify="center">
            <v-col cols="12" md="10" align-self="center">
              <div v-if="singleArticle._id" class="article-img">
                <img
                  :src="`${$config.articleURL}readFileId?id=${singleArticle._id}`"
                  alt=""
                />
              </div>
              <div class="mt-5">
                <v-row>
                  <v-col cols="12" md="1">
                    <div
                      class="d-none d-md-flex d-lg-flex d-xl-flex share text-center"
                    >
                      SHARE
                    </div>
                    <div
                      class="d-none d-md-flex d-lg-flex d-xl-flex share-hr mt-12 mb-4"
                    ></div>

                    <div
                      @click="shareFacebook"
                      class="d-none d-md-flex d-lg-flex d-xl-flex share-fb mt-12 text-center cur-pointer"
                    >
                      <img src="@/assets/imgs/f_logo.png" alt="" />
                    </div>
                  </v-col>
                  <v-col cols="12" md="11">
                    <div class="title">
                      <h2>{{ singleArticle.title }}</h2>
                      <p class="mb-0 post-by">
                        โพสต์โดย Admin Punmaew |
                        {{ convertDateTime(singleArticle.createdAt) }}
                      </p>
                    </div>
                    <div class="mt-12 content">
                      <p
                        v-for="i in singleArticle.details"
                        :key="i._id"
                        class="mb-14"
                      >
                        {{ i.text }}
                      </p>
                    </div>
                    <div class="source">ที่มา: {{ singleArticle.source }}</div>
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
export default {
  auth: false,
  head() {
    return {
      title: this.singleArticle.titlee,
      meta: [
        {
          hid: `og:image`,
          property: "og:image",
          content: "/fb-thumbnail.jpg",
        },
      ],
    };
  },
  props: {
    isSingle: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      singleArticle: {},
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const res = await this.$axios.get(
          `${this.$config.articleURL}oneArticle?id=${this.$route.query.id}`
        );
        this.singleArticle = res.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    shareFacebook() {
      const shareUrl = `https://punmaew.sit.kmutt.ac.th/singleArticle?isSingle=true&id=${this.singleArticle._id}`;

      try {
        FB.init({
          appId: "537211941604055",
          autoLogAppEvents: true,
          xfbml: true,
          version: "v10.0",
        });
        FB.ui(
          {
            method: "share",
            action_type: "og.shares",
            action_properties: JSON.stringify({
              object: {
                "og:url": shareUrl,

                "og.image": require(`@/static/fb-thumbnail.jpg`),
                "og:title":
                  "Punmaew - Web Application สำหรับช่วยเหลือน้องแมวไร้บ้าน",
                "og:description": "บทความเกี่ยวกับแมว",
              },
            }),
          },
          (response) => {
            console.log("share response", response);
          }
        );
      } catch (error) {
        console.log(error);
        this.$swal({
          toast: true,
          title: "ไม่สามารถแชร์ FB ได้",
          icon: "warning",
          timer: 2000,
          showConfirmButton: false,
          position: "top-end",
          timerProgressBar: true,
        });
      }
    },
    convertDateTime(d) {
      let newDate = new Date(d);
      let year = newDate.getFullYear();
      let month = newDate.getMonth() + 1;
      let dt = newDate.getDate();
      if (dt < 10) {
        dt = "0" + dt;
      }
      if (month < 10) {
        month = "0" + month;
      }
      const newFormat = dt + "-" + month + "-" + year;
      return newFormat;
    },
  },
};
</script>

<style lang="scss" scoped>
.cur-pointer {
  cursor: pointer;
}
.source {
  color: $gray;
}
.share-hr {
  border: 1px solid $gray;
  transform: rotate(90deg);
}
.share-fb {
  img {
    width: 35px;
  }
}
.share {
  font-size: 14px;
  color: $gray;
}
.content {
  p {
    font-size: 18px;
    line-height: 32px;
  }
}
.title {
  h2 {
    line-height: 44px;
    font-size: 24px;
    @media (min-width: 1440px) {
      line-height: 64px;
      font-size: 36px;
    }
  }
  .post-by {
    font-size: 14px;
    color: $gray;
    margin-top: 4px;
  }
}
.article-img {
  margin-top: 71px;
  img {
    width: 100%;
    max-height: 450px;
    object-fit: cover;
  }
}
@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>
