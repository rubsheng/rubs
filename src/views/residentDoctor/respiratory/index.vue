<template>
    <div class="respiratory-container">
		<ckMainNav :navRoute="navRoute"></ckMainNav>
		<el-container style="height: 100%;">
			<el-aside width="200px" style="height: 100%; border-right: 2px solid gray;">
				<h1 class="caption">病历列表</h1>
				<div class="desc">
					<span>床号：8849号</span>
					<span>王勇</span>
					<span>男</span>
					<span>69</span>
				</div>
				<el-menu
					default-active="2"
					class="el-menu-vertical-demo"
					@open="handleOpen"
					@close="handleClose">
					<el-menu-item index="4">
						<span slot="title">基本信息</span>
					</el-menu-item>
					<el-menu-item index="4">
						<span slot="title">病历</span>
					</el-menu-item>
					<el-menu-item index="4">
						<span slot="title">病程记录</span>
					</el-menu-item>
					<el-submenu index="2">
						<template slot="title">住院医嘱</template>
						<el-menu-item index="2-1">住院医嘱</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title">护理操作记录</template>
						<el-menu-item index="2-1">体温单</el-menu-item>
						<el-menu-item index="2-1">24小时出入量记录单</el-menu-item>
						<el-menu-item index="2-1">护理记录单</el-menu-item>
						<el-menu-item index="2-1">约束病人护理观察单</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>
				<div class="baseinfo">
					<span>床号：2745床</span>
					<span>住院号：A0994</span>
					<span>姓名：王勇</span>
				</div>
				<div class="baseinfo">
					<span>患者总数：2</span>
					<span>三级护理：0</span>
					<span>二级护理：0</span>
				</div>
				<div class="action-box">
					<span>病历完成</span>
					<span>患者信息</span>
					<span>评分测试</span>
					<span>移交病历</span>
					<span>三级检诊</span>
					<span>科室交班记录</span>
				</div>
				<el-table
				:data="tableData"
				style="width: 100%">
					<el-table-column
						prop="date"
						label="状态"
						width="180">
					</el-table-column>
					<el-table-column
						prop="name"
						label="床号"
						width="180">
					</el-table-column>
					<el-table-column
						prop="address"
						label="所在科室">
					</el-table-column>
				</el-table>
			</el-main>
		</el-container>
    </div>
</template>

<script>

export default {
    name: 'RespiratoryMedicine',
    data () {
        return {
			tableData: [{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄'
			}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄'
			}]
        }
    },
    methods: {
		handleOpen (key, keyPath) {
			console.log(key, keyPath)
		},
		handleClose (key, keyPath) {
			console.log(key, keyPath)
		}
    }
}
</script>

<style lang="scss" scoped>
	.respiratory-container{
		.caption{
			font-size: 18px;
			background: #076979;
			padding-left: 5px;
			line-height: 2;
			color: white;
		}
		.desc{
			line-height: 2;
			padding-left: 5px;
			span{
				padding-right: 5px;
			}
		}
	}
</style>
