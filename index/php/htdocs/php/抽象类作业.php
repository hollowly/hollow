<?php

	abstract class study {
		// 定义抽象方法
		abstract function reading();
		abstract function writingHomework ();
		abstract function attendClass ();
	}

	// 继承抽象方法
	class student extends study {
		public $id;
		public $name;
		public $major;
		public $class;

		// 构造函数
		function  __construct($id, $name, $major, $class) {
			$this->id = $id;
			$this->name = $name;
			$this->major = $major;
			$this->class = $class;
		}


		// 重写抽象方法
		function reading() {
			echo $this->name,'同学正在读《静静的顿河》','<br>';
		}

		function writingHomework() {
			echo $this->name,'同学正在写C++的作业','<br>';
		}

		function attendClass() {
			echo $this->name,'同学在听数学老师讲课','<br>';
		}

	}


	$student1 = new student(193001, '张三','web前端','软件19-3');
	$student1->reading();

	$student2 = new student(193002, '牛儿','web前端','软件19-4');
	$student2->writingHomework();

	$student3 = new student(193003, '李五','web前端','软件19-4');
	$student3->attendClass();

?>