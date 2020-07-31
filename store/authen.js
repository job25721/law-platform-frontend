export const state = () => ({
  phoneNumber: '0932277124',
  otpisGen: false,
  otp: '',
  cardId: '1111111111111',
  remainingOtpTime: 5,
  waitingOtpConfirm: false,
})

export const mutations = {
  CHANGE_OTP_STATE(state, payload) {
    state.otpisGen = payload
  },
  HANDLE_CARD_ID(state, payload) {
    state.cardId = payload
  },
  HANDLE_PHONE_NUMBER(state, payload) {
    state.phoneNumber = payload
  },
  HANDLE_OTP(state, payload) {
    state.otp = payload
  },
  SET_REMAIN_OTP(state, payload) {
    state.remainingOtpTime = payload
  },
  SET_WAITING_OTP_CONFIRM(state, paylaod) {
    state.waitingOtpConfirm = paylaod
  },
}

export const actions = {
  async otpGenerate({ commit, state, dispatch }) {
    try {
      await this.$axios.$post('/otp/generate', {
        phoneNumber: state.phoneNumber,
      })
      commit('CHANGE_OTP_STATE', true)
      dispatch('countdown')
    } catch {
      this.$swal('Error', 'เกิดข้อผิดพลาด', 'error')
    }
  },
  async login({ state }) {
    try {
      await this.$auth.loginWith('local', {
        data: {
          otpId: state.phoneNumber,
          otp: state.otp,
          idCardNumber: state.cardId,
        },
      })
    } catch {
      this.$swal('Error', 'เกิดข้อผิดพลาด', 'error')
    }
  },
  countdown({ commit, state }) {
    commit('SET_WAITING_OTP_CONFIRM', true)
    const timeOut = new Date().getSeconds() + 5
    const loop = setInterval(() => {
      const now = new Date().getSeconds()
      commit('SET_REMAIN_OTP', timeOut - now)
      if (state.remainingOtpTime <= 0) {
        commit('SET_WAITING_OTP_CONFIRM', false)
        clearInterval(loop)
      }
    }, 1000)
  },
}
