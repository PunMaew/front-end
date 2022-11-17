<template>
  <v-app>
    <v-main>
      <TheHeader :bgColor="true" />
      <nuxt />
      <!-- <TheFooter /> -->
    </v-main>
  </v-app>
</template>

<script>
// import TheFooter from "../components/punmaew/components/TheFooter.vue";
import TheHeader from "../components/punmaew/components/TheHeader.vue";
export default {
  components: {
    // TheFooter,
    TheHeader,
  },
  name: "adoption",
  watch: {
    "$store.state.auth": {
      handler(old) {
        if (old.loggedIn && old.strategy === "admin") {
          this.$router.push("/dashboard");
        }
      },
      immediate: true,
    },
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
