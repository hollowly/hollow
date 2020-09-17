<pre>
<?php
    class phpClass {
        var $vx = 100;
        var $vy = 'abc';

        function setVar($varx) {
            $this -> vx = $varx;
        }

        function show() {
            echo $this->vx, $this->vy,'<br>';
        }
    }


    $obja = new phpClass;   //创建对象
    echo is_object($obja),'<br><br>';
    
    $mysqli = new mysqli('localhost','root','123');
    print_r($mysqli);
?>
</pre>