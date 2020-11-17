const express = require('express')
const app = express();
const router = require('./router')
const bodyParser = require('body-parser')

app.engine('html',require('express-art-template'))

app.use('/public/',express.static('./public/'))
app.use('/node_modules/',express.static('../../../node_modules/'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// 把路由容器挂载到 app 服务中
app.use(router)

app.listen(3000,() => {
	console.log('server is runnig....');
})