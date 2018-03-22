<template>
    <div class="detail">
      详情页
      <div>
        {{msg}}
      </div>
      <ul>
        <li v-for="item in list">
          {{item}}
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "detail",
        data(){
          return {
            msg:'wnf',
            list:[
              'banner',
              'apper',
              'cilcil'
            ]
          }
        }
    }
</script>

<style scoped>

</style>
