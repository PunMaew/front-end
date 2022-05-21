<template>
  <section>
    <div :progress="progress" v-if="progress.generalInfo === 1">
      <div class="input-area">
        <p>ชื่อแมว<span>*</span></p>
        <input type="text" placeholder="กรุณากรอกชื่อแมว" />
      </div>
      <div class="input-area mt-4">
        <p>สี<span>*</span></p>
        <input type="text" placeholder="กรุณากรอกสี" />
      </div>
      <div class="input-area mt-4">
        <p>สายพันธุ์</p>
        <input type="text" placeholder="กรุณากรอกสายพันธุ์" />
      </div>
      <div class="input-area mt-4">
        <p>อายุ<span>*</span></p>
        <input type="text" placeholder="กรุณากรอกอายุ" />
      </div>
      <div>
        <div class="input-area mt-4">
          <p>เพศ<span>*</span></p>
        </div>
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
    <div :progress="progress" v-else-if="progress.generalInfo === 2">
      <div class="input-area">
        <p>จังหวัด<span>*</span></p>
        <input type="text" placeholder="กรุณากรอกชื่อแมว" />
      </div>
      <div class="input-area mt-4">
        <p>เขต/อำเภอ<span>*</span></p>
        <input type="text" placeholder="กรุณากรอกชื่อแมว" />
      </div>
      <div class="input-area mt-4">
        <p>แขวง/ตำบล<span>*</span></p>
        <input type="text" placeholder="กรุณากรอกชื่อแมว" />
      </div>
      <div class="input-area mt-4">
        <p>รหัสไปรษณีย์<span>*</span></p>
        <input type="text" placeholder="กรุณากรอกชื่อแมว" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    progress: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-input__slot {
  margin-bottom: 0px;
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
  input {
    width: 100%;
    background-color: $light;
    padding: 7px 20px;
    font-size: 14px;
    border-radius: 50px;
  }
  textarea {
    width: 100%;
    min-height: 152px;
    background-color: $light;
    padding: 14px 24px;
    font-size: 16px;
    border-radius: 10px;
  }
}
</style>
