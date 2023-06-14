<template>
  <div class="contaienr">
    <div
      id="device1"
      :style="{ width: clientWidth1 - 450 + 'px', aspectRatio: 1.5 }"
    ></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted , watch } from "vue";

import { mainStore } from "@/stores/index";
import { storeToRefs } from "pinia";
const store = mainStore();
const { clientWidth1 , activeDevice } = storeToRefs(store);

watch(activeDevice , (newValue , oldValue) => {
  createChart()
})

function createChart() {
  var option;
  var chartDom = document.getElementById("device1");
  var myChart = echarts.init(chartDom);
  option = {
    aria: {
      decal: {
        show: true,
      },
    },
    xAxis: {
      type: "category",
      data: ["浊度", "TDS", "COD", "BOD", "氨氮", "PH", "铅金属含量"],
      axisLabel: {
        textStyle: {
          color: "#FFFFFF", // 文字颜色
          fontSize: 14, // 文字大小
          fontWeight: "bold", // 文字粗细
          fontFamily: "alimama",
        },
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: activeDevice.value.data1,
        type: "bar",
        itemStyle: {
          color: function (params) {
            var colorList = [
              "#59c4e6",
              "#edafda",
              "#93b7e3",
              "#a5e7f0",
              "#cbb0e3",
              "#f8b19c",
              "#aac8e3",
            ];
            return colorList[params.dataIndex];
          },
        },
      },
    ],
  };

  option && myChart.setOption(option);
}
onMounted(() => {
  createChart();
});
</script>

<style lang="scss" scoped>
.container {
}
</style>