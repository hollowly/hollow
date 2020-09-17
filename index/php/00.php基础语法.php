<?php
    $hello = '大家好，我是';
    $name = '<strong>邓俊贤</strong>';
    $age = '20';
    $school = '四川信息职业技术学院';
    $major = '<strong>软件技术19-4班</strong>';

    echo $hello,$name,'，我今年',$age,'岁，我在',$school,$major,'<br><br><br>';
    print "hello world <br><br>";        //echo 可以打印多个，print只能打印一个

    $ajax = 100;

    echo "我是",$ajax,'，我是数字型<br><br>';


    $a = 10;
    $b = 20;
    $arr = array(1,2,3);

    echo 'echo输出：',"a+b=",$a+$b,'<br>';

    print_r('print_r输出：可以输出数组');
    print_r($arr);
    echo '<br>';
    var_dump('var_dump输出','abcd');


?>