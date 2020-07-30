<template>
  <div class="p-4">
    <h1 class="display-4">รายชื่อกฎหมายที่ส่งเข้าเสนอชื่อ</h1>
    <div class="card-container">
      <LawCard v-for="x in 7" :key="x" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card-container {
  height: 80vh;
  overflow: auto;
}
</style>
