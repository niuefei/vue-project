<template>
  <div class="container">
    <div id="map" style="width: 100%; aspect-ratio: 1"></div>
  </div>
</template>


<script  setup>
import AMapLoader from "@amap/amap-jsapi-loader";
import { useRouter } from "vue-router";
import * as echarts from "echarts";
import "echarts-extension-amap"; // 高德地图坐标系插件
const router = useRouter();

initMap();

function initMap() {
  window._AMapSecurityConfig = {
    securityJsCode: "42ed8d14645c34ae523f8f7ce24c3271",
  };
  AMapLoader.load({
    key: "656faef17032743e830093a6e7062424", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.Geocoder"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  }).then((AMap) => {
    const map = new AMap.Map("map", {
      zoom: 10.5,
      center: [113.18, 23.09],
      mapStyle: "amap://styles/45fd94ec550ef43811dab13031e19287",
    });
    const marker = new AMap.Marker({
      position: [113,23],
      map: map,
      clickable: true, // 设置图标可点击
    });

    marker.on("mouseover" , function() {
      console.log("鼠标经过");
    })

  });
}
</script>

<style>
.amap-container {
  width: 100%;
  aspect-ratio: 0.99;
  position: relative !important;
}
</style>