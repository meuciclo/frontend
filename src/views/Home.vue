<template>
  <div class="home">
    <template v-if="registers.length">
      <Counting :days="days" :isCounting="isCounting" />
    </template>
    <template v-else>
      <span class="noRegisters">Comece a registrar apertando o botão abaixo</span>
    </template>
    <Register :isCounting="isCounting" @click="register"/>
  </div>
</template>

<script>
import Counting from '@/components/homePage/Counting'
import Register from '@/components/homePage/Register'

export default {
  name: 'Home',
  components: {
    Counting,
    Register
  },
  data: function () {
    return {
      registers: [],
      lastRegister: {},
      isCounting: false,
      days: '0'
    }
  },
  meta: {
    title: 'Meu Ciclo'
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
      }
      this.isCounting = false
    },
    countDays: async function () {
      const register = this.lastRegister
      if (register.end && register.end === '') {
        this.days = await this.calcularData(register.end)
      } else if (register.begin && register.begin !== '') {
        this.days = await this.calcularData(register.begin)
      } else {
        this.days = '0'
      }
    },
    calcularData: async function (timestamp) {
      const _MS_PER_DAY = 1000 * 60 * 60 * 24
      const dateDiffInDays = function (a, b) {
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())
        return Math.floor((utc2 - utc1) / _MS_PER_DAY)
      }
      const lastRegister = new Date(timestamp)
      const now = new Date(Date.now())
      return '' + dateDiffInDays(lastRegister, now)
    },
    register: async function () {
      if (this.isCounting) {
        this.lastRegister.end = Date.now()
      } else {
        const newRegister = {}
        newRegister.begin = Date.now()
        this.registers.push(newRegister)
        this.lastRegister = newRegister
      }
      localStorage.registers = JSON.stringify(this.registers)
      this.checkIsCounting()
      this.countDays()
    }
  },
  mounted: async function () {
    await this.getRegisters()
    await this.getLastRegister()
    this.checkIsCounting()
    this.countDays()
  }
}
</script>
