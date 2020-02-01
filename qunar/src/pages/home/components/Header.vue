<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont iconreturn"></div>
		</div>
		<div class="header-input">
			<span class="iconfont iconsearch"></span>
			输入城市/景点/游玩主题
		</div>
		<div class="header-right">
			城市
			<span class="iconfont iconunfold"></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomeHeader'
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	.header
		display: flex
		background: $bgColor
		line-height: 0.86rem
		color: #FFFFFF
		.header-left
			width: .64rem
			float: left
			.iconreturn
				margin-left: .2rem
				font-size: .4rem
		.header-input
			flex: 1
			height .64rem
			line-height .64rem
			background: #FFFFFF
			border-radius .1rem
			margin-top .12rem
			margin-left .2rem
			color #ccc
			text-align left
			padding-left .2rem
		.header-right
			width: 1.24rem
			float: right
			text-align: center
			.iconunfold
				margin-left -0.1rem
				font-size .3rem
</style>
