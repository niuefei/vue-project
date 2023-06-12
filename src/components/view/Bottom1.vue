<template>
  <div class="container">
    <div class="title">
      <div class="text">预警溯源:</div>
    </div>
    <div class="list">
      <div class="list_title">
        <div class="title_item">名称</div>
        <div class="title_item">地址</div>
        <div class="title_item">主要超标物</div>
      </div>
      <div class="sub_list">
        <div class="sub_list_item">
          <div>实验地3</div>
          <div class="address">江高镇广东技术师范大学实验地3</div>
          <div>PH</div>
        </div>
        <div class="sub_list_item">
          <div>实验地7</div>
          <div class="address">江城路与青云路交叉口西北100米</div>
          <div>COD</div>
        </div>
        <div class="sub_list_item">
          <div>实验地13</div>
          <div class="address">何布四和街与何布患村路交叉东北100米</div>
          <div>氨氮总量</div>
        </div>
        <div class="sub_list_item">
          <div>实验地46</div>
          <div class="address">江城镇叶边村叶边路6号</div>
          <div>TDS</div>
        </div>
      </div>
    </div>
    <div class="bottom">截止{{ dateString }}</div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const dateString = ref(getToday());

// 获取当天
function getToday() {
  const date = ref();
  date.value = new Date();
  let str1 = date.value.toLocaleDateString()
  let arr = str1.split("/")
  let str2 = arr.join(".")
  return str2
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 500px;
  height: 330px;
  .title {
    .text {
      margin: 10px;
      font-size: 24px;
      font-family: alimama;
    } 
  }
  .list {
      width: 100%;
      height: 250px;
      border: 1px solid rgba(25, 186, 139, 0.2);
      border-radius: 10px;
      .list_title {
        display: flex;
        justify-content: space-between;
        height: 40px;
        border-bottom: 1px solid rgba(25, 186, 139, 0.2);

        .title_item {
          flex: 1;
          height: 100%;
          line-height: 40px;
          text-align: center;
          font-size: 16px;
          font-family: alimama;
        }
      }
      .sub_list {
        padding-top: 8px;
        
        // border: 1px solid red;
        .sub_list_item {
          box-sizing: border-box;
          display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
        // height: 40px;
          div {
            flex: 1;
            height: 100%;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
            font-family: alimama;
            white-space: wrap;
          }
          .address {
            margin-top: 5px;
            line-height: 20px;

          }
        }
      }
    }
    .bottom {
      position: absolute;
      right: 10px;
      bottom: 10px;
      font-size: 16px;
      font-family: alimama;
    }
}
</style>