// router.js 路由文件


const express = require('express')
const router = express.Router()
const services = require('./services.js')
// router.get('/',services.start)
// 登录功能
router.post('/api/login',services.login)
// 注册功能
router.post('/api/register',services.register)
module.exports = router