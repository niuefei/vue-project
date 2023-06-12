
<template>
  <div id="map" style="width: 680px; height: 680px"></div>
</template>

<script setup>
import AMapLoader from "@amap/amap-jsapi-loader";
import { useRouter } from "vue-router";
import * as echarts from "echarts";
import "echarts-extension-amap"; // 高德地图坐标系插件
const router = useRouter();
const option = {
  amap: {
    // 高德地图配置
    center: [113.2644, 23.1291], // 地图中心点
    zoom: 9.8, // 地图缩放级别
    viewMode: "3D", // 地图模式
    mapStyle: "amap://styles/fresh", // 地图样式
    pitch: 15, //视角高度
    dragEnable: false, // 是否支持拖拽
    zoomEnable: false, // 是否支持缩放
  },
  animation: true, //是否开启动画
  series: [
    {
      type: "scatter",
      symbolSize: "10",
      color: "#516b91",
      // 使用高德地图坐标系
      coordinateSystem: "amap",
      // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
      data: [
        [113.2644, 23.1291, "越秀区"],
        [113.2144, 23.1028, "荔湾区"],
        [113.313, 23.098, "海珠区"],
        [113.3514, 23.1534, "天河区"],
        [113.2654, 23.1885, "白云区"],
        [113.4858, 23.2028, "黄埔区"],
        [113.387, 22.953, "番禺区"],
        [113.217, 23.4261, "花都区"],
        [113.526, 22.818, "南沙区"],
        [113.5915, 23.5698, "从化区"],
      ],
      encode: {
        value: 2,
      },
      label: {
        show: true,
        fontStyle: "normal",
        fontSize: "16px",
        fontFamily: "AliBold",
        fontWeight: "bold",
        formatter: "{@[2]}", //显示数据带上百分比
        position: "bottom", //控制数据显示位置，‘’right‘’为显示在柱状图右侧
      },
    },
    {
      type: "scatter",
      symbolSize: "10",
      color: "#516b91",
      // 使用高德地图坐标系
      coordinateSystem: "amap",
      // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
      data: [
        [
          113.55,
          22.15,
          "澳门",
          "澳门特别行政区：全区农村居民人均可支配收入为25,198元，农村电商交易额达到了50亿元。",
        ],
        [
          121.41,
          31.18,
          "上海",
          "上海市：全市农村居民人均可支配收入为20,133元，农村电商交易额达到了1,100亿元。",
        ],
      ],
      encode: {
        value: 2,
      },
      label: {
        show: true,
        fontStyle: "normal",
        fontSize: "16px",
        fontFamily: "alimama",
        fontWeight: "bold",
        formatter: "{@[2]}", //显示数据带上百分比
        position: "left", //控制数据显示位置，‘’right‘’为显示在柱状图右侧
      },
    },
  ],
  // 设置 tooltip 属性
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return params.data[3];
    },
  },
};

initMap();

function initMap() {
  window._AMapSecurityConfig = {
    securityJsCode: "42ed8d14645c34ae523f8f7ce24c3271", // 高德地图的code
  };
  AMapLoader.load({
    key: "656faef17032743e830093a6e7062424", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    // plugins:[''], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  }).then((AMap) => {
    console.log(AMap);
    let chart = echarts.init(document.getElementById("map"));
    chart.setOption(option);
    let map = chart.getModel().getComponent("amap").getAMap(); //获取高德地图实例
    // 设置地图样式
    const mapStyle = "amap://styles/darkblue";
    map.setMapStyle(mapStyle);
    // 处理点击事件并且跳转到相应的页面
  });
}
</script>
<style lang="scss" >
.amap-container {
  width: 100%;
  aspect-ratio: 0.99;
  position: relative !important;
}
</style>