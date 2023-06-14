<template>
  <div class="container header2">
    <el-select class="select" v-if="isView" @change="handleChange" v-model="activeCity.name" placeholder="选择" size="large">
    <el-option
      v-for="item in b"
      :key="item.name"
      :label="item.name"
      :value="item.id"
    />
  </el-select>
    <div class="title">雨水管道管理系统</div>
    <el-menu
      mode="horizontal"
      background-color="#e232e"
      class="header"
      router
      :default-active="page"
      @select="handleSelect"
    >
      <el-menu-item class="header-item" index="1">
        <img src="@/assets/icon/introduce.png" class="item-img" alt="" />
        项目介绍
      </el-menu-item>
      <el-menu-item class="header-item" index="2">
        <img src="@/assets/icon/data.png" class="item-img" alt="" />
        数据总览
      </el-menu-item>
      <el-menu-item class="header-item" index="3">
        <img src="@/assets/icon/device.png" class="item-img" alt="" />
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
const { page , cities , activeCity } = storeToRefs(store)
let isView = ref(false)
// 深度拷贝
let a = JSON.stringify(cities.value)
  let b = JSON.parse(a)

  activeCity.value = cities.value[0]

  function handleChange(e) {

  console.log(e);
  let index = Number(e)
  activeCity.value = cities.value[index]
  console.log(activeCity.value);
}

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
  console.log(e);
  if(e == 2) {
    isView.value = true
  } 
  else {
    isView.value  = false
  }
  page.value = e
  window.localStorage.setItem("activePage" , e)
}

onMounted(() => {
  handleIndex()
})
</script>

<style scoped lang="scss">
.container {
  overflow: auto;
  position: relative;
  height: 100px;
  background-image: url(../../assets/images/head_bg.png);
  background-size: 100% 100%;
  transform-origin: 0 0;
  .title {
    overflow: auto;

    position: absolute;
    left: 50%;
    top: 30px;
    color: white;
    font-size: 25px;
    transform: translateX(-50%);
    font-family: alimama;
    cursor: pointer;
  }
}
.select {
  position: absolute;
  top: 10px;
  z-index: 999;
  width: 100px;
  background-color: black;
}
.header {
  overflow: auto;

  z-index: 2;
  font-family: alimama;
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;
  border: 0;
  border-radius: 10px;
  .header-item {
    margin-left: 10px;
    font-size: 16px;
    color: #FAFAFA;
    .item-img {
      width: 20px;
    }
  }
}
</style>