
// 1. 引用 path 模块
// const path = require('path');
// __dirname：动态获取 用来获取当前文件模块所属目录的绝对路径
// __filename：动态获取 用来获取当前文件的绝对路径


const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'./42.__dirname和__filename.js'), (err, data) =>{
	if(err) {
		return console.log(err);
	}
	// console.log(__dirname + './c.js');
	console.log(data.toString());
})


