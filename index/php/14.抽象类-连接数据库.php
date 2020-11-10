<?php
	// 抽象类：
	/*  抽象类不能被实例化。
	抽象类至少有一个抽象方法(没有方法体)
	抽象类通常用作每个类的父类
	*/


	abstract class DataBase {
		abstract function getconnectObj();  //抽象方法
	}

	class Operator extends DataBase {
		public $host;
		public $dbname;
		public $password;
		public $username;

		public function __construct($host, $dbname, $username, $password) {
			$this->host = $host;
			$this->dbname = $dbname;
			$this->password = $password;
			$this->username = $username;
		}

		// 重构(重写抽象方法)
		function getconnectObj() {
			$mysql_obj = mysqli_connect($this->host,$this->username,$this->password,$this->dbname);
			if(!$mysql_obj) {
				echo '连接失败。'.mysqli_connect_error();
				exit();
			} else {
				echo '连接成功';
			}
		}
	}

 $obj = new Operator('localhost','test','root','123');
 $obj->getconnectObj();



?>