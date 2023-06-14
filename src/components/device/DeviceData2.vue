<template>
  <div class="container" :style="{ width: clientWidth1 - 400 + 'px' }">
    <div class="title">当前设备检测数据</div>
    <div class="list-wrapper">
      <div class="list-title">
        <div class="title-item">检测类型</div>
        <div class="title-item">数据大小</div>
        <div class="title-item">数据状态</div>
      </div>
      <div class="list-content">
        <div
          class="content-item"
          v-for="item in activeDevice.data1"
          :key="item"

        >
          <div>{{ item.name }}</div>
          <div>{{ item.value }}</div>
          <div>{{ item.status }}</div>          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref , onMounted } from 'vue'
import { mainStore } from "@/stores/index";
import { storeToRefs } from "pinia";
import { time } from 'echarts';
const store = mainStore();
const { clientWidth1, activeDevice , devices } = storeToRefs(store);


let timerId; // 全局变量用于存储定时器 ID

function updateValues(obj) {
  const data = obj.data1;

  for (let i = 0; i < data.length; i++) {
    if (data[i].type === 1) {
      const random = Math.floor(Math.random() * 3); // 随机生成 0、1、2
      const valueChange = random === 0 ? -0.1 : random === 1 ? 0.1 : 0; // 随机决定增加、减少或不变

      let newValue = data[i].value + valueChange;
      newValue = Math.round(newValue * 10) / 10; // 保留一位小数

      data[i].value = newValue;
    }
  }

  console.log(obj); // 输出更新后的对象


  // 每3秒调用一次updateValues函数
  timerId = setTimeout(() => {
    updateValues(obj);
  }, 60000);
}


onMounted(() => {
  for(let i = 0 ; i < devices.value.length ; i++) {
    console.log(i);
    updateValues(devices.value[i])
  }
})

</script>

<style lang="scss" scoped>
.container {
  width: calc(100% - 400px);
  font-family: alimama;
  .title {
      font-size: 28px;
      margin-bottom: 20px;
    }
  .list-wrapper {
    border: 1px solid rgba(25, 186, 139, 0.2);
    border-radius: 15px;
    .list-title {
      padding: 10px 0;
      margin-bottom: 20px;
      display: flex;     
      border-bottom: 1px solid rgba(25, 186, 139, 0.2);
      .title-item {
        flex: 1;
        text-align: center;
        font-size: 24px;
      }
    }
    .content-item:nth-child(odd) {
      background-color: rgba(15,23,34,.5);
      &:hover {
      background-color: rgba(15,23,34,1);
      div {
        font-size: 20px;
      }
      }
    }
    .content-item:nth-child(even) {
      background-color: rgba(28,39,53,.5);
      &:hover {
      background-color: rgba(28,39,53,1);
      div {
        font-size: 20px;
      }
      }
    }
    .list-content {
      margin-bottom: 20px;
    }
    .content-item {
      padding: 20px 0;
      // border: 1px solid red;
      display: flex;
      transition: all 0.5s;
      div {
        height: 30px;
        line-height: 30px;
        flex: 1;
        text-align: center;
        font-size: 18px;
        // border: 1px solid red;
      transition: all 0.5s;

      }
    }
  }
}
</style>