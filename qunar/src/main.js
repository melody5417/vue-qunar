import Vue from 'vue'
import App from './App.vue'
import Router from './router/router.js'
import fastClick from 'fastclick'
import 'styles/reset.css'
import	'styles/border.css'
import	'styles/iconfont.css'

Vue.config.productionTip = false
// 解决浏览器click事件300ms延迟的问题
fastClick.attach(document.body)

new Vue({
	// es6 键和值相同可以省略 "键名:" 直接写 值
	router: Router,
	render: h => h(App),
}).$mount('#app')
