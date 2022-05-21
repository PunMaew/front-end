<template>
  <div @click="$emit('click')" :class="`btn ${_fill} ${_fill_search}`">
    <slot></slot>
  </div>
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
  },
  computed: {
    _fill() {
      return this.fill ? "fill" : "";
    },
    _fill_search() {
      return this.fillSearch ? "fillSearch" : "";
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
.fill {
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
  padding: 11px 36px;
  &:hover {
    background-position: right center;
  }
}

.fillSearch {
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
