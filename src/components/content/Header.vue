<template>
  <div class="container">
    <el-menu mode="horizontal" class="header" router :default-active="page" @select="handleSelect">
      <el-menu-item class="header-item" index="1">
        <img src="@/assets/icon/introduce.png" class="item-img" alt="">
        项目介绍
      </el-menu-item>
      <el-menu-item class="header-item" index="2">
        <img src="@/assets/icon/data.png" class="item-img" alt="">
        数据总览
      </el-menu-item>
      <el-menu-item class="header-item" index="3">
        <img src="@/assets/icon/device.png" class="item-img" alt="">
        设备
      </el-menu-item>
    </el-menu>
  </div>  
</template>

<script setup>
import {ref} from "vue"

import {onMounted} from "vue"
import { mainStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
const store = mainStore()
const { page } = storeToRefs(store)


function handleIndex(){
  let activeIndex = window.localStorage.getItem("activePage")
  if(activeIndex) {
    page.value = activeIndex
  }
  else {
    window.localStorage.setItem("activePage" , "1")
  }
}

function handleSelect(e) {
  page.value = e
  window.localStorage.setItem("activePage" , e)
}

onMounted(() => {
  handleIndex()
})
</script>

<style lang="scss" scoped>

.header {
  font-family: alimama;
  padding-right: 20px;
  display: flex;
  justify-content: right;
  border: 1px solid #ecf5ff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  .header-item {
    margin-left: 10px;
    font-size: 16px;
    .item-img {
      width: 20px;
    }
  }
}
</style>