<!-- 模板代码 -->
<template>
    <div>
        <h2 class='title'>{{message}}</h2>
        <button @click='btnClick()'>按钮</button>
        <h2>{{name}}</h2>
        <cpn1>
            <template slot-scope='slot'>
                我是作用域插槽：<span v-for='item in slot.data'>{{item}} - </span>
            </template>
        </cpn1>
        <cpn1>
            <template slot-scope='slot'>
                我也是作用域插槽：<span v-for='item in slot.data'>{{item}} * </span>
            </template>
        </cpn1>
    </div>
</template>
<!-- js代码 -->
<script>
    import cpn1 from './Cpn1.vue';

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
        },
        components: {
            cpn1,
        }
    }
</script>
<!-- 样式代码 -->
<style scoped>
    .title {
        color: yellow;
    }
</style>