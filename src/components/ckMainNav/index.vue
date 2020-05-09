<template>
	<div class="main-nav-container">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-submenu v-for="(item) in navRoute" :key="item.name" :index="item.name">
				<template slot="title">{{item.meta.title}}</template>
				<el-menu-item v-for="(subItem) in item.children" :key="subItem.name" :index="subItem.name">{{subItem.meta.title}}</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script type="text/javascript">
	import navRoute from '@/router/routes/navRoute'

	export default {
		data () {
			return {
				activeIndex: 2
			}
		},
		computed: {
			navRoute () {
				return navRoute
			}
		},
		methods: {
			handleSelect (key, keyPath) {
				this.$router.push({
					path: key
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main-nav-container{
		background-color: #c3e5ef;
		line-height: 2;
		.route-item{
			padding: 0 5px;
			text-decoration: none;
			color: black;
		}
	}
</style>
