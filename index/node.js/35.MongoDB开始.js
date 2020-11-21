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


// 新增数据：
// var admin = new User({
// 	username:'hollow',
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