
// 使用 commonjs 的模块化规范导入
const {add, mul} = require('./function');


console.log(add(20, 30));
console.log(mul(20, 30));



// 使用ES6的模块化规范导入
import {name, age, height} from './info';


console.log(name, age, height);