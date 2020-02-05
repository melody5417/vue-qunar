<template>
	<div class="container" @click="handleGalleryClick">
		<div class="wrapper">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item, index) of imgs" :key="index">
					<img class="gallery-img" :src="item">
				</swiper-slide>
				<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CommonGallery",
		props: {
			imgs: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data () {
			return {
				// Swiper4的API文档 https://www.swiper.com.cn/api/loop/22.html
				swiperOption: {
					// 如果需要分页器
					pagination: {
						el: '.swiper-pagination',
						type: 'fraction'
					},
					observer: true,
					observeParents: true //当swiper的父元素变化时，swiper更新
				}
			}
		},
		methods: {
			handleGalleryClick () {
				this.$emit('close')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.container >>> .swiper-container
		overflow: visible
	.container
		z-index 99
		position fixed
		left 0
		top 0
		right 0
		bottom 0
		background-color #000
		display flex
		flex-direction column
		justify-content center
		.wrapper
			width 100%
			height 0
			padding-bottom 100%
			.gallery-img
				width 100%
			.swiper-pagination
				color #FFFFFF
				bottom -1rem
</style>
