var fs = require('fs')

// 这样的代码是无法保证执行顺序的
// fs.readFile('./callback-hell/a.txt','utf8',(err, data) => {
// 	if(err) {
// 		throw err
// 	}
// 	console.log(data);
// })
// fs.readFile('./callback-hell/b.txt','utf8',(err, data) => {
// 	if(err) {
// 		throw err
// 	}
// 	console.log(data);
// })
// fs.readFile('./callback-hell/c.txt','utf8',(err, data) => {
// 	if(err) {
// 		throw err
// 	}
// 	console.log(data);
// })



// 所以我们需要嵌套来控制顺序
// 如果有100个文件，那么久形成了回调地狱
fs.readFile('./callback-hell/a.txt','utf8',(err, data) => {
	if(err) {
		throw err
	}
	console.log(data);
	fs.readFile('./callback-hell/b.txt','utf8',(err, data) => {
		if(err) {
			throw err
		}
		console.log(data);
		fs.readFile('./callback-hell/c.txt','utf8',(err, data) => {
			if(err) {
				throw err
			}
			console.log(data);
		})
	})
})