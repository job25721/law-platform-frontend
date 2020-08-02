<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.$swal({
      title: 'คุณได้รับคำเชิญร่วมริเริ่ม',
      text: 'เข้าไปดูร่างกฎหมายนี้',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ตกลง',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.value) {
        this.$router.push(`/law/${this.$route.params.id}?invite=true`)
      } else {
        this.$router.push('/')
      }
    })
  },
}
</script>
