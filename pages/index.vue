<template>
  <div class="p-4">
    <div>
      <h1 class="display-4">รายชื่อกฎหมายที่ส่งเข้าเสนอชื่อ</h1>
      <button class="btn btn-danger btn-lg">เสนอกฎหมายต่อสภา</button>
    </div>
    <div class="card-container container-fluid mt-3">
      <LawCard
        v-for="law in Laws"
        :key="law._id"
        :name="law.title"
        :owner="`${law.initiatePerson.name.first} ${law.initiatePerson.name.last}`"
        :description="law.description"
        :imgPath="law.image"
        :voteNumber="law.voteNumber"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Laws: [],
    }
  },
  async created() {
    const res = await this.$axios.$get('/laws')
    this.Laws = res.data.laws
    console.log(res.data.laws)
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  height: 70vh;
  overflow: auto;
}
</style>
