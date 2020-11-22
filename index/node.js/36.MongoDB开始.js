var mongoose = require('mongoose')

var Schema = mongoose.Schema

// 1.连接数据库
// 指定连接的数据库必须要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect('mongodb://localhost/itcast')

// 2. 设计文档结构（表结构）
var userSchema = new Schema({
	username: {
		type: String,
		require:true
	},
	passworld: {
		type: String,
		require:true
	},
	email: {
		type:String
	}
})

// 3.将文档结构发布为模型
// 	mongoose.model 方法就是用来将一个架构发布为 model
// 	第一个参数：传入一个大写名称单数字符串来表示你的数据库名称
// 							mongoose 会自动将大写名词的字符串生成小写复数的集合名称
// 							例如这里的 User 最终会变成 users 集合名称
// 第二个参数：架构 Schema

// 返回值：模型构造函数

var User = mongoose.model('User',userSchema)

// 当我们有了模型构造函数之后，就可以使用这个函数对 users 集合中的数据为所欲为了（增删改查）


// 新增数据**************************
// var admin = new User({
// 	username:'zs',
// 	passworld:'123',
// 	email:'admin@admin.com'
// })

// admin.save((err, ret) => {
// 	if(err) {
// 		console.log('保存失败');
// 	} else {
// 		console.log('保存成功');
// 		console.log(ret);
// 	}
// })
// 新增数据**************************


// 查询数据**************************
// 查询所有
User.find((err, data) => {
	if(err) {
		console.log('查询失败');
		return console.log(err);
	}
	console.log('查询成功');
	console.log(data);
})

// 按条件查询
// User.find({
// 	username:'zs'
// },(err, data) => {
// 	if(err) {
// 		console.log('查询失败');
// 		return console.log(err);
// 	}
// 	console.log('查询成功');
// 	console.log(data);
// })

// 按条件查询单个
// User.findOne({
// 	username:'zs',
// 	passworld:'456',
// },(err, data) => {
// 	if(err) {
// 		console.log('查询失败');
// 		return console.log(err);
// 	}
// 	console.log('查询成功');
// 	console.log(data);
// })
// 查询数据**************************


// 删除数据**************************
// 删除单个
// User.deleteOne({
// 	username:'zs',
// },(err, data) => {
// 	if(err) {
// 		console.log('删除失败');
// 		return console.log(err);
// 	}
// 	console.log('删除成功');
// 	console.log(data);
// })


// 删除所有
// User.deleteMany({
// 	username:'zs',
// },(err, data) => {
// 	if(err) {
// 		console.log('删除失败');
// 		return console.log(err);
// 	}
// 	console.log('删除成功');
// 	console.log(data);
// })
// 删除数据**************************


// 更新数据数据**************************
// 更新一个
// User.updateOne({username:'hollow'},{username:'giao'},(err, data) => {
// 	if(err) {
// 		console.log('更新失败');
// 		return console.log(err);
// 	}
// 	console.log('更新成功');
// 	console.log(data);
// })

// 更新所有
// User.updateMany({username:'giao'},{username:'hollowUpdata'},(err, data) => {
// 	if(err) {
// 		console.log('更新失败');
// 		return console.log(err);
// 	}
// 	console.log('更新成功');
// 	console.log(data);
// })

// 更新数据数据**************************