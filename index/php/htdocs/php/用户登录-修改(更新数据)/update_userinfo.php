<?php
	include_once('mysqli.php');
	$id = $_GET['id'];  //获取主键

	// $mysqli->query('use php1903');//选择要操作的数据库
	$insert_sql = "select * from student where id=$id";
	$result = $mysqli->query($insert_sql);

	if($result) {
		$rows = $result->num_rows;  //结果中记录的行

		if($rows) {
				echo "<form action='update_datainuser.php' method='post'>";
			while($array_rows = $result->fetch_assoc()) {	//关联数组
				echo "<input type='text' name='id' value=",$array_rows['id'],"> <br>";
				echo "<input type='text' name='name' value=",$array_rows['name'],"> <br>";
				echo "<input type='text' name='phone' value=",$array_rows['phone'],"> <br>";
				echo "<input type='text' name='grade' value=",$array_rows['grade'],"> <br>";
			}
				echo "<input type='submit' name='subbtn' value='提交'><br>";
				echo '</form>';
		} else {
				echo '没有你找的记录.<br>';
			}
	} else {
		echo 'sql语法有误',$mysqli->error,'<br>';
	}

?>