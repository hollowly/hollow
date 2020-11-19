const express = require('express')

const router = express.Router()

router.get('/',(req, res) => {
	res.send('访问成功')
})

router.get('/404', (req, res) => {
	res.render('404.html')
})

router.get('/post', (req, res) => {
	res.render('post.html')
})

module.exports = router