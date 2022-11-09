<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" align-self="center">
          <v-row justify="center">
            <v-col cols="10" align-self="center">
              <div class="article-img">
                <img
                  :src="`${$config.articleURL}readFileId?id=${singleArticle._id}`"
                  alt=""
                />
                <!-- <img src="@/assets/imgs/img-thumbnail.jpg" alt="" /> -->
              </div>
              <div class="mt-5">
                <v-row>
                  <v-col cols="1">
                    <div class="share">SHARE</div>
                  </v-col>
                  <v-col cols="11">
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
  props: {
    isSingle: {
      type: Boolean,
      default: false,
    },
  },
  async asyncData({ $axios, $config, query }) {
    try {
      const res = await $axios.get(
        `${$config.articleURL}oneArticle?id=${query.id}`
      );
      // console.log(res.data.data);
      return {
        singleArticle: res.data.data,
      };
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      singleArticle: {},
    };
  },
  computed: {
    getDetailsArticle() {},
  },
  methods: {
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
    line-height: 64px;
    font-size: 36px;
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
