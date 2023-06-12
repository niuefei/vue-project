<template>
  <div class="container">
    <el-menu
      background-color="#1E2E48"
      default-active="0"
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
        <el-menu-item index="3-0" style="font-family: alimama;">设备1</el-menu-item>
        <el-menu-item index="3-1" style="font-family: alimama;">设备2</el-menu-item>
        <el-menu-item index="3-2" style="font-family: alimama;">设备3</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { mainStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
const store = mainStore()
const { activeDeviceCode } = storeToRefs(store)

function handleSelect(e) {
  activeDeviceCode.value = e
}
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid red;
  position: sticky;
  top: 0;
  width: 300px;
}
</style>