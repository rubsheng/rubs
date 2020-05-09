<template>
	<keep-alive>
		<div class="item-box">
			<router-link class="item" v-for="route in residentDoctorRoute" :key="route.name" :to="route.path">{{route.meta.title}}</router-link>
		</div>
		<router-view></router-view>
	</keep-alive>
</template>

<script>
import keepAlive from '@/mixins/keepAlive'
import residentDoctorRoute from '@/router/routes/residentDoctor'

export default {
	name: 'ResidentMiddlePage',
	mixins: [keepAlive],
	data () {
		return {
			routes: []
		}
	},
	computed: {
		residentDoctorRoute () {
			return residentDoctorRoute
		}
	},
	methods: {
		handleEnter () {
			this.$router.push({
				path: 'base/file/'
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
			display: inline-block;
			margin-right: 15px;
			text-decoration: none;
			color: black;
		}
	}
</style>
