<?php
	echo '<pre>';
	print_r($_GET);

	$id = $_GET["id"];
	$name = $_GET["name"];
	$sex = $_GET["sex"];
	$php = @$_GET["php"];
	$javascript = @$_GET["javascript"];
	$jquery = @$_GET["jquery"];
	$Laravel = @$_GET["Laravel"];
	$vue = @$_GET["vue"];
	$Pscore = $_GET["Pscore"];
	$Kscore = $_GET["Kscore"];
	$Allscore = $_GET["Allscore"];

	echo '<br> 学号是：',$id;
	echo '<br> 姓名是：',$name;
	echo '<br> 性别是：',$sex;
	echo '<br> 选修的课程有：',$php;
	echo '<br> 选修的课程有：',$javascript;
	echo '<br> 选修的课程有：',$jquery;
	echo '<br> 选修的课程有：',$Laravel;
	echo '<br> 选修的课程有：',$vue;
	echo '<br> 平时成绩是：',$Pscore;
	echo '<br> 考核成绩是：',$Kscore;
	echo '<br> 总评成绩是：',$Allscore;

?>