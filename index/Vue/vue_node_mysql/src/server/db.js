// db.js 连接数据库文件


let mysql = require('mysql')
exports.base = (sql,data,callback)=>{
	let connection = mysql.createConnection({
	host     : 'localhost',
  	user     : 'root',
  	password : '123',
  	database : 'mytest'
	})
	connection.connect();
	connection.query(sql,data, function (error, results, fields) {
		// 报错抛出异常
  	if (error) throw error;
  		callback && callback(results)
	})
	connection.end();
}
