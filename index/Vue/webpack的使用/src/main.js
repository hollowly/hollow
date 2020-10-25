
// ES6 模块化的导入
import {name, age, height, hobby} from './js/info';

console.log(name, age, height);
console.log(hobby);

// commonjs 模块化规范导入

const {add, mul} = require('./js/function');

console.log(add(20, 40));
console.log(mul(20, 40));

// 3.依赖