<template>
  <div @click="$emit('click')" :class="`btn ${_outline} ${_fill}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    outline: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    _outline() {
      return this.outline ? "outline" : "";
    },
    _fill() {
      return this.fill ? "fill" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  background: linear-gradient(180deg, #93a3ff 0%, #609fff 100%);

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 50px;
  text-align: center;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;

  width: 160px;
  max-width: 100%;
  & + .btn {
    margin-left: 20px;
  }
  &.disable {
    background: #dcdcdf;
    color: #000;
    box-shadow: none;
    cursor: default;
    &:hover {
      background: #dcdcdf;
      color: #000;
      box-shadow: none;
    }
  }
}

.btn {
  @include box-shadow;
  transition: 0.3s background !important;
  &:hover {
    background: $dark;
  }
}

.btn.btn-cmd {
  width: auto !important;
  font-weight: 300 !important;
  font-size: 14px;
  padding: 8px 15px 5px;
  @media (min-width: 920px) {
    padding-top: 10px;
    padding-bottom: 8px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
