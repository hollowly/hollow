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


// runtiem-only
// render -> vdom -> UI