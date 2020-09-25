const timeOut = 60

export const state = () => ({
  phoneNumber: '0932277124',
  otpisGen: false,
  otp: '',
  cardId: '',
  remainingOtpTime: timeOut,
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
function set() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}
export const actions = {
  async otpGenerate({ commit, state, dispatch }) {
    try {
      await this.$axios.$post('/otp/generate', {
        phoneNumber: state.phoneNumber,
      })
      commit('SET_REMAIN_OTP', timeOut)
      commit('CHANGE_OTP_STATE', true)

      await dispatch('countdown')
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
      this.$router.push('/camera')
    } catch {
      this.$swal('Error', 'เกิดข้อผิดพลาด', 'error')
    }
  },
  async countdown({ commit, state }) {
    commit('SET_WAITING_OTP_CONFIRM', true)
    for (let c = state.remainingOtpTime; c >= 0; c--) {
      commit('SET_REMAIN_OTP', c)
      await set()
    }
    commit('SET_WAITING_OTP_CONFIRM', false)
  },
}
