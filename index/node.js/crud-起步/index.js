const express = require('express')
const app = express();
const router = require('./router')

app.engine('html',require('express-art-template'))

app.use('/public/',express.static('./public/'))
app.use('/node_modules/',express.static('../../../node_modules/'))

router(app)


app.listen(3000,() => {
	console.log('server is runnig....');
})