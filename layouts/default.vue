<template>
  <v-app>
    <BaseNav />
    <nuxt />
  </v-app>
</template>

<script>
import BaseNav from "@/components/punmaew/components/BaseNav.vue";
export default {
  components: {
    BaseNav,
  },
};
</script>
<style lang="scss" scoped>
@media (min-width: 1904px) {
  .container {
    max-width: 1440px !important;
  }
}
</style>
