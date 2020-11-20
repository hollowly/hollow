// 回调函数：上层定义，下层调用
		// setTimeout
		// readFile
		// wirteFile
		// readdir
		// axios	
// 都是异步函数
console.log('1');
function add(x, y,callback) {
	// var x = 10;
	// var y = 20;
	// var callback = function(ret) { console.log(ret) }
	setTimeout(() => {
		let ret = x + y;
		callback(ret)
	}, 1000);
}
console.log('3');

add(10, 20, (ret) => {
	console.log(ret);
})

console.log('----------------------------');

function add(x, y, callback) {
	setTimeout(() => {
		callback(x + y)
	}, 1000);
}


add(20,20,(ret) => {
	console.log(ret);
})