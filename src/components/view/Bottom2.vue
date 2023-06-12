<template>
  <div class="container">
    <div class="title">
      <div class="text">近三天水质预报</div>
    </div>
    <div class="list">
      <div class="list_title">
        <div class="title_item"></div>
        <div class="title_item" v-for="item in dates" :key="item">{{ item }}</div>

      </div>
      <div class="sub_list">
        <div class="sub_list_item">
          <div>温度</div>
          <div v-for="item in activeCity.tem" :key="item">{{ item }}</div>
        </div>
        <div class="sub_list_item">
          <div>TDS</div>
          <div v-for="item in activeCity.tds" :key="item">{{ item }}</div>

        
        </div>
        <div class="sub_list_item">
          <div>COD</div>
          <div v-for="item in activeCity.cob" :key="item">{{ item }}</div>

        
        </div>
        <div class="sub_list_item">
          <div>BOD</div>
          <div v-for="item in activeCity.bod" :key="item">{{ item }}</div>

     
        </div>
        <div class="sub_list_item">
          <div>氨氮总量</div>
          <div v-for="item in activeCity.total" :key="item">{{ item }}</div>

       
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { mainStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
const store = mainStore()
const { activeCity } = storeToRefs(store)
console.log(activeCity.value);

let dates = ref(getNextThreeDays())
function getNextThreeDays() {
  const today = new Date(); // 当前日期
  today.setDate(today.getDate() + 1); // 设置为明天的日期
  const dates = [];

  for (let i = 0; i < 3; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    dates.push(formattedDate);
  }
  return dates;

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
      height: 300px;
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