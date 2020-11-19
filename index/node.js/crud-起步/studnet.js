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


// 添加保存学生
exports.save = ((student, callback) => {
	fs.readFile(dbPath, 'utf8',(err, data) => {
		if(err) {
			return callback(err)
		}
		var students = JSON.parse(data).students
		// 处理id唯一，不重复
		students.id = students[students.length -1].id + 1;
		// 把用户传递的对象保存到数组中
		students.push(students)

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
exports.update = () => {
	
}



// 删除学生
exports.delete = () => {
	
}