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
    height: 100%;
    margin-bottom: 75px;
  }
  .pointer {
    cursor: pointer;
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
