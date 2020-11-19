
	const fs = require('fs')
	const Student = require('./studnet')

	// express提供了一种封装专门用来包装路由的
	const express = require("express")

	// 1.创建路由容器
	const router = express.Router()
	
	// Student.update(
	// 	{id:1,name:'张xxx'},(err) => {
	// 		if(err) {
	// 			return	console.log('修改失败');
	// 		}
	// 		console.log('修改成功');
	// 	}
	// )

	router.get('/',(req, res) => {
		res.render('index page')
	})

	// 2.把路由都挂载到 router 容器中
	router.get('/students',(req, res) => {
		Student.find((err, student) => {
			if(err) {
				return res.status(500).send('server error.')
			}
			res.render('index.html', {
				fruits: [
					'苹果',
					'香蕉',
					'橘子',
					'西瓜',
				],
				info: student
			})
		})

		// fs.readFile('./db.json','utf8',(err, data) => {
		// 	if(err) {
		// 		return res.status(500).send('server error.')
		// 	}
		// 	res.render('index.html', {
		// 		fruits: [
		// 			'苹果',
		// 			'香蕉',
		// 			'橘子',
		// 			'西瓜',
		// 		],
		// 		info: JSON.parse(data).student
		// 	})
		// })
	})

	router.get('/students/new',(req, res) => {
		res.render('new.html')
	})

	router.post('/students/new',(req, res) => {
		Student.save(req.body,(err) => {
			if(err) {
				return res.status(500).send('server error.')
			}
			res.redirect('/students')
		})

	})

	router.get('/students/edit',(req, res) => {
		
	})
	router.post('/students/edit',(req, res) => {
		
	})
	router.get('/students/delete',(req, res) => {
		
	})


	module.exports = router

	// 这样不方便
// module.exports = function(app) {
// 	app.get('/', (req, res) => {
// 		// readFile 的第二个参数是可选的，传入utf8就是告诉它把读取到的文件直接按照 utf8 编码
// 		// 除了这样来转换之外，也可以通过data.tostring()的方式
// 		fs.readFile('./db.json','utf8',(err, data) => {
// 			if(err) {
// 				return res.status(500).send('server error.')
// 			}
// 			res.render('index.html', {
// 				fruits: [
// 					'苹果',
// 					'香蕉',
// 					'橘子',
// 					'西瓜'
// 				],
// 				// 从文件中读取到的数据一定是字符串，所以一定要手动转成对象
// 				info: JSON.parse(data).student
// 			})
// 		})
// 	})

// 	app.get('/students', (err, data) => {
		
// 	})
// 	app.get('/students', (err, data) => {
		
// 	})
// 	app.get('/students', (err, data) => {
		
// 	})
// 	app.get('/students', (err, data) => {
		
// 	})
// 	app.get('/students', (err, data) => {
		
// 	})
// 	app.get('/students', (err, data) => {
		
// 	})
// }
