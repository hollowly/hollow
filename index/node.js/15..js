const http = require('http')

http.createServer((req, res) => {
	res.end('hello nodejs')
}).listen(3000,() => {
	console.log('server is running http:127.0.0.1:3000');
})