<?php
	Header('content-type=html/text  charset=UTF8');
	include_once("19.mysqli.php");
	$result = $mysqli->query('use mydb_19301013');
?>
<script language='javascript'>
	function check(){
		var keywrod = document.getElementById('keys').value;                        
		if(keywrod == ''){
            alert('请输入关键字.');
            document.getElementById('keys').focus();
            return false;
        }
		return true;	
	}
</script>
<table align="center" width="32%" border=0>
<form name="chaxun" method="post" onSubmit="return check()" 
action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])?>">
<tr>
<td> 查询关键字 </td>
<td> <input type="text" id='keys' name="keys" size="20" /> <td> 
<td> <input type="submit" name="tijiao" value="查询" /> </td>
</tr>
</form>
</table><br/><br/>
<?PHP
	$curPage = isset($_GET['curPage']) ? $_GET['curPage'] : 1;
	$rowsPerPage = 3; //每页显示3条记录
	$offset = ( $curPage - 1 ) * $rowsPerPage;	//每一页取记录的偏移量
	 
	$key = @$_POST['keys'];
    $key = isset($_GET['hrefwords']) ? $_GET['hrefwords'] : $key;  		 
	
	//获得记录的总数
	$sql_str = "select count(*) as total from borrowbooks 
				where borrowID = '$key' or bookName = '$key' or phone = '$key' or 
				name like '%$key%' or addre='$key' ";
	$result = $mysqli->query($sql_str) or die('sql语句有误 '.$mysqli->error);
	$arr = $result->fetch_assoc( );
	$totalRows = $arr['total'];
	$totalpage = ceil($totalRows/$rowsPerPage);
	
	$pageNumString = "";
	if($curPage <= 5){
		$begin = 1;
		$end = $totalpage >= 10 ? 10 : $totalpage;
	}else{
		$end = $curPage + 5 > $totalpage ? $totalpage : $curPage + 5;
		$begin = $end - 9 <= 1 ? 1 : $end - 9; 
	} 
   
	$str_sql = "select borrowID,name,class,phone,bookName,bookISBN,addre,bookPrice,lendTime,sendTime 
	finePrice,fineReason,bookState,registertime from borrowbooks 
		where borrowID = '$key' or class = '$key' or phone = '$key' or bookName='$key' or bookISBN='$key' or addre = '$key' or
		name like '%$key%' order by borrowID asc limit $offset, $rowsPerPage ";
	$result = $mysqli->query($str_sql);
	if($result){
		$rows = $result->num_rows;//结果集中记录的行数
		if($rows>0){
			echo "<table align='center' border=1 bordercolor='blue' width=90%>";
			echo "<tr><th>借阅者ID</th><th>姓名</th><th>班级</th><th>手机</th><th>图书名称</th>
			<th>借书ISBN编号</th><th>出版社</th><th>图书单价</th><th>借书时间</th><th>还书时间</th><th>罚款金额</th><th>罚款原因</th>
			<th>图书状态</th><th>借书日期</th></tr>";
			while($array_rows = $result->fetch_assoc()){ //关联数组
				echo '<tr><td>',$array_rows['borrowID'],'</td>';
				echo '<td>',$array_rows['name'],'</td>';
				echo '<td>',$array_rows['class'],'</td>';
				echo '<td>',$array_rows['phone'],'</td>';
				echo '<td>',$array_rows['bookName'],'</td>';
				echo '<td>',$array_rows['bookISBN'],'</td>';
				echo '<td>',$array_rows['addre'],'</td>';
				echo '<td>',$array_rows['bookPrice'],'</td>';
				echo '<td>',$array_rows['lendTime'],'</td>';
				echo '<td>',$array_rows['sendTime'],'</td>';
				echo '<td>',$array_rows['finePrice'],'</td>';
				echo '<td>',$array_rows['fineReason'],'</td>';
				echo '<td>',$array_rows['bookState'],'</td>';
				echo '<td>',$array_rows['registertime'],'</td></tr>';
			}
			echo "</table>";	
			
			//打开前一页
			$prev = $curPage-1<=1?1:$curPage -1;
			$pageNumString.="<a href='分页显示查询数据.php?curPage=1&hrefwords=$key'>首页</a> &nbsp&nbsp";
			$pageNumString.="<a href='分页显示查询数据.php?curPage=$prev&hrefwords=$key'>&laquo;</a>&nbsp&nbsp";

      //显示当前页面的页码，根据开始页码和结束页码             
			for($i=$begin;$i<=$end;$i++){
			//使用if实现高亮显示当前点击的页码
				if($curPage == $i){
					$pageNumString.= "<a href='分页显示查询数据.php?curPage=$i&hrefwords=$key'>$i</a>&nbsp&nbsp";
				}else{
					$pageNumString.= "<a href='分页显示查询数据.php?curPage=$i&hrefwords=$key'>$i</a>&nbsp&nbsp";
				}
			}
			//打开下一页
			$next = $curPage+1>=$totalpage?$totalpage:$curPage +1;
			$pageNumString.="<a href='分页显示查询数据.php?curPage=$next&hrefwords=$key'>&raquo;</a>&nbsp&nbsp";
			$pageNumString.="<a href='分页显示查询数据.php?curPage=$totalpage&hrefwords=$key'>尾页</a>";
      
			echo "<br><center>第 $curPage 页&nbsp;";
			echo $pageNumString;  //Page number String
			echo "<br> 共有 $totalRows 条记录, &nbsp; 共 $totalpage 页</center>";   
		}
		else
			echo '没有你需要的数据。<br/>';
	}else{
		echo "查询语句有误",$mysqli->error,'<br/>';
	}
	$result->free_result(); //释放资源
	$mysqli->close();       //关闭连接
?>