<?php
    // 函数默认参数
    function methodB($a, $b, $c = 10) {
        $rs = $a + $b + $c;
        echo $a,' ',$b,' ',$c,'<br>';
        return $rs;
    }

    $x = 10;
    $y = 20;
    $result = methodB($x,$y);
    echo '$result=',$result,'<br>','<br>';


    // 匿名函数
    $fun = function($a,$b,$c) {
        $a .= $b .= $c;
        return $a;
    };
    echo $fun('四川信息职业技术学院','软件技术专业','19301013');
    echo '<br>','<br>';

    // 指定参数类型：php7.0以上才有
    // declare(strict_types = 1);   
    function a(int $va,int $vb) {
        $rs = $va * $vb;
        echo $va,' ',$vb,'<br>',$rs;
        return $rs;
    }

    $result = a(3.3,2.3);
    echo '<br>';
    echo '<br>';


    // 静态变量
    function num() {
        static $a = 0; //初始化1次
        $a++;
        echo $a,' ';
    }
    for($i = 0; $i < 5;$i++) {
        num();
    }
?>