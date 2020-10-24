// 配置文件
const path = require('path')
module.exports = {	
	entry: path.join(__dirname, './src/main.js'), //入口文件
	output: {  //输出文件相关的配置        
		filename: 'bundle.js',  //输出文件的名称
		path: path.join(__dirname, 'dist')//指定打包好的文件，输出到哪个目录中去    
	},
	mode: 'development'
}