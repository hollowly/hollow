<?php

	class commodity {
		public $id;
		public $name;
		public $price;
		public $count;


		function __construct($id, $name, $price, $count=0) {
			$this->id = $id;
			$this->name = $name;
			$this->price = $price;
			$this->count = $count;
		}
		
		function count() {
			echo '当前有',$this->count+=1,'个商品';
		}
	}

	$commodity1 = new commodity('1001','手机','4200');
	$commodity1->count();

?>