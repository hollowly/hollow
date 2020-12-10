<?php
	Header('content-tpye=html/text charset=UTF8');
	include_once('19.mysqli.php')
?>
<!-- 
<script language='javascript'>
	function check() {
		var keywrod = document.getElementById('keys').value;
		if(keywrod == '') {
			alert('请输入关键字.');
			document.getElementById('keys').focus();
			return false;
		}
		return true;
	}
</script> -->

<teble align='center' width='32%'>
	<form name='chaxun'method='post' action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])?>">
	<tr>
		<td> 查询关键字 </td>
		<td> <input type="text" id='keys' name='keys' size='20'> </td>
		<td> <input type="submit" name='tijiao' value='查询'> </td>
	</tr>
	</form>
</teble>


<?php
	$mysqli->query('use php1903');
		if(isset($_POST['tijiao'])) {
			$key = $_POST['keys'];		//查询关键字
			echo '查询条件：',$key,'<br>';
			echo '<hr>';
			$strSql = "select id,name,password,phone,sex,grade,major,registertime from student 
			where id='$key' or name='$key' or phone='$key' or sex='$key' or grade='$key' or major='$key'
			";

			$result = $mysqli->query($strSql);
			if($result) {
				$rows = $result->num_rows;		//结果集中记录的行
				if($rows > 0) {
					while($array_rows = $result->fetch_assoc()) {
						echo '学号：',$array_rows['id'],'<br>';
						echo '姓名：',$array_rows['name'],'<br>';
						echo '密码：',$array_rows['password'],'<br>';
						echo '手机：',$array_rows['phone'],'<br>';
						echo '性别：',$array_rows['sex'],'<br>';
						echo '年级：',$array_rows['grade'],'<br>';
						echo '专业：',$array_rows['major'],'<br>';
						echo '时间：',$array_rows['registertime'],'<br>';
						echo '<hr>';
					}
				} else {
					echo '没用你想要的数据,你可以尝试使用<b>学号，姓名，电话，性别，年级，专业</b>进行查找哦QAQ~','<br>';
				}
			} else {
				echo '查询语句有错误',$mysqli->error,'<br>';
			}
			$result->free_result(); //释放资源
			$mysqli->close();       //关闭连接
		}
	
?>