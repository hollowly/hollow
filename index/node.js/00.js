const http = require('http')
const fs = require('fs')
const url = require('url')



http.createServer((req, res) => {
	const urlPath = url.parse(req.url,true).pathname

	if(urlPath === '/') {
		fs.readFile('./index2/index.html',(err, date) => {
			if(err) {
				res.setHeader('Content-Type','text/plain;charset=utf-8')
				return res.end('读取失败')
			}
			res.end(date)
		})
	} else if(urlPath === '/static/login') {
		fs.readFile('./index2/static/login.html',(err, data) => {
			if(err) {
				res.setHeader('Content-Type','text/plain;charset=utf-8')
				return res.end('读取失败')
			}
			res.end(data)
		})
	}else if(urlPath === '/static/img') {
		fs.readFile('./index2/static/girl.jpg',(err, data) => {
			if(err) {
				res.setHeader('Content-Type','image/jpeg')
				return res.end('读取失败')
			}
			res.end(data)
		})
	}
}).listen(3000)
