<template>
	<div>
		Learn Vue
		<div class="data" @click="printData">{{message}}</div>
	</div>
</template>

<script>
	export default {
		name: "LearnVue",
		data () {
			return {
				message: "melody-message"
			}
		},
		methods: {
			printData () {
				this.message = "melody-change message"
				console.log(this.$data)
			}
		},
		beforeCreate () {
			console.log("beforeCreate")
		},
		created () {
			console.log("created")
		},
		beforeMount() {
			console.log("beforeMount")
		},
		mounted() {
			console.log("mounted")
		},
		beforeUpdate() {
			console.log("beforeUpdate")
		},
		updated	() {
			console.log("updated")
		},
		beforeDestroy () {
			console.log("beforeDestory")
		},
		destroyed	() {
			console.log("destroyed")
		}
		
	}
</script>

<style lang="stylus" scoped>
</style>
