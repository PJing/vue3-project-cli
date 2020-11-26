/*
 * @Author: 彭璟
 * @Date: 2020-11-19 10:38:33
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-24 10:41:43
 * @Description: file content
 */
import http from '@/utils/http'
export default {
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    getUser({ commit }) {
      return new Promise(resolve => {
        http.get('/sys/user/info').then(res => {
          commit('setUser', res.data)
          resolve()
        })
      })
    }
  }
}