const express = require('express')

const router = express.Router()


router.get('/',(req, res) => {
	res.render('index.html')
})

router.get('/post',(req, res) => {
	res.render('post.html')
})



module.exports = router