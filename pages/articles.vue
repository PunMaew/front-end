<template>
  <section>
    <punmaew-banner :color="true" :ordersm="false" class="mt-0">
      <template slot="img-banner">
        <img src="@/assets/imgs/banner.png" alt="" />
      </template>
      <template slot="title-banner">จับคู่แมวตัวโปรดของคุณ</template>
      <template slot="content-banner">
        <div>
          <p class="text-center text-sm-left mb-0">
            ค้นหาแมวที่ต้องการช่วยเหลือให้ตรงใจคุณ
          </p>

          <base-button
            @click="goToMatching"
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
          <base-button @click="goToMatching" :fillSearch="true">
            <img src="@/assets/imgs/icon-search.svg" alt="" />
            เริ่มค้นหาแมวในอุดมคติ
          </base-button>
        </v-col>
      </template>
    </punmaew-banner>

    <div class="mt-6">
      <v-container>
        <div>
          <v-row justify="center">
            <v-col cols="12" align-self="center">
              <h2>บทความ</h2>
            </v-col>
          </v-row>
          <div v-if="allArticle.length > 0">
            <v-row>
              <v-col
                cols="12"
                v-for="a in allArticle"
                :key="a._id"
                sm="4"
                md="4"
                lg="4"
                xl="4"
                align-self="center"
              >
                <div @click="singleArticle(a)" class="card-article">
                  <div class="thumbnail">
                    <img src="@/assets/imgs/img-thumbnail.jpg" alt="" />
                  </div>
                  <div class="card-title">
                    <v-row justify="center">
                      <v-col cols="12" class="pb-lg-3 pb-sm-3">
                        <div>
                          <h2 class="h4">{{ a.title }}</h2>
                          <p v-if="a.details.length > 0" class="mb-0">
                            {{ a.details[0].text }}
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
        </div>
      </v-container>
    </div>
  </section>
</template>

<script>
import BaseButton from "../components/punmaew/components/BaseButton.vue";
import PunmaewBanner from "../components/punmaew/elements/PunmaewBanner.vue";

export default {
  components: {
    PunmaewBanner,
    BaseButton,
  },

  data() {
    return {
      // allArticle: [
      //   {
      //     _id: 1,
      //     title: "Name",
      //     details: [
      //       {
      //         _id: 1,
      //         paraNumber: "1",
      //         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit enim id hendrerit velit egestas cum quam.",
      //       },
      //     ],
      //   },
      //   {
      //     _id: 2,
      //     title: "Name",
      //     details: [
      //       {
      //         _id: 2,
      //         paraNumber: "1",
      //         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit enim id hendrerit velit egestas cum quam.",
      //       },
      //     ],
      //   },
      //   {
      //     _id: 3,
      //     title: "Name",
      //     details: [
      //       {
      //         _id: 3,
      //         paraNumber: "1",
      //         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit enim id hendrerit velit egestas cum quam.",
      //       },
      //     ],
      //   },
      // ],
      allArticle: [],
    };
  },
  // async asyncData({ $axios, $config }) {
  //   try {
  //     const res = await $axios.get(`${$config.articleURL}allArticle`);
  //     return {
  //       allArticle: res.data,
  //     };
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const res = await this.$axios.get(
          `${this.$config.articleURL}allArticle`
        );
        this.allArticle = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    goToMatching() {
      this.$router.push(`/matching`);
    },
    async singleArticle(article) {
      try {
        // article/oneArticle?id=
        await this.$router.push(
          `/singleArticle?isSingle=true&id=${article._id}`
        );
        const res = await this.$axios.get(
          `${this.$config.articleURL}oneArticle?id=${article._id}`,
          article
        );
        console.log(res);
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped>
.read-articles {
  color: $orange;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.card-article {
  position: relative;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  cursor: pointer;
  .thumbnail {
    overflow: hidden;
    line-height: 0;
    img {
      // max-width: 100%;
      width: 100%;
      height: 200px;
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
@media (min-width: 1440px) {
  .btn-banner {
    width: 55% !important;
  }
}
@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>
