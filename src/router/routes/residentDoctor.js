import * as urls from '../routePath'

// 住院医生工作站
const respiratoryMedicine = () => import('@/views/residentDoctor/respiratory/index.vue') // 呼吸内科
const childMedicine = () => import('@/views/residentDoctor/child/index.vue') // 小儿科

const routes = [
	{
		name: 'respiratoryMedicine',
		path: `${urls.RESIDENT_RESPIRATORY_MEDICINE}`,
		meta: {
			title: '呼吸内科'
		},
		component: respiratoryMedicine
	},
	{
		name: 'childMedicine',
		path: `${urls.RESIDENT_CHILD_MEDICINE}`,
		meta: {
			title: '小儿科'
		},
		component: childMedicine
	}
]

export default routes
