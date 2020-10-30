import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


// render: h => h(App) 等同于
    // render:function(h) {
    //   return h(App);
    // }


    // 那么 .vue 中的文件中的 template 由谁处理的呢
    // 是有 vue-template-compiler

    // runtiem-only
    // render -> vdom -> UI