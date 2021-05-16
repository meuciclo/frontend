<template>
  <div class="updater" v-if="updateExists && showOption">
    <div class="updater-text">Foi achado um update do aplicativo. Deseja atualizar?</div>
    <div class="updater-actions">
      <button class="yes" @click="refreshApp">SIM</button>
      <button class="no" @click="showOption = false">NÃO 2</button>
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
    $box-width: 200px;
    $box-height: 130px;
    width: $box-width;
    height: $box-height;
    position: fixed;
    background-color: white;
    padding: 20px;
    left: calc(50% - ((#{$box-width}+40px)/2));
    top: calc(50% - ((#{$box-height}+40px)/2));
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    &-text {
      margin-bottom: 21px;
    }
    &-actions {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      button {
        margin: 0 5px;
        border: 0;
        width: 70px;
        height: 30px;
      }
      .yes {
        background-color: #73ff73;
      }
      .no {
        background-color: #fb6262;
      }
    }
  }
</style>
