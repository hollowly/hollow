const fs = require('fs')

function pReadFile(filePath) {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, 'utf8', (err, data) =>{
			if(err) {
				reject(err)
			} else {
				resolve(data)
			}
		})
	})
}

pReadFile('./callback-hell/a.txt').then(data => {
	console.log(data);
	return pReadFile('./callback-hell/b.txt')
}).then(data => {
	console.log(data);
	return pReadFile('./callback-hell/c.txt')
}).then(data => {
	console.log(data);
})
