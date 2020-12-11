<?php
	include_once('mysqli.php');
	$id = $_POST['id'];
	
	$name = $_POST['name'];
	$bookName = $_POST['bookName'];
	$bookISBN = $_POST['bookISBN'];
	$sendTime = $_POST['sendTime'];
	$bookState = $_POST['bookState'];

	$mysqli->query('use mydb_19301013');
	$sql_str = "update borrowbooks set name='$name', bookName='$bookName', bookISBN='$bookISBN', 
	sendTime='$sendTime', bookState='$bookState'
	where id=$id";

	$result = $mysqli->query($sql_str);

	if($result) {
		$rows = $mysqli->affected_rows;
		if($rows) {
			echo '更新成功.<br>';
		} else {
			echo '更新失败<br>';
		}
	} else {
		echo 'sql语句有误',$mysqli->error,'<br>';
	}

	$mysqli->close();
?>

<a href="图书归还和修改page.php">点击返回</a>