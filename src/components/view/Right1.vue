<template>
  <div class="container">
    <div class="title">设备耗电量：</div>
    <div id="right1" style="width: 400px; height: 300px"></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { ref, onMounted, watch } from "vue";

import { mainStore } from "@/stores/index";
import { storeToRefs } from "pinia";

const store = mainStore();
const { activeCity } = storeToRefs(store);

watch(activeCity, (newValue, oldValue) => {
  createChart();
});

function createChart() {
  var chartDom = document.getElementById("right1");
  var myChart = echarts.init(chartDom);
  var option;

  // 最近五天的
  let date = ref(getRecentFiveDays());

  function getRecentFiveDays() {
    const today = new Date(); // 获取当前日期
    const recentFiveDays = [];

    for (let i = 4; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i); // 依次减去天数获取最近五天的日期
      const month = String(date.getMonth() + 1).padStart(2, "0"); // 月份补零
      const day = String(date.getDate()).padStart(2, "0"); // 日补零
      const formattedDate = `${month}-${day}`; // 格式化为 "mm-dd"
      recentFiveDays.push(formattedDate);
    }

    return recentFiveDays;
  }

  option = {
    aria: {
      //无障碍花纹
      decal: {
        show: true,
      },
      enabled: true,
    },
    xAxis: {
      type: "category",
      data: date.value,
      name: "日期",
      nameTextStyle: {
        fontFamily: "alimama",
        fontSize: "12px",
      },
      axisLine: {
        show: true, // 隐藏横轴线
      },
    },
    yAxis: {
      type: "value",
      show: true,
      name: "耗电量/Kw",
      nameTextStyle: {
        fontFamily: "alimama",
        fontSize: "16px",
      },
      axisLine: {
        show: true, // 隐藏横轴线
      },
      splitLine: {
        show: false, // 隐藏横轴刻度线
      },
    },
    tooltip: {
      show: true,
      trigger: "axis",
    },

    series: [
      {
        data: activeCity.value.power,
        type: "line",
        smooth: true,
        itemStyle: {
          color: function (params) {
            var colorList = [
              "#59c4e6",
              "#edafda",
              "#93b7e3",
              "#a5e7f0",
              "#cbb0e3",
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
.title {
  height: 20px;
  margin-top: 5px;
  font-size: 18px;
  font-family: alimama;
}
</style>