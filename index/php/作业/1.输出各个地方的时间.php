<!-- 
    分别输出以下时间，北京时间、美国纽约时间，英国伦敦时间，德国柏林时间，
    日本东京时间，澳大利亚墨尔本时间。编写函数，函数的参数是各个时区的名称 例如 北京时间 “PRC”.  
    提交PHP源程序。
 -->

<?php
    date_default_timezone_set("PRC");
    $PRC = date("y-m-d H:i:s", time());
    echo "中国北京时间：",$PRC,'<br>';

    date_default_timezone_set("America/New_York");
    $New_York = date("y-m-d H:i:s", time());
    echo "美国纽约时间：",$New_York,'<br>';

    date_default_timezone_set("Europe/London");
    $London = date("y-m-d H:i:s", time());
    echo "英国伦敦时间：",$London,'<br>';

    
    date_default_timezone_set("Europe/Berlin");
    $Berlin = date("y-m-d H:i:s", time());
    echo "德国柏林时间：",$Berlin,'<br>';


    date_default_timezone_set("Asia/Tokyo");
    $Tokyo = date("y-m-d H:i:s", time());
    echo "日本东京时间：",$Tokyo,'<br>';

    
    date_default_timezone_set("Australia/Melbourne");
    $Melbourne = date("y-m-d H:i:s", time());
    echo "澳大利亚墨尔本时间：",$Melbourne,'<br>';
?>
