<template>
  <Header/>
  <div class="pageContent">
    <router-view/>
  </div>
  <Footer/>
  <Updater/>
</template>

<script>
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import Updater from '@/components/shared/Updater'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Updater
  },
  watch: {
    $route (to) {
      document.title = `${to.meta.title} - Meu Ciclo`
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Nunito', sans-serif;
}
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  align-items: center;

  .pageContent {
    width: 90vw;
    height: 100%;
    margin-bottom: 75px;
    padding: 0px 15px;
  }
  .pointer {
    cursor: pointer;
  }
  input {
    border-radius: 3px;
    border-width: 1px;
    border-color: black;
    &:focus-visible {
      outline: none;
      border-width: 1.5px;
      border-color: rgb(33, 33, 33);
    }
  }
}

span, div, h3, a {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

a, a:hover, a:focus, a:active {
  text-decoration: none;
  color: inherit;
  outline: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
</style>
