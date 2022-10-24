<template>
  <section>
    <v-container></v-container>
  </section>
</template>

<script>
export default {
  props: {
    isSingle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // isSingleArticle: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>
