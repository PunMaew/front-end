<template>
  <div class="mt-6">
    <v-row no-gutters justify="center" class="btn-set-row">
      <v-col align-self="center">
        <slot name="finderHome" />
      </v-col>
      <v-col align-self="center">
        <slot name="adoptCat" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btn-set-row {
  gap: 10px;
  @media (min-width: 768px) {
    justify-content: left !important;
  }
  @media (min-width: 1440px) {
    gap: 30px;
  }
}
</style>
