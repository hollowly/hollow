<?php
    $str1 = 'img1.jpg';
    $str2 = 'img2.jpg';

    // strnatcmp:根据指定的长度比较字符串
    $a = strnatcmp($str1, $str2);

    switch($a) {
        case 1: echo "\"",$str1."\"".' 比 '."\"".$str2.'大'."\""; break;
        case -1: echo "\"",$str1."\"".' 比 '."\"".$str2.'小'."\""; break;
        case 0: echo "\"",$str1."\"".' 比 '."\"".$str2.'相同'."\""; break;
    }
    echo "<br>";

    // strncmp:自然排序法进行字符串的比较
    $str3 = 'img3.jpg';
    $str4 = 'img4.jpg';
    $n = strncmp($str3, $str4,8);
    echo $n;
?>