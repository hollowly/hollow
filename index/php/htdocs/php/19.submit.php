<?php
	// 创建用来保存cookie的变量
	$id = $_POST['id'];
	$name = $_POST["name"];
	$password = $_POST["password"];
	$phone = $_POST["phone"];
	$sex = $_POST['sex'];
	$grade = $_POST['grade'];
	$major = $_POST["major"];

	// 创建cookie
	setcookie('id',$id,time() + 120);
	setcookie('name',$name,time() + 120);
	setcookie('password',$password,time() + 120);
	setcookie('phone',$phone,time() + 120);
	setcookie('sex',$sex,time() + 120);
	setcookie('grade',$grade,time() + 120);
	setcookie('major',$major,time() + 120);

	echo '<h3>cookie已保存，注意你的行为！！</h3>';

	// 保存cookie
	isset($_COOKIE['id']);
	isset($_COOKIE['name']);
	isset($_COOKIE['password']);
	isset($_COOKIE['phone']);
	isset($_COOKIE['sex']);
	isset($_COOKIE['grade']);
	isset($_COOKIE['major']);


	// 引用数据库
	include_once('19.mysqli.php');
	// header("Content-type:text/html;charset=utf-8");

	// 创建保存到数据库的变量
	$id = $_POST['id'];
	$name = $_POST['name'];
	$password = md5($_POST['password']);
	$phone = $_POST['phone'];
	$sex = $_POST['sex'];
	$grade = $_POST['grade'];
	$major = $_POST['major'];
	$registertime = date('Y-m-d H:i:s'); //获取当前时间

	$result = $mysqli->query('use php1903');//选择要操作的数据库

	$insert_sql = "insert into student(id, name, password, phone, sex, grade, major, registertime)
	values('$id','$name','$password','$phone','$sex','$grade','$major','$registertime')";

	$mysqli->query($insert_sql);
	$row = $mysqli->affected_rows; //写入记录的行数

	if($row) {
		echo '<h2>创建用户成功，您的数据已存到数据库</h2>','<br>';
	} else {
		echo '创建用户失败',$mysqli->error,'<br>';
	}
	$mysqli->close();

?>

<h1><a href="19.Interface.html">退出</a></h1>


<!-- 
setcookie('email','null',time() +1);
setcookie('phone','null',time() +1);
setcookie('password','null',time() +1);
setcookie('major','null',time() +1);
echo "退出登录，让cookie失效";	 -->