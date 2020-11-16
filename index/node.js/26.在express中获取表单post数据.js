
const express = require('express')
const app = express()
app.engine('html',require('express-art-template'))

// 1.引包
const bodyParser = require('body-parser')

// 2.body-parser配置：
// 配置bodyParser中间件，专门用来解析表单 post 请求体
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var comments =  [
	{name:'张三',message:'今天天气真不错',date:'2020-11-5'},
	{name:'李四',message:'今天天气真不错+1',date:'2020-11-7'},
	{name:'王五',message:'今天天气真不错+2',date:'2020-11-8'},
	{name:'杜六',message:'今天天气真不错+3',date:'2020-11-12'},
]

app.use('/index/static/',express.static('./index/static/'))


app.get('/',(req, res) => {
	res.render('index.html', {
		comments
	})
})

app.get('/404', (req, res) => {
	res.render('404.html')
})

app.get('/post', (req, res) => {
	res.render('post1.html')
})

// 在express中内衣内置获取表单post请求体的API,这里我们需要使用一个第三方包：body-parser
// 1.安装： npm install --save body-parser

// 2.配置：
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

// 3.引包：
// const bodyParser = require('body-parser')

app.post('/post',(req, res) => {
	// 4.通过 req.body 获取post请求的数据
	// console.log(req.body);
	let comment = req.body
	comment.data = '2020-11-17'
	comments.unshift(comment)
	res.redirect('/')

})

app.listen(3000)