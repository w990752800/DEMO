<template>
  <div id="app">
    <div class="other">
      <img src="./assets/logo.png">
    </div>
    <div class="main">
      <ul>
        <li><router-link to="/home">主页</router-link></li>
        <li><router-link to="/list">列表页</router-link></li>
      </ul>
      <div>
        <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutLeft">
          <router-view/>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
