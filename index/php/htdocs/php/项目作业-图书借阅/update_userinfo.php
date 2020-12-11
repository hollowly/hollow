<?php
	include_once('mysqli.php');
	$id = $_GET['id'];

	$mysqli->query('use mydb_19301013');
	$insert_sql = "select * from borrowbooks where id=$id";
	$result = $mysqli->query($insert_sql);

	if($result) {
		$rows = $result->num_rows;

		if($rows) {
				echo "<form action='update_datainuser.php' method='post'>";
				echo "<h1>修改你要更新的内容</h1>";
			while($array_rows = $result->fetch_assoc()) {
				echo "<input type='hidden' name='id' value=",$array_rows['id'],">";
				echo "姓名：<input type='text' name='name' value=",$array_rows['name'],"> <br>";
				echo "图书名称：<input type='text' name='bookName' value=",$array_rows['bookName'],"> <br>";
				echo "图书ISBN编号：<input type='text' name='bookISBN' value=",$array_rows['bookISBN'],"> <br>";
				echo "归还日期：<input type='text' name='sendTime' value=",$array_rows['sendTime'],"> <br>";
				echo "罚款原因：<input type='text' name='fineReason' disabled value=",'超时',"> <br>";
				echo "图书状态：<input type='text' name='bookState' value=",$array_rows['bookState'],"> <br>";
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