<template>
  <div class="data">
    <h3>Meus Registros</h3>
    <div class="data-wrapper" v-if="registers.length">
      <Table v-model="registers"/>
    </div>
    <div class="data-actions">
      <button class="btn-cancel" @click="cancel">Cancelar</button>
      <button class="btn-save" @click="save">Salvar</button>
    </div>
  </div>
</template>

<script>
import Table from '@/components/data/Table'

export default {
  name: 'App',
  components: {
    Table
  },
  meta: {
    title: 'Dados - Meu Ciclo'
  },
  data: function () {
    return {
      registers: []
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
    cancel: async function () {
      await this.getRegisters()
    },
    save: function () {
      localStorage.registers = JSON.stringify(this.registers)
    }
  },
  mounted: function () {
    this.getRegisters()
  }
}
</script>

<style lang="less" scoped>
  .data {
    &-wrapper {
      display: flex;
      justify-content: center;
    }
    &-actions {
      margin-top: 20px;
    }
  }
</style>
