import fetch from '../../utils/fetch'
import api from '../../global/api'
import router from '../../router/router'
import * as urls from '../../router/routePath'
import { dataURLtoBlob, downloadLocalFile } from '../../utils/utils'

const global = {
  state: {},
  mutations: {
    // 设置token
    SET_TOKEN (state, payload = '') {
      state.uploadHeaders.Authorization = payload
    }
  },
  // 全局请求(字典项接口，公共接口等)
  actions: {
    // 用户信息
    async A_GET_USER_INFO ({ commit, dispatch }) {
      try {
        // 獲取用戶信息
        // const { status, data } = await fetch.get(api.global.userInfo)

        // if (status === 0) {
          const data = {
            realName: '測試'
          }
          commit('SET_USER_INFO', data)
          sessionStorage.setItem('userInfo', JSON.stringify(data))

          // 進入平臺
          router.push(urls.BASE_SYNCMANAGE)

          // if (data.companyId) {
          //   dispatch('A_GET_COMPANY_CODE', { companyId: data.companyId })
          //   router.push(urls.BASE_SYNCMANAGE)
          // } else {
          //   Message.warning('登陸失敗')
          // }
        // }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
export default global
