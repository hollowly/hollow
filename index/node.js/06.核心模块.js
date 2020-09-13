// 1.node中的javascript
/*  .EcmaScript
    .核心模块
        .require
        .exports
    .第三方模块
    .用户自定义模块
*/

// 1.1核心模块
/* Node为JavaScript提供了很多服务器级别的API，这些API绝大多数都被包装到了一个具名的核心模块中了。
例如文件操作的"fs"核心模块，"http"服务构建的"http"模块，"path"路径操作模块，"os"操作系统信息模块.....等等
以后需要用这些模块，就必须先定义：
var fs = require('fs');
var http = require('http') ;
*/

// 用来获取机器信息的
var os = require('os');

// 用来操作路径的
var path = require('path');


// 获取当前机器cpu信息
console.log(os.cpus());

// 获取当前电脑内存
console.log(os.totalmem());

console.log(path.extname('c:a/b/c/d/a.txt'));


// 1.2第三方模块
