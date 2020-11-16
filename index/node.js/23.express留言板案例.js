const express = require('express')
const fs = require('fs')
const app = express()

app.get('/',(req, res) => {
	fs.readFile('./index/index.html',(err ,data) => {
		if(err) {
			return res.send('读取失败')
		}
		res.end(data)
	})
})
app.get('/post',(req, res) => {
	fs.readFile('./index/post.html',(err ,data) => {
		if(err) {
			return res.send('读取失败')
		}
		res.end(data)
	})
})
app.get('/index',(req, res) => {
	fs.readFile('./index/index.html',(err ,data) => {
		if(err) {
			return res.send('读取失败')
		}
		res.end(data)
	})
})

app.get('/about',(req, res) => {
	res.send('关于')
})


// 公开文件
app.use('/index/static/',express.static('./index/static/'))

app.listen(3000, () => {
	console.log('server is running');
})