<template>
  <div class="container1">
    <sub-list class="sub-list" />
    <device-data class="device" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
onMounted(() => {
  function setSize() {
    let screenSize = {
      width: screen.width,
      height: screen.height,
    };
    // 获取屏幕的高度
    // console.log(screenSize);
    // 获得可视区size
    let clientSize = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    };
    // console.log(clientSize);
    let scale1 = clientSize.width / screenSize.width;
    let scale2 = clientSize.height / screenSize.height;
    // console.log(scale1, scale2);

    if (document.querySelector(".container1")) {
      console.log(123123);
      document.querySelector(".container1").style.width =
        screenSize.width + "px";
      // document.querySelector(".viewContainer").style.height = screenSize.height + 'px'

      document.querySelector(
        ".container1"
      ).style.transform = `scaleX(${scale1}) scaleY(${scale2})`;
    }
  }
  setSize();
  window.addEventListener("resize", function () {
    setSize();
  });
});
</script>

<style lang="scss" scoped>
.container1 {
  position: absolute;
  top: 11vh;
  border: 1px solid red;  
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  transform-origin: top left;
  .device {
    width: calc(100% - 300px);
  }
}
</style>