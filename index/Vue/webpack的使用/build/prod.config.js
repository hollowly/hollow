// 编译时依赖的
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin'); // 在mode(全局) 中寻找uglifyjs-webpack-plugin(用来压缩js代码的)
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');


module.exports = webpackMerge(baseConfig, {
    plugins:[
      new UglifyjsWebpackPlugin(),
    ],
})
