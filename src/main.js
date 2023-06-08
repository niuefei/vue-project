
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Particles from "particles.vue3"

import App from './App.vue'
import router from './router'

import "@/assets/css/reset.css"
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.use(Particles)

app.mount('#app')
