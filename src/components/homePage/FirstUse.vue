<template>
  <div class="firstUse">
      Ou preencha as seguintes informações
      <Fields v-model="configs">
        <div class="fields-field">
          <span class="fields-field-cell"><span>Sua última menstruação começou</span></span>
          <span class="fields-field-cell"><DateInput v-model="lastMenstruationBegin" /></span>
        </div>
        <div class="fields-field">
          <span class="fields-field-cell"><span>Sua última menstruação terminou</span></span>
          <span class="fields-field-cell"><DateInput v-model="lastMenstruationEnd" /></span>
        </div>
      </Fields>
      <div class="firstUse-actions">
        <button class="btn-cancel" @click="cancel">Cancelar</button>
        <button class="btn-save" @click="save">Salvar</button>
      </div>
  </div>
</template>

<script>
import { configStore } from '@/store/configs.js'
import Fields from '@/components/configs/Fields'
import DateInput from '@/components/shared/DateInput'
export default {
  name: 'FirstUse',
  components: {
    Fields,
    DateInput
  },
  data () {
    return {
      configs: configStore.state,
      lastMenstruationBegin: '',
      lastMenstruationEnd: ''
    }
  },
  methods: {
    cancel: async function () {
      configStore.reset()
      this.lastMenstruation = ''
    },
    pushFirstDate: function () {
      const newRegister = {}
      const registers = []
      newRegister.begin = this.lastMenstruationBegin
      if (this.lastMenstruationEnd !== '') {
        newRegister.end = this.lastMenstruationEnd
      }
      registers.push(newRegister)
      localStorage.registers = JSON.stringify(registers)
    },
    save: function () {
      localStorage.configs = JSON.stringify(this.configs)
      this.pushFirstDate()
      this.$emit('firstUseCreated')
    }
  }
}
</script>

<style lang="less" scoped>
  .fields {
    display: table;
    &-field {
      display: table-row;
      height: 55px;
      &-cell {
        display: table-cell;
        padding: 0px 7px;
        vertical-align: middle;
      }
      span {
        text-align: left;
      }
      input {
        width: 100px;
      }
    }
  }
</style>
