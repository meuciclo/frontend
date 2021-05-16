<template>
  <div class="updater" v-if="updateExists && showOption">
    <span>Foi achado um update do aplicativo. Deseja atualizar?</span>
    <div class="updater-actions">
      <button @click="refreshApp">SIM</button>
      <button @click="showOption = false">NÃO</button>
    </div>
  </div>
</template>

<script>
import update from '@/mixins/update'

export default {
  name: 'Updater',
  mixins: [update],
  data: function () {
    return {
      showOption: true
    }
  }
}
</script>

<style lang="scss">
  .updater {
    $box-width: 50px;
    $box-height: 50px;
    width: $box-width;
    height: $box-height;
    position: fixed;
    background-color: gray;
    left: calc(50vw - #{$box-width});
    top: calc(50vw - #{$box-height});
    &-actions {
      display: flex;
      flex-direction: row;
      margin: 0 5px;
    }
  }
</style>
