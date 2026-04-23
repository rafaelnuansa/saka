import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import './style.css'
import App from './App.vue'

// 1. Buat instance app dulu
const app = createApp(App)

// 2. Pasang plugin-nya ke instance tersebut
app.use(MotionPlugin)

// 3. Baru mount ke DOM
app.mount('#app')