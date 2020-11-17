const express = require('express')
const app = express();
const fs = require('fs')

app.engine('html',require('express-art-template'))

app.get('/', (req, res) => {
	// readFile 的第二个参数是可选的，传入utf8就是告诉它把读取到的文件直接按照 utf8 编码
	// 除了这样来转换之外，也可以通过data.tostring()的方式
	fs.readFile('./crud-起步/db.json','utf8',(err, data) => {
		if(err) {
			return res.status(500).send('server error.')
		}
			// 从文件中读取到的数据一定是字符串，所以一定要手动转成对象
		res.end(JSON.parse(data).student)
	})
})
app.listen(3000,() => {
	console.log('server is runnig....');
})