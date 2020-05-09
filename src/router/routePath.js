export const BASE_URL = '/'

export const LOGIN = `${BASE_URL}login` // 登录
export const REGISTER = `${BASE_URL}register` // 注册
export const EDIT_PWD = `${BASE_URL}editPwd` // 修改密码

// 基础数据维护
export const BASE = `${BASE_URL}base`

export const BASE_SYNCMANAGE = `${BASE}/sync` // 基础数据 - 同步管理
export const BASE_SYNCMANAGE_DATATPL = `${BASE_SYNCMANAGE}/datatpl` // 基础数据 - 同步管理 - 数据组和模板
export const BASE_SYNCMANAGE_CONTENT_SET = `${BASE_SYNCMANAGE}/contentset` // 基础数据 - 同步管理 - 同步内容设置


export const BASE_BACKENDMANAGE = `${BASE}/backend` // 基础数据 - 后台管理
export const BASE_BACKENDMANAGE_DATATPL = `${BASE_BACKENDMANAGE}/tpl` // 基础数据 - 后台管理 - 模板目录维护
export const BASE_BACKENDMANAGE_NURSELIST = `${BASE_BACKENDMANAGE}/nurselist` // 基础数据 - 后台管理 - 护士工作站


export const BASE_REPORT_FORM = `${BASE}/reportform` // 基础数据 - 报表
export const BASE_REPORT_FORM_SEARCH = `${BASE_REPORT_FORM}/search` // 基础数据 - 报表查询
export const BASE_REPORT_FORM_LOADLOG = `${BASE_REPORT_FORM}/loadlog` // 基础数据 - 登录日志



export const BASE_TEMPMANAGE = `${BASE}/temp` // 基础数据 - 模板管理
export const BASE_TEMPMANAGE_MANAGE = `${BASE_TEMPMANAGE}/manage` // 基础数据 - 模板管理1
export const BASE_TEMPMANAGE_DOCTORP = `${BASE_TEMPMANAGE}/doctorp` // 基础数据 - 医师排班
export const BASE_TEMPMANAGE_SUBTEMP = `${BASE_TEMPMANAGE}/subtemp` // 基础数据 - 子模板管理
export const BASE_TEMPMANAGE_DATATEMP = `${BASE_TEMPMANAGE}/datatemp` // 基础数据 - 数据元管理
export const BASE_TEMPMANAGE_DATAGROUP = `${BASE_TEMPMANAGE}/datagroup` // 基础数据 - 数据组管理
export const BASE_TEMPMANAGE_UNLOCK = `${BASE_TEMPMANAGE}/unlock` // 基础数据 - 病历解锁
export const BASE_TEMPMANAGE_HEADERSETTING = `${BASE_TEMPMANAGE}/headersetting` // 基础数据 - 页眉设置


// 住院医生工作站
export const RESIDENT = `${BASE_URL}resident`
export const RESIDENT_RESPIRATORY_MEDICINE = `${RESIDENT}/respiratory` // 呼吸内科
export const RESIDENT_CHILD_MEDICINE = `${RESIDENT}/child` // 小儿内科

// 门诊医生工作站
export const OUTPATIENT = `${BASE_URL}outpatient`

// 住院护士工作站
export const NURSE = `${BASE_URL}nurse`
export const NURSE_EMERGENCY = `${NURSE}/emergency` // 急诊内科
export const NURSE_EMERGENCY_DETAIL = `${NURSE_EMERGENCY}/detail` // 急诊内科病历详情
export const NURSE_ICU = `${NURSE}/icu` // ICU
