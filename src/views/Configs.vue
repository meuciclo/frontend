<template>
  <div class="config">
    <h3>Configurações</h3>
    <div class="config-wrapper">
      <Fields v-model="configs" />
    </div>
    <div class="config-actions">
      <button class="btn-cancel" @click="cancel">Cancelar</button>
      <button class="btn-save" @click="save">Salvar</button>
    </div>
  </div>
</template>

<script>
// Stores
import { configStore } from '@/store/configs.js'

// Component Methods
import Fields from '@/components/configs/Fields'
export default {
  name: 'Configs',
  components: {
    Fields
  },
  data () {
    return {
      configs: configStore.state
    }
  },
  methods: {
    cancel: async function () {
      configStore.reset()
    },
    save: function () {
      configStore.save()
    }
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
    }
  }
</style>
