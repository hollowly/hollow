<?php
    function setPro() {
        for($i = 1; $i <= 20; $i++) {
            $num1 = rand(1,20);
            $num2 = rand(1,20);

            $judge = rand(1,4);

            switch($judge) {
                case 1: echo $num1,'+',$num2,'=','&nbsp;&nbsp;&nbsp;&nbsp;';break;
                case 2: echo $num1,'-',$num2,'=','&nbsp;&nbsp;&nbsp;&nbsp;';break;
                case 3: echo $num1,'*',$num2,'=','&nbsp;&nbsp;&nbsp;&nbsp;';break;
                case 4: echo $num1,'/',$num2,'=','&nbsp;&nbsp;&nbsp;&nbsp;';break;
            }
            if($i % 5 == 0) {
                echo '<br>';
            }
        }
    }

    setPro()

 ?>