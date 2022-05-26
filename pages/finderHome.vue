<template>
  <card-form-adopt>
    <template slot="content">
      <v-row justify="center">
        <v-col cols="12">
          <div class="finder-form">
            <p class="title-form mb-0">แบบฟอร์มหาบ้านให้แมว</p>
          </div>
          <div class="step-title">
            <div>
              <v-row no-gutters justify="center">
                <v-col align-self="center">
                  <div class="step-block left">
                    <p class="text-center">ข้อมูลทั่วไป</p>
                  </div>
                </v-col>
                <v-col align-self="center">
                  <div class="step-block right">
                    <p class="text-center">ช่องทางการติดต่อ</p>
                  </div>
                </v-col>
              </v-row>
            </div>
            <p class="step-text">ข้อมูลทั่วไป 1 จากทั้งหมด 4</p>
          </div>
          <pm-from-container @nextStep="nextStep"></pm-from-container>
        </v-col>
      </v-row>
    </template>
  </card-form-adopt>
</template>

<script>
import CardFormAdopt from "../components/punmaew/components/CardFormAdopt.vue";
import PmFromContainer from "../components/punmaew/components/PmFromContainer.vue";
export default {
  layout: "adoption",
  components: { CardFormAdopt, PmFromContainer },

  methods: {
    nextStep() {},
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-label {
  font-size: 14px;
}
::v-deep .v-input--selection-controls {
  margin-top: 0px;
  padding-top: 0px;
}

.step-title {
  .step-block {
    p {
      font-size: 12px;
      font-weight: bold;
    }
  }
  .left {
    color: $dark;
    border-bottom: 3px solid $yellow-dark;
  }
  .right {
    color: $gray;
    border-bottom: 3px solid $light;
  }
  .step-text {
    font-size: 12px;
    font-weight: bold;
    color: $gray;
    text-align: center;
    margin-top: 12px;
    margin-bottom: 10px;
  }
}

.finder-form {
  margin-bottom: 24px;
  .title-form {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }
}
</style>
