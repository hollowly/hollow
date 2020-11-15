const express = require('express')
const fs = require('fs')
const app = express();

app.use('/index/static/',express.static('./index/static'))


app.use('/index',(req, res) => {
	fs.readFile('./index/index.html',(err, data) => {
		if(err) {
			return res.send('读取失败')
		}
		res.end(data)
	})
})
// app.use('/',(req, res) => {
// 	fs.readFile('./index/index.html',(err, data) => {
// 		if(err) {
// 			return res.send('读取失败')
// 		}
// 		res.end(data)
// 	})
// })
app.use('/post',(req, res) => {
	fs.readFile('./index/post.html',(err, data) => {
		if(err) {
			return res.send('读取失败')
		}
		res.end(data)
	})
})

app.listen(3000,() => {
	console.log('server is runnig');
})