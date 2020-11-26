<?php
	
	class Triangle {
		var	$a;
		var	$b;
		var	$c;
		var $area;
		var $perimeter;

	// 构造函数
		function __construct($a, $b, $c) {
			if($a + $b > $c && $a + $c > $b && $b + $c > $a) {
				$this->a = $a;
				$this->b = $b;
				$this->c = $c;
		} else {
			die('三条边不能构成三角形');
		}
	}
		
		function perimeter() {
			$area = $this->a + $this->b + $this->c;
			return $area;
		}

		function area() {
			$lg = ($this->a + $this->b + $this->c) / 2;
			$perimeter = sqrt($lg*($lg - $this->a) * ($lg - $this->b) * ($lg - $this->c));
			return $perimeter;
		
		}
		// 析构函数
		function __destruct() {		}
	}


	$obj1 = new Triangle('12','13','14');
	echo '周长为：',$obj1->perimeter();
	echo '，面积为：',$obj1->area(),'<br>';

	
	$obj2 = new Triangle('45','37','45');
	echo '周长为：',$obj2->perimeter();
	echo '，面积为：',$obj2->area();
?>



<!-- 定义Triangle 三角形类，属性有a,b,c三条边和area面积， 
函数有：构造函数、析构函数、计算三角形的面积，计算三条边长的和。 
创建2个三角形对象，输出每个对象的面积和周长。 -->