<?php
	/*继承  父类--子类  extends
	子类只能继承父类中非私有的成员（变量、函数）
	继承的作用：代码复用
    */
	//父类
	class Tuxing{
		public  $name;  //公有的
		public  $area;  //公有的
		private $size;  //私有的
		
		function __construct($name,$area=0,$size=0){
			$this->name = $name;
			$this->area = $area;
			$this->size = $size;
		}
		function __destruct(){}
		
		function output(){
			echo '图名：'.$this->name.'<br/>';
			echo '面积：'.$this->area.'<br/>';
		}
		
		public function setSize($newsize){
			$this->size = $newsize;
		}
		
		public function getSize(){
			return $this->size;
		}		
	}
	//子类
	class Circle extends Tuxing{
		public $radius;    //半径
		public $perimter;  //周长
		
		function __construct($name,$area,$ra,$per=0){
			parent::__construct($name,$area);//调用父类的构造函数
			$this->radius = $ra;
			$this->perimter = $per;
		}	

		function output(){
			parent::output();//父类的output函数
			echo '半径：'.$this->radius.'<br/>';
			echo '周长：'.$this->perimter.'<br/>';
		}
		//子类自己定义的函数
		function calculateArea(){
			$this->area = M_PI*$this->radius*$this->radius;
			return $this->area;
		}
		
		function calculatePerimeter(){
			$this->perimter = 2*M_PI*$this->radius;
			return $this->perimter;
		}
	}
	
	$c1 = new Circle('圆形',0,'3.76');
	$c1->calculateArea();
	$c1->calculatePerimeter();
	$c1->output();
	//$tu1 = new Tuxing('矩形');
	//echo $tu1->name.'<br/>'; 
?>