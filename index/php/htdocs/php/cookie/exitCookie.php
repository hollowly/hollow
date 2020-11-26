<?php
	setcookie('email','null',time() +1);
	setcookie('phone','null',time() +1);
	setcookie('password','null',time() +1);
	setcookie('major','null',time() +1);
	echo "退出登录，让cookie失效";	
	if(isset($_COOKIE['email'])) {
		echo "邮箱：",$_COOKIE['email'],'<br>';
	}
	if(isset($_COOKIE['phone'])) {
		echo '手机：',$_COOKIE['phone'],'<br>';
	}
	if(isset($_COOKIE['password'])) {
		echo '密码：',$_COOKIE['password'],'<br>';
	}
	if(isset($_COOKIE['major'])) {
		echo '专业：',$_COOKIE['major'],'<br>';
	}
?>