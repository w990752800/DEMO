<template>
  <div id="list">
    <ul>
      <li v-for="(value,index) in msg">
        {{value}}
      </li>
    </ul>
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-default">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default">Right</button>
    </div>
    <div id="cc">cc</div>
    <div class="container">
      <div class="row text-center table-bordered">
        <div class="col-4">w</div>
        <div class="col-4">n</div>
        <div class="col-4">f</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "list",
    data(){
      return {
        msg:[
          '11111',
          '22222',
          '33333'
        ]
      }
    }
  }
</script>

<style scoped>

</style>
