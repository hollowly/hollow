<?php

	interface Shape {
		function getArea();  //面积
		function getVolume(); //体积
	}
	
	class Circle implements Shape { //圆
		public $radius;
		public $area;
		//补充代码，输出圆的面积
		function __construct($radius, $area = 0) {
			$this->radius = $radius;
			$this->area = $area;
			echo '半径为：',$this->radius,'<br>';
		}
		function getArea() {
			echo '圆的面积为：',$this->area = round(PI(),4) * pow($this->radius,2),'<br>';
		}
		function getVolume() {	}
	} 
	
	class Spheroid implements Shape { //球体
		public $radius;
		public $volume;
		public $area;
		function __construct($radius, $volume = 0, $area = 0) {
			$this->radius = $radius;
			$this->volume = $volume;
			$this->area = $area;
			echo '半径为：',$this->radius,'<br>';
		}
		//补充代码，输出球体的表面积和体积
		function getArea() {		// 表面积
			echo '球的表面积为：',4 * round(PI(),4) * $this->radius,'<br>';
		}
		function getVolume() {	// 体积
			echo '球的体积为：',4/3 * round(PI(),4) * pow($this->radius,3),'<br>';
		}
	}


	$circle1 = new Circle(5);
	$circle1->getArea();

	
	$spheroid1 = new Spheroid(4);
	$spheroid1->getArea();
	$spheroid1->getVolume();
	

?>