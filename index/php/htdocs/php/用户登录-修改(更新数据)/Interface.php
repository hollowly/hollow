<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<table  align='center' width='32%' border='0'>
		<form name='chaxun' method='post' action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])?>">
		<tr>
			<td><h3>查询关键字</h3></td>
			<td> <input type="text" id='keys' name='keys' size='20'></td>
			<td> <input type='submit' name='tijiao' value='查询'></td>
		</tr>
		</form>
	</table>
</body>
</html>

<?php
	include_once('mysqli.php');
	$mysqli->query('use php1903');
	if(isset($_POST['tijiao'])) {
		$key = $_POST['keys'];  //查询关键字
		echo '<hr>';
		$str_sql = "select id,name,phone,grade from student 
		where id='$key' or grade='$key' or name like '%$key%' or phone='$key'";

		$result = $mysqli->query($str_sql);

		if($result) {
			$rows = $result->num_rows;
			if($rows > 0) {
				echo "<table align='center' width='60%' border='1'>";
				echo "<tr>
								<th>学号</th>
								<th>姓名</th>
								<th>电话</th>
								<th>年级</th>
								<th>操作</th>
							</tr>";

				while($array_rows = $result->fetch_assoc()) {
					echo "<tr>";
					echo "<td>",$array_rows['id'],"</td>";
					echo "<td>",$array_rows['name'],"</td>";
					echo "<td>",$array_rows['phone'],"</td>";
					echo "<td>",$array_rows['grade'],"</td>";
					echo "<td> <a href='update_userinfo.php?id=",$array_rows['id'],"'>更新</a></td>";
					echo "</tr>";
				}
				echo "</table>";
			} else {
				echo '没有你需要的数据.<br>';
			}
		} else {
			echo '查询语句有误',$mysqli->error,'<br>';
		}
	
	} 
	$mysqli->close();

	
?>