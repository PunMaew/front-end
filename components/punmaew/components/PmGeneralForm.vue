<template>
  <section>
    <div v-if="progress.generalInfo === 1">
      <p class="step-text">ข้อมูลทั่วไป 1 จากทั้งหมด 4</p>
      <div class="input-area">
        <p>ชื่อแมว<span>*</span></p>
        <input type="text" placeholder="กรุณากรอกชื่อแมว" />
      </div>
      <div class="input-area mt-2">
        <p>สี<span>*</span></p>
        <input type="text" placeholder="กรุณากรอกสี" />
      </div>
      <div class="input-area mt-2">
        <p>สายพันธุ์</p>
        <input type="text" placeholder="กรุณากรอกสายพันธุ์" />
      </div>
      <div class="input-area mt-2">
        <p>อายุ<span>*</span></p>
        <input type="text" placeholder="กรุณากรอกอายุ" />
      </div>

      <div class="input-area mt-2">
        <p>เพศ<span>*</span></p>
        <div class="d-flex">
          <v-radio-group row>
            <v-radio
              v-for="i in 2"
              :key="i"
              :label="i === 1 ? 'หญิง' : 'ชาย'"
              :value="i"
            ></v-radio>
          </v-radio-group>
        </div>
      </div>
    </div>
    <div v-else-if="progress.generalInfo === 2">
      <p class="step-text">ข้อมูลทั่วไป 2 จากทั้งหมด 4</p>
      <div class="input-area">
        <p>จังหวัด<span>*</span></p>
        <validation-provider rules="required" v-slot="{ errors }">
          <v-autocomplete
            dense
            filled
            :items="province"
            item-text="province"
            name="province"
            v-model="selectProvince"
            :error-messages="errors"
            data-vv-name="select"
            required
          >
          </v-autocomplete>
        </validation-provider>
        <!-- <input type="text" placeholder="กรุณากรอกชื่อแมว" /> -->
      </div>
      <div class="input-area">
        <p>เขต/อำเภอ<span>*</span></p>
        <validation-provider rules="required" v-slot="{ errors }">
          <v-autocomplete
            dense
            filled
            :items="province"
            item-text="district"
            name="district"
            v-model="selectDistrict"
            :error-messages="errors"
            data-vv-name="select"
            required
          >
          </v-autocomplete>
        </validation-provider>
      </div>
      <div class="input-area">
        <p>แขวง/ตำบล<span>*</span></p>
        <validation-provider rules="required" v-slot="{ errors }">
          <v-autocomplete
            dense
            filled
            :items="province"
            item-text="province"
            name="province"
            v-model="selectProvince"
            :error-messages="errors"
            data-vv-name="select"
            required
          >
          </v-autocomplete>
        </validation-provider>
      </div>
      <div class="input-area">
        <p>รหัสไปรษณีย์<span>*</span></p>
        <input type="text" placeholder="กรุณากรอกรหัสไปรษณีย์" />
      </div>
    </div>
    <div v-else-if="progress.generalInfo === 3">
      <p class="step-text">ข้อมูลทั่วไป 3 จากทั้งหมด 4</p>
      <div class="input-area">
        <p>วัคซีนที่เคยได้รับ (ไม่มีกรอก -)<span>*</span></p>
        <input type="text" placeholder="กรุณากรอกวัคซีนที่เคยได้รับ" />
      </div>
      <div class="input-area mt-4">
        <p>วันที่รับวัคซีน</p>
        <input type="text" placeholder="กรุณากรอกวันที่รับวัคซีน" />
      </div>
      <div class="input-area mt-4">
        <p>โรคประจำตัว (ไม่มีกรอก - )<span>*</span></p>
        <input type="text" placeholder="กรุณากรอกโรคประจำตัว" />
      </div>
      <div>
        <div class="input-area mt-4">
          <p>การทำหมัน</p>
        </div>
        <div class="d-flex">
          <v-radio-group row>
            <v-radio
              v-for="i in 2"
              :key="i"
              :label="i === 1 ? 'เคยทำหมัน' : 'ไม่เคยทำหมัน'"
              :value="i"
            ></v-radio>
          </v-radio-group>
        </div>
      </div>
    </div>
    <div v-else-if="progress.generalInfo === 4">
      <p class="step-text">ข้อมูลทั่วไป 4 จากทั้งหมด 4</p>
      <div class="input-area">
        <p>กรุณาแนบรูปแมว<span>*</span></p>
        <div class="upload-image">
          <div class="icon-upload text-center">
            <i class="fi fi-rr-picture"></i>
            <p>เพิ่มรูป <span>ที่นี่</span></p>
          </div>
        </div>
      </div>

      <div class="input-area mt-2">
        <p>รายละเอียดเพิ่มเติม (ถ้ามี)</p>
        <textarea type="text" placeholder="กรุณากรอกรายละเอียดเพิ่มเติม" />
      </div>
    </div>
  </section>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import provinceList from "@/assets/data/province.json";
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    provinceList,
  },
  props: {
    progress: {
      type: Object,
    },
  },
  data() {
    return {
      province: provinceList,
      selectProvince: "",
      selectDistrict: "",
    };
  },
};
</script>

<style lang="scss" scoped>
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
.step-text {
  font-size: 12px;
  font-weight: bold;
  color: $gray;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 12px;
  @media (min-width: 1440px) {
    font-size: 14px;
  }
}
.upload-image {
  position: relative;
  min-height: 109px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23333' stroke-width='1' stroke-dasharray='3' stroke-dashoffset='22' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 8px;
  background-size: 99%;
  .icon-upload {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p {
      font-size: 12px;
      span {
        text-decoration: underline;
        color: $orange-dark !important;
        font-weight: bold;
      }
    }
  }
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
  textarea {
    width: 100%;
    min-height: 152px;
    background-color: $light;
    padding: 16px;
    font-size: 14px;
    border-radius: 10px;
    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }
  textarea::placeholder {
    font-size: 14px;
    color: $gray;
    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }
}
</style>
