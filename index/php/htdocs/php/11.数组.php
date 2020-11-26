<pre>
<?php
    $ary = array(2 => 13, 5 => 4, 3 => 70, 18 => 50);

    rsort($ary);  //倒序，改变下标
    print_r($ary);

    asort($ary);   //正序，下标不变
    print_r($ary);

    arsort($ary);  //倒序，下标不变
    print_r($ary);

    ksort($ary);   //正序，按下标排序
    print_r($ary); 

    krsort($ary);  //倒序，按下标排序
    print_r($ary);

    array_reverse($ary);   //颠倒
    print_r($ary);

    sort($ary);     //正序排序，改变下标
    print_r($ary);



    // unset()在函数中的行为会依赖于想要销毁的变量的类型而有所不同。
    // 如果在函数中unset()一个全局变量，则只是局部变量被销毁，而在调用环境中的变量将保持调用unset()之前一样的值

    $foo = 100;
    $foo1 = 'ftp';

    unset($foo);
    echo $foo,'<br>';

    function destroy() {
        global $foo1;
        unset($foo1);
    }

    destroy();
    echo $foo1,'<br>';
?>
</pre>