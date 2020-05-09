import * as urls from '../routePath'

// 基础数据维护

// 报表
const reportForm = () => import('@/views/base/reportForm/index.vue') // 报表
const reportForm_search = () => import('@/views/base/reportForm/search/index.vue') // 报表查询
const reportForm_loadlog = () => import('@/views/base/reportForm/loadLog/index.vue') // 登录日志

// 同步管理
const syncManage = () => import('@/views/base/syncManage/index.vue')
const syncManage_datatpl = () => import('@/views/base/syncManage/dataGroupTpl/index.vue') // 数据组和模板
const syncManage_contentset = () => import('@/views/base/syncManage/contentSet/index.vue') // 同步内容设置

// 后台管理
const backendManage = () => import('@/views/base/backendManage/index.vue')
const backendManage_datatpl = () => import('@/views/base/backendManage/datatpl/index.vue')

// 模板管理
const tempManage = () => import('@/views/base/tempManage/index.vue')
const tempManage_manage = () => import('@/views/base/tempManage/manage/index.vue')//模板管理
const tempManage_doctorp = () => import('@/views/base/tempManage/doctorp/index.vue')//医师排班
const tempManage_subtemp = () => import('@/views/base/tempManage/subtemp/index.vue')//子模板管理
const tempManage_datatemp = () => import('@/views/base/tempManage/datatemp/index.vue')//数据元管理
const tempManage_datagroup = () => import('@/views/base/tempManage/datagroup/index.vue')//数据组管理
const tempManage_unlock = () => import('@/views/base/tempManage/unlock/index.vue')//病历解锁
const tempManage_headersetting = () => import('@/views/base/tempManage/headersetting/index.vue')//页眉设置






const routes = [
	{
		name: 'reportForm',
		path: `${urls.BASE_REPORT_FORM}`,
		meta: {
			title: '报表'
		},
		component: reportForm,
		children: [
			{
				name: 'reportFormSearch',
				path: `${urls.BASE_REPORT_FORM_SEARCH}`,
				meta: {
					title: '报表查询'
				},
				component: reportForm_search
			},
			{
				name: 'reportFormLoadLog',
				path: `${urls.BASE_REPORT_FORM_LOADLOG}`,
				meta: {
					title: '登录日志'
				},
				component: reportForm_loadlog
			}
		]
	},
	{
		name: 'syncManage',
		path: `${urls.BASE_SYNCMANAGE}`,
		meta: {
			title: '同步管理'
		},
		component: syncManage,
		children: [
			{
				name: 'datagroupandtpl',
				path: `${urls.BASE_SYNCMANAGE_DATATPL}`,
				meta: {
					title: '数据组和模板'
				},
				component: syncManage_datatpl
			},
			{
				name: 'contentset',
				path: `${urls.BASE_SYNCMANAGE_CONTENT_SET}`,
				meta: {
					title: '同步内容设置'
				},
				component: syncManage_contentset
			}
		]
	},
	{
		name: 'backEndManage',
		path: `${urls.BASE_BACKENDMANAGE}`,
		meta: {
			title: '后台管理'
		},
		component: backendManage,
		children: [
			{
				name: 'backenddatatpl',
				path: `${urls.BASE_BACKENDMANAGE_DATATPL}`,
				meta: {
					title: '模板目录维护'
				},
				component: backendManage_datatpl
			},
			{
				name: 'nurselist',
				path: `${urls.BASE_BACKENDMANAGE_NURSELIST}`,
				meta: {
					title: '护士工作站和护士记录单维护'
				},
				component: syncManage_contentset
			}
		]
	},
	{
		name: 'tempManage',
		path: `${urls.BASE_TEMPMANAGE}`,
		meta: {
			title: '模板管理'
		},
		component: tempManage,
		children: [
			{
				name: 'manage',
				path: `${urls.BASE_TEMPMANAGE_MANAGE}`,
				meta: {
					title: '模板管理'
				},
				component: tempManage_manage
			},
			{
				name: 'doctorp',
				path: `${urls.BASE_TEMPMANAGE_Doctorp}`,
				meta: {
					title: '医师排班'
				},
				component: tempManage_doctorp
			},
			{
				name: 'subtemp',
				path: `${urls.BASE_TEMPMANAGE_Subtemp}`,
				meta: {
					title: '子模版管理'
				},
				component: tempManage_subtemp
			},
			{
				name: 'datatemp',
				path: `${urls.BASE_TEMPMANAGE_Datatemp}`,
				meta: {
					title: '数据元管理'
				},
				component: tempManage_datatemp
			},
			{
				name: 'datagroup',
				path: `${urls.BASE_TEMPMANAGE_Datagroup}`,
				meta: {
					title: '数据组管理'
				},
				component: tempManage_datagroup
			},
			{
				name: 'unlock',
				path: `${urls.BASE_TEMPMANAGE_Unlock}`,
				meta: {
					title: '病历解锁'
				},
				component: tempManage_unlock
			},
			{
				name: 'headersetting',
				path: `${urls.BASE_TEMPMANAGE_Headersetting}`,
				meta: {
					title: '页眉设置'
				},
				component: tempManage_headersetting
			}
		]
	}
]

export default routes
