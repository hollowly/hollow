<!--  -->
<template>
    <div id='cpn1'>
        <h2>我是cpn1的标题</h2>
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
 

<style lang='less'>
  #cpn1 {
    background: red;
  }
</style>