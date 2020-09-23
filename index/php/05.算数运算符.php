<?php
// .是字符串连，+是数字相加，字符串相加为0
    $a = '123';
    $b = '456';
    echo '----------数字相加-----------','<br>';
    echo '$a.$b=',$a.$b,'<br>';
    echo '$a+$b=',$a+$b,'<br>';
    echo '----------字符串相加---------','<br>';
    $c = 'abc';
    $d = 'def';
    echo '$a.$b=',$c.$d,"<br>";
    echo '$a+$b=',@($c+$d),'<br>';

    echo '----------非数字相加---------','<br>';
    $e = '123abc';
    $f = '456def';
    echo '$a.$b=',$e.$f,"<br>";
    echo '$a+$b=',@($e+$f),'<br>';

    echo '----------null和false拼接---------','<br>';
    $g = null;
    $h = false;
    echo '$a.$b=',$g.$h,"<br>";
    echo '$a+$b=',@($g+$h),'<br>';
    
    echo '----------运算符---------','<br>';
    $i = 3;
    $j = 4;
    $i *= $j + 5;
    echo $i,'<br>';
    
    echo '----------字符串自加自减---------','<br>';
    $k = 'D';
    echo ++$k,'<br>';  
    echo --$k;  //字符串只能加，不能减;

    echo '----------null自加自减---------','<br>';
    $l = null;
    echo ++$l,'<br>';  
    echo --$l,'<br>';

    echo '----------false自加自减---------','<br>';
    $m = false;
    echo ++$m,'<br>';  
    echo --$m,'<br>';

    echo '总结：字符串只能加，不能减。null可以加可以减，false没有作用';
?>

