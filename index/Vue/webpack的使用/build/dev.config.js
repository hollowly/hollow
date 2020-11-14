// 开发时依赖的
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
    devServer: {
      contentBase:'./dist',
      inline:true,
    }
})