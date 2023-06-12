<template>
  <div class="container">
    <div class="title">
      <div class="text">地区污染指数</div>
      <el-select
        class="select"
        @change="handleChange"
        placeholder="选择"
        size="large"
      >
        <el-option
          v-for="item in localStreets"
          :key="item.name"
          :label="item.name"
          :value="item"
        />
      </el-select>
    </div>
    <div id="right2" :style="{width: clientWidth2*0.45+'px', height: '380px'}"></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, watch, ref } from "vue";

import { mainStore } from "@/stores/index";
import { storeToRefs } from "pinia";

const store = mainStore();
const { activeCity  , clientWidth2 } = storeToRefs(store);

let a = JSON.stringify(activeCity.value.streets);
let b = JSON.parse(a);
let localStreets = ref(b);

watch(activeCity, (newValue, oldValue) => {
  // console.log;
  let a = JSON.stringify(activeCity.value.streets);
  let b = JSON.parse(a);
  localStreets.value = b;
});

let selectList = [
  {
    name: "岭南街道",
    value: "23",
  }
];
let res = {
  names: ["岭南街道"],
  values: ["23"]
}

function handleChange(e) {
  if(selectList.length>=5) {
    ElMessage({
      showClose: true,
      message: '最多选择5个',
      type: 'warning'
    })
    return;
  }
  // 点击选择的同时添加到数组中
  addItem(selectList,e)
  res = extractNameAndValue(selectList)

  createChart()
}

function addItem(array, newItem) {
  let exists = false;
  // console.log(array , newItem);
  for (let i = 0; i < array.length; i++) {
    if (array[i].name == newItem.name) {
      // 若已存在相同 name 属性的对象，则不进行添加
      exists = true;
      break;
    }
  }

  if (exists) {
    // 若存在相同 name 属性的对象，则打印提示
    ElMessage({
      showClose: true,
      message: '重复选择',
      type: 'warning'
    })
  } else {
    // 若不存在相同 name 属性的对象，则添加到数组中
    array.push(newItem);
  }
}

function extractNameAndValue(array) {
  const names = array.map((item) => item.name);
  const values = array.map((item) => item.value);

  return {
    names,
    values,
  };
}

function createChart() {
  var chartDom = document.getElementById("right2");
  var myChart = echarts.init(chartDom);
  var option;

  option = {
  aria: {
    // 无障碍设置
    decal: {
      show: true,
    },
    enabled: true,
  },
  xAxis: {
    type: "category",
    data: res.names,
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 100,
    interval: 20,
  },
  tooltip: {
    show: true,
    trigger: "axis",
  },
  series: [
    {
      data: res.values,
      type: "bar",
      itemStyle: {
        color: function (params) {
          var colorList = [
            "#f98373",
            "#faf1ba",
            "#93b7e3",
            "#a5e7f0",
            "#cbb0e3",
          ];
          return colorList[params.dataIndex];
        },
      },
      emphasis: {
        itemStyle: {
          // 鼠标经过高亮样式
          opacity: 0.7,
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
  .title {
    margin-top: 5px;
    height: 40px;
    display: flex;
    justify-content: space-between;

    .text {
      font-size: 18px;
      font-family: alimama;
    }
    .select {
      width: 200px;
    }
  }
}
</style>