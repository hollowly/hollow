<!--  -->
<template>
   <div id='cpn1'>
     <h1>我是cpn1的标题</h1>
     <h3>{{name}}</h3>
   </div>
</template>

<script>
export default {
  data () {
    return {
      name:'hello cpn1'
    }
  },

}

</script>

<style>
  #cpn1 {
    background: red;
  }
</style>