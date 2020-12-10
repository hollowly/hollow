<?php
	include_once('mysqli.php');

	$id = $_POST['id'];		//主建
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$dtime = date('Y-m-d H:i:s');

	$mysqli->query('use php1903');
	$sql_str = "update student set name='$name', phone='$phone', registertime='$dtime'
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

<a href="interface.php">点击返回</a>