<!-- cpn1组件 -->
<template>
   <div>
       <h2 class='title'>我是cpn1组件标题</h2>
       <h3>{{name}}</h3>
       <button @click='cpn1Click'>cpn1组件按钮</button>
   </div>
</template>

<script>
export default {
  data () {
    return {
        name:"hello app 我是cpn1组件",
    }
  },
  methods: {
      cpn1Click() {
          console.log('我是cpn1组件');
      }
  },

}

</script>

<style lang='less' scoped>
    .title {
        color: yellow;
    }
</style>