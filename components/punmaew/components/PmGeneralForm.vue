<template>
  <section>
    <div v-if="progress.generalInfo === 1">
      <validation-observer ref="generalFirstForm">
        <p class="step-text">ข้อมูลทั่วไป 1 จากทั้งหมด 4</p>
        <div class="input-area">
          <p>ชื่อแมว<span>*</span></p>
          <validation-provider
            name="catName"
            rules="required"
            v-slot="{ errors }"
          >
            <input
              v-model="catName"
              name="catName"
              type="text"
              placeholder="กรุณากรอกชื่อแมว"
            />
            <span class="valid-form">
              {{ errors[0] }}
            </span>
          </validation-provider>
        </div>
        <div class="input-area mt-2">
          <p>สี<span>*</span></p>
          <validation-provider
            name="color"
            rules="required"
            v-slot="{ errors }"
          >
            <input
              v-model="color"
              name="color"
              type="text"
              placeholder="กรุณากรอกสี"
            />
            <span class="valid-form">
              {{ errors[0] }}
            </span>
          </validation-provider>
        </div>
        <div class="input-area mt-2">
          <p>สายพันธุ์</p>
          <v-autocomplete
            dense
            filled
            :items="filterList.breed"
            item-text="name"
            name="breeds"
            v-model="breeds"
            data-vv-name="select"
            required
            placeholder="กรุณากรอกสายพันธุ์"
          >
          </v-autocomplete>

          <!-- <input
            v-model="breeds"
            name="breeds"
            type="text"
            placeholder="กรุณากรอกสายพันธุ์"
          /> -->
        </div>
        <div class="input-area mt-2">
          <p>อายุ (ระบุจำนวนเป็นเดือน เช่น 12)<span>*</span></p>
          <validation-provider name="age" rules="required" v-slot="{ errors }">
            <input
              v-model="age"
              name="age"
              type="text"
              placeholder="กรุณากรอกอายุ"
            />
            <span class="valid-form">
              {{ errors[0] }}
            </span>
          </validation-provider>
        </div>
        <div class="input-area mt-2">
          <p>เพศ<span>*</span></p>

          <div class="d-flex">
            <validation-provider
              name="gender"
              rules="required"
              v-slot="{ errors }"
            >
              <v-radio-group v-model="gender" name="gender" row>
                <v-radio
                  v-for="g in genders"
                  :key="g.id"
                  :label="g.id === 1 ? 'เพศเมีย' : 'เพศผู้'"
                  :value="g.name"
                ></v-radio>
              </v-radio-group>
              <span class="valid-form">
                {{ errors[0] }}
              </span>
            </validation-provider>
          </div>
        </div>
      </validation-observer>
    </div>
    <div v-else-if="progress.generalInfo === 2">
      <validation-observer ref="generalSecondForm">
        <p class="step-text">ข้อมูลทั่วไป 2 จากทั้งหมด 4</p>
        <div class="input-area">
          <p>จังหวัด<span>*</span></p>
          <validation-provider
            name="province"
            rules="required"
            v-slot="{ errors }"
          >
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
              placeholder="กรุณาเลือกจังหวัด"
            >
            </v-autocomplete>
          </validation-provider>
        </div>
        <div class="input-area">
          <p>เขต/อำเภอ<span>*</span></p>
          <validation-provider
            name="district"
            rules="required"
            v-slot="{ errors }"
          >
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
              placeholder="กรุณาเลือกเขต/อำเภอ"
            >
            </v-autocomplete>
          </validation-provider>
        </div>
        <div class="input-area">
          <p>แขวง/ตำบล<span>*</span></p>
          <validation-provider
            name="tambon"
            rules="required"
            v-slot="{ errors }"
          >
            <v-autocomplete
              dense
              filled
              :items="tambon"
              item-text="name_th"
              name="tambon"
              v-model="selectTambon"
              :error-messages="errors"
              data-vv-name="select"
              placeholder="กรุณาเลือกแขวง/ตำบล"
              required
            >
            </v-autocomplete>
          </validation-provider>
        </div>
        <div class="input-area">
          <p>รหัสไปรษณีย์<span>*</span></p>
          <validation-provider
            name="zipCode"
            rules="required"
            v-slot="{ errors }"
          >
            <input
              v-model="zipCode"
              name="zipCode"
              type="text"
              placeholder="กรุณากรอกรหัสไปรษณีย์"
            />
            <span class="valid-form">
              {{ errors[0] }}
            </span>
          </validation-provider>
        </div>
      </validation-observer>
    </div>
    <div v-else-if="progress.generalInfo === 3">
      <validation-observer ref="generalThirdForm">
        <p class="step-text">ข้อมูลทั่วไป 3 จากทั้งหมด 4</p>
        <div class="input-area">
          <p>วัคซีนที่เคยได้รับ (ไม่มีกรอก -)<span>*</span></p>

          <input
            v-model="receiveVaccine"
            name="receiveVaccine"
            type="text"
            placeholder="กรุณากรอกวัคซีนที่เคยได้รับ"
          />
        </div>

        <div class="input-area mt-4">
          <p>วันที่รับวัคซีน</p>
          <input
            v-model="receiveDate"
            name="receiveDate"
            type="text"
            placeholder="กรุณากรอกวันที่รับวัคซีน"
          />
        </div>

        <div class="input-area mt-4">
          <p>โรคประจำตัว (ไม่มีกรอก - )<span>*</span></p>

          <input
            v-model="disease"
            name="disease"
            type="text"
            placeholder="กรุณากรอกโรคประจำตัว"
          />
        </div>

        <div>
          <div class="input-area mt-4">
            <p>การทำหมัน</p>
          </div>
          <div class="d-flex">
            <v-radio-group v-model="neutered" name="neutered" row>
              <v-radio
                v-for="n in neuteres"
                :key="n.id"
                :label="n.id === 1 ? 'เคยทำหมัน' : 'ไม่เคยทำหมัน'"
                :value="n.name"
              ></v-radio>
            </v-radio-group>
          </div>
        </div>
      </validation-observer>
    </div>
    <div v-else-if="progress.generalInfo === 4">
      <validation-observer ref="generalFourthForm">
        <validation-provider
          ref="provider"
          :rules="this.isEdit ? `image` : `required|image`"
          v-slot="{ errors }"
        >
          <p class="step-text">ข้อมูลทั่วไป 4 จากทั้งหมด 4</p>
          <div class="input-area">
            <p>กรุณาแนบรูปแมว<span>*</span></p>
            <span class="valid-form">
              {{ errors[0] }}
            </span>
            <!--  -->
            <div @click="onClickImage" class="upload-image">
              <div v-if="!imageData" class="icon-upload text-center">
                <i class="fi fi-rr-picture"></i>
                <p>เพิ่มรูป <span>ที่นี่</span></p>
              </div>
              <div class="img-container" v-else>
                <div class="edit-img-btn">
                  <i class="fi fi-rr-pencil"></i> แก้ไขรูป
                </div>
                <div class="mb-10 article-img">
                  <img :src="imageData" class="preview" alt="" />
                </div>
              </div>
              <input
                id="edit-article-image"
                ref="fileInput"
                type="file"
                accept="image/*"
                @change="uploadImage($event)"
                name="imageData"
              />
            </div>
          </div>
        </validation-provider>
        <!--  -->
        <div class="input-area mt-2">
          <p>รายละเอียดเพิ่มเติม (ถ้ามี)</p>
          <textarea
            v-model="others"
            name="others"
            type="text"
            placeholder="กรุณากรอกรายละเอียดเพิ่มเติม"
          />
        </div>
        <!-- </validation-provider> -->
      </validation-observer>
    </div>
  </section>
</template>

<script>
import filterList from "@/assets/data/filterList.json";
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import provinceList from "@/assets/data/province.json";
import tambonList from "@/assets/data/tambon.json";
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    provinceList,
    tambonList,
    filterList,
  },
  props: {
    progress: {
      type: Object,
    },
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
      imageData: this.isEdit
        ? `${this.$config.findHome}readFileIdFindHome?id=${this.$route.query.id}`
        : null,
      imageFile: null,
      genders: [
        { id: 1, name: "เพศเมีย" },
        { id: 2, name: "เพศผู้" },
      ],
      neuteres: [
        { id: 1, name: "เคยทำหมัน" },
        { id: 2, name: "ไม่เคยทำหมัน" },
      ],
      province: provinceList,
      tambon: tambonList,
      filterList: filterList,
      // v-model data
      selectProvince: this.isEdit ? this.fetchForm.step1.province : "",
      selectDistrict: this.isEdit ? this.fetchForm.step1.district : "",
      selectTambon: this.isEdit ? this.fetchForm.step1.subDistrict : "",
      catName: this.isEdit ? this.fetchForm.step1.catName : "",
      color: this.isEdit ? this.fetchForm.step1.color : "",
      breeds: this.isEdit ? this.fetchForm.step1.breeds : "",
      age: this.isEdit ? this.fetchForm.step1.age : "",
      zipCode: this.isEdit ? this.fetchForm.step1.zipCode : "",
      receiveVaccine: this.isEdit ? this.fetchForm.step1.receiveVaccine : "",
      receiveDate: this.isEdit ? this.fetchForm.step1.receiveDate : "",
      disease: this.isEdit ? this.fetchForm.step1.disease : "",
      gender: this.isEdit ? this.fetchForm.step1.gender : "",
      neutered: this.isEdit ? this.fetchForm.step1.neutered : "",
      others: this.isEdit ? this.fetchForm.step1.others : "",
    };
  },
  methods: {
    async uploadImage(event) {
      const { valid } = await this.$refs.provider.validate(event);
      if (valid) {
        console.log("Uploaded the file...");
        var input = event.target;
        if (input.files && input.files[0]) {
          this.imageFile = event.target.files[0];
          var reader = new FileReader();
          reader.onload = (e) => {
            this.imageData = e.target.result;
          };
          reader.readAsDataURL(input.files[0]);
        }
      }
    },
    onClickImage() {
      this.$refs.fileInput.click();
    },
    async validInfoFirst() {
      const success = await this.$refs.generalFirstForm.validate();
      // console.log(success);
      if (!success) {
        return false;
      } else {
        // console.log("emitData");
        this.$emit("form", {
          catName: this.catName,
          color: this.color,
          breeds: this.breeds,
          age: this.age,
          gender: this.gender,
        });
        requestAnimationFrame(() => {
          this.$refs.generalSecondForm.reset();
        });
        return true;
      }
    },
    async validInfoSecond() {
      const success = await this.$refs.generalSecondForm.validate();
      // console.log(success);
      if (!success) {
        return false;
      } else {
        this.$emit("form", {
          province: this.selectProvince,
          district: this.selectDistrict,
          subDistrict: this.selectTambon,
          zipCode: this.zipCode,
        });
        return true;
      }
    },
    async validInfoThird() {
      const success = await this.$refs.generalThirdForm.validate();
      if (!success) {
        return false;
      } else {
        this.$emit("form", {
          receiveVaccine: this.receiveVaccine,
          receiveDate: this.receiveDate,
          disease: this.disease,
          neutered: this.neutered,
        });
        return true;
      }
    },
    async validInfoFourth() {
      let formData = null;
      if (this.isEdit) {
        if (this.imageFile) {
          formData = new FormData();
          formData.append("image", this.imageFile);
        }
      } else {
        if (this.imageFile) {
          formData = new FormData();
          formData.append("image", this.imageFile);
        }
      }

      // const success = await this.$refs.generalFourthForm.validate();

      if (!this.isEdit && !formData) {
        await this.$refs.generalFourthForm.validate();
        return false;
      } else {
        this.$emit("form", {
          formData,
          others: this.others,
        });
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.preview {
  width: 100%;
  max-height: 248px;
  object-fit: cover;
  align-items: center;
  padding: 16px;
}
.article-img {
  img {
    display: flex;
    width: 100%;
    max-height: 248px;
    border-radius: 20px;
    object-fit: cover;
    align-items: center;
  }
}
#edit-article-image {
  display: none;
}
.img-container {
  position: relative;
  .edit-img-btn {
    position: absolute;
    top: 24px;
    right: 24px;
    background-color: $white;
    padding: 10px 14px;
    border-radius: 50px;
  }
}
.valid-form {
  color: $error;
  font-weight: bold;
  font-size: 12px;
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
  cursor: pointer;
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
