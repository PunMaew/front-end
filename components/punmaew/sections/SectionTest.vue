<template>
  <div>
    <v-row>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4">
        <n-link
          :to="`/resources/${card.resourceId}`"
          :target="card.external ? '_blank' : ''"
        >
          <div class="card position-relative">
            <div class="thumbnail">
              <img src="" alt="" />
            </div>
            <div class="card-title">
              <v-row justify="center">
                <v-col cols="12" class="pb-lg-3 pb-sm-3">
                  <div>
                    <h2 class="h5">card Title</h2>
                    <p class="mb-0">card resourceDescShort</p>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </n-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
