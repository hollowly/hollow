# less


less是一种动态样式语言，属于css预处理器的范畴，它扩展了css语言，增加了变量、Mixin、函数等特性，使css更易维护和扩展 less 既可以在客户端运行，也可以借助node.js在服务器端运行

###less中的注释
```
以 // 开头的注释不会被编译到css中
以 /* */ 开头的才会被编译到css中 
```

###less中的变量
```
使用 @ 来声明一个变量：@pink:pink
1.作为普通属性值来使用：直接使用@pink
2.作为选择器和属性名：@{selector的值}的形式
3.作为URL：@{url}
4.变量的延迟加载
```

###less中的混合
```
混合就是将一系列属性从一个规则集引入到哪一个规则集
1.普通混合
2.不带参数的混合
3.带参数的混合
4.带参数并且有默认的混合
5.带多个参数的混合
6.命名参数
7.匹配模式
8.arguments变量
```
###less运算
```
在less中可以进行加减乘除的运算
```
###继承
```
性能比混合高
灵活度比混合低
.name {
    width:"200px";
    height:"200px";
    background:"red";
}
.name:hover {
    background:"black";
}
extend(.name);      只继承.name的 css
extend(.name all);  继承.name的所有 css
```
###less避免编译
```
使用 ~""来进行避免，例如：
padding:~"cacl(100px + 100)"
以上操作 less 将不会进行编译
```

