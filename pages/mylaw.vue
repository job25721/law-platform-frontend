<template>
  <div class="p-4">
    <h1 class="mr-3" style="font-size: 35px;">
      กฎหมายที่ส่งเข้าเสนอชื่อของฉัน
    </h1>
    <div class="card-container container-fluid mt-3">
      <div v-if="show">
        <LawCard
          v-for="(x, i) in 9"
          :key="x"
          name="กฎหมาย sample"
          owner="นายปฐมพร
        ปั๋นแก้ว"
          content=""
          option="lawOwner"
          :status="status[i]"
        />
      </div>
      <div v-if="!show" class="alert alert-warning" role="alert">
        <h1 style="font-size: 1.5rem; color: #000000;" class="mr-3">
          ไม่มีกฎหมายที่คุณริเริ่ม
        </h1>
        <button class="btn btn-light" @click="show = true">
          ริเริ่มร่างกฎหมาย
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  data() {
    return {
      show: false,
      status: [
        { text: 'กำลังริเริ่ม', color: 'warning' },
        { text: 'ผู้ร่วมริเริ่มครบ', color: 'success' },
        { text: 'รอการอนุญาติ', color: 'warning' },
        { text: 'ไม่ได้รับการอนุญาติ', color: 'danger' },
        { text: 'อนุญาติแล้ว', color: 'success' },
        { text: 'รวบรวมผลโหวต', color: 'primary' },
        { text: 'ผลโหวตครบ', color: 'success' },
        { text: 'รอการอนุมัติ"', color: 'warning' },
        { text: 'อนุมัติแล้ว', color: 'success' },
      ],
    }
  },
}
</script>
