<template>
  <div class="container">
    <div class="title">综合水质等级:</div>
    <div id="main" class="main" :style="{width: clientWidth2*0.45+'px', height: '310px'}"></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted  , watch , ref} from "vue";
import { mainStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
const store = mainStore()
const { activeCity , clientWidth2 } = storeToRefs(store)

watch(activeCity , (newValue , oldValue) => {
  createChart()
})
function createChart() {
  var chartDom = document.getElementById("main");
  if (chartDom) {
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      aria: {
        decal: {
          show: true
        }
      },
      series: [
        {
          type: "gauge",
          center: ['50%' , '50%'],
          progress: {
            show: true,
            width: 14,
          },
          axisLine: {
            lineStyle: {
              width: 14,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 2,
              color: "#999",
            },
          },
          axisLabel: {
            distance: 25,
            color: "#999",
            fontSize: 20,
            fontFamily: "alimama"
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
              borderWidth: 10,
            },
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            fontSize: 50,
            offsetCenter: [0, "70%"],
            color: "#d9ecff",
            fontFamily: "alimama"
          },
          data: [
            {
              value: activeCity.value.level,
            },
          ],
          min: 1 , 
          max: 5,
          splitNumber: 4,
        },
      ],
    };
 
    option && myChart.setOption(option);
    window.addEventListener('resize' , function() {
      myChart.resize()
    })
    
  }
}

onMounted(() => {
  createChart();
});
</script>

<style lang="scss" scoped>
.title {
  margin-top: 5px;
  margin-left: 10px;
  font-size: 20px;
  font-family: alimama;
}
</style>
