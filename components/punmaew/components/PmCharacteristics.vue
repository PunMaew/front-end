<template>
  <section>
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
  data() {
    return {
      characteristic: [
        { id: 1, name: "เป็นมิตร" },
        { id: 2, name: "ขนสั้น" },
        { id: 3, name: "ขนยาว" },
        { id: 4, name: "ชอบนอน" },
        { id: 5, name: "อยู่กับหมาได้" },
        { id: 6, name: "ขี้เกียจ" },
        { id: 7, name: "ไม่มีขน" },
        { id: 8, name: "หางยาว" },
        { id: 9, name: "ไม่มีบ้าน" },
        { id: 10, name: "scottish fold" },
        { id: 11, name: "เป็นมิตร2" },
        { id: 12, name: "ขนสั้น2" },
        { id: 13, name: "ขนยาว2" },
        { id: 14, name: "ชอบนอน2" },
        { id: 15, name: "อยู่กับหมาได้2" },
        { id: 16, name: "ขี้เกียจ2" },
        { id: 17, name: "ไม่มีขน2" },
        { id: 18, name: "หางยาว2" },
        { id: 19, name: "ไม่มีบ้าน2" },
        { id: 20, name: "scottish fold2" },
      ],
      characteristicDisplay: [
        { id: 1, name: "เป็นมิตร" },
        { id: 2, name: "ขนสั้น" },
        { id: 3, name: "ขนยาว" },
        { id: 4, name: "ชอบนอน" },
        { id: 5, name: "อยู่กับหมาได้" },
        { id: 6, name: "ขี้เกียจ" },
        { id: 7, name: "ไม่มีขน" },
        { id: 8, name: "หางยาว" },
        { id: 9, name: "ไม่มีบ้าน" },
        { id: 10, name: "scottish fold" },
        { id: 11, name: "เป็นมิตร2" },
        { id: 12, name: "ขนสั้น2" },
        { id: 13, name: "ขนยาว2" },
        { id: 14, name: "ชอบนอน2" },
        { id: 15, name: "อยู่กับหมาได้2" },
        { id: 16, name: "ขี้เกียจ2" },
        { id: 17, name: "ไม่มีขน2" },
        { id: 18, name: "หางยาว2" },
        { id: 19, name: "ไม่มีบ้าน2" },
        { id: 20, name: "scottish fold2" },
      ],
      selectCharacteristic: "",
    };
  },

  methods: {
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
