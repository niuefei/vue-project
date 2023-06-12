<template>
  <div class="container">
    <div class="title">截止时间: {{ dateString }}</div>
    <div
      id="left4"
      :style="{ width: clientWidth2 * 0.45 + 'px', height: '269px' }"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import * as echarts from "echarts";
import { mainStore } from "@/stores/index";
import { storeToRefs } from "pinia";

const store = mainStore();
const { activeCity, clientWidth2 } = storeToRefs(store);

const dateString = ref(getToday());

// 获取当天
function getToday() {
  const date = ref();
  date.value = new Date();
  let str1 = date.value.toLocaleDateString();
  let arr = str1.split("/");
  let str2 = arr.join(".");
  return str2;
}

function createChart() {
  var chartDom = document.getElementById("left4");
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    aria: {
      decal: {
        show: true,
      },
    },
    color: ["#bb86fc", "#04e3fc"],
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
      textStyle: {
        color: "#FAFAFA",
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
            color: "#FAFAFA",
            fontFamily: "alimama",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: activeCity.value.processedCount, name: "已处理" },
          { value: activeCity.value.untreatedCount, name: "未处理" },
        ],
        // 自定义样式，设置多种条纹
        graphic: [
          {
            type: "pattern",
            shape: "rect",
            x: 0,
            y: 0,
            width: 10,
            height: 10,
            repeat: "repeat",
            style: {
              fill: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                { offset: 0, color: "#FF0000" },
                { offset: 0.5, color: "#FF0000" },
                { offset: 0.5, color: "#0000FF" },
                { offset: 1, color: "#0000FF" },
              ]),
            },
          },
          {
            type: "pattern",
            shape: "rect",
            x: 0,
            y: 0,
            width: 10,
            height: 10,
            repeat: "repeat",
            style: {
              fill: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                { offset: 0, color: "#FFFF00" },
                { offset: 0.5, color: "#FFFF00" },
                { offset: 0.5, color: "#00FF00" },
                { offset: 1, color: "#00FF00" },
              ]),
            },
          },
        ],
      },
    ],
  };

  option && myChart.setOption(option);
}
onMounted(() => {
  createChart();
});

// 获得当天时间
</script>

<style lang="scss" scoped>
.container {
  .title {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 20px;
    font-family: alimama;
  }
}
</style>