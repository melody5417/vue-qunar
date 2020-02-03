<template>
	<div class="icons">
		<div class="icon">
			<div class="icon-img">
				<img class="icon-img-content" src="https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg" />
			</div>
			<p class="icon-desc">热门景点</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomeIcons'
	}
</script>

<style lang="stylus" scoped>
	@import '../../../assets/styles/variables.styl'
	.icons
		overflow hidden
		width 100%
		height 0
		padding-bottom 50%
		background #42B983
		.icon
			position relative
			overflow hidden
			float left
			width 25%
			padding-bottom 25%
			background #00BCD4
			.icon-img
				position absolute
				top 0
				left 0
				bottom .44rem
				right 0
				box-sizing border-box
				padding .1rem
				.icon-img-content
					display block
					width 100%
			.icon-desc
				position absolute
				left 0
				right 0
				bottom 0
				height .44rem
				line-height .44rem //文字上下居中
				color $dartTextColor
				text-align center
				
			
			
</style>
