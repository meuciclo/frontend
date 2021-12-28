<template>
  <div class="home">
    <template v-if="registers.length">
      <Counting :days="days" :isCounting="isCounting" />
      <Register :isCounting="isCounting" @click="register"/>
    </template>
    <template v-else>
      <span class="noRegisters">Comece a registrar apertando o botão abaixo</span>
      <Register :isCounting="isCounting" @click="register"/>
      <FirstUse @firstUseCreated="initialize" />
    </template>
  </div>
</template>

<script>
import Counting from '@/components/homePage/Counting'
import Register from '@/components/homePage/Register'
import FirstUse from '@/components/homePage/FirstUse'

import { configStore } from '@/store/configs.js'

export default {
  name: 'Home',
  components: {
    Counting,
    Register,
    FirstUse
  },
  meta: {
    title: 'Meu Ciclo'
  },
  data: function () {
    return {
      configs: configStore.state,
      registers: [],
      lastRegister: {},
      isCounting: false,
      days: '0'
    }
  },
  methods: {
    getRegisters: async function () {
      if (localStorage.registers) {
        this.registers = JSON.parse(localStorage.getItem('registers'))
      } else {
        this.registers = []
      }
    },
    getLastRegister: async function () {
      if (this.registers.length > 0) {
        const lastPos = this.registers.length - 1
        this.lastRegister = this.registers[lastPos]
      }
    },
    checkIsCounting: function () {
      const register = this.lastRegister
      if (register.begin) {
        if (register.begin !== '' && (!register.end || register.end === '')) {
          this.isCounting = true
          return
        }
        if (register.end) {
          const now = new Date(Date.now())
          const end = new Date(register.end)
          if (this.dateDiffInDays(end, now) < 0) {
            this.isCounting = true
            return
          }
        }
      }
      this.isCounting = false
    },
    dateDiffInDays: function (a, b) {
      const _MS_PER_DAY = 1000 * 60 * 60 * 24
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())
      return Math.floor((utc2 - utc1) / _MS_PER_DAY)
    },
    countDays: async function () {
      const register = this.lastRegister
      if (register.begin && register.begin !== '') {
        if (!register.end) {
          this.days = await this.calcularData(register.begin)
        } else {
          this.days = await this.calcularData(register.end)
        }
      } else {
        this.days = '0'
      }
    },
    calcularData: async function (timestamp) {
      const lastRegister = new Date(timestamp)
      const now = new Date(Date.now())
      return '' + this.dateDiffInDays(lastRegister, now)
    },
    register: async function () {
      if (this.isCounting) {
        this.lastRegister.end = Date.now()
      } else {
        const newRegister = {}
        newRegister.begin = Date.now()
        this.registers.push(newRegister)
        if (this.configs.regularMenstrualFlow && parseInt(this.configs.daysMenstrualFlow)) {
          const date = new Date(Date.now())
          date.setDate(date.getDate() + parseInt(this.configs.daysMenstrualFlow))
          newRegister.end = date.getTime()
        }
        this.lastRegister = newRegister
      }
      localStorage.registers = JSON.stringify(this.registers)
      this.checkIsCounting()
      this.countDays()
    },
    initialize: async function () {
      await this.getRegisters()
      await this.getLastRegister()
      this.checkIsCounting()
      this.countDays()
    }
  },
  mounted: async function () {
    this.initialize()
  }
}
</script>

<style lang="less" scoped>
</style>
