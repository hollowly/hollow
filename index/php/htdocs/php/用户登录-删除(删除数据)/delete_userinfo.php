<?php
	include_once('mysqli.php');
	$id = $_GET['id'];  //获取主键

	$del_sql = "delete from student where id=$id";
	$result = $mysqli->query($del_sql);

	if($result) {
		$rows = $mysqli->affected_rows;

		if($rows) {
			echo '删除成功';
		} else {
			echo '删除失败.';
		}

	} else {
		echo 'sql语法有误',$mysqli->error,'<br>';
	}

?>

<h2><a href="interface.php">返回</a></h2>