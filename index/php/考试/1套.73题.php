<?php
echo '<table width="400" border="1">';
for($tr = 0;$tr < 5;$tr++) {
    echo '<tr>';
    for($td = 0;$td < 2;$td++) {
        if($tr % 2 == 0) {
            echo '<td align="center" style="width: 100px;height: 100px;background:green"></td>';
        } else {
            echo '<td align="center" style="width: 100px;height: 100px"></td>';
        }
    }
    echo '</tr>';
}
echo '</table>';