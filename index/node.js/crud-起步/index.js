const express = require('express')
const app = express();

app.engine('html',require('express-art-template'))

app.use('/public/',express.static('./public/'))
app.use('/node_modules/',express.static('../../../node_modules/'))

app.get('/', (req, res) => {
	res.render('index.html', {
		fruits: [
			'苹果',
			'香蕉',
			'橘子',
			'西瓜'
		],
		info: [
			{'id':'1001','name':'hollow','class':'软件19-4','hobbys':'吃饭、睡觉、敲代码'},
			{'id':'1002','name':'aaaa','class':'软件19-5','hobbys':'吃饭、睡觉、敲代码'},
			{'id':'1003','name':'bbbb','class':'软件19-2','hobbys':'吃饭、睡觉、敲代码'},
			{'id':'1004','name':'cccc','class':'软件19-4','hobbys':'吃饭、睡觉、敲代码'},
			{'id':'1005','name':'dddd','class':'软件19-3','hobbys':'吃饭、睡觉、敲代码'},
			{'id':'1006','name':'eeee','class':'软件19-2','hobbys':'吃饭、睡觉、敲代码'},
			{'id':'1007','name':'ffff','class':'软件19-4','hobbys':'吃饭、睡觉、敲代码'},
			{'id':'1008','name':'gggg','class':'软件19-6','hobbys':'吃饭、睡觉、敲代码'},
			{'id':'1009','name':'hhhh','class':'软件19-1','hobbys':'吃饭、睡觉、敲代码'}
		]
	})
})
app.get('/post',(req, res) => {
	res.render('post.html')
})

app.listen(3000,() => {
	console.log('server is runnig....');
})