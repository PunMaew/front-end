<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <dashboard-panel-menu
            class="d-none d-md-flex d-lg-flex d-xl-flex"
          ></dashboard-panel-menu>
          <v-col cols="12" md="8" lg="9" id="dashboard-panel-main">
            <dashboard-header></dashboard-header>
            <dashboard-panel-main>
              <nuxt />
            </dashboard-panel-main>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DashboardHeader from "../components/punmaew/components/DashboardHeader.vue";
import DashboardPanelMenu from "../components/punmaew/components/DashboardPanelMenu.vue";
import DashboardPanelMain from "../components/punmaew/elements/DashboardPanelMain.vue";
export default {
  components: { DashboardPanelMenu, DashboardHeader, DashboardPanelMain },
  watch: {
    "$store.state.auth": {
      handler(old) {
        if (old.loggedIn && old.strategy != "admin") {
          this.$router.push("/");
        }
      },
      immediate: true,
    },
  },
};
</script>
<style lang="scss" scoped>
#dashboard-panel-main {
  background: $orange-light;
  min-height: 100vh;
}
</style>
