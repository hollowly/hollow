const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
	if(req.url === '/') {
		fs.readFile('./index/index.html',(err, data) => {
			if(err) {
				return	res.end('index.html Error.')
			}
			res.end(data.toString())
		})
	} else if(req.url === '/post') {
		fs.readFile('./index/post.html', (err, data) => {
			if(err) {
				return res.end('post.html Error.')
			}
			res.end(data.toString())
		})
	} else if(req.url === '/post') {
		res.end('post')
	}
}).listen(3000,() =>{
	console.log('server is running');
})