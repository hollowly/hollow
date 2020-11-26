<?php
	echo '<pre>';
	print_r($_GET);

	$email = $_GET["email"];
	$phone = $_GET["phone"];
	$password = $_GET["password"];
	$major = $_GET["major"];

	echo '<br> 收到的邮箱是：',$email;
	echo '<br> 收到的手机号是：',$phone;
	echo '<br> 收到的密码是：',$password;
	echo '<br> 收到的专业是：',$major;
?>