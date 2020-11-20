const express = require('express')
const app = express()
const router = require('./router')

app.engine('html',require('express-art-template'))

app.use('/public/',express.static('./public/'))

app.use(router)


app.listen(3000,function() {
	console.log('server is runnig');
})