<template>
  <div class="container">
    <div class="footer"></div>
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.container {
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
  // border: 1px solid red;
  padding: 10px;
  background-image: url(../../assets/images/line.png);
  background-size: 100% 100%;
  border: 1px solid rgba(25,186,139,0.2);
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: '',
  }
  &::after {
    position: absolute;
    right: 0;
    top: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: '',
  }
  .footer {
    // border: 1px solid red;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    &::before {
    position: absolute;
    left: 0;
    top: -10px;
    width: 10px;
    height: 10px;
    border-left: 2px solid #02a6b5;
    border-bottom: 2px solid #02a6b5;
    content: '',
  }
  &::after {
    position: absolute;
    right: 0;
    top: -10px;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-bottom: 2px solid #02a6b5;
    content: '',
  }
  }
}
</style>