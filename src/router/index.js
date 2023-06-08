import { createRouter, createWebHistory } from 'vue-router'


// 引入组件
import Home from "@/views/Home.vue"
import View from "@/views/View.vue"
import Device from "@/views/Device.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '1' },
    {
      path: '/1',
      name: '1',
      component: Home
    },
    {
      path: '/2',
      name: '2',
      component: View
    },
    {
      path: '/3',
      name: '3',
      component: Device
    },
  ]
})

export default router