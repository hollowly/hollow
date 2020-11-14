
<pre>
<?php
    for($i = 0;$i <= 10;$i++) {
        echo $i,' ';
    }
    echo '<br>';

    $j = 0;
    while($j <= 10) {
        echo $j,' ';
        $j++;
    }
    echo '<br>';

    // do..while 至少运行一次
    $k = 0;
    do{
        echo $k,' ';
        $k++;
    }while($k <= 10);
    echo '<br>';
    echo '<br>';
    echo '<br>';

    // 100-999
    // 每个数的立方和等于自身的找出来

	for($m = 100; $m <= 999; $m++) {
		$g = (int)($m % 10);
		$s = (int)($m /10 % 10);
		$b = (int)($m / 100);
		if($b* $b * $b + $s * $s * $s + $g * $g * $g == $m) {
		echo $m,' ';
		}
    }
    $ay = array('1','2','3','4','北京','天津');

    print_r($ay);

    echo '<br>','<br>';
    $ary = array('3','4','5','6','6.6');

    print_r($ary);

    foreach($ary as &$a) {
        $a = $a * 3;
        echo $a,' ';
    }
    print_r($ary);

    echo '<br>','<br>';
    $c = 0;
    while ( $c++) {
        switch($c) {
            case 5 : break 1;
            case 10 : break 2;
        }
    }
    echo $i;
?>