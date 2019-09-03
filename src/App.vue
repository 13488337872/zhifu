<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="menu">
      <router-link to="/AlipayIndex">首页</router-link>
      <router-link to="/AlipayMy">我的</router-link>
      <router-link to="/AlipayExpressage">快递</router-link>
    </div>
    <router-view></router-view>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}
</script>

<style>

.menu{
  position: fixed;
      z-index: 10;
    left: 130px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}
</style>
