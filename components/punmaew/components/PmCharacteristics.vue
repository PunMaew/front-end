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
  <!-- <section>
    <validation-observer ref="characterForm">
      <div>
        <div class="input-area">
          <p>ลักษณะ<span>*</span></p>
          <validation-provider rules="required" v-slot="{ errors }">
            <v-autocomplete
              dense
              filled
              multiple
              :error-messages="errors"
              data-vv-name="select"
              required
              :items="characteristic"
              item-text="name"
              name="characteristic"
              v-model="selectCharacteristic"
              @change="updateValues"
            >
            </v-autocomplete>
          </validation-provider>
        </div>
      </div>
      <div>
        <div class="charac-area">
         
          <div v-if="selectCharacteristic">
            <div class="charac-show mb-6">
              <div
                v-for="(selectCharac, index) in selectCharacteristic"
                :key="index"
                class="charac-details color-choose"
              >
                <p class="mb-0">{{ selectCharac }}</p>
                <i
                  @click="removeCharac(selectCharac, index)"
                  class="fi fi-rr-cross-circle"
                ></i>
              </div>
            </div>
          </div>

     
          <div class="charac-show">
            <div
              v-for="(charac, index) in characteristicDisplay"
              :key="index"
              class="charac-details color"
            >
              <p class="mb-0">{{ charac.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </validation-observer>
  </section> -->
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
      // characteristic: [
      //   { id: 1, name: "ตัวขนาดเล็ก" },
      //   { id: 2, name: "ตัวขนาดกลาง" },
      //   { id: 3, name: "ตัวขนาดใหญ่" },
      //   { id: 4, name: "สีล้วน" },
      //   { id: 5, name: "สองสี" },
      //   { id: 6, name: "สีเปรอะ" },
      //   { id: 7, name: "สามสี" },
      //   { id: 8, name: "ลายสลิด" },
      //   { id: 9, name: "ลายแต้ม" },
      //   { id: 10, name: "ขนสั้น" },
      //   { id: 11, name: "ขนยาว" },
      //   { id: 12, name: "ไม่มีขน" },
      //   { id: 13, name: "ใช้กระบะทรายเป็น" },
      //   { id: 14, name: "ไม่จำเป็นต้องใช้กระบะทรายเป็น" },
      //   { id: 15, name: "อยากรู้อยากเห็น" },
      //   { id: 16, name: "ขี้เล่น" },
      //   { id: 17, name: "ขี้กลัว" },
      //   { id: 18, name: "ขี้อ้อน" },
      //   { id: 19, name: "ขี้เซา" },
      //   { id: 20, name: "พูดเก่ง" },
      //   { id: 21, name: "พูดน้อย" },
      //   { id: 22, name: "เฉยเมย" },
      //   { id: 23, name: "ชอบนวด" },
      //   { id: 24, name: "เข้ากับคนง่าย" },
      //   { id: 25, name: "ได้รับวัคซีนครบ" },
      //   { id: 26, name: "ยังไม่ได้รับวัคซีน" },
      //   { id: 27, name: "ได้รับวัคซีนบางชนิด" },
      //   { id: 28, name: "ทำหมันแล้ว" },
      //   { id: 29, name: "ยังไม่ได้ทำหมัน" },
      // ],
      // characteristicDisplay: [
      //   { id: 1, name: "ตัวขนาดเล็ก" },
      //   { id: 2, name: "ตัวขนาดกลาง" },
      //   { id: 3, name: "ตัวขนาดใหญ่" },
      //   { id: 4, name: "สีล้วน" },
      //   { id: 5, name: "สองสี" },
      //   { id: 6, name: "สีเปรอะ" },
      //   { id: 7, name: "สามสี" },
      //   { id: 8, name: "ลายสลิด" },
      //   { id: 9, name: "ลายแต้ม" },
      //   { id: 10, name: "ขนสั้น" },
      //   { id: 11, name: "ขนยาว" },
      //   { id: 12, name: "ไม่มีขน" },
      //   { id: 13, name: "ใช้กระบะทรายเป็น" },
      //   { id: 14, name: "ไม่จำเป็นต้องใช้กระบะทรายเป็น" },
      //   { id: 15, name: "อยากรู้อยากเห็น" },
      //   { id: 16, name: "ขี้เล่น" },
      //   { id: 17, name: "ขี้กลัว" },
      //   { id: 18, name: "ขี้อ้อน" },
      //   { id: 19, name: "ขี้เซา" },
      //   { id: 20, name: "พูดเก่ง" },
      //   { id: 21, name: "พูดน้อย" },
      //   { id: 22, name: "เฉยเมย" },
      //   { id: 23, name: "ชอบนวด" },
      //   { id: 24, name: "เข้ากับคนง่าย" },
      //   { id: 25, name: "ได้รับวัคซีนครบ" },
      //   { id: 26, name: "ยังไม่ได้รับวัคซีน" },
      //   { id: 27, name: "ได้รับวัคซีนบางชนิด" },
      //   { id: 28, name: "ทำหมันแล้ว" },
      //   { id: 29, name: "ยังไม่ได้ทำหมัน" },
      // ],
      // selectCharacteristic: this.isEdit
      //   ? this.fetchForm.step2?.characteristic
      //   : "",
    };
  },

  methods: {
    async validCharacter() {
      const success = await this.$refs.characterForm.validate();
      // console.log(success);
      if (!success) {
        return false;
      } else {
        this.$emit("form2", {
          // characteristic: this.selectCharacteristic,
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
    // removeCharac(item, index) {
    //   const id = this.characteristic.find((x) => x.name === item).id;
    //   this.selectCharacteristic.splice(index, 1);
    //   this.characteristicDisplay.push({ id: id, name: item });
    //   this.characteristicDisplay.sort((a, b) => {
    //     return a.id - b.id;
    //   });
    // },
    // updateValues(event) {
    //   let myArray = this.characteristic.filter(
    //     (ar) => !event.find((rm) => rm === ar.name)
    //   );
    //   this.characteristicDisplay = myArray;

    //   console.log(myArray, "newArray");
    // },
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
// ::v-deep .v-select__selections {
//   font-size: 12px;
// }
</style>
