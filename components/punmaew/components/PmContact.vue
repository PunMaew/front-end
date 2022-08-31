<template>
  <section>
    <div class="input-area">
      <p>ชื่อผู้ติดต่อ<span>*</span></p>
      <input type="text" placeholder="กรุณากรอกชื่อจริง" />
    </div>
    <div class="input-area mt-2">
      <p>เบอร์โทรศัพท์<span>*</span></p>
      <input type="text" placeholder="กรุณากรอกสี" />
    </div>
    <div class="input-area mt-2">
      <p>Facebook</p>
      <input type="text" placeholder="กรุณากรอกสายพันธุ์" />
    </div>
    <div class="input-area mt-2">
      <p>Line</p>
      <input type="text" placeholder="กรุณากรอกอายุ" />
    </div>
  </section>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="scss" scoped>
.step-text {
  font-size: 12px;
  font-weight: bold;
  color: $gray;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 12px;
}
.upload-image {
  position: relative;
  min-height: 109px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23333' stroke-width='1' stroke-dasharray='3' stroke-dashoffset='22' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 8px;
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
    font-size: 16px;
    border-radius: 10px;
  }
  textarea::placeholder {
    font-size: 14px;
    color: $gray;
  }
}
</style>
