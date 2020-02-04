<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
		<city-alphabet :list="alphabetList" @change="handleAlphabetClick"></city-alphabet>
		<div>city</div>
	</div>
</template>

<script>
	import CityHeader from './components/Header.vue'
	import CitySearch from	'./components/Search.vue'
	import CityList from './components/List.vue'
	import CityAlphabet from './components/Alphabet.vue'
	import axios from 'axios'
	export default {
		name: 'City',
		data () {
			return {
				cities: {},
				hotCities: [],
				letter: ""
			}
		},
		computed: {
			alphabetList () {
				return Object.keys(this.cities)
			}
		},
		components: {
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		methods: {
			getCityInfo () {
				axios.get('api/city.json')
				.then(this.getCityInfoSucc)
			},
			getCityInfoSucc (res) {
				console.log(res)
				res = res.data
				if (res.ret && res.data) {
					const data = res.data
					this.hotCities = data.hotCities
					this.cities = data.cities
				}
			},
			handleAlphabetClick (text) {
				this.letter = text
			}
		},
		mounted () {
			this.getCityInfo()
		}
	}
</script>

<style lang="stylus" scoped>
</style>
