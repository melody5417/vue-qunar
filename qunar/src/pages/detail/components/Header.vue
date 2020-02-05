<template>
	<div>
		<router-link 
			tag="div" 
			class="header-back"
			v-show="showHeaderBack"
			to="/"
		>
		《
		</router-link>
		<div 
			class="header-fixed" 
			v-show="!showHeaderBack"
			:style="opacityStyle"
		>
			<router-link to="/" tag="div" class="header-fixed-back">
				<div class="iconfont iconreturn"></div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailHeader",
		data () {
			return {
				showHeaderBack: true,
				opacityStyle: {
					opacity: 0
				}
			}
		},
		methods: {
			handleScroll () {
				const top = document.documentElement.scrollTop
				if (top > 60) {
					let opacity = top / 140
					opacity = opacity > 1 ? 1 : opacity
					this.opacityStyle = {
						opacity //key和value相等，写一个就可以
					}
					this.showHeaderBack = false
				} else {
					this.showHeaderBack = true
				}
			}
		},
		activated () {
			console.log('addEventListener')
			window.addEventListener("scroll", this.handleScroll)
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	.header-back
		position absolute
		top .2rem
		left .2rem
		width .8rem
		height .8rem
		line-height .8rem
		border-radius .4rem
		background-color rgba(0, 0, 0, .8)
		color #fff
	.header-fixed
		position fixed
		top 0
		left 0
		right 0
		display: flex
		background: $bgColor
		line-height: $headerHeight
		height $headerHeight
		color: #FFFFFF
		.header-fixed-back
			width: .64rem
			float: left
			.iconreturn
				margin-left: .2rem
				font-size: .4rem
</style>
