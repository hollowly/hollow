const express = require('express')

const router = express.Router()

router.use('/public/',express.static('./public/'))

router.get('/',(req, res) => {
	res.render('index.html')
})

router.get('/post',(req, res) => {
	res.render('post.html')
})

router.get('/404',(req, res) => {
	res.render('404.html')
})




module.exports = router