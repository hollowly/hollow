// 引包
const express = require('express')
const app = express();
const router = require('./router')
const bodyParser = require('body-parser')

// 开放public文件夹
app.use('/public/',express.static('./public/'))
app.use('/node_modules/',express.static('../../../node_modules/'))

// 配置template引擎模板
app.engine('html',require('express-art-template'))

// 配置bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// 把路由容器挂载到 app 服务中
app.use(router)

app.listen(3000,() => {
	console.log('server is runnig....');
})