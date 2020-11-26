<?php

    // 布尔型
    echo "布尔型：",'<br>';
    $varx = false;
    echo $varx;
    var_dump($varx);

    echo '<br>';

    $f = is_null($varx);
    var_dump($f);

    echo '<br>';

    $varx = true;
    echo $varx;
    var_dump($varx);

    echo "<br>";
    echo "<br>";

    // 整型
    echo "整型数:","<br>";
    $varx = 0123;       //八进制
    echo $varx,'八进制：';
    var_dump($varx);

    echo "<br>";
    
    $varx = 0x123;      //十六进制
    echo $varx,'十六进制：';
    var_dump($varx);

    echo "<br>";

    $varx = 0b1001;     //二进制
    echo $varx,'二进制：';
    var_dump($varx);

    echo "<br>";
    echo "<br>";

    // 浮点数
    echo "浮点数：","<br>";
    $varx = 1.2e-3;     //e的左边必须有数字，右边必须是小数
    echo '科学计数法1.2e-3：',$varx,"<br>";
    $varx = NAN;        //不是一个数字
    var_dump($varx);
    echo "<br>";
    $varx = INF;        //无限大
    var_dump($varx);

    echo "<br>";
    echo "<br>";

    // 字符串
    echo "字符串：","<br>";
    $varx = '123';
    echo '$varx = 123;','<br>';
    echo "双引号输出：","$varx",'   <br>';     //双引号括起来的字符串。要进行解析
    echo '单引号输出：','$varx','<br>';     //单引号括起来的字符串。不进行解析直接当字符串输出
    echo "双引号括起来的字符串。要进行解析","<br>","单引号括起来的字符串。不进行解析直接当字符串输出",'<br>';
    echo '可以用双引号包围单引号',"ab'cde'fgh","<br>";
    echo '可以用单引号包围双引号','ab"cde"fgh';
    
    echo "<br>";
    echo "<br>";

    // 数组
    echo "数组:",'<br>';
    $arr = array(1,100,200,'abc');
    var_dump($arr);
    echo "<br>";
    print_r($arr);
    echo "<br>";
    echo is_array($arr);  //判断是否为数组，是就输出1

    echo "<br>";
    echo "<br>";


    // 对象
    echo "对象",'<br>';

    // echo date(1);
?>