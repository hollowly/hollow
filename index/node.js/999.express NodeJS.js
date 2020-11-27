const express = require('express')
const app = express()

// 必须配置这个才能使用 render 来进行渲染 html
// render 默认访问 views 中的文件
app.engine('html',require('express-art-template'))

// 设置 render 默认访问的文件夹
app.set('views', __dirname + '/views');

app.get('/',(req, res) => {
	res.render('index.html')
})

app.get('/post',(req, res) => {
	res.render('post.html')
})

app.listen(3000,() => {
	console.log('server is running');
})