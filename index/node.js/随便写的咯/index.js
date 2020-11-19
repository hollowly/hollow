const express = require('express')
const app = express()
app.engine('html',require('express-art-template'))

app.use('/public/',express.static('./public/'))

app.get('/',(req, res) => {
	res.render('index.html')
})
app.get('/post',(req, res) => {
	res.render('post.html')
})
app.get('/404',(req, res) => {
	res.render('404.html')
})

app.listen(3000,() => {
	console.log('server is running http:127.0.0.1:3000');
})