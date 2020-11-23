const express = require('express')
const path = require('path')

const app = express()

app.use('/public/', express.static(path.join(__dirname,'./public/')))
app.use('/node_modules/', express.static(path.join(__dirname,'./node_modules/')))

app.engine('html',require('express-art-template'))

app.set('views',path.join(__dirname,'./views'))


app.get('/',(req, res) => {
	res.render('index.html')
})


app.listen(3000,() => {
	console.log('server is running','http://127.0.0.1:3000');
})