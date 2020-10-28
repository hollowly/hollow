<!--  -->
<template>
   <div>
       <h2>{{name}}</h2>
       <button @click="btnClick">按钮</button>
   </div>
</template>

<script>
export default {
  data () {
    return {
        name:'vue!!',
    }
  },
  methods: {
      btnClick() {
          console.log('btnClick');
      }
  },

}

</script>

<style lang='less' scoped>
    body {
        background: red;
    }
</style>