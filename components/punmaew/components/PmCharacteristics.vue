<template>
  <section>
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
          <!-- choose -->
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

          <!--  -->
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
  data() {
    return {
      characteristic: [
        { id: 1, name: "ตัวขนาดเล็ก" },
        { id: 2, name: "ตัวขนาดกลาง" },
        { id: 3, name: "ตัวขนาดใหญ่" },
        { id: 4, name: "สีล้วน" },
        { id: 5, name: "สองสี" },
        { id: 6, name: "สีเปรอะ" },
        { id: 7, name: "สามสี" },
        { id: 8, name: "ลายสลิด" },
        { id: 9, name: "ลายแต้ม" },
        { id: 10, name: "ขนสั้น" },
        { id: 11, name: "ขนยาว" },
        { id: 12, name: "ไม่มีขน" },
        { id: 13, name: "ใช้กระบะทรายเป็น" },
        { id: 14, name: "ไม่จำเป็นต้องใช้กระบะทรายเป็น" },
        { id: 15, name: "อยากรู้อยากเห็น" },
        { id: 16, name: "ขี้เล่น" },
        { id: 17, name: "ขี้กลัว" },
        { id: 18, name: "ขี้อ้อน" },
        { id: 19, name: "ขี้เซ้า" },
        { id: 20, name: "พูดเก่ง" },
        { id: 21, name: "พูดน้อย" },
        { id: 22, name: "เฉยเมย" },
        { id: 23, name: "ชอบนวด" },
        { id: 24, name: "เข้ากับคนง่าย" },
        { id: 25, name: "ได้รับวัคซีนครบ" },
        { id: 26, name: "ยังไม่ได้รับวัคซีน" },
        { id: 27, name: "ได้รับวัคซีนบางชนิด" },
        { id: 28, name: "ทำหมันแล้ว" },
        { id: 29, name: "ยังไม่ได้ทำหมัน" },
      ],
      characteristicDisplay: [
        { id: 1, name: "ตัวขนาดเล็ก" },
        { id: 2, name: "ตัวขนาดกลาง" },
        { id: 3, name: "ตัวขนาดใหญ่" },
        { id: 4, name: "สีล้วน" },
        { id: 5, name: "สองสี" },
        { id: 6, name: "สีเปรอะ" },
        { id: 7, name: "สามสี" },
        { id: 8, name: "ลายสลิด" },
        { id: 9, name: "ลายแต้ม" },
        { id: 10, name: "ขนสั้น" },
        { id: 11, name: "ขนยาว" },
        { id: 12, name: "ไม่มีขน" },
        { id: 13, name: "ใช้กระบะทรายเป็น" },
        { id: 14, name: "ไม่จำเป็นต้องใช้กระบะทรายเป็น" },
        { id: 15, name: "อยากรู้อยากเห็น" },
        { id: 16, name: "ขี้เล่น" },
        { id: 17, name: "ขี้กลัว" },
        { id: 18, name: "ขี้อ้อน" },
        { id: 19, name: "ขี้เซ้า" },
        { id: 20, name: "พูดเก่ง" },
        { id: 21, name: "พูดน้อย" },
        { id: 22, name: "เฉยเมย" },
        { id: 23, name: "ชอบนวด" },
        { id: 24, name: "เข้ากับคนง่าย" },
        { id: 25, name: "ได้รับวัคซีนครบ" },
        { id: 26, name: "ยังไม่ได้รับวัคซีน" },
        { id: 27, name: "ได้รับวัคซีนบางชนิด" },
        { id: 28, name: "ทำหมันแล้ว" },
        { id: 29, name: "ยังไม่ได้ทำหมัน" },
      ],
      selectCharacteristic: this.isEdit
        ? this.fetchForm.step2.characteristic
        : "",
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
          characteristic: this.selectCharacteristic,
        });
        return true;
      }
    },
    removeCharac(item, index) {
      const id = this.characteristic.find((x) => x.name === item).id;
      this.selectCharacteristic.splice(index, 1);
      this.characteristicDisplay.push({ id: id, name: item });
      this.characteristicDisplay.sort((a, b) => {
        return a.id - b.id;
      });
    },
    updateValues(event) {
      let myArray = this.characteristic.filter(
        (ar) => !event.find((rm) => rm === ar.name)
      );
      this.characteristicDisplay = myArray;

      console.log(myArray, "newArray");
    },
  },
};
</script>

<style lang="scss" scoped>
.charac-area {
  height: 215px;
  overflow: scroll;

  // @media (min-width: 768px) {
  //   height: 200px;
  // }
  @media (min-width: 1440px) {
    height: 265px;
  }
}
.charac-show {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  .color-choose {
    background-color: $orange;
  }
  .color {
    background-color: $yellow-dark;
  }

  .charac-details {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    padding: 6px 15px;
    color: $white;
    border-radius: 50px;
    align-self: center;
    i {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
}

::v-deep .v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none;
}
::v-deep .v-input__slot {
  border-radius: 8px;
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:after {
  border-style: none !important;
}
.input-area {
  p {
    font-size: 14px;
    margin-bottom: 4px;
    span {
      color: $error;
      font-size: 14px;
    }
  }
}
::v-deep .v-select__selections {
  font-size: 12px;
}
</style>
