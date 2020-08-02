<template>
  <div class="p-4">
    <div
      style="position: absolute; bottom: 0; right: 0; z-index: 1; opacity: 0.8;"
      class="bg-white"
    >
      <p>ติดตามข่าวสารต่างๆได้ที่</p>
      <div class="d-flex justify-content-center"><img src="/qr.png" /></div>

      <p>Line@: E-innitiative_thailand</p>
    </div>
    <div>
      <div class="row">
        <div class="col-6">
          <h1 style="font-size: 35px;">รายชื่อกฎหมายที่ส่งเข้าเสนอชื่อ</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <button class="btn btn-danger">เสนอกฎหมายต่อสภา</button>
        </div>
        <div class="col-2">
          <div class="form-group">
            <select class="browser-default form-select">
              <option selected>โปรดเลือกประเภท</option>
              <option value="1">ทั่วไป</option>
              <option value="2">การเงิน</option>
              <option value="3">พิเศษ</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="card-container container-fluid mt-3">
      <LawCard v-for="law in Laws" :key="law._id" :data="law" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      Laws: ({ law }) => law.laws,
    }),
  },
  async created() {
    await this.$store.dispatch('law/getLaws')
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  height: 70vh;
  overflow: auto;
}
img {
  height: 50px;
  width: 50px;
}
p {
  font-family: Sarabun;
  font-size: 20px;
}
</style>
