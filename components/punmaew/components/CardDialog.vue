<template>
  <v-dialog persistent v-model="dialog" max-width="540">
    <div class="set-bg-otp">
      <slot name="title"></slot>
      <slot name="description"></slot>
      <slot name="content"></slot>
      <!-- <slot name="footer"></slot> -->
    </div>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.set-bg-otp {
  background-color: $white;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  padding: 40px;
}
</style>

<!-- <v-dialog v-model="dialog2" max-width="540">
                                  <div class="set-bg-otp">
                                    <p class="otp-title">รีเซ็ตรหัสผ่าน</p>
                                    <p class="otp-text">
                                      กรุณากรอกอีเมลเพื่อรับรหัส OTP
                                      สำหรับรีเซ็ตรหัสผ่าน
                                    </p>
                                    <validation-provider
                                      rules="required"
                                      v-slot="{ errors }"
                                    >
                                      <input
                                        v-model="email"
                                        type="text"
                                        placeholder="กรุณากรอกอีเมล"
                                        name="email"
                                      />
                                      <span class="valid-form">
                                        {{ errors[0] }}
                                      </span>
                                    </validation-provider>
                                    <base-button
                                      :fillSearch="true"
                                      class="mt-6"
                                      @click="dialog3 = true"
                                    >
                                      ส่งรหัส OTP
                                    </base-button>
                                  </div>
</v-dialog> -->
