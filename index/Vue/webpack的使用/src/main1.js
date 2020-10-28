// 引用vue.js 文件
import Vue from 'vue';

// 引用 app1.vue 文件
import cpn from './vue/app1.vue';

new Vue({
    el:'#app',
    template:<cpn/>,
    components: {
       cpn,
    }
})