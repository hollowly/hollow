<!-- cpn1 -->
<template>
   <div>
    <h3>{{name}}</h3>
    <slot :data='books'>
      <ul>
        <li v-for='item in books'>{{item}}</li>
      </ul>
    </slot>
   </div>
</template>

<script>
  export default {
    data () {
      return {
        name:'我是cpn1组件',
        books: ['javascrip','php','jquery'],
      }
    },

  }

</script>

<style lang='less' scoped>

</style>