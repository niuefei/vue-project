<template>
  <div class="viewContainer">
    <div class="left_container">
      <Panel><left-1 /></Panel>
      <div class="left2_container">
        <Panel class="left2">
          <left-2 />
        </Panel>
      </div>
      <Panel><left-4 /></Panel>
    </div>

    <div class="center_container">
      <div class="map_title">广州市地图</div>
      <Panel class="map_container" style="height: 715px;"><Map class="map" /></Panel>
    </div>
    <div class="right_container">
      <Panel><right-1 /></Panel>
      <Panel><right-2 /></Panel>
    </div>
    <div class="container2">
      <Panel style="position: absolute;top: 0;"><bottom-1/></Panel>
      <Panel style="position: absolute;top: 0; left: 540px;"><bottom-2/></Panel>

    </div>
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

   if(document.querySelector(".viewContainer")) {
    console.log(123123);
    document.querySelector(".viewContainer").style.width = screenSize.width + 'px'
    // document.querySelector(".viewContainer").style.height = screenSize.height + 'px'

    document.querySelector(".viewContainer").style.transform = `scaleX(${scale1}) scaleY(${scale2})`

   }
  }
  setSize();
  window.addEventListener("resize", function () {
    setSize();
  });
});
</script>

<style scoped>
.viewContainer {
  border: 1px solid red;
  height: 1220px;
  overflow: hidden;
  position: absolute;
  top: 11vh;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  transform-origin: left top;
}
.left_container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 825px;
  /* border: 1px solid red; */
}
.left2_container {
  display: flex;
  justify-content: space-between;
}
.map_title {
  height: 100px;
  line-height: 100px;
  font-size: 24px;
  font-family: alimama;
  text-align: center;
}
.right_container {
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: space-between;
  width: 430px;
  height: 825px;
  /* border: 1px solid red; */
}
.container2 {
  width: 100%;
  /* border: 1px solid red; */
  position: absolute;
  height: 360px;
  bottom: 20px;
}
</style>