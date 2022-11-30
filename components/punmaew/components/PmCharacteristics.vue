<template>
  <section>
    <validation-observer ref="characterForm">
      <div class="input-area">
        <p class="">ลักษณะขน</p>
        <v-autocomplete
          dense
          filled
          :items="hairStyle"
          item-text="name"
          name="hairStyle"
          v-model="selectHairStyle"
          data-vv-name="select"
          required
          placeholder="กรุณาเลือกลักษณะขน"
        >
        </v-autocomplete>
      </div>
      <div class="input-area">
        <p class="">ขนาด</p>
        <v-autocomplete
          dense
          filled
          :items="size"
          item-text="name"
          name="size"
          v-model="selectSize"
          data-vv-name="select"
          required
          placeholder="กรุณาเลือกขนาด"
        >
        </v-autocomplete>
      </div>

      <div class="input-area">
        <p class="">ลักษณะนิสัย</p>
        <v-autocomplete
          multiple
          dense
          filled
          :items="habit"
          item-text="name"
          name="habit"
          v-model="selectHabit"
          data-vv-name="select"
          required
          placeholder="กรุณาเลือกลักษณะนิสัย"
          class="custom-radius-charac"
        >
        </v-autocomplete>
      </div>

      <div class="input-area">
        <p class="">การใช้กระบะทราย</p>
        <v-autocomplete
          dense
          filled
          :items="littleBox"
          item-text="name"
          name="littleBox"
          v-model="selectLittleBox"
          data-vv-name="select"
          required
          placeholder="กรุณาเลือกการใช้กระบะทราย"
        >
        </v-autocomplete>
      </div>
    </validation-observer>
  </section>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    fetchForm: {
      type: Object,
    },
  },
  watch: {
    "fetchForm.step2": {
      handler(value) {
        this.selectHairStyle = value?.characteristic?.hair;
        this.selectSize = value?.characteristic?.size;
        this.selectHabit = value?.characteristic?.habit;
        this.selectLittleBox = value?.characteristic?.sandbox;
      },
      deep: true,
    },
  },
  data() {
    return {
      hairStyle: [
        { id: 1, name: "ขนสั้น" },
        { id: 2, name: "ขนยาว" },
        { id: 3, name: "ไม่มีขน" },
      ],
      selectHairStyle: this.isEdit
        ? this.fetchForm.step2?.characteristic?.hair
        : "",
      size: [
        { id: 1, name: "ตัวขนาดเล็ก" },
        { id: 2, name: "ตัวขนาดกลาง" },
        { id: 3, name: "ตัวขนาดใหญ่" },
      ],
      selectSize: this.isEdit ? this.fetchForm.step2?.characteristic?.size : "",
      habit: [
        { id: 1, name: "อยากรู้อยากเห็น" },
        { id: 2, name: "ขี้เล่น" },
        { id: 3, name: "ขี้กลัว" },
        { id: 4, name: "ขี้อ้อน" },
        { id: 5, name: "ขี้เซา" },
        { id: 6, name: "พูดเก่ง" },
        { id: 7, name: "พูดน้อย" },
        { id: 8, name: "เฉยเมย" },
        { id: 9, name: "ชอบนวด" },
        { id: 10, name: "เข้ากับคนง่าย" },
      ],
      selectHabit: this.isEdit
        ? this.fetchForm.step2?.characteristic?.habit
        : "",
      littleBox: [
        { id: 1, name: "ใช้กระบะทรายเป็น" },
        { id: 2, name: "ใช้กระบะทรายไม่เป็น" },
      ],
      selectLittleBox: this.isEdit
        ? this.fetchForm.step2?.characteristic?.sandbox
        : "",
    };
  },

  methods: {
    async validCharacter() {
      const success = await this.$refs.characterForm.validate();

      if (!success) {
        return false;
      } else {
        this.$emit("form2", {
          characteristic: {
            hair: this.selectHairStyle,
            size: this.selectSize,
            habit: this.selectHabit,
            sandbox: this.selectLittleBox,
          },
        });
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .custom-radius-charac {
  .v-input__slot {
    border-radius: 8px !important;
  }
}
::v-deep
  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot,
.v-text-field.v-text-field--enclosed .v-text-field__details {
  padding: 8px;
}
::v-deep .v-input--dense > .v-input__control > .v-input__slot {
  margin-bottom: 0px;
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none;
}

::v-deep .v-input__slot {
  border-radius: 50px;
  margin-bottom: 0px;
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:after {
  border-style: none !important;
}
::v-deep .v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px;
  padding: 0px;
}

.input-area {
  // margin-top: -6px;
  p {
    font-size: 14px;
    margin-bottom: 4px;
    span {
      color: $error;
      font-size: 14px;
      @media (min-width: 1440px) {
        font-size: 16px;
      }
    }
    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }
  input {
    width: 100%;
    background-color: $light;
    padding: 7px 20px;
    font-size: 14px;
    border-radius: 50px;
    @media (min-width: 1440px) {
      font-size: 16px;
      padding: 13px 20px;
    }
  }
}
</style>
