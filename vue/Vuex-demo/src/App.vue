<template>
  <div id="app">
  
    <router-view/>
    <input type="button" value="增加" @click="increment"/>
    <input type="button" value="漸漸" @click="decrement" />
    <input type="button" value="偶數增加" @click="oddIncrement" />
    <div>{{_count}}</div>
  </div>
</template>

<script>
	import {mapActions,mapGetters} from 'vuex'
	
export default {
  name: 'App',
  methods:mapActions([	
  	'increment',
  	'decrement',
  	'oddIncrement'
  ]),
  computed:mapGetters([	
  	'_count'
  ])
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
