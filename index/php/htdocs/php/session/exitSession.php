<?php

	unset($_SESSION['email']);
	unset($_SESSION['phone']);
	unset($_SESSION['password']);
	unset($_SESSION['major']);

	session_destroy();  //销毁session
	echo '退出成功，已销毁session.','<br>';
	echo '<hr>会报错，因为session已经被销毁.';
	echo $_SESSION['email'],'<br>';
	echo $_SESSION['phone'],'<br>';
	echo $_SESSION['password'],'<br>';
	echo $_SESSION['major'],'<br>';
?>