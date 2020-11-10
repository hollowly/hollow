<?php

		// 接口---特殊的抽象类
		interface shape {
			function getArea();
		}

		// Triangle类实现shape接口，重写接口中的所有方法
		class Triangle implements shape {
			var $sidea;
			var $sideb;
			var $sidec;
			var $area;

			function __construct($a, $b, $c, $area=0) {
				if($a + $b > $c && $a + $c > $b && $b + $c > $a) {
					$this->sidea = $a;
					$this->sideb = $b; 
					$this->sidec = $c;
					$this->area = $area;
				} else {
					die("不能构成三角形");
				}
			}

			function getArea() {
				$le = ($this->sidea + $this->sideb + $this->sidec) / 2;

				$this->area = sqrt($le*($le-$this->sidea)*($le-$this->sideb)*($le-$this->sidec));
				return $this->area;
			}
		}

		$aa = new Triangle(2,3,4,5);
		$aa->getArea();

?>