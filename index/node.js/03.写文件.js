var fs = require('fs');


// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数

fs.writeFile('你好.txt','我是nodejs',function(error) {
    console.log('写入成功');
})