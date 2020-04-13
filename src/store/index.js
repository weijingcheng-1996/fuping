import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state={
    userInfo:{}//用户数据
}
const actions={
    createUserInfo({commit}, data) {
		commit('CREATEUSERINFO', data)
	},
}
const mutations={
    CREATEUSERINFO(state,data){
        state.userInfo = data
    }
}
const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
