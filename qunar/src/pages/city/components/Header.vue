<template>
	<div class="header">
		城市选择
		<router-link to="/">
			<div class="iconfont iconreturn"></div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'CityHeader'
	}
</script>

<style lang="stylus" scoped>
	@import '../../../assets/styles/variables.styl'
	.header
		overflow hidden
		position relative
		height $headerHeight
		line-height $headerHeight
		color #FFFFFF
		background-color $bgColor
		font-size .32rem
		.iconreturn
			position absolute
			top 0
			left 0
			width .64rem
			margin-left: .2rem
			font-size: .4rem
			text-align left
			color #FFFFFF
			
			
</style>
