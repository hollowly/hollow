
// 使用 CommonJS 模块化规范：
const {add, mul} = require('./mathUtils.js')

console.log(add(20, 40));
console.log(mul(20, 40));


// 使用 Es6 模块化规范：
import {name, age, height} from './info.js';

console.log(name);
console.log(age);
console.log(height);