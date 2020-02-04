<template>
	<div class="list">
		<div class="wrapper" ref='wrapper'>
			<div class="content">
				<div class="area">
					<div class="title border-topbottom">当前城市</div>
					<div class="button-list">
						<div class="button-wrapper">
							<div class="button">北京</div>
						</div>
					</div>
				</div>
				<div class="area">
					<div class="title border-topbottom">热门城市</div>
					<div class="button-list">
						<div class="button-wrapper" v-for="item of hotCities" :key="item.id">
							<div class="button">{{item.name}}</div>
						</div>
					</div>
				</div>
				<div 
					class="area" 
					v-for="(item, key) of cities" 
					:key="key"
					:ref="key">
					<div class="title border-topbottom">{{key}}</div>
					<div class="item-list" v-for="inneritem of item" :key="inneritem.id">
						<div class="item border-bottom">{{inneritem.name}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'CityList',
		props: {
			hotCities: Array,
			cities: Object,
			letter: String
		},
		mounted () {
			this.scroll = new BScroll(this.$refs.wrapper)
		},
		watch: {
			letter () {
				if (this.letter) {
					const element = this.$refs[this.letter][0]
					this.scroll.scrollToElement(element)
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.border-topbottom
		&::before
			border-color #ccc
		&::after
			border-color #ccc
	.border-bottom
		&::after
			border-color #ccc
	// .list
	// 	position relative
	// 	width 100%
	// 	height 100%
		.wrapper
			overflow hidden
			position absolute
			top 2.8rem
			right 0
			bottom 0
			left 0
			background-color #FFFFFF
			.title
				line-height .44rem
				background-color #eee
				text-align left
				padding-left .2rem
				font-size .26rem
				color #666
			.button-list
				padding .1rem .6rem .1rem .1rem
				display flex
				flex-flow row wrap
				.button-wrapper
					width 33%
					flex none
					.button
						margin .1rem
						padding .1rem 0
						border .02rem solid #ccc
						border-radius .1rem
			.item-list
				.item
					line-height .76rem
					padding-left .2rem
					text-align left
				
</style>
