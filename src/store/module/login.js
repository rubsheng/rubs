// import fetch from '@/utils/fetch'
// import api from '@/global/api'

const login = {
  state: {},
  mutations: {},
  actions: {
    async A_LOGIN ({ commit, dispatch }, payload) {
      try {
        // 發送請求
        // const { status, data } = await fetch.post(api.login.login, payload)

        // if (status === 0) {
          const token = 'jjdhhffjfhfj'
          sessionStorage.setItem('token', token)
          dispatch('A_GET_USER_INFO')
          commit('SET_TOKEN', token)
        // }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
export default login
