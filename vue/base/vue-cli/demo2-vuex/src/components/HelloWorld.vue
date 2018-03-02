<template>
  <div class="hello">
    {{msg}}
    <div>
      <button @click="add">增加</button>
      <input type="button" value="减少" @click="decrement">
      <input type="button" value="偶数增加" @click="odd">
      <input type='button' value="异步加载" @click="ayncAdd">
    </div>
    <div>
      现在是{{count}}
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
    'decrement',
    'odd',
    'ayncAdd'
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
