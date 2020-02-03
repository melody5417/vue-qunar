<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page, index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl" />
					</div>
					<p class="icon-desc">热门景点</p>
				</div>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default {
		name: 'HomeIcons',
		data () {
			return {
				// Swiper4的API文档 https://www.swiper.com.cn/api/loop/22.html
				swiperOption: {
					// 如果需要分页器
					pagination: {
						el: '.swiper-pagination',
					},
					loop: true
				},
				iconList: [{
					id: '0001',
					imgUrl: 'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
					desc: '景点门票'
				}, {
					id: '0002',
					imgUrl: 'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
					desc: '景点门票'
				}, {
					id: '0003',
					imgUrl: 'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
					desc: '景点门票'
				}, {
					id: '0004',
					imgUrl: 'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
					desc: '景点门票'
				}, {
					id: '0005',
					imgUrl: 'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
					desc: '景点门票'
				}, {
					id: '0006',
					imgUrl: 'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
					desc: '景点门票'
				}, {
					id: '0007',
					imgUrl: 'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
					desc: '景点门票'
				}, {
					id: '0008',
					imgUrl: 'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
					desc: '景点门票'
				}, {
					id: '0009',
					imgUrl: 'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
					desc: '景点门票'
				}]
			}
		},
		computed: {
			pages () {
				const pages = []
				this.iconList.forEach( (item, index) => {
					const page = Math.floor(index / 8)
					if (!pages[page]) {
						pages[page] = []
					}
					pages[page].push(item)
				})
				return pages
			}
		}
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
		.swiper-container
			width 100%
			height 0
			padding-bottom 50%
		.icon
			position relative
			overflow hidden
			float left
			width 25%
			padding-bottom 25%
			background #00BCD4
			.icon-img
				position absolute
				overflow hidden
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
