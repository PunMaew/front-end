<template>
  <section>
    <validation-observer ref="contactForm">
      <div class="input-area">
        <p>ชื่อผู้ติดต่อ<span>*</span></p>
        <validation-provider
          name="contactName"
          rules="required"
          v-slot="{ errors }"
        >
          <input
            v-model="contactName"
            name="contactName"
            type="text"
            placeholder="กรุณากรอกชื่อผู้ติดต่อ"
          />
          <span class="valid-form">
            {{ errors[0] }}
          </span>
        </validation-provider>
      </div>
      <div class="input-area mt-2">
        <p>เบอร์โทรศัพท์<span>*</span></p>
        <validation-provider name="tel" rules="required" v-slot="{ errors }">
          <input
            v-model="tel"
            name="tel"
            type="text"
            placeholder="กรุณากรอกเบอร์โทรศัพท์"
          />
          <span class="valid-form">
            {{ errors[0] }}
          </span>
        </validation-provider>
      </div>
      <div class="input-area mt-2">
        <p>Facebook</p>
        <input
          v-model="facebook"
          name="facebook"
          type="text"
          placeholder="กรุณากรอกชื่อ Facebook"
        />
      </div>
      <div class="input-area mt-2">
        <p>Line</p>
        <input
          v-model="line"
          name="line"
          type="text"
          placeholder="กรุณากรอก Line ID"
        />
      </div>
    </validation-observer>
  </section>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    fetchForm: {
      type: Object,
    },
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      contactName: this.isEdit ? this.fetchForm.step3.contactName : "",
      tel: this.isEdit ? this.fetchForm.step3.tel : "",
      facebook: this.isEdit ? this.fetchForm.step3.facebook : "",
      line: this.isEdit ? this.fetchForm.step3.line : "",
    };
  },
  methods: {
    async validContact() {
      const success = await this.$refs.contactForm.validate();
      console.log(success);
      if (!success) {
        return false;
      } else {
        this.$emit("form3", {
          contactName: this.contactName,
          tel: this.tel,
          facebook: this.facebook,
          line: this.line,
        });
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.valid-form {
  color: $error;
  font-weight: bold;
  font-size: 12px;
}
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
