<?php
	include_once('mysqli.php');
	header("Content-type:text/html;charset=utf-8");

	$result = $mysqli->query("create database mydb_19301013");
	$result = $mysqli->query('use mydb_19301013');

	$result = $mysqli->query("create table borrowbooks(
		id int auto_increment primary key,
		borrowID int(30) not null,
		name varchar(255) not null,
		class varchar(255) not null,
		phone int(255),
		bookName varchar(255),
		bookISBN int(255),
		addre varchar(255),
		bookPrice int(255),
		lendTime datetime,
		sendTime datetime,
		finePrice int(255),
		fineReason varchar(255),
		bookState tinyint,
		registertime datetime )");


	$borrowID = $_POST['borrowID'];  	//借阅者编号
	$name = $_POST['name'];						//姓名
	$class = $_POST['class'];					//班级
	$phone = $_POST['phone'];					//手机
	$bookName = $_POST['bookName'];		//图书名称
	$bookISBN = $_POST['bookISBN'];		//借书ISBN编号
	$addre = $_POST['addre'];					//出版社
	$bookPrice = $_POST['bookPrice'];	//图书单价
	$bookState = $_POST['bookState'];	//图书状态
	$registertime = date('Y-m-d H:i:s'); //获取当前时间

	$result = $mysqli->query('use mydb_19301013');

	$insert_sql = "insert into borrowbooks
	(borrowID, name, class, phone, bookName, bookISBN, addre, bookPrice, bookState, registertime) values
	('$borrowID','$name','$class','$phone','$bookName','$bookISBN','$addre','$bookPrice','$bookState','$registertime')";

	$mysqli->query($insert_sql);
	$row = $mysqli->affected_rows;

	if($row) {
		echo '<h2>图书借书成功，您的数据已存到数据库，请在有效时间内更还图书</h2>','<br>';
	} else {
		echo '借书失败，请稍后在试.....',$mysqli->error,'<br>';
	}
	$mysqli->close();

?>

<h1><a href="图书归还和修改page.php">退出</a></h1>
