<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="bannerImg" alt="">
			<div class="banner-info">
				<div class="banner-title">
				{{sightName}}
				</div>
				<div class="banner-number">
					<span class="iconfont banner-icon"></span>
					19
				</div>
			</div>
		</div>
		<fade-animation>
			<div
				class="banner-gallery" 
				v-show="showGallery">
				<gallery :imgs="gallaryImgs" @close="handleGalleryClose"></gallery>
			</div>
		</fade-animation>
	</div>
</template>

<script>
	import Gallery from '../../../common/gallery/Gallery.vue'
	import FadeAnimation from	'../../../common/Animation/FadeAnimation.vue'
	export default {
		name: 'DetailBanner',
		props: {
			sightName: String,
			bannerImg: String,
			gallaryImgs: Array
		},
		data () {
			return {
				showGallery: false
			}
		},
		components: {
			Gallery,
			FadeAnimation
		},
		computed : {
			showSwiper () {
				return this.gallaryImgs.length && this.showGallery
			}
		},
		methods: {
			handleBannerClick () {
				this.showGallery = true
			},
			handleGalleryClose() {
				this.showGallery = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.banner
		overflow hidden
		position relative
		height 0
		padding-bottom 55%
		.banner-img
			width 100%
		.banner-info
			position absolute
			left 0
			right 0
			bottom 0
			line-height .6rem
			display flex
			justify-content center
			align-items center
			background-image linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
			.banner-title
				text-align left
				flex 1
				font-size .32rem
				padding 0 .2rem
				color #fff
			.banner-number
				padding 0 .4rem
				height .4rem
				line-height .4rem
				border-radius .2rem
				background-color rgba(0, 0, 0, .8)
				font-size .24rem
				color #fff
				
			
</style>
