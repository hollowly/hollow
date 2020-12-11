<?php
	// 连接数据库
	$mysqli = new mysqli('localhost','root','123');

	// 判断是否连接
	if(mysqli_connect_error()) {
		echo '连接失败',mysqli_connect_error();
		exit();
	}
	// 设置编码
	$result = $mysqli->query('set names utf8');

	// 关闭连接
	// $mysqli->close();
?>