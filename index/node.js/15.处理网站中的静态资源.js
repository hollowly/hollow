const http = require('http')
const fs = require('fs')
const template = require('art-template')
const url = require('url')
var comments =  [
	{name:'张三',message:'今天天气真不错',date:'2020-11-5'},
	{name:'李四',message:'今天天气真不错+1',date:'2020-11-7'},
	{name:'王五',message:'今天天气真不错+2',date:'2020-11-8'},
	{name:'杜六',message:'今天天气真不错+3',date:'2020-11-12'},
]
http.createServer((req, res) => {
	const urlObj = url.parse(req.url,true)
	// pathname：单独获取不包含？之后的路径
	const pathname = urlObj.pathname
	if(pathname === '/?' || pathname === '/' || pathname === '/index') {
		fs.readFile('./index/index.html',(err, data) => {
			if(err) {
				return res.end('读取失败')
			}
			// 使用 art-template来对数据进行render(渲染)
			var htmlStr = template.render(data.toString(), {
				comments:comments
			})

			res.end(htmlStr)
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
		var arr = urlObj.query
		arr.date = '2020-11-13'
		comments.unshift(arr)
		console.log(arr);
		// 重定向到 / 路径中，然后客户端收到服务器的响应状态码是302，就会自动去响应头去找 location ，然后对该地址发起新的请求
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