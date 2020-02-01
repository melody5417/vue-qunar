import Vue from 'vue'
import App from './App.vue'
import Router from './router/router.js'

Vue.config.productionTip = false

new Vue({
	// es6 键和值相同可以省略 "键名:" 直接写 值
	router: Router,
	render: h => h(App),
}).$mount('#app')
