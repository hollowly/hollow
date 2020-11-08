<!-- 
    自定义函数的参数是一段英文句子，统计该句中单词的个数，把每一个单词的首字符改为大写。
提交PHP源程序。
 -->
 
<?php
    function countStr($str) {
        echo '当前英文句子为：',$str,'<br>';
        echo '当前单词个数为：',substr_count($str, ' ') + 1,'个<br>';
        echo '首字符转为大写是：',ucwords($str);
    }


    countStr('time is but a river flowing from our past.');
?>


