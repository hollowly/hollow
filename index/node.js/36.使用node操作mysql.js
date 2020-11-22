// 1.安装mysql
// npm install mysql


// 2.创建连接
var mysql = require('mysql');
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123',
  database:'users'
});
 
// 2.连接数据库
connection.connect();
 
// 增删改查义务全写在commection.query()中
// 执行数据操作
connection.query('SELECT * FROM `users`', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

connection.query('INSERT INTO users VALUES(NULL,"admin","123456")', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

// 关闭连接
connection.end();