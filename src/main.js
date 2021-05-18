import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import maska from 'maska'

const app = createApp(App)
app.use(router)
app.use(maska)
app.mount('#app')
