// 为了结局回调地狱，在 ES6 中新增了一个 API：promise


const fs = require('fs')

new Promise((resolve, reject) => {
	fs.readFile('./callback-hell/a.txt','utf8',(err, data) => {
		if(err) {
			reject(err)
		} else {
			resolve(data)
		}
	})
}).then(data => {
	console.log(data);

	return new Promise((resolve, reject) => {
		fs.readFile('./callback-hell/b.txt','utf8',(err, data) => {
			if(err) {
				reject(err)
			} else {
				resolve(data)
			}
		})
	}).then(data => {
		console.log(data);
		
		return new Promise((resolve, reject) => {
			fs.readFile('./callback-hell/c.txt','utf8',(err, data) => {
				if(err) {
					reject(err)
				} else {
					resolve(data)
				}
			})
		}).then(data => {
			console.log(data);
		})
	})
}).catch(err => {
	console.log(err);
})