<template>
  <div class="config">
    <h3>Configurações</h3>
    <div class="config-wrapper">
      <Fields v-model="configs" />
    </div>
    <div class="config-actions">
      <button class="config-actions-cancel" @click="cancel">Cancelar</button>
      <button class="config-actions-save" @click="save">Salvar</button>
    </div>
  </div>
</template>

<script>
import Fields from '@/components/configs/Fields'
export default {
  name: 'Configs',
  components: {
    Fields
  },
  data () {
    return {
      configs: {
        name: '',
        regularMenstrualFlow: false,
        daysMenstrualFlow: '',
        tpmAlert: ''
      }
    }
  },
  methods: {
    getConfigs: async function () {
      const configs = localStorage.configs
      if (configs) {
        this.configs = JSON.parse(configs)
      }
    },
    cancel: async function () {
      this.getConfigs()
    },
    save: function () {
      localStorage.configs = JSON.stringify(this.configs)
    }
  },
  created () {
    this.getConfigs()
  }
}
</script>

<style lang="less" scoped>
  .config {
    &-wrapper {
      display: flex;
      justify-content: center;
    }
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
