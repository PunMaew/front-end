<template>
  <v-col cols="12" md="4" lg="3" id="dashbard-menu">
    <div id="dashbard-menu-container">
      <div>
        <div class="admin-account">
          <div class="header-panel">
            <img src="@/assets/imgs/avatarAdmin.svg" alt="" />
            <div>
              <p class="mb-0 header-panel-title font-weight-bold">
                Admin Punmaew
              </p>
              <p class="mb-0 header-panel-account">Punmaew Application</p>
            </div>
          </div>
        </div>

        <div class="admin-content">
          <div
            @click="menuDashboard('dashboard')"
            :class="[currentMenu === 'dashboard' && 'actived']"
            class="mt-12 tabs-menu"
          >
            <i class="fi fi-rr-home"></i>
            Dashboard
          </div>
          <div
            @click="menuDashboard('article')"
            :class="[currentMenu === 'article' && 'actived']"
            class="mt-1 tabs-menu"
          >
            <i class="fi fi-rr-book-alt"></i>
            Article Posts
          </div>
          <div
            @click="menuDashboard('findhome')"
            :class="[currentMenu === 'findhome' && 'actived']"
            class="mt-1 tabs-menu"
          >
            <img src="@/assets/imgs/icon-find-home.svg" alt="" />
            Finder Home Posts
          </div>
          <div
            @click="menuDashboard('users')"
            :class="[currentMenu === 'users' && 'actived']"
            class="mt-1 tabs-menu"
          >
            <i class="fi fi-rr-user"></i>
            Users
          </div>
          <div
            @click="menuDashboard('logoutAdmin')"
            id="menu-fix-footer"
            class="mt-1"
          >
            <i class="fi fi-rr-exit"></i>
            ออกจากระบบ
          </div>
        </div>
      </div>
    </div>
  </v-col>
  <!-- </section> -->
</template>

<script>
export default {
  computed: {
    currentMenu() {
      return this.$store.state.currentMenu;
    },
  },
  methods: {
    async menuDashboard(menu) {
      if (menu === "dashboard") {
        try {
          this.$router.replace(`${this.$route.path}?menu=${menu}`);
          this.$store.commit("SET_MENU", "dashboard");
        } catch (error) {
          console.log(error);
        }
      }

      if (menu === "article") {
        try {
          this.$router.replace(`${this.$route.path}?menu=${menu}`);
          this.$store.commit("SET_MENU", "article");
        } catch (error) {
          console.log(error);
        }
      }
      if (menu === "findhome") {
        try {
          this.$router.replace(`${this.$route.path}?menu=${menu}`);
          this.$store.commit("SET_MENU", "findhome");
        } catch (error) {
          console.log(error);
        }
      }
      if (menu === "users") {
        try {
          this.$router.replace(`${this.$route.path}?menu=${menu}`);
          this.$store.commit("SET_MENU", "users");
        } catch (error) {
          console.log(error);
        }
      }
      if (menu === "logoutAdmin") {
        try {
          await this.$auth.logout();
          this.$router.push("/loginAdmin");
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#dashbard-menu {
  background: $white;
  position: relative;
  padding: 0;
  #dashbard-menu-container {
    margin-left: -12px;
    position: fixed;
  }
}

@media (min-width: 920px) {
  #menu-fix-footer {
    cursor: pointer;
    position: fixed;
    bottom: 50px;
    color: $error;
    font-weight: bold;
    font-size: 20px;
    &:hover {
      color: $dark;
    }
  }
}

.tabs-menu {
  cursor: pointer;
  font-size: 20px;
  padding: 12px 16px;
  border-radius: 10px;
  &:hover {
    background-color: $yellow;
    color: $orange-dark;
  }
}

.actived {
  color: $orange-dark !important;
  background-color: $yellow !important;
}

.header-panel {
  display: flex;
  gap: 12px;
  .header-panel-title {
    font-size: 24px;
  }
  .header-panel-account {
    font-size: 16px;
    color: $gray;
  }
  img {
    width: 60px;
  }
}
.admin-content {
  padding: 0px 0px 30px 50px;
}
.admin-account {
  padding: 30px 50px 0px 50px;
}
</style>
