<template>
  <div class="p-4">
    <div>
      <h1 class="display-4">รายชื่อกฎหมายที่ส่งเข้าเสนอชื่อ</h1>
      <button class="btn btn-danger btn-lg">เสนอกฎหมายต่อสภา</button>
    </div>
    <div class="card-container container-sm mt-3">
      <LawCard v-for="x in 7" :key="x" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card-container {
  height: 70vh;
  overflow: auto;
}
</style>
