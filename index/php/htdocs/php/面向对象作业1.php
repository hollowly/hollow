<?php
	// 定义类
	class computer {
		var $brand;	//品牌
		var $memorySize;	//内存大小
		var $hardSize; //硬盘容量
		var $cpuHz;		//cpu频率
		var $screenSize;	//屏幕尺寸
		var $price;	//出售价格

	// 构造函数
		function __construct($brand, $memorySize, $hardSize, $cpuHz, $screenSize, $price) {
			$this->brand = $brand;
			$this->memorySize = $memorySize;
			$this->hardSize = $hardSize;
			$this->cpuHz = $cpuHz;
			$this->screenSize = $screenSize;
			$this->price = $price;
	}
	// 输出函数
		function output() {
			echo "电脑品牌是：",$this->brand;
			echo "，内存大小：",$this->memorySize;
			echo "，硬盘容量：",$this->hardSize;
			echo "，cpu的频率是：",$this->cpuHz;
			echo "，屏幕的尺寸：",$this->screenSize;
			echo "，出售价格：",$this->price,'<br>';
		}

		function allPrice() {
			$sum = $this->price;
			return $sum;
		}
		// 析构函数
		function __destruct() {		}
	}

	// 创建对象：
	$sum = 0;
	$computer1 = new computer('惠普','16G','512GB','2.6GHz','15.6英寸','8414');
	$computer2 = new computer('华为','16G','1T','1.6GHz','13英寸','8899');
	$computer3 = new computer('小米','4G','128GB+1TB','1.6GHz','15.6英寸','3599');
	$computer4 = new computer('神州','8G','512GB','1.3GHz','15.6英寸','4399');

	$computer1->output();$sum += $computer1->allPrice();
	$computer2->output();$sum += $computer2->allPrice();
	$computer3->output();$sum += $computer3->allPrice();
	$computer4->output();$sum += $computer4->allPrice();

	echo '购买4台电脑一共需要：',$sum,'<br>';

?>



<!-- 定义Computer类，属性有品牌、内存大小、硬盘容量、CPU的频率、屏幕的尺寸、出售价格等，
函数有：构造函数、析构函数、输出函数（输出电脑的信息信息）；
创建4个Computer的对象，并计算购买这4台电脑的总价钱。提交源代码。 -->