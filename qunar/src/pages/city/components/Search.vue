<template>
	<div class="search">
		<div class="search-bar">
			<input 
				class="input" 
				type="text" 
				placeholder="输入城市名或拼音" 
				v-model="keyword" 
			/>
		</div>
		<div class="search-content wrapper" ref="wrapper" v-show="keyword">
			<ul>
				<li 
					class="search-content-item border-bottom" 
					v-for="item of list" 
					:key="item.id"
				>
					{{item.name}}
				</li>
				<li class="search-content-item border-bottom" v-show="hasNoData">
					没有找到匹配数据
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'CitySearch',
		props: {
			cities: Object
		},
		data () {
			return {
				keyword: "",
				list: [],
				timer: null
			}
		},
		computed: {
			hasNoData () {
				return !this.list.length
			}
		},
		watch: {
			keyword () {
				if (this.timer) {
					clearTimeout(this.timer)
				}
				if (!this.keyword) {
					this.list = []
					return
				}
				this.timer = setTimeout( () => {
					const result = []
					for (let i in this.cities) {
						this.cities[i].forEach((value) => {
							if (value.spell.indexOf(this.keyword) > -1 ||
							value.name.indexOf(this.keyword) > -1) {
								result.push(value)
							}
						})
					}
					this.list = result
					this.$nextTick(() => {
						this.scroll = new BScroll(this.$refs.wrapper, {})
					})
				}, 100);
			}
		},
		mounted () {
			if (!this.scroll) {
				this.$nextTick(() => {
					this.scroll = new BScroll(this.$refs.wrapper, {})
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../../assets/styles/variables.styl'
	.search-bar
		height .72rem
		padding 0 .1rem
		background-color $bgColor
		.input
			width 100%
			height .62rem
			padding 0 .1rem
			box-sizing border-box
			line-height .62rem
			text-align center
			border-radius .06rem
			background-color #FFFFFF
			color #666
	.search-content
		z-index 1
		overflow hidden
		position absolute
		top 2.8rem
		left 0
		right 0
		bottom 0
		background-color #eee
		.search-content-item
			line-height .62rem
			text-align left
			padding-left .2rem
			color #666
			background-color #fff
</style>
