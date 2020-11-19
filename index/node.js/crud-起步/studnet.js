/* 
	数据操作文件模块
	职责：操作文件中的数据，只处理逻辑，不关心业务
*/
const fs = require('fs')
const dbPath = './db.json'

// 获取所有学生列表
exports.find = (callback) => {
	fs.readFile(dbPath, 'utf8', (err, data) => {
		if(err) {
			return callback(err)
		}
		callback(null, JSON.parse(data).students)
	})
}

exports.findById = (id, callback) => {
	fs.readFile(dbPath, 'utf8', (err, data) => {
		if(err) {
			return callback(err)
		}
		var students = JSON.parse(data).students
		var ret = students.find(item => {
			return item.id === parseInt(id)
		})
		callback(null, ret)
	})
}

// 添加保存学生
exports.save = ((student, callback) => {
	fs.readFile(dbPath, 'utf8',(err, data) => {
		if(err) {
			return callback(err)
		}
		var students = JSON.parse(data).students
		// 处理id唯一，不重复gt
		student.id = students[students.length -1].id + 1;
		// 把用户传递的对象保存到数组中
		students.push(student)
		// console.log(students);
		// 把对象数据转成字符串
		var result =	JSON.stringify({
			students:students
		})
		
		// 把字符串保存到文件中
		fs.writeFile(dbPath, result, (err) => {
			if(err) {
				return callback(err)
			}
			callback(null)
		})
	})
})

// 更新学生
exports.update = ((student, callback) => {
	fs.readFile(dbPath, 'utf8', (err, data) => {
		if(err) {
			return callback(err)
		}
		var students = JSON.parse(data).students

		// 注意，这里记得把id统一
		student.id = parseInt(student.id)

		var stu = students.find((item) => {
			return item.id === student.id
		})

		for(let key in student) {
			stu[key] = student[key]
		}

		var result = JSON.stringify({
			students:students
		})

		fs.writeFile(dbPath, result, (err) => {
			if(err) {
				return callback(err)
			}
			callback(null)
		})
	})
})


// 删除学生
exports.delete = () => {
	fs.readFile(dbPath, 'utf8',(err, data) => {
		if(err) {
			return callback(err)
		}
		var students = JSON.parse(data).students

		// findexIndex：专门用来根据条件查找元素下标
		var deleteId = students.findIndex(item => {
			return item.id === parseInt(id)
		})

		// 根据下标从数组中删除对应的学生对象
		students.splice(deleteId,1)

		var result = JSON.stringify({
			students:students
		})

		fs.writeFile(dbPath, result, (err) => {
			if(err) {
				return callback(err)
			}
			callback(null)
		})
	})
}