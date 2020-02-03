<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont iconreturn"></div>
		</div>
		<div class="header-input">
			<span class="iconfont iconsearch"></span>
			输入城市/景点/游玩主题
		</div>
		<router-link to="/city">
			<div class="header-right">
				{{this.city}}
				<span class="iconfont iconunfold"></span>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'HomeHeader',
		props: {
			city: String
		}
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
			color #FFFFFF
			.iconunfold
				margin-left -0.1rem
				font-size .3rem
</style>
