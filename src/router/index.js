import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Analisys from '@/views/Analisys.vue'
import Data from '@/views/Data.vue'
import Configs from '@/views/Configs.vue'

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
    path: '/analise',
    name: 'Analisys',
    component: Analisys,
    meta: {
      title: 'Dados'
    }
  },
  {
    path: '/dados',
    name: 'Data',
    component: Data,
    meta: {
      title: 'Dados'
    }
  },
  {
    path: '/configuracoes',
    name: 'Configs',
    component: Configs,
    meta: {
      title: 'Configurações'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
