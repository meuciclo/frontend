<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
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
  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }
  .pointer {
    cursor: pointer;
  }
}
</style>
