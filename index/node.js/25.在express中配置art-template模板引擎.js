const express = require('express')

const app = express()

// 配置使用 art-template 模板引擎
//第一个参数，表示，当渲染以.art结尾的文件的时候，使用art-template模板引擎
// express-art-template是专门用来在Express中把art-template整合到 Express中
//虽然外面这里不需要记载art-template但是也必须安装
//原因就在于express-art-template依赖了art-template
app.engine('art',require())
app.engine('art', require('express-art-template'))
//Express 为Response相应对象提供了—个方法:render
// render方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
// 热、s.render( ' html模板名'，{模板数据})
// 第一个参数不能写路径，默认会去项目中的views目录查找该模板文件
// 也就是说Express有一个约定:开发人员把所有的视图文件都放到views目录中