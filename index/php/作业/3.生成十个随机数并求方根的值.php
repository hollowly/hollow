<!-- 
    编写自定义函数，生成10个三位数的随机整数，分别求出这10个数的 二次方根、7次方根、3/5次方的值输出。
    提交PHP源程序。
 -->


<?php
    function randNumber() {
        for($i = 0; $i < 10;$i++) {
            $num = rand(100, 999);
            echo '第',$i + 1,'个数字为：',$num,
            '，它的二次方根为：',round(sqrt($num),2),
            '，它的7次方根为：',round(pow($num,1/7),2),
            '，它的3/5次方根为：',round(pow($num,3/5),2),'<br>';
        }
    }

    randNumber();
?>