const { json } = require('body-parser');
const express = require('express')
const app = express();
const fs = require('fs')

app.engine('html',require('express-art-template'))

app.use('/public/',express.static('./public/'))
app.use('/node_modules/',express.static('../../../node_modules/'))

app.get('/', (req, res) => {
	// readFile 的第二个参数是可选的，传入utf8就是告诉它把读取到的文件直接按照 utf8 编码
	// 除了这样来转换之外，也可以通过data.tostring()的方式
	fs.readFile('./db.json','utf8',(err, data) => {
		if(err) {
			return res.status(500).send('server error.')
		}
		res.render('index.html', {
			fruits: [
				'苹果',
				'香蕉',
				'橘子',
				'西瓜'
			],
			// 从文件中读取到的数据一定是字符串，所以一定要手动转成对象
			info: JSON.parse(data).student
		})
	})
})
app.get('/post',(req, res) => {
	res.render('post.html')
})

app.listen(3000,() => {
	console.log('server is runnig....');
})