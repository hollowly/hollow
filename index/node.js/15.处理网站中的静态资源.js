const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
	let urlObj = new URL(req.url,'http://localhost:3000/');
	// pathname：单独获取不包含？之后的路径
	const pathname = urlObj.pathname
	// console.log(pathname);
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
	} else if(pathname === '/pinglun') {
		var newarr = urlObj.query
		console.log(newarr);
		newarr.date = '2020-11-13 19:56'
		newarr.unshift(newarr)
		res.statusCode = 302
		res.setHeader('location','/')
		res.end()
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