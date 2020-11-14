const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res) => {
	var urlObj = url.parse(req.url)
	var urlPath = urlObj.path
	if(urlPath === '/') {
		fs.readFile('./index/index.html',(err, data) => {
			if(err) {
				res.setHeader('Content-Type','text/plain;charset=utf-8')
				return res.end('读取失败');
			}
			res.end(data)
		})
	} else if(urlPath.indexOf('/index/static/') === 0) {
		fs.readFile('.' + urlPath,(err, data) => {
			if(err) {
				res.setHeader('Content-Type','text/plain;charset=utf-8')
				return res.end('读取失败');
			}
			res.end(data)
		})
	} else if(urlPath === '/post') {
		fs.readFile('./index/post.html',(err, data) => {
			if(err) {
				res.setHeader('Content-Type','text/plain;charset=utf-8')
				return res.end('读取失败')
			}
			res.end(data)
		})
	} else if(urlPath === '/img') {
		fs.readFile('./index2/static/girl.jpg',(err, data) => {
			if(err) {
				res.setHeader('Content-Type','text/plain;charset=utf-8')
				return res.end('读取失败')
			}
			res.end(data)
		})
	}

}).listen(3000)