<template>
    <div class="footer">
        <a href="/#/" class="footer-home pointer" :class="checkClass('/')">
            <span class="material-icons">home</span>
        </a>
        <a href="/#/analise" class="footer-analysis pointer" :class="checkClass('/analise')">
            <span class="material-icons">trending_up</span>
        </a>
        <a href="/#/configuracoes" class="footer-settings pointer" :class="checkClass('/configuracoes')">
            <span class="material-icons">settings</span>
        </a>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data: function () {
    return {
      currentPath: '/'
    }
  },
  methods: {
    checkClass: function (type) {
      if (type === this.currentPath) {
        return 'footer-selected'
      }
      return ''
    }
  },
  watch: {
    $route (to) {
      this.currentPath = to.path
      console.log('aaaaa', to.path)
    }
  }
}
</script>

<style lang="scss" scoped>
    .footer {
        $footer-height: 45px;
        $footer-color: pink;
        width: 100vw;
        height: $footer-height;
        background-color: $footer-color;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 35px;
        position: fixed;
        bottom: 0;
        box-shadow: 0px -1px 12px -6px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px -1px 12px -6px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px -1px 12px -6px rgba(0,0,0,0.75);
        &-logo {
            font-size: 1.4rem;
        }
        &-selected {
            width: $footer-height;
            height: $footer-height;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: lighten($color: $footer-color, $amount: 7);
        }
    }
</style>
