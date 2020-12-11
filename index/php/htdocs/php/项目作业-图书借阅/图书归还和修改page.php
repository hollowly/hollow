<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="https://blog-static.cnblogs.com/files/hollows/layui.css">
	<style>
		.h1title {
			margin:15px 0px;
		}
		legend {
			font-size: 45px !important;
     color: #fff;
     text-shadow: -1px -1px 6px #E702E9, 1px 1px 6px #E702E9, -1px 1px 6px #E702E9, 1px -1px 6px #E702E9;
		}
		.layui-input {
			width: 80%;
			margin: 15px 0px;
			border-radius: 8px;
		}
		.layui-form-label {
			font-weight: 700;
			color: deeppink;
			width: 110px;
			font-size: 16px;
		}
		#btnSvg {
			display: inline-block;
			margin-left:20px;
		}
		.btn {
			border: none;
			position: relative;
			background: deepskyblue;
			color: #fff;
			outline: none;
			cursor: pointer;
			font-size: 14px;
			line-height: 21px;
			font-weight: 600;
			width: 132px;
			border-radius: 7px;
			padding: 12px 0;
		}
		.btn > span {
			position: relative;
			z-index: 1;
		}
		.btn > svg {
			display: block;
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			fill: deeppink;
		}
		.btn > svg circle {
			transition: .3s ease-out;
		}
		.btn > svg circle.top-left {
			transform: translate(var(--spacing, -16px), var(--spacing, -40px));
		}
		.btn > svg circle.middle-bottom {
			transform: translate(var(--spacing, 8px), var(--spacing, 40px));
		}
		.btn > svg circle.top-right {
			transform: translate(var(--spacing, 40px), var(--spacing, -40px));
		}
		.btn > svg circle.right-bottom {
			transform: translate(var(--spacing, 4px), var(--spacing, 40px));
		}
		.btn > svg circle.left-bottom {
			transform: translate(var(--spacing, -40px), var(--spacing, 40px));
		}
		.btn:hover {
			--spacing: 0;
		}
		a {
			color:red;
		}
		a:hover {
			color:blue
		}
	</style>
</head>
<body>
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
		<legend>图书归还和修改page</legend>
	</fieldset>
	
<teble align='center' width='32%'>
	<form name='chaxun'method='post' action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])?>">
	<tr>
		<td> <h1 class='h1title'>请输入您的借阅者编号进行操作</h1> </td>
		<td> <input type="text" id='keys' name='keys' size='20'> </td>
		<td> 
			<div id='btnSvg'>
				<button class="btn" type="submit" name='tijiao'>
					<span>查询</span>
					<svg width="0" height="0">
						<defs>
							<filter id="goo" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB">
								<feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
								<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
							</filter>
							<filter id="goo-light" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB">
								<feGaussianBlur in="SourceGraphic" stdDeviation="1.25" result="blur" />
								<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
							</filter>
							<filter id="goo-big" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB">
								<feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
								<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
							</filter>
						</defs>
					</svg>
					<svg preserveAspectRatio="none" viewBox="0 0 132 45">
						<g clip-path="url(#clip)" filter="url(#goo-big)">
							<circle class="top-left" cx="49.5" cy="-0.5" r="26.5" />
							<circle class="middle-bottom" cx="70.5" cy="40.5" r="26.5" />
							<circle class="top-right" cx="104" cy="6.5" r="27" />
							<circle class="right-bottom" cx="123.5" cy="36.5" r="26.5" />
							<circle class="left-bottom" cx="16.5" cy="28" r="30" />
						</g>
						<defs>
							<clipPath id="clip">
								<rect width="132" height="45" rx="7" />
							</clipPath>
						</defs>
					</svg>
				</button>
			</div>
		</td>
	</tr>
	</form>
</teble>

<script src="https://blog-static.cnblogs.com/files/hollows/layui.all.js"></script>

<?php
	include_once('mysqli.php');
	$mysqli->query('use mydb_19301013');
		if(isset($_POST['tijiao'])) {
			$key = $_POST['keys'];		//查询关键字
			echo '<hr>';
			$strSql = "select id,borrowID,name,bookName,bookISBN,registertime,sendTime,finePrice,fineReason,bookState
			from borrowbooks where borrowID='$key'
			";

			$result = $mysqli->query($strSql);
			if($result) {
				$rows = $result->num_rows;
				if($rows > 0) {
					while($array_rows = $result->fetch_assoc()) {
						echo '<hr>';

						echo '<table class="layui-table" lay-skin="line">
									<colgroup>
										<col width="1">
										<col width="1">
										<col width="1">
										<col width="1">
										<col width="1">
										<col width="1">
										<col width="1">
										<col width="1">
										<col width="1">
										<col width="1">
										<col>
									</colgroup>
									<thead>
										<tr>
											<th>借阅者编号</th>
											<th>姓名</th>
											<th>图书名称</th>
											<th>图书ISBN编号</th>
											<th>借书日期</th>
											<th>归还日期</th>
											<th>罚款金额</th>
											<th>罚款原因</th>
											<th>图书状态</th>
											<th>操作</th>
										</tr> 
									</thead>
									<tbody>
										<tr>
											<td>',$array_rows["borrowID"],'</td>
											<td>',$array_rows["name"],'</td>
											<td>',$array_rows["bookName"],'</td>
											<td>',$array_rows["bookISBN"],'</td>
											<td>',$array_rows["registertime"],'</td>
											<td>',$array_rows["sendTime"],'</td>
											<td>',round((strtotime(date('Y-m-d H:i:s'))-strtotime($array_rows['registertime'])) / 3600 / 24 * 0.1,2),'元</td>
											<td>','超时','</td>
											<td>',$array_rows["bookState"],'</td>';
							echo "<td>
											<a href='update_userinfo.php?id=",$array_rows['id'],"'>更新</a> <br>
											<a href='delete_userinfo.php?id=",$array_rows['id'],"'>删除</a>
										</td>
										</tr>
									</tbody>
								</table>";
					}
				} else {
					echo '<h2>暂时没有您的借书记录哦，请确定您的借阅者编号是否输入正确....如有其它问题请联系客服19301013哦QAQ~</h2>','<br>';
				}
			} else {
				echo '查询语句有错误',$mysqli->error,'<br>';
			}
			$result->free_result();
			$mysqli->close();
		}
?>
</body>
</html>