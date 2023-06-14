<template>
  <div class="container">
    <Header-2/>
    <router-view class="view"></router-view>
    <Particles
      id="tsparticles"
      class="login-particles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    ></Particles>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { options } from "./utils/bg";
import { loadFull } from "tsparticles";
import { getClient } from "@/utils/windowSize";
import { mainStore } from '@/stores/index'
import { storeToRefs } from 'pinia'

const store = mainStore()
const { clientWidth2 , clientWidth1 } = storeToRefs(store)


getClient();
const particlesInit = ref();
particlesInit.value = async (engine) => {
  await loadFull(engine);
};
let client = ref({
  width: 0,
  height: 0,
});
const particlesLoaded = ref();
particlesLoaded.value = async (container) => {};

onMounted(() => {
  document.body.style.setProperty('--el-text-color-primary', 'rgba(142, 193, 205, 1)');
  document.body.style.setProperty('--el-text-color-regular', 'rgba(142, 193, 205, 1)');
  document.body.style.setProperty('--el-fill-color-blank', 'transparent');
  document.body.style.setProperty('--el-bg-color-overlay', 'rgba(9, 53, 57, 0.95)');
  document.body.style.setProperty('--el-color-primary', 'rgba(24, 149, 142, 1)');
  document.body.style.setProperty('--el-border-color-extra-light', 'rgba(24, 149, 142, 0.1)');
  document.body.style.setProperty('--el-disabled-bg-color', 'rgba(24, 149, 142, 0.1)');
  document.body.style.setProperty('--el-disabled-border-color', 'rgba(24, 149, 142, 0.1)');
  document.body.style.setProperty('--el-border-color', 'rgba(12, 105, 115, 1)');
  document.body.style.setProperty('--el-border-color-light', 'rgba(50, 205, 220, 1)');
  document.body.style.setProperty('--el-border-color-lighter', 'rgba(12, 105, 115, 1)');
  document.body.style.setProperty('--el-fill-color-light', 'rgba(15, 83, 95, 1)');
  function setSize() {
    let screenSize = {
      width: screen.width,
      height: screen.height,
    };
    clientWidth2.value =  screenSize.width - 700;
    clientWidth1.value = screenSize.width
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

    // header的宽度时刻保持
    document.querySelector(".header2").style.width = screenSize.width + "px";
    document.querySelector(
      ".header2"
    ).style.transform = `scaleY(${scale2}) scaleX(${scale1}) `;
  }
  setSize();
  window.addEventListener("resize", function () {
    setSize();
  });
});
</script>

<style scoped lang="scss">

</style>
