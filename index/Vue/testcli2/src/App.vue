<template>
  <div id="app">
     <h1>我是app标题</h1>
     <h2>{{name}}</h2>
     <cpn1></cpn1>
     <cpn2></cpn2>
  </div>
</template>

<script>
import cpn1 from './vue/Cpn1.vue';
import cpn2 from './vue/Cpn2.vue';

export default {
  name: 'App',
  data() {
    return {
      name:'我是app的name'
    }
  },
  components: {
    cpn1,
    cpn2,
  }
}
</script>

<style>
  body {
    background: url('./img/10.jpg');
    background-position: center 0%;
  }
</style>
