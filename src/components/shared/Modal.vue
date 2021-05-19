<template>
  <div class="modal">
    <div class="modal-mask"></div>
    <div class="modal-content">
      <div class="modal-content-header" v-if="title">
        <span>{{title}}</span>
      </div>
      <div class="modal-content-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['title']
}
</script>

<style lang="scss" scoped>
.modal {
  z-index: 1000;
  &-mask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000000cc;
    z-index: 0;
  }
  &-content {
    position: fixed;
    z-index: 1;
    width: 70%;
    max-height: 70%;
    top: 15%;
    left: 15%;
    background-color: white;
    border-radius: 5px;
    &-header {
      background-color: pink;
      color: white;
      font-size: 1.5rem;
      color: rgb(71, 71, 71);
      text-transform: uppercase;
      padding: 0.7rem;
      font-weight: bold;
      margin-bottom: 1rem;
      border-radius: 5px 5px 0 0px;
      position: relative;
    }
    &-body {
      overflow: auto;
      padding: 0.7rem;
    }
  }
}
</style>
