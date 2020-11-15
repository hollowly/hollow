// 1. 安装方式
	// npm install express

	// 2.引包
	const express = require('express')

	const app = express();

	app.get('/index',(req, res) => {
		res.send('主页')
		console.log(req.query);
	})
	app.get('/about',(req, res) => {
		res.send('关于')
	})

	// 公开指定目录
	app.use('/static',express.static('./index/static'))
	// 只要这样做了，你就可以直接通过 /static/xx 的方式访问目录中的所有资源了

	app.listen(3000,()=> {
		console.log('server is running');
	})