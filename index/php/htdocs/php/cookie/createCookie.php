<?php
	echo '<pre>';
	print_r($_GET);
	echo '</pre>';

	$email = $_GET["email"];
	$phone = $_GET["phone"];
	$password = $_GET["password"];
	$major = $_GET["major"];

	echo '收到的邮箱是：',$email,'<br>';
	echo '收到的手机号是：',$phone,'<br>';
	echo '收到的密码是：',$password,'<br>';
	echo '收到的专业是：',$major,'<br>';

	// 创建cookie
	setcookie('email',$email,time() + 120);
	setcookie('phone',$phone,time() + 120);
	setcookie('password',$password,time() + 120);
	setcookie('major',$major,time() + 120);

?>

<a href="getCookie.php">跳转</a>