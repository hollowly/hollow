<?php
	// static 静态变量 静态方法

	class School {
		public $schoolName;
		public $studentNumber;
		static $address ='广元利州区';	//静态变量

		public function __construct($schoolName, $studentNumber) {
			$this->schoolName = $schoolName;
			$this->studentNumber = $studentNumber;
		}

		function output() {
			echo "学校名称 ：",$this->schoolName,'<br>';
			echo "学生人数：",$this->studentNumber,'<br>';

			echo '地址：',self::$address,'<br>';
		}
	}

	$youzhuan = new School('川北幼专',6000);
	$youzhuan->output();
	echo School::$address,'<br>';		//直接访问School类的 $address
	echo '<hr>';

	$chuanxin = new School('四川信息职业技术学院',9000);
	$chuanxin->output();
	echo School::$address,'<br>';		//直接访问School类的 $address

	/* 静态方法只能使用静态变量
	非静态方法中使用静态成员	类名::变量名	类名::方法名
	*/

?>