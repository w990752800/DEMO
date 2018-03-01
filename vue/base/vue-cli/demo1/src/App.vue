<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <News/>
    <div>{{msg}}</div>
    <input type="button" value="点我" @click="change">
  </div>
</template>

<script>
  import News from './components/News.vue'
export default {
  name: 'App',
  data(){
    return {
      msg:'lasfj'
    }
  },
  components:{
    News
  },
  methods:{
    change(){
      this.msg = this.msg.split('').reverse().join('')
    }
  }
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
