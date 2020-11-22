// 为了结局回调地狱，在 ES6 中新增了一个 API：promise


const fs = require('fs')

console.log('1');
new Promise((resolve, reject) => {
	console.log('2');
	fs.readFile('./callback-hell/a.txt','utf8',(err, data) => {
		if(err) {
			reject(err)
		} else {
			console.log('3');
			resolve(data)
		}
	})
}).then(data => {
	console.log(data);
}).catch(err => {
	console.log(err);
})
console.log('4');