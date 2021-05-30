import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import maska from 'maska'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

VueChartkick.configure({ language: 'pt-BR' })

const app = createApp(App)
app.use(router)
app.use(maska)
app.use(VueChartkick)
app.mount('#app')
