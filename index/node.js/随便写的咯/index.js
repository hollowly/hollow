const express = require('express')
const app = express()
const fs = require('fs')

app.engine('html',require('express-art-template'))

app.get('/',(req, res) => {
	res.render('index.html')
})


app.listen(3000,function() {
	console.log('go');
})