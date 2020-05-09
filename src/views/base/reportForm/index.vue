<template>
	<div ref="drawNum">
		<mainNav></mainNav>
		<router-view></router-view>
	</div>
</template>

<script>
	import mainNav from '../components/mainNav'

	export default {
		name: 'ReportForm',
		data () {
			return {}
		},
		components: {
            mainNav
        }
	}
</script>

<style lang="scss" scoped></style>
