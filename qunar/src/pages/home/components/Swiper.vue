<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
			<swiper-slide v-for="item of swiperList" :key="item.id">
				<img class="swiper-img" :src="item.imgUrl">
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default {
		name: 'HomeSwiper',
		props: {
			swiperList: Array
		},
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
				}
			}
		},
		// 模版代码里尽量减少逻辑代码
		computed: {
			showSwiper () {
				return this.swiperList.length
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
		.swiper-img
			width 100%

</style>
