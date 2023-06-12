<template>
  <div class="contaienr">
    <div id="device1" style="width: 500px; height: 500px"></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { ref, onMounted } from "vue";

function createChart() {
  var option;
  var chartDom = document.getElementById("device1");
  var myChart = echarts.init(chartDom);
  option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
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