<template>
  <div class="container">
    <div class="title">节点设备状态：</div>
    <div class="list">
      <div>已接：{{ activeCity.deviceCount1 }}</div>
      <div>未接：{{ activeCity.deviceCount2 }}</div>
      <div>故障：{{ activeCity.deviceCount3 }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { mainStore } from "@/stores/index";
import { storeToRefs } from "pinia";

const store = mainStore();
const { activeCity } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 380px;
  box-sizing: border-box;
  font-family: alimama;
  height: 100px;
  .title {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 20px;
    margin-right: 20px;
  }
  .list {
    div {
    margin-left: 10px;
    margin-top: 13px;
    font-size: 20px;
    color: #fafafa;
  }
  }
  
}
</style>

