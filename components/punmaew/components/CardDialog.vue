<template>
  <v-dialog persistent v-model="dialog" max-width="540">
    <div class="set-bg-otp">
      <slot name="title"></slot>
      <slot name="description"></slot>
      <slot name="content"></slot>
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
