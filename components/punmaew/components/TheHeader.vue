<template>
  <header class="d-flex align-center position-relative" :class="`${_bg_color}`">
    <v-container class="justify-center d-flex">
      <v-row v-if="admin">
        <v-col sm="4" class="nav-left">
          <n-link to="/" class="opunmai">
            <img src="~/assets/imgs/pmlogo.png" alt="punmaew" id="logo" />
          </n-link>
        </v-col>
        <!-- <v-col sm="4">
          <base-button :fill="true">เข้าสู่ระบบ</base-button>
        </v-col> -->
      </v-row>
      <v-row v-else justify="center">
        <v-col sm="4" class="nav-left">
          <n-link to="/" class="opunmai">
            <img src="~/assets/imgs/pmlogo.png" alt="punmaew" id="logo" />
          </n-link>
        </v-col>
        <v-col sm="4" class="nav-center">
          <ul id="menu" class="d-none d-md-flex">
            <li>
              <p class="mb-0">บทความ</p>
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
          </ul>
        </v-col>
        <v-col sm="4" class="nav-right">
          <ul id="menu" class="d-none d-md-flex">
            <!-- <li v-if="loggedIn">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on">
                    <base-button :fill="true" class="d-flex justify-center">
                      <div class="user-icon mr-2">
                        <i class="fi fi-rr-user"></i>
                      </div>
                      {{ user.firstName }}</base-button
                    >
                  </div>
                </template>
                <v-list>
                  <v-list-item
                    @click="menuAction(item.action)"
                    v-for="(item, index) in items"
                    :key="index"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li> -->
            <!--  -->
            <li v-if="loggedIn">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on">
                    <base-button :fill="true" class="d-flex justify-center">
                      <div class="user-icon mr-2">
                        <i class="fi fi-rr-user"></i>
                      </div>
                      {{ user.firstName }}</base-button
                    >
                  </div>
                </template>
                <v-list>
                  <v-list-item
                    @click="menuAction(item.action)"
                    v-for="(item, index) in items"
                    :key="index"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
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
                  <i style="font-size: 18px" class="fi fi-rr-align-justify"></i>
                </v-btn>
              </template>
              <v-list>
                <v-list-item link to="/">
                  <v-list-item-title>หน้าแรก</v-list-item-title>
                </v-list-item>
                <v-list-item link to="/">
                  <v-list-item-title>บทความ</v-list-item-title>
                </v-list-item>
                <v-list-item link to="/finderHome">
                  <v-list-item-title>หาบ้านให้แมว</v-list-item-title>
                </v-list-item>
                <v-list-item link to="/adoptCat">
                  <v-list-item-title>รับเลี้ยงแมว</v-list-item-title>
                </v-list-item>
                <v-list-item link to="/login">
                  <v-list-item-title>เข้าสู่ระบบ</v-list-item-title>
                </v-list-item>
                <!-- <v-list-item v-show="loggedIn" @click="menuAction('logout')">
                  <v-list-item-title>ออกจากระบบ</v-list-item-title>
                </v-list-item>
                <v-list-item v-show="!loggedIn" link to="/login">
                  <v-list-item-title>เข้าสู่ระบบ</v-list-item-title>
                </v-list-item> -->
              </v-list>
            </v-menu>
          </div>
        </v-col>
      </v-row>
    </v-container>
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
      items: [
        { title: "โปรไฟล์ของฉัน", action: "my-profile" },
        { title: "ออกจากระบบ", action: "logout" },
      ],
      login: false,
    };
  },

  methods: {
    // sweet() {
    //   this.$swal
    //     .fire({
    //       // title: "ยืนยันที่จะลบโพสต์หรือไม่ ?",
    //       text: "ยืนยันที่จะลบโพสต์หรือไม่ ?",
    //       icon: "warning",
    //       confirmButtonColor: "#F77272",
    //       showCancelButton: true,
    //       confirmButtonText: "ลบ",
    //       cancelButtonText: "ยกเลิก",
    //     })
    //     .then((result) => {
    //       if (result.isConfirmed) {
    //         // this.$swal.fire(
    //         //   "Deleted!",
    //         //   "Your file has been deleted.",
    //         //   "success"
    //         // );
    //         this.$swal.fire({
    //           confirmButtonColor: "#19ba88",
    //           confirmButtonText: "ตกลง",
    //           text: "โพสต์ของคุณถูกลบแล้ว",
    //           icon: "success",
    //         });
    //       }
    //     });
    // },
    menuAction(action) {
      if (action === "my-profile") {
        this.$router.push("/editProfile");
        // console.log(action);
      }
      if (action === "logout") {
        try {
          this.$auth.logout();
          this.$router.push("/");
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.user-icon {
  i {
    font-size: 20px;
    color: $white;
  }
}
.bgColor {
  background-color: $orange-light !important;
}
.nav-left {
  padding-top: 0px;
  padding-bottom: 0px;
  // padding-left: 0px;
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
  // padding-right: 0px;
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
