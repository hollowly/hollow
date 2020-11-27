const express = require('express')
const app = express()
const router = require('./router')

// 必须配置这个才能使用 render 来进行渲染 html
app.engine('html',require('express-art-template'))
app.use('/public/',express.static('./public/'))

app.use(router)


app.listen(3000,function() {
	console.log('server is runnig');
})