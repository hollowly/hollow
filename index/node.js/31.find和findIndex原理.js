var users = [
	{id:1, name:"张三"},
	{id:2, name:"李四"},
	{id:3, name:"王五"},
	{id:4, name:"杜六"},
]

// find原理
Array.prototype.myFInd = function(condition) {
	for(let i = 0; i < this.length; i++) {
		if(condition(this[i], i)) {
			return this[i]
		}
	}
}

// findIndex原理
Array.prototype.myFIndIndex = function(condition) {
	for(let i = 0; i < this.length; i++) {
		if(condition(this[i], i)) {
			return i
		}
	}
}

var ret1 = users.myFInd(function(item, index) {
	return item.id === 4
})

var ret2 = users.myFIndIndex(function(item, index) {
	return item.id === 4
})

console.log(ret1);
console.log(ret2);