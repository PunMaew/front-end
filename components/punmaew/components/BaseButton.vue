<template>
  <button
    :type="type"
    @click="$emit('click')"
    :class="`btn ${_fill} ${_fill_search} ${_outline}`"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    fill: {
      type: Boolean,
      default: false,
    },
    fillSearch: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "button",
    },
  },
  computed: {
    _fill() {
      return this.fill ? "fill" : "";
    },
    _fill_search() {
      return this.fillSearch ? "fillSearch" : "";
    },
    _outline() {
      return this.outline ? "outline" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 50px;
  color: $white;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
.outline {
  width: 100%;
  padding: 9px 20px;
  font-size: 12px;
  font-weight: bold;
  background-color: $white;
  color: $yellow-dark;
  border: 2px solid transparent;
  border-radius: 50px;
  background: linear-gradient(to right, white, white),
    linear-gradient(to right, rgba(253, 196, 84, 1), rgba(255, 148, 116, 1));
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  @media (min-width: 1440px) {
    // width: 55%;
    padding-top: 14px;
    padding-bottom: 14px;
    font-size: 18px;
  }
}
.fill {
  // border-radius: 50px;
  background-image: linear-gradient(
    to right,
    #609fff 0%,
    #93a3ff 51%,
    #609fff 100%
  );
  background-size: 200% auto;
  transition: 0.5s;
  box-shadow: 0px 4px 15px rgba(105, 161, 255, 0.5);
  width: 160px;
  padding: 10px 12px;
  &:hover {
    background-position: right center;
  }
}

.fillSearch {
  // border-radius: 50px;
  background-image: linear-gradient(
    to right,
    #ff9474 0%,
    #fdc454 51%,
    #ff9474 100%
  );
  background-size: 200% auto;
  transition: 0.5s;
  box-shadow: 0px 4px 15px #ffcab4;
  border-radius: 50px;
  width: 100%;
  color: $white;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  justify-content: center;
  &:hover {
    background-position: right center;
  }
  img {
    width: 15px !important;
    margin-right: 5px;
  }
  @media (min-width: 1440px) {
    // width: 55%;
    padding-top: 14px;
    padding-bottom: 14px;
    font-size: 18px;
    img {
      width: 20px !important;
      margin-right: 12px;
    }
  }
}
</style>
