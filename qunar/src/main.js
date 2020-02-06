import Vue from 'vue'
import App from './App.vue'
import Router from './router/router.js'
import fastClick from 'fastclick'
import 'styles/reset.css'
import	'styles/border.css'
import	'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import store from './store'

Vue.config.productionTip = false
// 解决浏览器click事件300ms延迟的问题
fastClick.attach(document.body)
// 轮播组件
Vue.use(VueAwesomeSwiper)

new Vue({
	// es6 键和值相同可以省略 "键名:" 直接写 值
	router: Router,
	// store,
	render: h => h(App),
}).$mount('#app')
