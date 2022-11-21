<template>
  <section class="set-bg-paper">
    <div class="wrapper">
      <v-container>
        <v-row justify="center">
          <v-col
            cols="12"
            sm="8"
            md="7"
            lg="6"
            xl="5"
            class="content-wrapper pt-2"
          >
            <section class="content">
              <slot name="content" />
            </section>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    hasNav: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  @media (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 0;
  }
  @media (min-width: 1024px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
}
.content {
  // min-height: 515px;
  width: 100%;
  background-color: $white;
  padding: 16px;
  display: flex;
  flex-direction: column;

  border-radius: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    min-height: 620px;
    padding: 32px;
  }

  @media (min-width: 1440px) {
  }
}
.set-bg-paper {
  background-color: $orange-light;
  min-height: 100%;
  display: flex;
  flex-flow: column;
  position: relative;
}

.wrapper {
  @media (min-width: 768px) and (min-height: 920px) {
    flex: 1 1;
    display: flex;
    justify-content: center;
    // align-items: center;
    // margin-top: 50px;
  }
  // &.popup {
  //   margin-top: 0;
  // }
}
</style>
