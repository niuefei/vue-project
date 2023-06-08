import { defineStore } from 'pinia'


export const mainStore = defineStore('main', {
  state: () => {
    return {
      // 路由相关
      page: "1",

      // 当前的设备
      activeDeviceCode: 1,
    }
  }
})
