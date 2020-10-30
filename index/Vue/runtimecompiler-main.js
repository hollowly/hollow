// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(App);

const cpn = {
    template:`
      <h1>{{message}}</h1>
    `,
    data() {
      return {
        message: '我是cpn组件',
      }
    },
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function(createElenent) {
    return createElenent(App);
  }
})

// runtime-compiler(v1)
// template -> ast -> render -> vdom -> UI


// runtime-only(v2)(1.性能更高 2.下面的代码量更少)
// render -> vdom -> UI