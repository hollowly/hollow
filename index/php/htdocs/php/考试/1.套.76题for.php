<?php
  for ($i = 0;$i <= 8;$i++)
  {
    echo str_repeat("&nbsp",abs($i-3));
    for ($j = 0; $j <= (6 - 2 * abs($i - 3));$j++)
    {
        echo '*';
    }  
    echo "<br>";
  }  
?>