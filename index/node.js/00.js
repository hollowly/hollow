const http = require('http')

const server = http.createServer()

server.on('request',(req, res) => {
	const url = req.url;

	if(url === '/') {
		res.end('index page')
	} else if(url === '/login') {
		res.end('login page')
	} else {
		res.end("not font 404")
	}
});

server.listen(3000,function() {
	console.log('server is running');
})