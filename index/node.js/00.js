const http = require('http')
const fs = require('fs')

const server = http.createServer();

server.on('request',(req, res) => {
	const url = req.url;

	if(url === '/') {
		fs.readFile('./index/index.html',(err, data) => {
			if(err) {
				res.setHeader('Content-type','text/plain; charset=utf-8')
				res.end('读取失败');
			} else {
				res.end(data)
			}
		})
	} else if(url === '/img') {
		fs.readFile('./img/10.jpg',(err, data) => {
			if(err) {
				res.setHeader('Content-Type','text/plain;charset=utf-8')
				res.end('读取失败')
			} else {
				res.setHeader('Content-type','image/jpeg')
				res.end(data)
			}
		}) 
	} else {
		res.end('not font 404')
	}
}).listen(3000,() => {
	console.log('server is runing');
})