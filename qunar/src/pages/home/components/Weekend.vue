<template>
	<div class="weekend">
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item of weekendList" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" />
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'HomeWeekend',
		data () {
			return {
				weekendList: [{
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
	@import '~styles/mixins.styl'
	.title
		margin-top .2rem
		line-height .8rem
		background-color #eee
		text-align left
		text-indent .2rem
	.item
		overflow hidden
		width 100%
		background-color red
		.item-img-wrapper
			overflow hidden
			height 0
			padding-bottom 33.9%
			background-color greenyellow
			.item-img
				width 100%
		.item-info
			padding .1rem
			.item-title
				text-align left
				text-indent .2rem
				ellipsis()
			.item-desc
				text-align left
				text-indent .2rem
				ellipsis()
</style>
