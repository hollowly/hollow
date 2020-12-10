<?php
	// 第一步：连接数据库
	$mysqli = new mysqli('localhost','root','123');

	if(mysqli_connect_error()) {
		echo '连接失败',mysqli_connect_error();
		exit();
	}
	// 创建数据库
	$result = $mysqli->query("create database soft19_4");
	if($result == true) {
		echo "创建数据库成功","<br>";
	} else {
		echo "创建数据库失败",'<br>';
	}
	// 第二步：选择数据库
	// 第三步：执行数据库操作：增删改查
	// $result = $mysqli->query('drop database soft19_4');   //删除数据库
	$result = $mysqli->query('use soft19_4');
	$result = $mysqli->query('set names gb2312');
	$result = $mysqli->query("create table user(
		id int auto_increment primary key,
		user varchar(30) not null,
		email varchar(30) not null,
		phone char(11) not null,
		password varchar(80),
		sex char(30),
		registertime datetime )");


	// 第四步：清除记录表，释放资源
	// mysqli_free_result();


	// 第五步：关闭MYSQL服务器连接
	$mysqli->close();

?>