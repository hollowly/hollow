<!-- cpn2组件 -->
<template>
   <div>
       <hr>
       <h1>cpn2组件：具名插槽的使用</h1>
       <slot :data='books'>
           <ul>
               <li v-for='item in books' :key='item'>{{item}}</li>
           </ul>
       </slot>
   </div>
</template>

<script>
export default {
  data () {
    return {
        books:['javascript','php','python','jquery'],
    }
  },

}

</script>

<style lang='less' scoped>

</style>