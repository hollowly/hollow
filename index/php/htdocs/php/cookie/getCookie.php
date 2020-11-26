<?php
	echo 'cookie保存的数据，有效期为120秒';
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

<a href="exitCookie.php">退出</a>