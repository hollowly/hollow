const http = require('http')
const fs = require('fs')
const url = require('url')
var arr =  [
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
		res.statusCode = 302
		res.setHeader('location','/index/static/vue/index.js')
		var obj2 = {};
		obj2['name'] = urlObj.query.name
		obj2['message'] = urlObj.query.message
		obj2['data'] = '2020-11-13'
		arr.unshift(obj2)
		console.log(arr);
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