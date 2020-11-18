/* 
	数据操作文件模块
	职责：操作文件中的数据，只处理逻辑，不关心业务
*/
const fs = require('fs')

const dbPath = './db.json'
// 获取所有学生列表
exports.find = (callback) => {
	fs.readFile(dbPath, (err, data) => {
		if(err) {
			return	callback(err)
		}
		callback(null, JSON.parse(data).student)
	})
}


// 添加保存学生
exports.save = () => {
	
}



// 更新学生
exports.update = () => {
	
}



// 删除学生
exports.delete = () => {
	
}