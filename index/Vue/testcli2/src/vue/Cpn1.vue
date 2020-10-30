<!--  -->
<template>
    <div>
        <h2>我是vue-cli2的标题</h2>
        <h3>{{name}}</h3>
        <cpn2></cpn2>
    </div>
 </template>
 
 <script>
   import cpn2 from './Cpn2.vue';
 export default {
   data () {
     return {
         name:'hello vue-cli2'
     }
   },
   components: {
     cpn2,
   }
 
 }
 
 </script>
 
 <style>
 
 </style>