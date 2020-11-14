

// fs是file-system的简写，就是文件系统的意思
// 在node中如果想要进行文件操作，就必须引用fs这个核心模块
// 在fs这个核心模块中，就提供了所有的文件操作的API
// 例如：fs.readFile就是用来读取文件的
var fs = require('fs');

// 第一个参数是要读取文件的路径
// 第二个参数是一个回调函数
    // 成功
    //     data 数据
    //     error null
    // 失败
    //     data undefined 没有数据
    //     error 错误对象
    
fs.readFile('data/你好.txt',function(err,data) {
    // console.log(data.toString());
    // console.log(error);
    
    if(err){
        console.log('读取失败');
    } else {
			// <Buffer e4 bd a0 e5 a5 bd ef bc 8c e6 88 91 e6 98 af 6e 6f 64 65 6a 73>
			// 默认文件中存储的是二进制数据，需要toString转成字符串
        console.log(data.toString());
    }
});

