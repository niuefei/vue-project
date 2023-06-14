<template>
  <div class="container">
    <el-menu
      background-color="#1E2E48"
      default-active="0-0"
      text-color="#FFFFFF"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
    >
      <el-sub-menu index="0">
        <template #title>
          <a href="javascript:;" style="font-family: alimama; font-size: 18px;">实验地1</a>
        </template>
        <el-menu-item index="0-0" style="font-family: alimama;">设备1</el-menu-item>
        <el-menu-item index="0-1" style="font-family: alimama;">设备2</el-menu-item>
        <el-menu-item index="0-2" style="font-family: alimama;">设备3</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="1">
        <template #title>
          <a href="javascript:;" style="font-family: alimama; font-size: 18px;">实验地2</a>

        </template>
        <el-menu-item index="1-0" style="font-family: alimama;">设备1</el-menu-item>
        <el-menu-item index="1-1" style="font-family: alimama;">设备2</el-menu-item>
        <el-menu-item index="1-2" style="font-family: alimama;">设备3</el-menu-item>
        <el-menu-item index="1-3" style="font-family: alimama;">设备4</el-menu-item>

      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <a href="javascript:;" style="font-family: alimama; font-size: 18px;">实验地3</a>

        </template>
        <el-menu-item index="2-0" style="font-family: alimama;">设备1</el-menu-item>
        <el-menu-item index="2-1" style="font-family: alimama;">设备2</el-menu-item>
        <el-menu-item index="2-2" style="font-family: alimama;">设备3</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <a href="javascript:;" style="font-family: alimama; font-size: 18px;">实验地4</a>
        </template>
        <el-menu-item index="3-0" disabled style="font-family: alimama;">设备1</el-menu-item>
        <el-menu-item index="3-1" disabled style="font-family: alimama;">设备2</el-menu-item>
        <el-menu-item index="3-2" disabled style="font-family: alimama;">设备3</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>
          <a href="javascript:;" style="font-family: alimama; font-size: 18px;">实验地5</a>
        </template>
        <el-menu-item index="5-0" disabled style="font-family: alimama;">设备1</el-menu-item>
        <el-menu-item index="5-1" disabled style="font-family: alimama;">设备2</el-menu-item>
        <el-menu-item index="5-2" disabled style="font-family: alimama;">设备3</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>
          <a href="javascript:;" style="font-family: alimama; font-size: 18px;">实验地6</a>
        </template>
        <el-menu-item index="6-0" disabled style="font-family: alimama;">设备1</el-menu-item>
        <el-menu-item index="6-1" disabled style="font-family: alimama;">设备2</el-menu-item>
        <el-menu-item index="6-2" disabled style="font-family: alimama;">设备3</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>
          <a href="javascript:;" style="font-family: alimama; font-size: 18px;">实验地7</a>
        </template>
        <el-menu-item index="7-0" disabled style="font-family: alimama;">设备1</el-menu-item>
        <el-menu-item index="7-1" disabled style="font-family: alimama;">设备2</el-menu-item>
        <el-menu-item index="7-2" disabled style="font-family: alimama;">设备3</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="8">
        <template #title>
          <a href="javascript:;" style="font-family: alimama; font-size: 18px;">实验地8</a>
        </template>
        <el-menu-item index="8-0" disabled style="font-family: alimama;">设备1</el-menu-item>
        <el-menu-item index="8-1" disabled style="font-family: alimama;">设备2</el-menu-item>
        <el-menu-item index="8-2" disabled style="font-family: alimama;">设备3</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="9">
        <template #title>
          <a href="javascript:;" style="font-family: alimama; font-size: 18px;">实验地9</a>
        </template>
        <el-menu-item index="9-0" disabled style="font-family: alimama;">设备1</el-menu-item>
        <el-menu-item index="9-1" disabled style="font-family: alimama;">设备2</el-menu-item>
        <el-menu-item index="9-2" disabled style="font-family: alimama;">设备3</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="10">
        <template #title>
          <a href="javascript:;" style="font-family: alimama; font-size: 18px;">实验地10</a>
        </template>
        <el-menu-item index="10-0" disabled style="font-family: alimama;">设备1</el-menu-item>
        <el-menu-item index="10-1" disabled style="font-family: alimama;">设备2</el-menu-item>
        <el-menu-item index="10-2" disabled style="font-family: alimama;">设备3</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="11">
        <template #title>
          <a href="javascript:;" style="font-family: alimama; font-size: 18px;">实验地11</a>
        </template>
        <el-menu-item index="11-0" disabled style="font-family: alimama;">设备1</el-menu-item>
        <el-menu-item index="11-1" disabled style="font-family: alimama;">设备2</el-menu-item>
        <el-menu-item index="11-2" disabled style="font-family: alimama;">设备3</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="12">
        <template #title>
          <a href="javascript:;" style="font-family: alimama; font-size: 18px;">实验地12</a>
        </template>
        <el-menu-item index="12-0" disabled style="font-family: alimama;">设备1</el-menu-item>
        <el-menu-item index="12-1" disabled style="font-family: alimama;">设备2</el-menu-item>
        <el-menu-item index="12-2" disabled style="font-family: alimama;">设备3</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="13">
        <template #title>
          <a href="javascript:;" style="font-family: alimama; font-size: 18px;">实验地13</a>
        </template>
        <el-menu-item index="13-0" disabled style="font-family: alimama;">设备1</el-menu-item>
        <el-menu-item index="13-1" disabled style="font-family: alimama;">设备2</el-menu-item>
        <el-menu-item index="13-2" disabled style="font-family: alimama;">设备3</el-menu-item>
      </el-sub-menu>  
      
    </el-menu>
  </div>
</template>

<script setup>
import { mainStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
const store = mainStore()
const { devices , activeDevice } = storeToRefs(store)
activeDevice.value = devices.value[0]
let arr = devices.value
function handleSelect(e) {
  activeDevice.value = findObjectById(arr, e)
  
}

function findObjectById(array, id) {
  return array.find(obj => obj.id === id);
}
</script>

<style lang="scss" scoped>
.container {
  width: 300px;
}
</style>