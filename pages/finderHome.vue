<template>
  <section class="set-bg-area">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" align-self="center">
          <div class="card-form py-14">
            <v-row justify="center">
              <v-col cols="12">
                <!-- header logo -->
                <div>
                  <v-row justify="center">
                    <v-col cols="3">
                      <div class="logo-img">
                        <v-row justify="center">
                          <v-col cols="9" align-self="center">
                            <img src="@/assets/imgs/logo.png" alt="" />
                          </v-col>
                        </v-row>
                        <p>แบบฟอร์มหาบ้านให้แมว</p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <!-- content -->
                <div>
                  <v-row justify="center">
                    <v-col cols="10" align-self="center">
                      <div class="general-info">
                        <div class="d-flex title">
                          <!-- v-icon -->
                          <p>
                            <span class="fi fi-rr-info"></span> ข้อมูลทั่วไป
                          </p>
                        </div>
                        <div class="content">
                          <v-row justify="center">
                            <v-col cols="6">
                              <div class="input-area">
                                <p>ชื่อแมว<span>*</span></p>
                                <input
                                  type="text"
                                  placeholder="กรุณากรอกชื่อแมว"
                                />
                              </div>
                              <div class="input-area mt-6">
                                <p>สี<span>*</span></p>
                                <input type="text" placeholder="กรุณากรอกสี" />
                              </div>
                              <div class="input-area mt-6">
                                <p>สายพันธ์</p>
                                <input
                                  type="text"
                                  placeholder="กรุณากรอกสายพันธุ์"
                                />
                              </div>
                              <div class="mt-6">
                                <v-row justify="center">
                                  <v-col align-self="center">
                                    <div class="input-area">
                                      <p>อายุ</p>
                                      <input
                                        type="text"
                                        placeholder="กรุณากรอกอายุ"
                                      />
                                    </div>
                                  </v-col>
                                  <v-col align-self="center">
                                    <div>
                                      <div class="input-area">
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
                                  </v-col>
                                </v-row>
                              </div>
                              <div class="input-area mt-6">
                                <p>จังหวัด<span>*</span></p>
                                <input
                                  type="text"
                                  placeholder="กรุณาเลือกจังหวัด"
                                />
                              </div>
                              <div class="input-area mt-6">
                                <p>เขต/อำเภอ<span>*</span></p>
                                <input
                                  type="text"
                                  placeholder="กรุณาเลือกเขต/อำเภอ"
                                />
                              </div>
                              <div class="input-area mt-6">
                                <p>แขวง/ตำบล<span>*</span></p>
                                <input
                                  type="text"
                                  placeholder="กรุณาเลือกแขวง/ตำบล"
                                />
                              </div>
                              <div class="input-area mt-6">
                                <p>รหัสไปรษณีย์<span>*</span></p>
                                <input
                                  type="text"
                                  placeholder="กรุณากรอกรหัสไปรษณีย์"
                                />
                              </div>
                            </v-col>
                            <!--  -->
                            <v-col cols="6">
                              <div class="input-area">
                                <p>
                                  วัคซีนที่เคยได้รับ (ไม่มีกรอก -)<span>*</span>
                                </p>
                                <input
                                  type="text"
                                  placeholder="กรุณากรอกวัคซีนที่เคยได้รับ"
                                />
                              </div>
                              <div class="input-area mt-6">
                                <p>วันที่รับวัคซีน<span>*</span></p>
                                <input
                                  type="text"
                                  placeholder="กรุณากรอกวันที่รับวัคซีน"
                                />
                              </div>
                              <div class="input-area mt-6">
                                <p>โรคประจำตัว (ไม่มีกรอก - )<span>*</span></p>
                                <input
                                  type="text"
                                  placeholder="กรุณากรอกโรคประจำตัว"
                                />
                              </div>
                              <div class="input-area mt-6">
                                <p>การทำหมัน</p>
                                <div class="d-flex">
                                  <!-- <v-radio-group v-model="radioGroup" row> -->
                                  <v-radio-group row>
                                    <v-radio
                                      v-for="i in 2"
                                      :key="i"
                                      :label="
                                        i === 1 ? 'เคยทำหมัน' : 'ไม่เคยทำหมัน'
                                      "
                                      :value="i"
                                    ></v-radio>
                                  </v-radio-group>
                                </div>
                              </div>
                              <div class="input-area mt-10">
                                <p>กรุณาแนบรูปแมว<span>*</span></p>
                                <div class="upload">
                                  <div class="icon-upload">
                                    <i class="fi fi-rr-picture"></i>
                                    <p class="mb-0">
                                      เพิ่มรูป <span>ที่นี่</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="input-area mt-6">
                                <p>รายละเอียดเพิ่มเติม (ถ้ามี)</p>
                                <textarea
                                  placeholder="กรุณากรอกรายละเอียดเพิ่มเติม"
                                  type="text"
                                  class=""
                                />
                              </div>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                  <!-- <v-row justify="center">
                    <v-col cols="10" align-self="center">
                      <v-row justify="center">
                        <v-col cols="6" align-self="center">
                          <div class="general-info">
                            <div class="d-flex title">
                              v-icon
                              <p>ข้อมูลทั่วไป</p>
                            </div>
                            <div class="input-area">
                              <p>ชื่อแมว<span>*</span></p>
                              <input
                                type="text"
                                placeholder="กรุณากรอกชื่อแมว"
                              />
                            </div>
                          </div>
                        </v-col>
                        <v-col cols="6">
                          <p>hello</p>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row> -->
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  layout: "adoption",
};
</script>

<style lang="scss" scoped>
.upload {
  border: 1px dashed #2f3542;
  border-radius: 20px;
  text-align: center;
  width: 100%;
  min-height: 152px;
  position: relative;
  .icon-upload {
    color: $dark;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    i {
      font-size: 53px;
      color: $gray;
    }

    p {
      font-size: 14px;
      font-weight: bold;
    }
    span {
      color: $orange-dark !important;
      text-decoration-line: underline !important;
      font-weight: bold;
    }
  }
}
.v-input--selection-controls {
  margin-top: 0px !important;
  padding-top: 0px !important;
}
.general-info {
  .title {
    p {
      font-size: 20px;
      text-align: left;
    }
  }
  .content {
    .input-area {
      p {
        font-size: 14px;
        margin-bottom: 10px;
        span {
          color: $error;
          font-size: 14px;
        }
      }
      input {
        width: 100%;
        background-color: $light;
        padding: 14px 24px;
        font-size: 16px;
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
  }
}
.card-form {
  background-color: $white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  width: 100%;
  .logo-img {
    img {
      width: 100%;
    }
    p {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }
  }
}
.set-bg-area {
  background-color: $orange-light;
  padding-top: 72px;
  padding-bottom: 72px;
  // height: 100vh;
}
@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>
