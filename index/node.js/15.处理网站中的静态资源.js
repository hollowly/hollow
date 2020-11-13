const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res) => {
	const urlObj = url.parse(req.url,true)
	console.log(urlObj.query);
	// pathname：单独获取不包含？之后的路径
	const pathname = urlObj.pathname
	if(pathname === '/?' || pathname === '/' || pathname === '/index') {
		fs.readFile('./index/index.html',(err, data) => {
			if(err) {
				return res.end('读取失败')
			}
			res.end(data)
		}) 
	} else if(pathname === '/post') {
		fs.readFile('./index/post.html',(err, data) => {
			if(err) {
				return	res.end('404 Not Font.')
			}
			res.end(data)
		})
	} else if(pathname.indexOf('/index/static/') === 0) {
		fs.readFile('.' + pathname,(err,data) => {
			if(err) {
				return res.end('读取失败')
			}
			res.end(data)
		})
	} else {
		fs.readFile('./index/404.html',(err, data) => {
			if(err) {
				return	res.end('404 Not Font.')
			}
			res.end(data)
		})
	}
}).listen(3000,() => {
	console.log('server is running http:127.0.0.1:3000');
})