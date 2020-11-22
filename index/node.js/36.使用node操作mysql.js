// 1.安装mysql
// npm install mysql


// 2.创建连接
var mysql = require('mysql');
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123',
  database:'my_db'
});
 
// 2.连接数据库
connection.connect();
 
// 执行数据操作
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

// 关闭连接
connection.end();