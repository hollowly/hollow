const fs = require('fs')

function pReadeFile(filePath) {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath,'utf8',(err, data) => {
			if(err) {
				reject(err)
			}else {
				resolve(data)
			}
		})
	})
}


pReadeFile('./callback-hell/a.txt')
	.then(data => {
		console.log(data);
		return pReadeFile('./callback-hell/b.txt')
	})
	.then(data => {
		console.log(data);
		return pReadeFile('./callback-hell/c.txt')
	})
	.then(data => {
		console.log(data);
	})



pReadeFile('./callback-hell/a.txt').then(data => {
	console.log(data); 
	return pReadeFile('./callback-hell/b.txt')
}).then(data => {
	console.log(data);
	return pReadeFile('./callback-hell/c.txt')
}).then(data => {
	console.log(data);
})