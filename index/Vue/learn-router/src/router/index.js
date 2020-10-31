import Vue from 'vue'
import Router from 'vue-router'
import cpn1 from '../components/Cpn1'
import cpn2 from '../components/Cpn2'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path:'',
			// redirect：重定向
			redirect: '/cpn1'
		},
    {
      path: '/cpn1',
      component: cpn1,
    },
    {
      path: '/cpn2',
      component: cpn2,
    }
	],
	mode: 'history',
	linkActiveClass:'active'
})
