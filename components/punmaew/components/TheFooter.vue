<template>
  <section class="pt-6">
    <v-container>
      <v-row>
        <v-col cols="12" align-self="center">
          <div>
            <img src="~/assets/imgs/Logo.png" alt="punmaew" id="logo" />
            <p>PunMaew | Web Application สำหรับช่วยเหลือน้องแมวไร้บ้าน</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#logo {
  max-width: 205px;
}
@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>
