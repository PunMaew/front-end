<template>
  <header class="d-none d-md-flex d-lg-flex d-xl-flex align-center">
    <v-container class="justify-center d-flex">
      <v-row>
        <v-col cols="5"> </v-col>
        <v-col cols="4"></v-col>
        <v-col cols="3">
          <!-- <n-link to="/" class="opunmai"> -->
          <img src="~/assets/imgs/pmlogo.png" alt="punmaew" id="logo" />
          <!-- </n-link> -->
          <div class="nav-right font-weight-bold">
            | Admin
            <i class="d-flex align-center fi fi-rr-angle-small-down"></i>
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

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
// .logo {
//   display: flex;
//   justify-content: flex-end;
//   gap: 4px;
//   font-size: 24px;
// }
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
  font-size: 24px;
}
header {
  padding: 0;
  // background: #fff;
  z-index: 50;
  position: relative;
  // border-bottom: 1px solid#f9f9f9;
  // background-color: $orange-light;
}
#logo {
  margin-left: -16px;
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
