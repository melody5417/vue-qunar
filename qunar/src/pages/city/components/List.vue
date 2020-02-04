<template>
	<div class="list">
		<div class="area">
			<div class="title border-topbottom">当前城市</div>
			<div class="button-list">
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">热门城市</div>
			<div class="button-list">
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">A</div>
			<div class="item-list">
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
			</div>
			<div class="title border-topbottom">A</div>
			<div class="item-list">
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
			</div>
			<div class="title border-topbottom">A</div>
			<div class="item-list">
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
			</div>
			<div class="title border-topbottom">A</div>
			<div class="item-list">
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CityList'
	}
</script>

<style lang="stylus" scoped>
	.border-topbottom
		&::before
			border-color #ccc
		&::after
			border-color #ccc
	.border-bottom
		&::after
			border-color #ccc
	.title
		line-height .44rem
		background-color #eee
		text-align left
		padding-left .2rem
		font-size .26rem
		color #666
	.button-list
		padding .1rem .6rem .1rem .1rem
		display flex
		flex-flow row wrap
		.button-wrapper
			width 33%
			flex none
			.button
				margin .1rem
				padding .1rem 0
				border .02rem solid #ccc
				border-radius .1rem
	.item-list
		.item
			line-height .76rem
			padding-left .2rem
			text-align left
			
</style>
