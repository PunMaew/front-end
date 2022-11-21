<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" align-self="center">
        <v-row no-gutters justify="center">
          <v-col cols="12" sm="5" md="5" lg="5" xl="3">
            <p class="title-question">{{ title }}</p>
          </v-col>
          <v-col cols="12" sm="5" md="5" lg="5" xl="3">
            <div>
              <validation-provider
                rules="required"
                v-slot="{ errors }"
                :ref="refType"
              >
                <v-select
                  dense
                  filled
                  :items="choiceList"
                  :item-text="answerChoice"
                  :name="refType"
                  v-model="content"
                  @change="handleInput"
                  data-vv-name="select"
                  required
                  placeholder="กรุณาเลือกคำตอบ"
                />
                <span class="valid-form">
                  {{ errors[0] }}
                </span>
              </validation-provider>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
export default {
  props: {
    value: {
      type: String,
    },
    title: {
      type: String,
    },
    refType: {
      type: String,
    },
    choiceList: {
      type: Array,
    },
    answerChoice: {
      type: String,
    },
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", this.content);
    },
  },
};
</script>

<style lang="scss" scoped>
.title-question {
  font-size: 14px;
  @media (min-width: 1440px) {
    font-size: 24px;
  }
}
.valid-form {
  color: $error;
  font-weight: bold;
  font-size: 12px;
}
</style>
