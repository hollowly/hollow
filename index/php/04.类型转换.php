<?php
    $a = null;
    $a = (string)$a;
    var_dump($a);
    echo"<br>";
    echo"<br>";


    $b = array();    
    // @ 错误控制运算符，只能写在表达式，变量的左边
    $b = @(string)$b;
    var_dump($b);
    echo"<br>";
    echo"<br>";
    

    $c = '1111';
    $d ='';
    $e = (bool)$c;
    $f = (bool)$d;
    var_dump($e);
    echo "<br>";
    var_dump($f);
    echo"<br>";

    
    $g = '123.67abc';
    $i = '123.456';
    $k = 'abc123.456';
    $j = strval($i);
    $h = intval($g);
    $l = intval($k);
    echo "<br>";
    var_dump($h);
    echo"<br>";
    var_dump($j);
    echo"<br>";
    var_dump($l);
    echo"<br>";
    echo"<br>";

    $m = 123.564;
    var_dump($m);
    $n = settype($m,"integer");
    echo "<br>";
    echo $m,"<br>",$n,'<br>';
    var_dump($n);
    echo "<br>";
    echo "<br>";

    $tel = '13980524660';
    if(is_numeric($tel)) {
        echo "这个电话号码为：",$tel;
    } else {
        echo "这不是一个电话号码";
    }
?> 