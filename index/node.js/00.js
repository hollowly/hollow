const http = require('http')

const server = http.createServer();

server.on('request',(req, res) => {

	if(req.url === '/') {
		res.setHeader('Content-type','text/html; charset=utf-8')
		res.end('你好，世界')
	} else if(req.url === '/login') {
		res.setHeader('Content-type','text/html; charset=utf-8')
		res.end('<h1>欢迎登录</h1>')
	} else {
		res.end('not font 404')
	}
}).listen(3000,() => {
	console.log('server is runing');
})