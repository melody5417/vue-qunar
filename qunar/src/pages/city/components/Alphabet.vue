<template>
	<div class="list">
		<ul>
			<li class="item">A</li>
			<li class="item">A</li>
			<li class="item">A</li>
			<li class="item">A</li>
			<li class="item">A</li>
			<li class="item">A</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "CityAlphabet"
	}
</script>

<style lang="stylus" scoped>
	.list
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
