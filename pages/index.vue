<template>
  <div class="p-4">
    <div>
      <h1 style="font-size: 35px;">รายชื่อกฎหมายที่ส่งเข้าเสนอชื่อ</h1>
      <button class="btn btn-danger">เสนอกฎหมายต่อสภา</button>
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
</style>
