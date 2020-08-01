export const state = () => ({
  laws: [],
})

export const mutations = {
  SET_LAWS(state, payload) {
    state.laws = payload
  },
}

export const actions = {
  async getLaws({ commit }) {
    try {
      const res = await this.$axios.$get('/laws')
      commit('SET_LAWS', res.data.laws)
    } catch {}
  },
  voteConfirm({ dispatch }, lawId) {
    console.log(`lawId ${lawId}`)
    this.$swal({
      title: 'ต้องการโหวตกฎหมายนี้',
      text: 'สามารถกดโหวตได้ครั้งเดียวเท่านั้นไม่สามารถยกเลิกผลโหวตได้',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ตกลง',
    }).then(async (result) => {
      if (result.value) {
        try {
          await dispatch('vote', lawId)
          this.$swal('โหวตสำเร็จ!', 'คุณได้โหวคให้กฎหมายนี้แล้ว', 'success')
        } catch {
          this.$swal('ผิดพลาด', 'โหวตไปแล้ว', 'error')
        }
      }
    })
  },
  async vote(context, lawId) {
    try {
      await this.$axios.$post(`/person/vote/${lawId}`)
    } catch (err) {
      console.log(err)
      throw err
    }
  },
}
