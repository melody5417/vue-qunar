<template>
	<div>
		<div class="banner">
			<img class="banner-img" src="https://static.runoob.com/images/demo/demo1.jpg" alt="">
			<div class="banner-info">
				<div class="banner-title">
					大连海洋世界
				</div>
				<div class="banner-number">
					<span class="iconfont banner-icon"></span>
					19
				</div>
			</div>
		</div>
		<div class="banner-gallery" v-show="showSwiper">
			<gallery :imgs="images"></gallery>
		</div>
	</div>
</template>

<script>
	import Gallery from '../../../common/gallery/Gallery.vue'
	export default {
		name: 'DetailBanner',
		data () {
			return {
				images: ["https://t1.hddhhn.com/uploads/tu/201812/622/484.jpg",
							"https://t1.hddhhn.com/uploads/tu/201812/622/484.jpg",
							"https://t1.hddhhn.com/uploads/tu/201812/622/484.jpg"]
			}
		},
		components: {
			Gallery
		},
		computed : {
			showSwiper () {
				return this.images.length
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
