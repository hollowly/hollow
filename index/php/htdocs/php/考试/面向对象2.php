<?php

	abstract class goods {
		// 抽象方法
		abstract function output();
		public $name;	
		public $price;

		function __construct($name, $price) {
			$this->name = $name;
			$this->price = $price;
		}
	}

	final class goods1 {
		public $name;	
		public $price;
	}

?>