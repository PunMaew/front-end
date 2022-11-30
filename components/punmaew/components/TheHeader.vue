<template>
  <header
    class="d-flex align-center position-relative pt-6"
    :class="`${_bg_color}`"
  >
    <client-only>
      <v-container class="justify-center d-flex">
        <v-row v-if="admin">
          <v-col sm="4" class="nav-left">
            <n-link to="/" class="opunmai">
              <img src="~/assets/imgs/pmlogo.png" alt="punmaew" id="logo" />
            </n-link>
          </v-col>
        </v-row>
        <v-row v-else justify="center">
          <v-col sm="2" class="nav-left">
            <n-link to="/" class="opunmai">
              <img src="~/assets/imgs/pmlogo.png" alt="punmaew" id="logo" />
            </n-link>
          </v-col>
          <v-col sm="7" class="nav-center">
            <ul id="menu" class="d-none d-md-flex">
              <li>
                <n-link to="/articles" class="opunmai">
                  <p class="mb-0">บทความ</p>
                </n-link>
              </li>
              <li>
                <n-link to="/finderHome" class="opunmai">
                  <p class="mb-0">หาบ้านให้แมว</p>
                </n-link>
              </li>
              <li>
                <n-link to="/adoptCat" class="opunmai">
                  <p class="mb-0">รับเลี้ยงแมว</p>
                </n-link>
              </li>
              <li v-if="loggedIn">
                <n-link to="/editProfile" class="opunmai">
                  <p class="mb-0">โปรไฟล์ของฉัน</p>
                </n-link>
              </li>
            </ul>
          </v-col>
          <v-col sm="3" class="nav-right">
            <ul id="menu" class="d-none d-md-flex">
              <li v-if="loggedIn">
                <client-only>
                  <div class="d-flex account-info">
                    <div class="user-icon mr-2 font-weight-bold">
                      <i class="fi fi-rr-user"></i>
                      {{ user.firstName }} |
                    </div>
                    <div
                      @click="menuAction('logout')"
                      class="d-flex font-weight-bold exit-system"
                    >
                      ออกจากระบบ
                    </div>
                  </div>
                </client-only>
              </li>
              <li v-else>
                <n-link to="/login" class="opunmai">
                  <base-button :fill="true">เข้าสู่ระบบ</base-button>
                </n-link>
              </li>
            </ul>
          </v-col>
          <v-col sm="12" class="pt-0 pb-0 text-right d-flex justify-end">
            <div class="d-md-none">
              <v-menu min-width="200" offset-y>
                <template v-slot:activator="{ on: menu, attrs }">
                  <v-btn icon v-bind="attrs" v-on="{ ...menu }">
                    <i
                      style="font-size: 18px"
                      class="fi fi-rr-align-justify"
                    ></i>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item link to="/">
                    <v-list-item-title>หน้าแรก</v-list-item-title>
                  </v-list-item>
                  <v-list-item link to="/articles">
                    <v-list-item-title>บทความ</v-list-item-title>
                  </v-list-item>
                  <v-list-item link to="/finderHome">
                    <v-list-item-title>หาบ้านให้แมว</v-list-item-title>
                  </v-list-item>
                  <v-list-item link to="/adoptCat">
                    <v-list-item-title>รับเลี้ยงแมว</v-list-item-title>
                  </v-list-item>
                  <v-list-item v-if="loggedIn" link to="/editProfile">
                    <v-list-item-title>โปรไฟล์ของฉัน</v-list-item-title>
                  </v-list-item>
                  <v-list-item v-if="loggedIn" @click="menuAction('logout')">
                    <v-list-item-title>ออกจากระบบ</v-list-item-title>
                  </v-list-item>
                  <v-list-item v-else link to="/login">
                    <v-list-item-title>เข้าสู่ระบบ</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </client-only>
  </header>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
  props: {
    bgColor: {
      type: Boolean,
      default: false,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    _bg_color() {
      return this.bgColor ? "bgColor" : "";
    },

    loggedIn() {
      return this.$store.state.auth.loggedIn;
    },
    user() {
      return this.$store.state.auth.user;
    },
  },
  data() {
    return {
      items: [{ title: "ออกจากระบบ", action: "logout" }],
      login: false,
    };
  },

  methods: {
    menuAction(action) {
      if (action === "my-profile") {
        this.$router.push("/editProfile");
      }
      if (action === "logout") {
        this.$auth.logout();
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.account-info {
  justify-content: center;
  align-items: center;
  &:hover {
    color: $dark;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
  }
}
.exit-system {
  cursor: pointer;
  color: $error;
  text-decoration: underline;
}
.user-icon {
  i {
    font-size: 20px;
  }
}
.bgColor {
  background-color: $orange-light !important;
}
.nav-left {
  padding-top: 0px;
  padding-bottom: 0px;
}
.nav-center {
  padding-top: 0px;
  padding-bottom: 0px;
  justify-content: center;
  display: flex;
}
.nav-right {
  justify-content: flex-end;
  display: flex;
  padding-top: 0px;
  padding-bottom: 0px;
}
header {
  padding: 15px 0;

  z-index: 50;
  position: relative;
}
#logo {
  height: 35px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @media (min-width: 600px) {
    height: 40px;
  }
}
.link-btn .btn {
  max-width: 120px;
}
ul#menu {
  padding: 0;
  display: flex;

  &:active {
    color: $orange;
  }
  li {
    list-style: none;
    align-self: center;
    color: $dark;
    &:hover {
      color: $orange;
    }
    & + li {
      margin-left: 40px;
    }
  }
}

@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>
