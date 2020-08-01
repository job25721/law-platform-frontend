export const state = () => ({
  myLaws: [],
})

export const mutations = {
  SET_MY_LAW(state, payload) {
    state.myLaws = payload
  },
}

export const actions = {
  async getMyLaws({ commit }) {
    const res = await this.$axios.$get('/person/laws')
    // console.log(res)
    commit('SET_MY_LAW', res.data.lawInitiated)
  },
}
