<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<img class="item-img" :src="item.imgUrl" />
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "HomeRecommend",
		data () {
			return {
				recommendList: [{
					id: '0001',
					imgUrl: 'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
					title: '大连海洋世界大连海洋世界大连海洋世界大连海洋世界大连海洋世界大连海洋世界',
					desc: '与动物嬉戏与动物嬉戏与动物嬉戏与动物嬉戏与动物嬉戏与动物嬉戏',
				}, {
					id: '0002',
					imgUrl: 'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
					title: '大连海洋世界大连海洋世界大连海洋世界大连海洋世界大连海洋世界大连海洋世界',
					desc: '与动物嬉戏与动物嬉戏与动物嬉戏与动物嬉戏与动物嬉戏与动物嬉戏',
				}, {
					id: '0003',
					imgUrl: 'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
					title: '大连海洋世界大连海洋世界大连海洋世界大连海洋世界大连海洋世界大连海洋世界',
					desc: '与动物嬉戏与动物嬉戏与动物嬉戏与动物嬉戏与动物嬉戏与动物嬉戏',
				}, {
					id: '0004',
					imgUrl: 'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
					title: '大连海洋世界大连海洋世界大连海洋世界大连海洋世界大连海洋世界大连海洋世界',
					desc: '与动物嬉戏与动物嬉戏与动物嬉戏与动物嬉戏与动物嬉戏与动物嬉戏',
				}, {
					id: '0005',
					imgUrl: 'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
					title: '大连海洋世界大连海洋世界大连海洋世界大连海洋世界大连海洋世界大连海洋世界',
					desc: '与动物嬉戏与动物嬉戏与动物嬉戏与动物嬉戏与动物嬉戏与动物嬉戏',
				}]
			}
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
			padding .1rem
			display flex
			flex-direction column
			min-width 0
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
				line-height .44rem
				width 1.9rem
				margin-top .16rem
				background-color #ff9300
				padding 0 .2rem
				border-radius .06rem
				color #FFFFFF
				
		
</style>
