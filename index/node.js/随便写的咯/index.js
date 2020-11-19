const express = require('express')
const app = express()
const router = require('./router')
app.engine('html',require('express-art-template'))

app.use(router)

app.listen(3000,() => {
	console.log('server is running http:127.0.0.1:3000');
})