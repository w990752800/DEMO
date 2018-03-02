<template>
  <div class="hello">
    {{msg}}
    <div>
      <input type="button" value="点击增加" @click="add">
      <input type="button" value="点击减少" @click="decrement">
    </div>
    <div>
      现在的数字是{{count}}
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:mapActions([
    'add',
    'decrement'
  ]),
  computed:mapGetters([
    'count'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
