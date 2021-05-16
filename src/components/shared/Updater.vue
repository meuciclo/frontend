<template>
  <div class="updater" v-if="updateExists && showOption">
    <span>Foi achado um update do aplicativo.</span>
    <div class="updater-actions">
      <button @click="refreshApp">Atualizar</button>
      <button @click="showOption = false">Agora Não</button>
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
    $box-width: 70vw;
    $box-height: 50px;
    width: $box-width;
    height: $box-height;
    position: fixed;
    left: calc(50% - #{$box-width});
    top: calc(50% - #{$box-height});
    &-actions {
      display: flex;
      flex-direction: row;
      margin: 0 5px;
    }
  }
</style>
