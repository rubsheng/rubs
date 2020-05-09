<template>
	<keep-alive :include="cacheData">
		<div class="item-box">
			<div class="item" @click="handleEnter">进入</div>
		</div>
		<router-view></router-view>
	</keep-alive>
</template>

<script>
import { mapState } from 'vuex'
import keepAlive from '@/mixins/keepAlive'

export default {
	name: 'BaseDataMiddlePage',
	mixins: [keepAlive],
	data () {
		return {
			routes: []
		}
	},
	computed: {
		...mapState({
			cacheData: state => state.global.keepAlive
		})
	},
	methods: {
		handleEnter () {
			this.$router.push({
				path: 'base/sync/'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
	.item-box{
		padding: 15px;
		.item{
			width: 100px;
			height: 100px !important;
			border: 1px solid gray;
		}
	}
</style>
