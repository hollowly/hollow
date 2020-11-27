const express = require('express')
const app = express()
// 中间件：处理请求的，本质就是一个函数
// 在 express 中，对中间件有几种分类

// 不关心请求路径和请求方法的中间件
// 也就是说任何请求都会进入这个中间件
// 中间件本身就是一个方法,改方法接收三个参数
	// request 请求对象
	// response 响应对象
	// next	 下一个中间件：是一个方法，用来调用下一个中间件的

	// 全局中间件
app.use((req, res, next) => {
	console.log('1')
	next()
})
app.use((req, res, next) => {
	console.log('2')
	next()
})
app.use((req, res, next) => {
	console.log('3')
	next()
})

// 以 /xxx 开头
app.use('/a',(req, res, next) => {
	console.log('a')
	next()
})

app.use('/b',(req, res, next) => {
	console.log('b')
	next()
})

// 除了以上中间件之外，还有一种最常用的，严格匹配请求方法和请求路径的中间件
// app.get
// app.post

app.use((req, res, next) => {
	console.log('1')
	next()
})

app.get('/',(req, res, next) => {
	console.log('/')
})

app.get('/a',(req, res, next) => {
	console.log('/a')
	next()
})

app.use((req, res, next) => {
	console.log('/2')
	next()
})


// 相同的也会继续执行，不会被覆盖
app.get('/abc',(req, res, next) => {
	console.log('abc')
	next()
})
app.get('/abc',(req, res, next) => {
	console.log('abc')
	next()
})

app.listen(3000,() => {
	console.log('server is running');
})