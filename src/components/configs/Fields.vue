<template>
  <div class="fields">
    <div class="fields-field">
      <span class="fields-field-cell"><span>Seu nome:</span></span>
      <span class="fields-field-cell"><input type="text" v-model="configs.name"></span>
    </div>
    <div class="fields-field">
      <span class="fields-field-cell"><span>Colocar fim da menstruação automáticamente:</span></span>
      <span class="fields-field-cell"><SwitchButton v-model="configs.regularMenstrualFlow"/></span>
    </div>
    <div class="fields-field" v-if="configs.regularMenstrualFlow">
      <span class="fields-field-cell"><span>Quantos dias você menstrua:</span></span>
      <span class="fields-field-cell"><input type="number" v-model="configs.daysMenstrualFlow" v-maska="{ mask: 'n', tokens: tokens }"></span>
    </div>
    <div class="fields-field" v-if="configs.isCloud">
      <span class="fields-field-cell"><span>Avisar que está TPM:</span></span>
      <span class="fields-field-cell"><input type="text" placeholder="Email" v-model="configs.tpmAlert"></span>
    </div>
    <div class="fields-field">
      <span class="fields-field-cell"><span>Média do seu ciclo (dias)</span></span>
      <span class="fields-field-cell"><input type="text" v-model="configs.avarageCycleTime" v-maska="{ mask: 'nN', tokens: tokens }"></span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import SwitchButton from '@/components/configs/SwitchButton'
export default {
  name: 'Fields',
  components: {
    SwitchButton
  },
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    configs: {
      get () {
        return this.modelValue
      },
      set (configs) {
        this.$emit('update:modelValue', configs)
      }
    }
  },
  data () {
    return {
      tokens: {
        n: { pattern: '[1-9]' },
        N: { pattern: '[0-9]' }
      }
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
