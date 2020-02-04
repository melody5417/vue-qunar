<template>
	<div class="alphabet">
		<ul>
			<li 
				class="item" 
				v-for="item of list" 
				:key="item"
				@click="handleLetterClick">
				{{item}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "CityAlphabet",
		props: {
			list: Array
		},
		methods: {
			handleLetterClick (event) {
				this.$emit("change", event.target.innerText)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.alphabet
		overflow hidden
		position absolute
		top 2.8rem
		right 0
		bottom 0
		width .4rem
		display flex
		flex-direction column
		justify-content center
		.item
			line-height .4rem
			color #00BCD4
		
</style>
