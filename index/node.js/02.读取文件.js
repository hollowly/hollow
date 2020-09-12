var fs = require('fs');



// 第一个参数是要读取文件的路径
// 第二个参数是一个回调函数
    // 成功
    //     data 数据
    //     error null
    // 失败
    //     data undefined 没有数据
    //     error 错误对象
    
fs.readFile('1.txt',function(error,data) {
    // console.log(data.toString());
    // console.log(error);
    
    if(error){
        console.log('读取失败');
    } else {
        console.log(data.toString());
    }
});

