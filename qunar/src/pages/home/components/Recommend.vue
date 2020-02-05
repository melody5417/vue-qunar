<template>
	<div class="recommend">
		<div class="title">热销推荐</div>
		<ul>
			<router-link 
				tag="li" 
				class="item border-bottom" 
				v-for="item of recommendList" 
				:key="item.id"
				:to="'/detail/' + item.id"
			>
				<img class="item-img" :src="item.imgUrl" />
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<div class="item-button-wrapper">
						<button class="item-button">查看详情</button>
					</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "HomeRecommend",
		props: {
			recommendList: Array
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	@import '~styles/mixins.styl'
	.title
		margin-top .2rem
		line-height .8rem
		background-color #eee
		color $dartTextColor
		text-align left
		text-indent .2rem
	.item
		overflow hidden
		display flex
		width 100%
		height 1.9rem
		background-color red
		.item-img
			width 1.7rem
			height 1.7rem
			padding .1rem
		.item-info
			flex 1
			width 0
			padding .1rem
			display flex
			flex-direction column
			background-color yellow
			.item-title
				line-height .54rem
				font-size .32rem
				text-align left
				ellipsis()
			.item-desc
				line-height .4rem
				color #ccc
				text-align left
				ellipsis()
			.item-button
				display block
				line-height .44rem
				margin-top .16rem
				background-color #ff9300
				padding 0 .2rem
				border-radius .06rem
				color #FFFFFF
</style>
