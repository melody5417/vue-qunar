import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		city: '上海'
	},
	actions: {
		changeCity (ctx, city) {
			console.log(ctx)
			console.log(city)
			ctx.commit('changCity', city)
		}
	},
	mutations: {
		changCity (state, city) {
			console.log(state)
			console.log(city)
			state.city = city
		}
	}
})