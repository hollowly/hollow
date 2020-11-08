<?php
$i = 0;
$n;
$j;     
while($i++ < 5){   
    $n = 0;
    $j = 0;
    while($n++ < 5 - $i) {
        echo '&nbsp';
    }
    while($j++ < 2 * $i - 1)
    echo '*';
    echo '<br>';
} 


$i = 0;
$n = 0;
$j = 0;
while($i++ < 5){
    $n = 0;
    $j = 0;
    while($n++ < $i) { 
        echo '&nbsp';
    }
    while($j++ < 2 * (5 - $i) - 1)
    echo '*';
    echo '<br>';
}
?>