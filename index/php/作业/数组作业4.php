<?php

function getRandStr(){
    $str1 = range('A','Z');
    $str2 = range('0','9');
    $str3 = array_merge($str1,$str2);
    for($i = 0;$i < 6;$i++) {
        $char = sizeof($str3) - 1;  //获取字符长度
        $num = rand(0,$char);       //在字符串中随机一位数
        echo $str3[$num];           //输出
    }
}
getRandStr();

?>