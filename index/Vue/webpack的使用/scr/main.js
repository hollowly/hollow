
// 使用 commonjs 模块规范导入
const {name, age, height} = require('./info');

console.log(name, age, height);


// ES6 模块化导入
import {add, mul} from './function';

console.log('num1=',20,'num2=',50,'num1+num2=',add(20, 50));


console.log('num1=',20,'num2=',50,'num1*num2=',mul(20, 50));