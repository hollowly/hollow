const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
	const url = req.url;
	if(url === '/') {
		fs.readFile('./index/index.html',(err, data) => {
			if(err) {
				res.setHeader('Content-Type','text/plain;charset=utf-8')
				return res.end('读取失败')
			} 
			res.end(data)
		})
	} else if(url.indexOf('/index/static/') === 0) {
		fs.readFile('.' + url,(err, data) => {
			if(err) {
				res.setHeader('Content-Type','text/plain;charset=utf-8')
				return res.end('读取失败')
			}
			res.end(data)
		})
	}
}).listen(3000)