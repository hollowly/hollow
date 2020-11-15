// 核心模块的本质是文件
// 核心模块文件已经被编译到了二进制文件中，我们只需要按照名字来加载就可以了
require('fs')
require('http')


//第三方模块
//l凡是第三方模块都必须通过npm 来下载
//使用的时候就可以通过require('包名'）的方式来进行加载才可以使用
//不可能有任何一个第三方包和核心模块的名字是—样的
//既不是核心模块、也不是路径形式的模块
// 先找到当前文件所处目录中的node_modules目录
// node_modules/art-template
// node_modules/art-template/package.json文件
// nodt_modules/art-template/package.json文件中的main属性
// main属性中就记录了art-template的入口模块
// 然后加载使用这个第三方包
// 实际上最终加载的还是文件

// 如果package.json文件不存在或者main指定的入口是错的
// 则node会自动找该目录下的index.js
// 也就是说index.js会作为一个默认备选项

// 如果以上所有任何一个条件都不成立，则会进入上一级目录中的 node_modules目录查找
// 如果上一级还没有，则继续玩上上一级查找
// 直到当前磁盘根目录还没找到，最后报错：	can not find module xxx

// 注意：我们一个项目尤其只有一个 node_modules，放在项目根目录中，这样的话项目中所有的子目录中的代码都能加载到第三方包
// 不会出现多个 node_modules

const template = require('art-template')

console.log(template);