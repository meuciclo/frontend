<template>
  <div class="analisys">
    <h3>Análises</h3>
    <div class="analisys-wrapper">
      <Regularity :lastRegisters="lastRegisters" />
    </div>
  </div>
</template>

<script>
import Regularity from '@/components/analisys/Regularity'
export default {
  name: 'Analisys',
  components: {
    Regularity
  },
  data () {
    return {
      lastRegisters: []
    }
  },
  methods: {
    getLastRegisters: async function () {
      if (localStorage.registers) {
        const registers = JSON.parse(localStorage.getItem('registers'))
        if (registers.length > 7) {
          this.lastRegisters = registers.slice(registers.length - 7)
        } else {
          this.lastRegisters = registers
        }
      } else {
        this.lastRegisters = []
      }
    }
  },
  created () {
    this.getLastRegisters()
  }
}
</script>

<style lang="less" scoped>
  .analisys {
    &-wrapper {
      display: flex;
      justify-content: center;
    }
     &-actions {
      margin-top: 20px;
    }
  }
</style>
