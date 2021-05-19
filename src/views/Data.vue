<template>
  <div class="data">
    <h3>Meus Registros</h3>
    <div v-if="registers.length">
      <Table v-model="registers"/>
    </div>
    <div class="data-actions">
      <button class="data-actions-cancel" @click="cancel">Cancelar</button>
      <button class="data-actions-save" @click="save">Salvar</button>
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

<style lang="scss" scoped>
  .data {
    &-actions {
      margin-top: 20px;
      button {
        border: none;
        margin: 0px 5px;
        width: 70px;
        height: 30px;
      }
      &-cancel {
        background-color: #ff9999;
        &:active {
          background-color: #ffc5c5;
        }
      }
      &-save {
        background-color: #9eff9e;
        &:active {
          background-color: #c2ffc2;
        }
      }
    }
  }
</style>
