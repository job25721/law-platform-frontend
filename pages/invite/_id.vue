<template>
  <div>
    <!-- {{ law }} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      law: '',
    }
  },

  async mounted() {
    try {
      this.law = await this.$axios.$get(`/laws/${this.$route.params.id}`)
    } catch (err) {
      console.log(err)
    }
    if (this.law !== '') {
      console.log(this.law)
      this.$swal({
        title: `${this.law.data.law.initiatePerson.name.first} ได้เชิญคุณริเริ่ม ${this.law.data.law.title}`,
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
    }
  },
}
</script>
