import Vue from 'vue'
import Router from 'vue-router'
import cpn1 from '../components/Cpn1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: cpn1,
    }
  ]
})
