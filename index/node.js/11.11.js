const http = require('http')
const fs = require('fs')
const server = http.createServer()

const wwwDir = 'E:/hollowly/hollow/index/node.js/初步实现Apache功能'
server.on('request',(req, res) => {
	// 读文件
	fs.readFile(wwwDir + '/index.html',(err, data) => {
		if(err) {
			res.setHeader('Content-Type','text/html;charset=utf-8')
			return res.end('读取失败')
		}
	// 读目录
		// fs.readdir(wwwDir, (err, files) => {
		// 	if(err) {
		// 		res.setHeader('Content-Type','text/html;charset=utf-8')
		// 		return res.end('目录不存在')
		// 	}
		// 	res.end(files)
		// })
		data = data.toString();

		data = data.replace('新建文本文档','hhhhhhhh')

		res.end(data)
	})
}).listen(3000)