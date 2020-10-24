
// 1.导入的{}中定义的变量
import aaa, {sum} from "./aaa.js";

var name = '小明';
var  flag = false;

console.log('bbb.js打印',sum(100,2000));

// 2.直接导入 export 定义的变量
import {num1, height} from './aaa.js';

console.log(num1, height);

// 3.导入 export 的函数/类

import {addnum, person} from './aaa.js';

console.log(addnum(200,20));

var p = new person();

p.run();
p.look();

// 4.导入的时候可以自己命名
import addr from "./aaa.js";

addr('我是自己命名的函数导入');

// 5.统一全部导入

import * as alli from "./aaa.js";

console.log(alli.height);
console.log(alli.sum(20,100000));