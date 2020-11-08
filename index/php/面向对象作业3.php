<?php
	class Student {
		public $id;
		public $name;
		public $course = array();
		function __construct($id, $name, $course) {
			$this->id = $id;
			$this->name = $name;
			$this->course = explode(',',$course);
		}

		function output() {
			echo '学号：',$this->id,'，姓名：',$this->name,'，专业课程有：';

			for($i = 0; $i < sizeof($this->course); $i++) {
				echo $this->course[$i],'，';
			}

			if(sizeof($this->course) < 3) {
				die('<br>该同学专业课程不足3门，没有课程信息');
			}
			
			echo '<br>';
		}

		function __destruct() {		}
	}

	class Course extends Student {
		public $courseName;
		public $courseId;
		public $courseType;
		public $courseScore;

		function __construct($id, $name, $course, $courseId, $courseType, $courseScore) {
			parent::__construct($id, $name, $course);
			$this->courseId = explode(',',$courseId);
			$this->courseType = explode(',',$courseType);
			$this->courseScore = explode(',',$courseScore);
		}

		function output() {
			parent::output();
			for($i = 0; $i < sizeof($this->course); $i++) {
				echo '课程名称：',$this->course[$i],'，课程代码：',$this->courseId[$i],'，课程类型：',$this->courseType[$i],'，课程学分：',$this->courseScore[$i],'<br>';
			}
			echo '<hr>';
		}
		
		function __destruct() {		}
	}

	$student1 = new Course('193001','小张','计算机,英语,数学,php','001,002,003,004','实践,实践,理论,理论','90,85,89,93');
	$student1->output();

	$student2 = new Course('193002','小红','javascript,python,数学','006,007,003','实践,理论,理论','83,89,96');
	$student2->output();

	$student3 = new Course('193003','小明','jquery,php,英语','008,004,003','理论,理论,理论,实践','78,79,84');
	$student3->output();

	$student4 = new Course('193004','小李','计算机,javascript,python,php','实践,006,003,004','实践,理论,理论,实践','91,89,92,93');
	$student4->output();

	$student5 = new Course('193005','小刚','计算机,jquery','001,008','实践,理论','85,90');
	$student5->output();
?>


<!-- 
Student类，属性：学号、姓名、专业课程(数组)、函数：构造函数、析构函数、输出函数；
Course类，属性：课程名称，课程代码，课程类型（理论、实践），课程学分，
函数：构造函数、析构函数、输出函数；
每个学生对象学习至少三门课程，创建多个学生对象，并输出每个学生所学习的课程信息。 -->