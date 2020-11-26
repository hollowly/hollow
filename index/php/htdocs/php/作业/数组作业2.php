<?php
    function mixedAdd($parx, $pary) {
        if(is_numeric($parx) && is_numeric($pary)) {
            return $parx + $pary;
        } else {
            return $parx . $pary;
        }
    }


    echo mixedAdd(10, 30),'<br>';
    
    echo mixedAdd(' hello ','world'),'<br>';
    
    echo mixedAdd(' hello ',2020),'<br>';

    echo mixedAdd(2020,' hello '),'<br>';
?>