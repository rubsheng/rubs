<template>
	<keep-alive>
		<div class="item-box">
			<span v-for="route in residentNurseRoute" :key="route.name">
				<router-link class="item" v-if="!route.meta.hidden" :to="route.path">{{route.meta.title}}</router-link>
			</span>
		</div>
		<router-view></router-view>
	</keep-alive>
</template>

<script>
import keepAlive from '@/mixins/keepAlive'
import residentNurseRoute from '@/router/routes/residentNurse'

export default {
	name: 'ResidentNurseMiddlePage',
	mixins: [keepAlive],
	data () {
		return {
			routes: []
		}
	},
	computed: {
		residentNurseRoute () {
			return residentNurseRoute
		}
	},
	methods: {}
}
</script>

<style lang="scss" scoped>
	.item-box{
		padding: 15px;
		.item{
			width: 100px;
			height: 100px !important;
			border: 1px solid gray;
			display: inline-block;
			margin-right: 15px;
			text-decoration: none;
			color: black;
		}
	}
</style>
