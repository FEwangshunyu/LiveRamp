const state = {
  userName: '',
  searchList: []
}
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  SET_SEARCH_LIST(state, user) {
    state.searchList.push(user)
  }
}
const actions = {
  // 设置name
  setUserName({ commit }, name) {
    commit('SET_USER_NAME', name)
  },
  // 查询记录存储
  setSearchList({ commit }, user) {
    commit('SET_SEARCH_LIST', user)
  }
}
export default {
  state,
  mutations,
  actions
}
