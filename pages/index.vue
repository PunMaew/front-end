<template>
  <!-- <v-app> -->
  <!-- <div>
      <h1>hello</h1>
      <h2>hello</h2>
      <h3>hello</h3>
      <h4>hello</h4>
      <h5>hello</h5>
      <h6>hello</h6>
      <p>hello</p>
    </div> -->
  <section>
    <header>
      <v-container>
        <v-row justify="center">
          <v-col sm="7">
            <nuxt-link to="/">
              <!-- <img id="logo" src="" alt="" /> -->
              <p>PUNMAEW</p>
            </nuxt-link>
          </v-col>
          <v-col sm="5">
            <div class="text-right d-flex justify-end">
              <ul id="menu" class="d-none d-md-flex">
                <li>
                  <n-link to="/">บทความ</n-link>
                </li>
                <li>
                  <n-link to="/"> หาบ้านให้แมว </n-link>
                </li>
                <li>
                  <n-link to="/">เข้าสู่ระบบ </n-link>
                </li>
                <li>
                  <button>สมัครสมาชิก</button>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </header>
  </section>
  <!-- </v-app> -->
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
<style lang="scss" scoped>
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
</style>
