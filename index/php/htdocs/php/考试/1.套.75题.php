<?php
    for($i = 10;$i <= 99;$i++) {
        (int)$gewei = (int)$i % 10;
        (int)$shiwei = (int)$i / 10 % 10;
        if(($shiwei * 100 + $gewei * 10 + 3) - ($i + 300) == 468) {
            echo $i;
        }
    }
?>