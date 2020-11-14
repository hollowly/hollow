<!-- app组件 -->
<template>
   <div>
       <h2 class='title'>hello 我是app组件标题</h2>
       <h3>{{name}}</h3>
       <button @click="appClick">app组件按钮</button>
       <cpn1></cpn1>
       <cpn2>
           <template slot-scope='slot'>
               <span v-for='item in slot.data' :key='item'>{{item}} - </span>
           </template>
       </cpn2>
       <cpn2>
           <template slot-scope='slot'>
               <span v-for='item in slot.data' :key='item'>{{item}} * </span>
           </template>
       </cpn2>
   </div>
</template>

<script>
import cpn1 from './Cpn1.vue';
import cpn2 from './Cpn2.vue';

export default {
  data () {
    return {
        name:'hello webpack 我是app组件',
    }
  },
  methods: {
      appClick() {
          console.log('我是app组件');
      }
  },
  components: {
      cpn1,
      cpn2,
  }

}

</script>

<style lang='less' scoped>
    .title {
        color: blue;
    }
</style>