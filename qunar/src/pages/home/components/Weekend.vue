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
		props: {
			weekendList: Array
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
