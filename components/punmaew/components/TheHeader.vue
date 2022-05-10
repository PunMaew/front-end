<template>
  <header class="d-flex align-center position-relative">
    <v-container class="justify-center d-flex">
      <v-row justify="center">
        <v-col sm="4" class="nav-left">
          <img src="~/assets/imgs/logo.png" alt="punmaew" id="logo" />
        </v-col>
        <v-col sm="4" class="nav-center">
          <ul id="menu" class="d-none d-md-flex">
            <li>
              <p class="mb-0">บทความ</p>
            </li>
            <li>
              <p class="mb-0">หาบ้านให้แมว</p>
            </li>
            <li>
              <p class="mb-0">รับเลี้ยงแมว</p>
            </li>
          </ul>
        </v-col>
        <v-col sm="4" class="nav-right">
          <ul id="menu" class="d-none d-md-flex">
            <li>
              <base-button>เข้าสู่ระบบ</base-button>
            </li>
          </ul>
        </v-col>
        <!-- <v-col>
          <div class="d-md-none">
            <v-menu min-width="200" offset-y>
              <template v-slot:activator="{ on: menu, attrs }">
                <v-btn icon v-bind="attrs" v-on="{ ...menu }">
                  <i style="font-size: 18px" class="fi fi-rr-align-justify"></i>
                </v-btn>
              </template>
              <v-list>
                <v-list-item link to="/">
                  <v-list-item-title>บทความ</v-list-item-title>
                </v-list-item>
                <v-list-item link to="/">
                  <v-list-item-title>หาบ้านให้แมว</v-list-item-title>
                </v-list-item>
                <v-list-item link to="/">
                  <v-list-item-title>รับเลี้ยงแมว</v-list-item-title>
                </v-list-item>
                <v-list-item link to="/">
                  <v-list-item-title>สมัครสมาชิก</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-col> -->
      </v-row>
    </v-container>
  </header>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
  props: {},
  methods: {
    // logout() {
    //   this.$auth.logout();
    //   this.$router.push("/");
    // }
  },
  data() {
    return {
      // item: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-left {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
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
  padding-right: 0px;
}
header {
  padding: 15px 0;
  // background: #fff;
  z-index: 50;
  position: relative;
  // border-bottom: 1px solid#f9f9f9;
  // background-color: $orange-light;
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
  // padding-top: 8px;
  // padding-bottom: 6px;
}
ul#menu {
  padding: 0;
  display: flex;
  li {
    list-style: none;
    align-self: center;
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
