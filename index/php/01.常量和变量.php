<?php
    // const
    const aa = '我是const定义的';
    const num = 10;
    echo aa,'<br>';
    echo num * num,'<br>';
    // define
    define ('PI','3.14');       //区分大小写
    define ('R','3.88');
    define ('bb','hello world');
    echo PI,'<br>';
    echo R,'<br>';
    echo bb,'<br>';
    echo PI*PI,"<br>";

    // __FILE__：这种常量称为魔术常量
    echo __FILE__,'<br>';
    echo '我在代码中是第',__LINE__,'行<br><br>';
    echo __DIR__,'<br>';

    // 赋值常量
    $var_x = 100;
    $var_y = $var_x + 100;
    echo "x值为",$var_x,'，y值为',$var_y,"<br><br>";

    // 地址传值
    $var_z = 100;
    $var_w = &$var_z;       //w引用z的地址
    $var_h = &$var_w;       //h引用w的地址
    echo 'z',$var_z,' w',$var_w,' h',$var_h,'<br><br>';

    // 可变变量
    $ax = 'py';
    $$ax = '100';
    echo $ax," ",$$ax,'<br>';
    echo $py,'<br><br>';



    
    $a = 65;
    $b = &$a;
    echo($a);
    echo '<br>';
    echo($b);
    echo '<br>';
    unset($b);
    echo($a);
    echo($b);
    echo '<br><br>';


    $var1 = '66.42';
    $var2 = $var1;
    $var1 = 'change';
    echo $var1,' ',$var2;
?>