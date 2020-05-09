<template>
		<div class="emergency-container">
		<div class="action-box">
			<span>定位</span>
			<span>三测表信息批量录入</span>
			<span>护理巡视</span>
			<span>生命体征</span>
			<span>会诊安排</span>
		</div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="本科在院患者列表" name="first">
				<div class="statis">
					<span>患者总数</span>
					<span>三级护理</span>
					<span>二级护理</span>
					<span>显示模式</span>
					<el-select v-model="value" placeholder="请选择">
						<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="medica-records">
					<div class="item" @click="handleRedirectDetail">
						<p>床号：31-30</p>
						<p>姓名：张勇</p>
						<p>年龄：60</p>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="转科未提交患者列表" name="second">
				<div class="statis">
					<span>患者总数</span>
					<span>三级护理</span>
					<span>二级护理</span>
					<span>显示模式</span>
					<el-select v-model="value" placeholder="请选择">
						<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
						</el-option>
					</el-select>
				</div>
			</el-tab-pane>
			<el-tab-pane label="出院未送交病历患者列表" name="third">
				<div class="statis">
					<span>患者总数</span>
					<span>三级护理</span>
					<span>二级护理</span>
					<span>显示模式</span>
					<el-select v-model="value" placeholder="请选择">
						<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
						</el-option>
					</el-select>
				</div>
			</el-tab-pane>
		</el-tabs>
    </div>
</template>

<script>
	export default {
		name: 'EmergencyMedicine',
		data () {
			return {
			activeName: 'first',
			options: [{
			value: '1',
			label: '卡片显示'
			}, {
			value: '2',
			label: '列表显示'
			}],
			value: '1'
			}
		},
		methods: {
			handleClick (tab, event) {
				console.log(tab, event)
			},
			handleRedirectDetail () {
				this.$router.push({
					name: 'emergencyRecordDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.emergency-container{
		.action-box{
			span{
				padding: 10px;
			}
		}
		.statis{
			span{
				padding: 0 10px;
			}
		}
		.medica-records{
			padding: 15px;
			.item{
				width: 100px;
				height: 100px;
				border: 1px solid gray;
			}
		}
	}
</style>
