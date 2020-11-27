
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
		res.send('<h1>请访问/students <p> <a href="http://127.0.0.1:3000/students">点击跳转</a></h1>')
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
	})

	router.get('/students/new',(req, res) => {
		res.render('new.html')
	})

	router.post('/students/new',(req, res) => {
		new Student(req.body).save((err) => {
			if(err) {
				return res.status(500).send('server error.')
			}
			res.redirect('/students')
		})
	})

	router.get('/students/edit',(req, res) => {
		Student.findById(req.query.id, (err, student) => {
			if(err) {
				return res.status(500).send('server error.')
			}
			res.render('edit.html', {
				student:student
			})
		})
	})

	router.post('/students/edit',(req, res) => {
		Student.findByIdAndUpdate(req.body.id, req.body,(err) => {
			if(err) {
				return res.status(500).send('Server error.')
			}
			res.redirect('/students')
		})
	})

	router.get('/students/delete',(req, res) => {
		Student.findByIdAndRemove(req.query.id, (err) => {
			if(err) {
				return res.status(500).send('Server is error.')
			}
			res.redirect('/students')
		})
	})


	module.exports = router
	