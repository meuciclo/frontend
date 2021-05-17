import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Data from '@/views/Data.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/dados',
    name: 'Data',
    component: Data,
    meta: {
      title: 'Dados'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
