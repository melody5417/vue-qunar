<template>
	<div class="alphabet">
		<ul>
			<li 
				class="item" 
				v-for="item of letters" 
				:key="item"
				:ref="item"
				@click="handleLetterClick"
				@touchstart="handleTouchStart"
				@touchmove="handleTouchMove"
				@touchend="handleTouchEnd"
			>
				{{item}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "CityAlphabet",
		props: {
			letters: Array
		},
		data () {
			return {
				touchStatus: false,
				startY: 0,
				timer: null
			}
		},
		methods: {
			handleLetterClick (event) {
				this.$emit("change", event.target.innerText)
			},
			handleTouchStart () {
				this.touchStatus = true
			},
			handleTouchMove (e) {
				if (this.touchStatus) {
					if (this.timer) {
						clearTimeout(this.timer)
					}
					this.timer = setTimeout(() => {
						const touchY = e.touches[0].clientY - 60 - 79
						const index = Math.floor((touchY - this.startY) / 20)
						if (index >= 0 && index < this.letters.length) {
							this.$emit("change", this.letters[index])
						}
					}, 20);
				}
			},
			handleTouchEnd () {
				this.touchStatus = false
			}
		},
		updated () {
			this.startY = this.$refs['A'][0].offsetTop
		}
	}
</script>

<style lang="stylus" scoped>
	.alphabet
		overflow hidden
		position absolute
		top 2.8rem
		right 0
		bottom 0
		width .4rem
		display flex
		flex-direction column
		justify-content center
		.item
			line-height .4rem
			color #00BCD4
		
</style>
