// 在 Express 这个框架中，默认不支持 session 和 cookie
// 但是我们可以使用第三方中间件：express-session 来解决

// 1. npm install express-session 
// 2. 配置
			// 引用
			// const session = require('express-session')
			// 配置(配置一定要在app.use(router)之前)
			// app.use(session({
			//   secret: 'keyboard cat',
			//   resave: false,
			//   saveUninitialized: true
			// }))
// 3. 使用
	req.session
	// 添加session数据：req.session.foo = 'bar'
	// 访问session数据：

var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
 
var app = express()
 
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
 
app.use(function (req, res, next) {
	// 如果没有数据就为空
  if (!req.session.views) {
    req.session.views = {}
  }
 
  // get the url pathname
  var pathname = parseurl(req).pathname
 
  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
 
  next()
})
 
app.get('/foo', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
})
 
app.get('/bar', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
})