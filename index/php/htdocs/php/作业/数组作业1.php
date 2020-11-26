
<?php
    //创建二维数组
    $arr = array (
        array('1001','王晓丽',67,78,67,85,81),
        array('1002','张博文',68,68,85,86,72),
        array('1003','李德华',86,75,75,86,83),
        array('1004','张浩然',95,85,46,75,84),
        array('1005','王慧艳',87,88,86,87,68),
        array('1006','李连杰',86,89,63,85,61),
		);
		echo '原数组';
		echo '<pre>';
		print_r($arr);
		echo '</pre>';
    // for遍历
    for($i = 0;$i <= 5;$i++) {
        $sum = 0;
        for($j = 2;$j <= 6; $j++) {
            $sum += $arr[$i][$j];
        }
				$arr[$i][7] = $sum;
				sort($arr[$i]);
		}
		
		echo '新数组';
    echo "<pre>";
    print_r($arr);
    echo "</pre>";
?>