<template>
  <section class="pm-banner" :class="[_color]">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="10" lg="12" align-self="center">
          <div class="set-banner">
            <v-row justify="center">
              <v-col
                cols="4"
                sm="4"
                lg="3"
                class="pb-0 pt-0"
                align-self="center"
                :class="[_ordersm]"
              >
                <slot name="img-banner" />
              </v-col>
              <v-col cols="12" sm="6" lg="7" align-self="center" class="pt-0">
                <p
                  class="text-center font-weight-bold text-sm-left mb-2 title-banner"
                >
                  <slot name="title-banner" />
                </p>
                <div>
                  <slot name="content-banner" />
                </div>
              </v-col>
              <slot name="details-other" />
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    ordersm: {
      type: Boolean,
      default: false,
    },
    color: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    _ordersm() {
      return this.ordersm ? "order-sm-2" : "order-sm-0";
    },
    _color() {
      return this.color ? "bg-yellow" : "bg-purple";
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-purple {
  background-color: $purple-light !important;
}
.bg-yellow {
  background-color: $yellow-light !important;
}
.pm-banner {
  margin-top: 64px;
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
.title-banner {
  @media (min-width: 1440px) {
    font-size: 40px;
  }
}
@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>
