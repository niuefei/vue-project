<template>
  <div class="container">
    <div class="title">截止时间: {{ dateString }}</div>
    <div id="left4" style="width: 380px; aspect-ratio: 1.5"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import * as echarts from "echarts";
import { mainStore } from '@/stores/index'
import { storeToRefs } from 'pinia'

const store = mainStore()
const { activeCity } = storeToRefs(store)

const dateString = ref(getToday());

// 获取当天
function getToday() {
  const date = ref();
  date.value = new Date();
  let str1 = date.value.toLocaleDateString()
  let arr = str1.split("/")
  let str2 = arr.join(".")
  return str2
}

function createChart() {
  var chartDom = document.getElementById("left4");
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    color: ["#bb86fc", "#04e3fc"],
    aria: {
      decal: {
        show: true,
      },
    },
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
            fontFamily: "alimama"
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: activeCity.value.processedCount, name: "已处理" },
          { value: activeCity.value.untreatedCount, name: "未处理" },
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