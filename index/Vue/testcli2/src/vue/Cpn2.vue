<!--  -->
<template>
   <div id='cpn2'>
       <h1>我是cpn2的标题</h1>
       <h3>{{name}}</h3>
   </div>
</template>

<script>
export default {
  data () {
    return {
        name:'hello cpn2'
    }
  },
}

</script>

<style lang='less'>
  #cpn2 {
    background: blue;
  }
</style>