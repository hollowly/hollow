
// ES6 模块化的导入
import {name, age, height, hobby} from './js/info';

console.log(name, age, height);
console.log(hobby);

// commonjs 模块化规范导入

const {add, mul} = require('./js/function');

console.log(add(20, 40));
console.log(mul(20, 40));

// 3.style/css依赖
require('./css/normall.css');

// 4.less依赖
require('./css/special.less');

// 5.引用 Vue.js
import Vue from 'vue';

// 6.把写的vue代码放进app.js中，并应用
// import app from './vue/app.js'

// 6
import app from './vue/app.vue'

new Vue({
    el:'#app',
    template: '<app/>',
    components: {
        app
    }
})