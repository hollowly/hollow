<?php
	echo '输出session数据：',"<br>";

	echo $_SESSION['email'],'<br>';
	echo $_SESSION['phone'],'<br>';
	echo $_SESSION['password'],'<br>';
	echo $_SESSION['major'],'<br>';
?>

<a href="exitSession.php">退出</a>