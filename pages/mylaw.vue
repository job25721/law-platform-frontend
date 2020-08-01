<template>
  <div class="p-4">
    <h1 class="mr-3" style="font-size: 35px;">
      กฎหมายที่ส่งเข้าเสนอชื่อของฉัน
    </h1>
    <div class="card-container container-fluid mt-3">
      <LawCard
        v-for="law in myLaws"
        :key="law._id"
        :data="law"
        option="lawOwner"
      />
      <div v-if="myLaws.length === 0" class="alert alert-warning" role="alert">
        <h1 style="font-size: 1.5rem; color: #000000;" class="mr-3">
          ไม่มีกฎหมายที่คุณริเริ่ม
        </h1>
        <button class="btn btn-light">
          ริเริ่มร่างกฎหมาย
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  middleware: 'auth',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      myLaws: ({ person }) => person.myLaws,
    }),
  },
  async created() {
    await this.$store.dispatch('person/getMyLaws')
    console.log(this.myLaws[0])
  },
}
</script>
