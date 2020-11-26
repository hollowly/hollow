<?php
// 创建类
    class Student {    //声明类
        var $name;  //成员变量
        var $stuid;
        var $age;
        
        // 构造：构造函数，给对象赋初值(在赋初值是会自动执行 __construct 函数)
        function __construct($name, $id, $age) {
            $this->name = $name;
            $this->stuid = $id;
            $this->age = $age;
        }
        function study() {  //成员方法
            echo $this->name,'正在学php，学号是',$this->stuid,'，今年',$this->age,'岁了。<br>';
        }
        
        function playgame() {
            echo $this->name.'喜欢玩游戏<br>';
        }

        function __destruct() {		}
    }

		/*  继承：父类--子类 extends
				子类只能继承父类中非私有的成员(变量，函数)*/
    class student_son extends Student {
			var $ra;
			var $pre;
			var $area;
			
			function __construct($name, $id, $age, $radius) {
				parent::__construct($name, $id, $age);
				$this->radius = $radius;
			}

			function son1() {
					echo '我是被继承的son<br>';
			}

			function output() {
				parent::playgame();
			}

			// 重载
			function playgame() {
				echo "重载后：son不喜欢玩游戏";
			}
			function area() {
				echo '圆半径为：',$this->radius,'<br>';
				$area = 1/2 * 3.14 * $this->radius * $this->radius;
				echo '圆面积为：',$area;
				
			}
			function __destruct() {		}
    }

// 创建对象：
    // $liming1 = new Student();
    // $liming1->age = 18;
    // $liming1->name = '李明';
    // echo $liming1->age;
    // echo $liming1->name;

    $liming = new Student('李明','001',18);
    $liming->study();
		$liming->playgame();
		echo '<hr>';
		// 继承
		echo "下面是被继承类的输出：<br>";
    $son3 = new student_son('son','son_003',20, 10); 
		$son3->son1();
    $son3->output();
		$son3->playgame();
		echo '<hr>';
		$son3-> area();
		

    /*
    public 任何类的对象， 类的内外部都可以访问，
    private 只能在类定义的内部使用，
    protected 自身类的内部以及其子类的内部可以使用
    */
?>