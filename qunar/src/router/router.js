import Vue from 'vue'
import Router from 'vue-router'
import City from '../pages/city/City.vue'
import Detail from '../pages/detail/Detail.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => ('../pages/home/Home.vue')
		}, {
			path: '/city',
			name: 'City',
			component: City
		}, {
			path: '/detail/:id',
			name: 'Detail',
			component: Detail
		}
	],
	scrollBehavior (to, from, savedPosition) {
		// savedPosition当且仅当history模式下popstate导航 (通过浏览器的 前进/后退 按钮触发) 时才可用
		// to: Route: 即将要进入的目标 路由对象
		// from: Route: 当前导航正要离开的路由
		if (savedPosition) {
			return savedPosition
		} else {
			if (from.meta.lastPosition) {
				from.meta.savedPosition = document.documentElement.scrollTop
			}
			return { x: 0, y: to.meta.savedPosition || 0 }
		}
	}
})