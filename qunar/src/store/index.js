import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海'
try{
	if (localStorage.city) {
		defaultCity = localStorage.city
	}
}catch(e){
	//TODO handle the exception
}
export default new Vuex.Store({
	state: {
		city: defaultCity
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
			localStorage.city = city
		}
	}
})