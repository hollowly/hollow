<!-- 模板代码 -->
<template>
    <div>
        <h2 class='title'>{{message}}</h2>
        <button @click='btnClick()'>按钮</button>
        <h2>{{name}}</h2>
    </div>
</template>
<!-- js代码 -->
<script>
    export default  {
        name:'app',
        data() {
            return {
                message:'hello wpbpack Vue!',
                name:'hollow',
            }
        },
        methods: {
            btnClick() {
                console.log('瓜皮');
            }
        }
    }
</script>
<!-- 样式代码 -->
<style scoped>
    .title {
        color: yellow;
    }
</style>