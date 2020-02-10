import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 配置用户账户信息成员
    user: JSON.parse(localStorage.getItem('userinfo'))
  },
  mutations: {
    // 修改用户信息
    updateUser: function (state, data) {
      // 1. vuex的共享数据要修改
      state.user = data
      // 2. localStorage数据要修改
      localStorage.setItem('userinfo', JSON.stringify(data))
    },
    clearUser: function (state, data) {
      state.user = data
      localStorage.clear()
    }

  },
  actions: {
  },
  modules: {
  }
})
