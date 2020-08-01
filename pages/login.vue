<template>
  <div class="container-sm">
    <div class="text-center">
      <img src="/logo.svg" class="center" />
      <h1 class="display-4">เข้าสู่ระบบ</h1>
    </div>
    <div class="m-5">
      <div class="form-group formmargin">
        <label>รหัสประจำตัวประชาชน</label>
        <input v-model="cardId" type="text" class="form-control" />
      </div>
      <div class="form-group row formmargin">
        <div class="col-sm-8">
          <label>เบอร์โทรศัพท์</label>
          <input v-model="phoneNumber" type="text" class="form-control" />
        </div>
        <div class="col-sm-4 d-flex align-items-end mt-3">
          <button
            type="submit"
            class="btn btn-primary"
            :class="
              phoneNumber.length !== 10 || cardId.length !== 13 || otpisGen
                ? 'disabled'
                : ''
            "
            @click="otpGen"
          >
            รับรหัส OTP
          </button>
        </div>
      </div>
      <div v-if="otpisGen" class="form-group">
        <div>
          <label>รหัส OTP ยืนยัน</label>
          <input
            v-model="otp"
            type="password"
            class="form-control"
            placeholder="ตัวเลข 6 ตัว"
          />
        </div>
        <div class="buttons mt-3">
          <button
            class="btn btn-primary"
            :class="waitingOtpConfirm ? 'disabled' : ''"
            @click="otpGen"
          >
            ส่งอีกครั้ง
          </button>
          <button class="btn btn-danger">
            ยืนยัน
          </button>
        </div>
        <p
          style="font-size: 25px;"
          :style="remainingOtpTime === 0 ? 'color:red' : ''"
        >
          {{
            remainingOtpTime !== 0
              ? `เวลาที่เหลือ : ${remainingOtpTime} วินาที`
              : 'OTP หมดอายุ กรุณาขอ OTP ใหม่'
          }}
        </p>
        <small class="form-text text-muted mb-5"
          >*เฉพาะผู้ที่มีสิทธิ์เลือกตั้งที่อายุไม่ต่ำกว่า 18 ปีเท่านั้น</small
        >
      </div>
      <div class="mt-3">
        <button
          class="btn btn-success"
          :class="
            !otpisGen || otp.length !== 6 || remainingOtpTime === 0
              ? 'disabled'
              : ''
          "
          @click="login"
        >
          ลงชื่อเข้าใช้งาน
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  layout: 'login',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      otpisGen: ({ authen }) => authen.otpisGen,
      waitingOtpConfirm: ({ authen }) => authen.waitingOtpConfirm,
      remainingOtpTime: ({ authen }) => authen.remainingOtpTime,
    }),

    cardId: {
      get() {
        return this.$store.state.authen.cardId
      },
      set(value) {
        this.$store.commit('authen/HANDLE_CARD_ID', value)
      },
    },
    phoneNumber: {
      get() {
        return this.$store.state.authen.phoneNumber
      },
      set(value) {
        this.$store.commit('authen/HANDLE_PHONE_NUMBER', value)
      },
    },
    otp: {
      get() {
        return this.$store.state.authen.otp
      },
      set(value) {
        this.$store.commit('authen/HANDLE_OTP', value)
      },
    },
  },
  methods: {
    ...mapActions({
      otpGen: 'authen/otpGenerate',
      login: 'authen/login',
    }),
  },
}
</script>

<style scoped>
img.center {
  display: block;
  margin: 0 auto;
  width: 200px;
}

small {
  font-size: 18px;
  color: red !important;
}
.formmargin {
  margin-bottom: 30px;
  margin-top: 20px;
}
label {
  font-size: 24px;
  font-weight: bold;
}
</style>
