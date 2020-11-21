// 因为官方的 mongodb包 太原生了，所以我们选择第三方的包来操作node


// 使用第三方 mongoose 包操作：
// 第三方包：mongoose 基于 MongoDB 官方的 mongodb 包再一次做了封装


// 引包
const mongoose = require('mongoose');

// 连接 MongoDB 数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

// 创建一个模型，
// 就是在设计数据库
// MongoDB是动态的,非常灵活,只需要在代码中设计你的数据库就可以了
// mongoose 这个包就可以让你的编写过程变得非常简单
const Cat = mongoose.model('Cat', { name: String });

// 实例化一个 Cat
const kitty = new Cat({ name: 'hollow' });

// 持久化保存 Kitty 实例
kitty.save().then(() => console.log('meow'));

