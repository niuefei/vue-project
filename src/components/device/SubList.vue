<template>
  <div class="container">
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      
    >

      <el-sub-menu :index="item.areaCode" v-for="item in data" :key="item">
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="item2.index" @click="handleSelect(item2)" v-for="item2 in item.devices" :key="item2">{{ item2.name }}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>



    </el-menu>
  </div>
</template>

<script setup>

import { mainStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
const store = mainStore()
const { activeDeviceCode } = storeToRefs(store)

import { ref } from "vue"
let data = ref([])
data.value = [
  {
    name: "区域1",
    areaCode: 1,
    devices: [
      {
        name: "设备1",
        deviceCode: 1,
        index: "1-1"
      },
      {
        name: "设备2",
        deviceCode: 2,
        index: '1-2'
      },

    ]
  },
  {
    name: "区域2",
    areaCode: 2,
    devices: [
      {
        name: "设备3",
        deviceCode: 3,
        index: '2-1'
      },
      {
        name: "设备4",
        deviceCode: 4,
        index: '2-2'
      },

    ]
  },
  ];

  // 事件处理函数
  function handleSelect(e) {
    // console.log(e);
    activeDeviceCode.value = e.deviceCode
  }
  function handleOpen() {

  }
  function handleClose() {
    
  }
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
  border-radius: 10px;
  width: 200px;
}
</style>