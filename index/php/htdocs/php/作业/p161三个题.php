<?php
    //2题
    echo "<h3>第二题</h3>";
    function methods($num1,$num2,$num3) {
        if($num1 > $num2) {
            if($num1 > $num3) {
                return $num1;
            } else {
                return $num3;
            }
        } else if($num2 > $num3) {
            return $num2;
        } else {
             return $num3;
        }
    }


    echo methods(10,20,30),'<br>';
    
    echo methods(30,20,10),'<br>';

    echo methods(10,30,20),'<br>';

    // 3题
    echo "<h3>第三题</h3>";
    function statistics($char) {
        $num = 0;
        $space = 0;
        $letter = 0;
        $other = 0;
        for($i = 0;$i < strlen($char);$i++) {
            if($char[$i] > 0 && $char[$i] < 9) {
                $num++;
            } else if($char[$i] === ' ') {
                $space++;
            } else if($char[$i] >= 'A' && $char[$i] <= 'Z' || $char[$i] >= 'a' && $char[$i] <= 'z') {
                $letter++;
            } else {
                $other++;
            }
        }
        
        echo '字母有',$letter,'个，';
        echo '空格有',$space,'个，';
        echo '数字有',$num,'个，';
        echo '其他字符有',$other,'个。'; 
        
    
    }

    statistics('123 #$%  %%4 5d  ab65');



    // 4题
    echo "<h3>第四题</h3>";
    for($i = 1; $i <= 9; $i++) {
        for($j = 1; $j <= $i; $j++) {
            echo $j,'x',$i,'=',($j * $i),' ';
        }
    echo "<br>";
    }
?>

