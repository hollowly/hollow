
const express = require('express')

const app = express()

// 1.安装：
// npm install --save art-template
// npm install --save express-art-template

// 2.配置使用 art-template 模板引擎
//第一个参数，表示，当渲染以.art结尾的文件的时候，使用art-template模板引擎
// express-art-template是专门用来在Express中把art-template整合到 Express中
//虽然外面这里不需要记载art-template但是也必须安装
//原因就在于express-art-template依赖了art-template
//Express 为Response相应对象提供了—个方法:render
// render方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
// 热、s.render( ' html模板名'，{模板数据})
// 第一个参数不能写路径，默认会去项目中的views目录查找该模板文件
// 也就是说Express有一个约定:开发人员把所有的视图文件都放到views目录中

// express-art-template 配置：
app.engine('html',require('express-art-template'))

// 3.如果想修改 views 目录，则可以
// app.set('views',static)
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
	res.render('post.html')
})

app.get('/pinglun',(req, res) => {
	var comment = req.query;
	comment.data = '2020-11-16'
	comments.unshift(comment)
	res.redirect('/')
})


app.listen(3000)