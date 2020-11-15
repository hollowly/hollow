const http = require('http')

http.createServer((req, res) => {
	if(req.url === '/') {
		res.end('主页')
	} else if(req.url === '/login') {
		res.end('登录')
	} else if (req.url === '/page') {
		res.end("page back")
	} else {
		res.end('404 Not Font.')
	}
}).listen(3000,() => {
	console.log('server is running');
})