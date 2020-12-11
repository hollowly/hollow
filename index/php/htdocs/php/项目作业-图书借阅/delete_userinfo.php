<?php
	include_once('mysqli.php');
	$id = $_GET['id'];

	$mysqli->query('use mydb_19301013');
	$del_sql = "delete from borrowbooks where id=$id";
	
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

<h2><a href="图书归还和修改page.php">返回</a></h2>