<template>
  <div class="homeContainer">
    <div class="title">濯污扬清-基于个性化深度学习的节能型水质检测系统</div>
    <swiper class="swiper_container">
      <swiper-slide><img  src="../assets/images/swiper1.png" alt=""></swiper-slide>
      <swiper-slide><img  src="../assets/images/swiper2.png" alt=""></swiper-slide>
      <swiper-slide><img  src="../assets/images/swiper3.png" alt=""></swiper-slide>
      <swiper-slide><img  src="../assets/images/swiper4.png" alt=""></swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {ref , onMounted } from "vue"
import "swiper/css";
import { mainStore } from '@/stores/index'
import { storeToRefs } from 'pinia'

const store = mainStore()
const { clientWidth1 } = storeToRefs(store)
console.log(clientWidth1);


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
    let scale1 = clientSize.width / screenSize.width;
    let scale2 = clientSize.height / screenSize.height;

   if(document.querySelector(".homeContainer")) {
    document.querySelector(".homeContainer").style.width = screenSize.width + 'px'
    // document.querySelector(".viewContainer").style.height = screenSize.height + 'px'
    document.querySelector(".homeContainer").style.transform = `scaleX(${scale1}) scaleY(${scale2})`
   }
  }
  setSize();
  window.addEventListener("resize", function () {
    setSize();
  });
});

</script>

<style lang="scss" scoped>
@import "swiper/swiper-bundle.css";
.homeContainer {
  transform-origin: top left;
  z-index: 999;
  position: absolute;
  top: 12vh;
  .title {
    margin: 20px 0;
    position: relative;
    left: 50%;
    font-size: 30px;
    font-family: alimama;
    text-align: center;

    transform: translateX(-50%);
  }
  .swiper_container {
    position: relative;
    width: 95%;
    
    img {
      width: 100%;
    }
  }
}
</style>