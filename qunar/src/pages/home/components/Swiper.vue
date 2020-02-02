<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
			<swiper-slide v-for="item of swiperList" :key="item.id">
				<img class="swiper-mg" :src="item.imgUrl">
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default {
		name: 'HomeSwiper',
		data () {
			return {
				// Swiper4的API文档 https://www.swiper.com.cn/api/loop/22.html
				swiperOption: {
					// 如果需要分页器
					pagination: {
						el: '.swiper-pagination'
					},
					loop: true,
					autoplay: true,
					delay: 200
				},
				swiperList: [{
					id: '0001',
					imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/316fb27c0e1ac2ee1996cbc5ec2d5b3f.jpg'
				}, {
					id: '0002',
					imgUrl:	'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/99942c1e5b16f528723dd4c0fbf9c97c.jpg'
				}]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	// >>> 样式穿透
	.wrapper >>> .swiper-pagination-bullet-active 
		background: #fff
	.wrapper
		.swiper-container
			width 100%
			height 100%
		overflow hidden
		width 100%
		height 31.25vw
		background #CACACA
		.swipe-img
		// ？此处未充满 要怎么设置
			width 100%

</style>
