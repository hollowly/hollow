const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
	if(req.url === '/') {
		fs.readFile('./views/index.html',(err, data) => {
			if(err) {
				res.setHeader('Content-Type','text/plain;charset=utf-8')
				return res.end('读取失败')
			}
			res.end(data)
		})
	} else if(req.url === '/post') {
		res.end('post page')
	} else if(req.url === '/404') {
		res.end('404 page')
	}
}).listen(3000,() => {
	console.log('server is running');
})