<?php
// 启动session
	// session_start();
	$email = $_GET['email'];
	$phone = $_GET['phone'];
	$password = $_GET['password'];
	$major = $_GET['major'];

	echo '邮箱：',$email,'<br>';
	echo '手机：',$phone,'<br>';
	echo '密码：',$password,'<br>';
	echo '专业：',$major,'<br>';

	$_SESSION['email'] = $email;
	$_SESSION['phone'] = $phone;
	$_SESSION['password'] = $password;
	$_SESSION['major'] = $major;
?>

<a href="getSession.php">跳转</a>