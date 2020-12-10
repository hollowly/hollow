<?php
	include_once('mysqli.php');
	// header("Content-type:text/html;charset=utf-8");

	$id = $_POST['id'];
	$user = $_POST['user'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$password = md5($_POST['password']);
	$sex = $_POST['sex'];
	$registertime = date('Y-m-d H:i:s'); //获取当前时间

	// $result = $mysqli->query('use soft19_4');//选择要操作的数据库

	$insert_sql = "insert into user(id, user, email, phone, password, sex, registertime)
	values('$id','$user','$email','$phone','$password','$sex','$registertime')";
	
	$result = $mysqli->query($insert_sql);
	$row = $mysqli->affected_rows; //写入记录的行数

	if($row) {
		echo '注册成功','<br>';
	} else {
		echo '注册失败',$mysqli->error,'<br>';
	}
	$mysqli->close();
?>

<a href="Interface.html">退出</a>